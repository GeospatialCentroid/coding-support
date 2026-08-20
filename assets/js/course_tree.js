function parseCourseCode(code) {
  const cleaned = (code || "")
    .trim()
    .replace(/[^A-Za-z0-9]+/g, " ");

  const match = cleaned.match(/^([A-Za-z]+)\s+([0-9]+[A-Za-z]*)/);
  if (!match) return null;

  return {
    department: match[1].toUpperCase(),
    number: match[2].toUpperCase()
  };
}

function buildTreeData(rows, selectedTopic) {
  const filtered = rows.filter(row => {
    const topic = (row.Topic || "").trim();
    return topic.toLowerCase() === selectedTopic.toLowerCase();
  });

  const rootNode = { name: selectedTopic || "All Topics", children: [] };

  filtered.forEach(row => {
    const courseCode = (row["Course Code"] || "").trim();
    const urlLink = (row["URL Link"] || "").trim();
    const onlineLink = (row["Online Link"] || "").trim();

    if (!courseCode) return;
    
    const parsed = parseCourseCode(courseCode);
    if (!parsed) return;

    const prereqString = (row["Prerequisite"] || "").trim();
    const courseName = (row["Course name"] || "").trim();
    const instructor = (row["Instructor"] || "").trim();
    const title = (courseCode + ": " + courseName);

    if (prereqString && prereqString.toLowerCase() !== "none" || prereqString === "") {
      let prereqNode = rootNode.children.find(c => c.name === prereqString);
      if (!prereqNode) {
        prereqNode = { name: prereqString, children: [], isGroup: true };
        rootNode.children.push(prereqNode);
      }
      
      if (!prereqNode.children.find(c => c.courseCode === courseCode)) {
        prereqNode.children.push({
          name: title,
          url: urlLink,
          onlineLink: onlineLink,
          children: [],
          courseCode: courseCode,
          courseName: courseName,
          instructor: instructor,
          prerequisite: prereqString
        });
      }
    } else {
      if (!rootNode.children.find(c => c.courseCode === courseCode)) {
        rootNode.children.push({
          name: title,
          url: urlLink,
          onlineLink: onlineLink,
          children: [],
          courseCode: courseCode,
          courseName: courseName,
          instructor: instructor,
          prerequisite: prereqString
        });
      }
    }
  });

  // Sort top-level children: prerequisite groups by group name, direct course nodes by courseCode
  rootNode.children.sort((a, b) => {
    const keyA = a.courseCode || a.name;
    const keyB = b.courseCode || b.name;
    return keyA.localeCompare(keyB, undefined, { numeric: true, sensitivity: 'base' });
  });
  
  // Sort child course nodes inside prerequisite groups by courseCode
  rootNode.children.forEach(node => {
    if (node.children && node.children.length > 0) {
      node.children.sort((a, b) => {
        return (a.courseCode || a.name).localeCompare(b.courseCode || b.name, undefined, { numeric: true, sensitivity: 'base' });
      });
    }
  });

  return rootNode;
}

// Helper function to turn course codes inside text into CSU catalog search links
function linkifyPrereqs(prereqString) {
  if (!prereqString || prereqString.toLowerCase() === "none") return "None";
  
  // Regex to match CSU course codes (2-4 letters followed by space and numbers/letters)
  const courseRegex = /([A-Za-z]{2,4})\s+([0-9]{3}[A-Za-z]*)/g;
  
  return prereqString.replace(courseRegex, (match, dept, num) => {
    const searchUrl = `https://catalog.colostate.edu/search/?search=${dept}+${num}`;
    return `<a href="${searchUrl}" target="_blank" style="color:#0056b3;text-decoration:underline;font-weight:500;">${match}</a>`;
  });
}

