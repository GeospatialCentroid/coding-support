function parseCourseCode(code) {
  const cleaned = (code || "")
    .trim()
    .replace(/[^A-Za-z0-9]+/g, " ");

  const match = cleaned.match(/^([A-Za-z]+)\s+([0-9]+[A-Za-z]*)/);

  if (!match) {
    return null;
  }

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
  const departmentMap = new Map();

  filtered.forEach(row => {
    const courseCode = (row["Course Code"] || "").trim();

    if (!courseCode) {
      return;
    }

    const parsed = parseCourseCode(courseCode);
    if (!parsed) {
      return;
    }

    const department = parsed.department;

    if (!departmentMap.has(department)) {
      departmentMap.set(department, { name: department, children: [] });
      rootNode.children.push(departmentMap.get(department));
    }

    const departmentNode = departmentMap.get(department);
    if (!departmentNode.children.some(child => child.name === courseCode)) {
      departmentNode.children.push({ name: courseCode, children: [] });
    }
  });

  rootNode.children.sort((a, b) => a.name.localeCompare(b.name));
  rootNode.children.forEach(departmentNode => {
    departmentNode.children.sort((a, b) => a.name.localeCompare(b.name));
  });

  return rootNode;
}

function renderTree(rootNode) {
  const width = 3000;
  const height = 1800;
  const margin = { top: 100, right: 40, bottom: 100, left: 40 };
  const treeWidth = width - margin.left - margin.right;
  const treeHeight = height - margin.top - margin.bottom;

  const chart = d3.select("#chart").html("");
  const svg = chart.append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height);

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
    .attr("d", d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x));

  const nodes = g.selectAll("g.node")
    .data(descendants.descendants())
    .join("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y}, ${d.x})`);

  nodes.append("circle")
    .attr("r", d => d.depth === 0 ? 6 : d.depth === 1 ? 5 : 3)
    .attr("fill", d => d.depth === 0 ? "#1f77b4" : d.depth === 1 ? "#2ca02c" : "#ffffff")

  nodes.append("text")
    .attr("dy", "0.35em")
    .attr("x", d => d.children ? -10 : 10)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => d.data.name)
    .attr("font-size", d => d.depth === 0 ? 14 : d.depth === 1 ? 12 : 10);
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("topicSelect");

  d3.csv("CSU_Courses.csv").then(data => {
    const topics = Array.from(new Set(data.map(row => (row.Topic || "").trim()).filter(Boolean))).sort();

    topics.forEach(topic => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      select.appendChild(option);
    });

    const updateTree = () => {
      const selectedTopic = select.value;
      const rootNode = buildTreeData(data, selectedTopic);
      renderTree(rootNode);
    };

    select.addEventListener("change", updateTree);
    updateTree();
  }).catch(error => {
    console.error("Unable to load CSV data", error);
  });
});
