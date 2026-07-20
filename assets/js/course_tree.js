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
    
    if (!courseCode) return;
    
    const parsed = parseCourseCode(courseCode);
    if (!parsed) return;

    const prereqString = (row["Prerequisite"] || "").trim();
    
    // Check if prerequisites exist and are not "None"
    if (prereqString && prereqString.toLowerCase() !== "none") {
      
      // Use the entire prerequisite string as a single grouped parent node name
      let prereqNode = rootNode.children.find(c => c.name === prereqString);
      if (!prereqNode) {
        prereqNode = { name: prereqString, children: [] };
        rootNode.children.push(prereqNode);
      }
      
      // Add the course as a child of this grouped prerequisite node only once
      if (!prereqNode.children.find(c => c.name === courseCode)) {
        prereqNode.children.push({ name: courseCode, url: urlLink, children: [] });
      }
      
    } else {
      // If there are no prerequisites, attach the course directly to the Topic root
      if (!rootNode.children.find(c => c.name === courseCode)) {
        rootNode.children.push({ name: courseCode, url: urlLink, children: [] });
      }
    }
  });

  // Sort Parent Group nodes alphabetically
  rootNode.children.sort((a, b) => a.name.localeCompare(b.name));
  
  // Sort Child Course nodes alphabetically
  rootNode.children.forEach(node => {
    if (node.children.length > 0) {
      node.children.sort((a, b) => a.name.localeCompare(b.name));
    }
  });

  return rootNode;
}

function renderTree(rootNode) {
  const chartDiv = document.getElementById("chart");
  let width = chartDiv.clientWidth || 1000;
  
  const totalNodes = rootNode.children.reduce((acc, child) => {
    return acc + 1 + (child.children ? child.children.length : 0);
  }, 1);
  
  let height = Math.max(400, totalNodes * 28); 
  
  const margin = { top: 40, right: 180, bottom: 40, left: 220 };
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

  // FIXED: Attach the native tooltip to the entire node group so hovering anywhere works
  nodes.append("title")
    .text(d => d.data.name);

  nodes.append("circle")
    .attr("r", d => d.depth === 0 ? 6 : 5)
    .attr("fill", "#ffffff")
    .attr("stroke", d => {
        if (d.depth === 0) return "#1f77b4";
        return d.children && d.children.length > 0 ? "#ff7f0e" : "#d62728";
    })
    .attr("stroke-width", 2);

  const textLinks = nodes.append("a")
    .attr("href", d => d.data.url ? d.data.url : null)
    .attr("target", d => d.data.url ? "_blank" : null);

  const textElement = textLinks.append("text")
    .attr("dy", "0.35em")
    .attr("x", d => d.children && d.children.length > 0 ? -12 : 12)
    .attr("text-anchor", d => d.children && d.children.length > 0 ? "end" : "start")
    .attr("font-size", d => d.depth === 0 ? 14 : 12)
    .attr("fill", d => d.data.url ? "#0056b3" : "#333333") 
    .style("text-decoration", d => d.data.url ? "underline" : "none")
    .style("cursor", d => d.data.url ? "pointer" : "default");

  // Truncate text if it exceeds a character limit to protect layout boundaries
  textElement.text(d => {
    const name = d.data.name;
    const maxLength = 35;
    return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
  });
}

function initCourseTree(data, topic) {
  // Ensure data exists before trying to render
  if (!data || data.length === 0) {
    console.error("Course data is empty or failed to load.");
    return;
  }

  // Build the tree data using the topic passed from Jekyll
  const rootNode = buildTreeData(data, topic);
  
  // Render the SVG chart
  renderTree(rootNode);
}