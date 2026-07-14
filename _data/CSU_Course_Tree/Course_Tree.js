<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>CSU Course Radial Tree</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; background: #f7f9fc; }
    svg { display: block; margin: 20px auto; }
    .link {
      fill: none;
      stroke: #7b8fa3;
      stroke-opacity: 0.7;
      stroke-width: 1.2;
    }
    .node circle { stroke: #333; stroke-width: 1.2; }
    .node text {
      font-size: 11px;
      fill: #223;
      paint-order: stroke;
      stroke: white;
      stroke-width: 3px;
      stroke-linejoin: round;
    }
  </style>
</head>
<body>
  <div id="chart"></div>

  <script>
    const width = 900;
    const height = 900;
    const radius = 360;

    const svg = d3.select("#chart")
      .append("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height);

    const g = svg.append("g")
      .attr("transform", `translate(${width/2}, ${height/2})`);

    d3.csv("CSU_Courses.csv").then(data => {
      const rootNode = { name: "CSU Courses", children: [] };
      const topicMap = new Map();

      data.forEach(row => {
        const topic = (row.Topic || "Other").trim();
        const category = (row.Category || "Other").trim();
        const courseName = (row["Course name"] || row["Course Code"] || "Untitled").trim();
        const courseCode = (row["Course Code"] || "").trim();
        const label = courseCode ? `${courseCode}: ${courseName}` : courseName;

        if (!topicMap.has(topic)) {
          topicMap.set(topic, { name: topic, children: [] });
        }

        const topicNode = topicMap.get(topic);
        let categoryNode = topicNode.children.find(c => c.name === category);

        if (!categoryNode) {
          categoryNode = { name: category, children: [] };
          topicNode.children.push(categoryNode);
        }

        categoryNode.children.push({ name: label });
      });

      rootNode.children = Array.from(topicMap.values());

      const root = d3.hierarchy(rootNode);
      const treeLayout = d3.tree()
        .size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);

      const descendants = treeLayout(root);

      const linkGenerator = d3.linkRadial()
        .angle(d => d.x)
        .radius(d => d.y);

      g.selectAll("path.link")
        .data(descendants.links())
        .join("path")
        .attr("class", "link")
        .attr("d", linkGenerator);

      const nodes = g.selectAll("g.node")
        .data(descendants.descendants())
        .join("g")
        .attr("class", "node")
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y}, 0)`);

      nodes.append("circle")
        .attr("r", d => d.children ? 5 : 3)
        .attr("fill", d => d.depth === 0 ? "#1f77b4" : d.children ? "#ff7f0e" : "#fff");

      nodes.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.children ? 8 : 10)
        .attr("text-anchor", d => d.x < Math.PI ? "start" : "end")
        .text(d => d.data.name)
        .attr("font-size", d => d.depth === 0 ? 14 : d.depth === 1 ? 12 : 10);
    });
  </script>
</body>
</html>