function renderTree(rootNode) {
  const chartDiv = document.getElementById("chart");
  let width = chartDiv.clientWidth || 1000;
  
  const totalNodes = rootNode.children.reduce((acc, child) => {
    return acc + 1 + (child.children ? child.children.length : 0);
  }, 1);
  
  let height = Math.max(400, totalNodes * 28); 
  
  const margin = { top: 40, right: 220, bottom: 40, left: 90 };
  const treeWidth = width - margin.left - margin.right;
  const treeHeight = height - margin.top - margin.bottom;

  const chart = d3.select("#chart").html("");
  
  const svg = chart.append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", "100%")
    .attr("height", "auto")
    .style("max-width", "100%");

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const root = d3.hierarchy(rootNode);
  const treeLayout = d3.tree()
    .size([treeHeight, treeWidth])
    .separation((a, b) => (a.parent === b.parent ? 1 : 1.2));

  const descendants = treeLayout(root);

  g.selectAll("path.link")
    .data(descendants.links())
    .join("path")
    .attr("class", "link")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("d", d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x));

  const nodes = g.selectAll("g.node")
    .data(descendants.descendants())
    .join("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y}, ${d.x})`);

  nodes.append("title")
    .text(d => d.data.name);

  const getNodeColor = (d) => {
    if (d.depth === 0) return "#1f77b4";
    return d.children && d.children.length > 0 ? "#ff7f0e" : "#d62728";
  };

  nodes.append("circle")
    .attr("r", d => d.depth === 0 ? 6 : 5)
    .attr("fill", "#ffffff")
    .attr("stroke", d => getNodeColor(d))
    .attr("stroke-width", 2);


  const textElement = nodes.append("text")
    .attr("dy", "0.35em")
    .attr("x", d => d.children && d.children.length > 0 ? -12 : 12)
    .attr("text-anchor", d => d.children && d.children.length > 0 ? "end" : "start")
    .attr("font-size", d => d.depth === 0 ? 14 : 12)
    .attr("fill", d => d.data.url ? "#0056b3" : "#333333") 
    // .style("text-decoration", d => d.data.url ? "underline" : "none")
    .style("cursor", d => d.data.url ? "pointer" : "default");

  textElement.text(d => {
    const name = d.data.name;
    const maxLength = 25;
    return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
  });

  let popup = d3.select("body").select("#course-tree-popup");
  let popupTimeout; 

  if (popup.empty()) {
    // Inject CSS for the popup arrow triangle
    d3.select("head").append("style").text(`
      #course-tree-popup .popup-arrow {
        position: absolute;
        bottom: -10px; 
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #ccc; /* Matches popup border */
      }
      #course-tree-popup .popup-arrow::after {
        content: '';
        position: absolute;
        bottom: 2px; /* Overlays white center inside grey border */
        left: -9px;
        width: 0;
        height: 0;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-top: 9px solid #fff; 
      }
      /* If popup is forced below the cursor, flip the arrow upward */
      #course-tree-popup.flipped .popup-arrow {
        bottom: auto;
        top: -10px;
        border-top: none;
        border-bottom: 10px solid #ccc;
      }
      #course-tree-popup.flipped .popup-arrow::after {
        bottom: auto;
        top: 2px;
        border-top: none;
        border-bottom: 9px solid #fff;
      }
    `);

    popup = d3.select("body").append("div")
      .attr("id", "course-tree-popup")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("border", "1px solid #ccc") // Set to standard grey
      .style("padding", "12px")
      .style("border-radius", "6px") 
      .style("box-shadow", "0 4px 12px rgba(0,0,0,0.15)")
      .style("font-size", ".8em")
      .style("color", "#333")
      .style("opacity", 0)
      .style("z-index", "99999")
      .style("pointer-events", "none");
  }

  popup.on("mouseenter", function() {
    clearTimeout(popupTimeout);
  }).on("mouseleave", function() {
    popupTimeout = setTimeout(hidePopup, 300);
  });

  function hidePopup() {
    popup.style("opacity", 0).style("pointer-events", "none");
  }

  d3.select(window).on("keydown.popup", function(event) {
    if (event.key === "Escape") hidePopup();
  });

  nodes.on("mouseenter click", function(event, d) {
    if (!d || !d.data || !d.data.courseCode) return;
    
    clearTimeout(popupTimeout); 
    
    // Conditionally rendered bottom links
    let linksHtml = "";
    const activeLinks = [];
    
    if (d.data.url) {
      activeLinks.push(`<a href="${d.data.url}" target="_blank" style="color:#0056b3;text-decoration:underline; font-weight: 500;">Catalog Link</a>`);
    }
    if (d.data.onlineLink) {
      activeLinks.push(`<a href="${d.data.onlineLink}" target="_blank" style="color:#0056b3;text-decoration:underline; font-weight: 500;">Online Course Link</a>`);
    }
    
    if (activeLinks.length > 0) {
      linksHtml = `<div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #eee; display: flex; gap: 15px;">
                     ${activeLinks.join("")}
                   </div>`;
    }

    // Convert prerequisites to dynamic CSU catalog hyperlinks
    const prereqHtml = linkifyPrereqs(d.data.prerequisite);

    const tableHTML = `
      <table style="text-align: left; border-collapse: separate; border-spacing: 0 6px;">
        <tr><th style="padding-right:12px; white-space:nowrap;">Course Code</th><td>${d.data.courseCode || "N/A"}</td></tr>
        <tr><th style="padding-right:12px; white-space:nowrap;">Course Name</th><td>${d.data.courseName || "N/A"}</td></tr>
        <tr><th style="padding-right:12px; white-space:nowrap;">Prerequisite</th><td>${prereqHtml}</td></tr>
      </table>
      ${linksHtml}
      <div class="popup-arrow"></div> <!-- HTML hook for the CSS triangle -->
    `;

    popup.html(tableHTML)
         .style("opacity", 1)
         .style("pointer-events", "auto"); 

    const rect = popup.node().getBoundingClientRect();
    
    // Center popup horizontally over the cursor
    let left = event.pageX - (rect.width / 2);
    let top = event.pageY - rect.height - 18; // Places it above cursor, making room for arrow
    let isFlipped = false;
    
    // Keep horizontally inside the window bounds
    if (left < 10) left = 10;
    if (left + rect.width > window.innerWidth + window.scrollX - 10) {
      left = window.innerWidth + window.scrollX - rect.width - 10;
    }
    
    // Flip popup below if pushed off the top of the screen
    if (top < window.scrollY + 10) {
      top = event.pageY + 18;
      isFlipped = true;
    }

    popup.style("left", left + "px").style("top", top + "px");
    popup.classed("flipped", isFlipped); // Updates CSS to flip arrow if needed
  });

  nodes.on("mouseleave", function() {
    popupTimeout = setTimeout(hidePopup, 300);
  });
}

function initCourseTree(data, topic) {
  if (!data || data.length === 0) {
    console.error("Course data is empty or failed to load.");
    return;
  }

  const rootNode = buildTreeData(data, topic);
  renderTree(rootNode);
}