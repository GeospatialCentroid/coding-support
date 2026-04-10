---
layout: single
title: "Using Excel for Data Visualization"
permalink: data-viz/excel/
author_profile: false
sidebar:
  nav: "data-viz_sidebar"
toc: true
toc_sticky: true
---

## Excel Basics

### Bar Chart
- Select data
- Insert → Column Chart

### Line Chart
- Use for time series

### Scatter Plot
- Compare numeric variables

---

## Example Dataset

| City | Population | Income |
|------|-----------|--------|
| A | 100000 | 50000 |
| B | 150000 | 60000 |

---

## D3 Example (Line Chart)

```html
<div id="line"></div>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
const data = [
  {x:0, y:10},
  {x:1, y:20},
  {x:2, y:15}
];

const svg = d3.select("#line")
  .append("svg")
  .attr("width", 400)
  .attr("height", 200);

const line = d3.line()
  .x(d => d.x * 100)
  .y(d => 200 - d.y * 5);

svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", line);
</script>
```

---

## Teaching Strategy
- Start with Excel
- Move to D3 for customization

---

## Key Takeaways
- Excel = fast + accessible
- D3 = flexible + powerful
