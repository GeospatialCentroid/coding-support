---
layout: single
title: "Choosing the Right Visualization"
permalink: data-viz/options/
author_profile: false
sidebar:
  nav: "data-viz_sidebar"
toc: true
toc_sticky: true
---

<!-- Load Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


## Overview
Choosing the correct visualization depends on the number of variables and categories in your dataset.

---

## 1 Variable (Univariate)
- Histogram
- Bar Chart
- Box Plot

### Example Bar Chart

<canvas id="barChart" width="400" height="250" class="chart"></canvas>

<script>
(function() {
  const ctx = document.getElementById('barChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      datasets: [{
        label: 'Frequency',
        data: [1, 2, 3, 6, 1, 2, 1],
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Distribution of Values'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Value'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Frequency'
          }
        }
      }
    }
  });
})();
</script>

---

## 2 Variables (Bivariate)
- Scatter Plot
- Line Chart

### Example Scatter Plot

<canvas id="scatterChart" width="400" height="250" class="chart"></canvas>

<script>
(function() {
  const ctx = document.getElementById('scatterChart');

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'X vs Y',
        data: [
          {x:10, y:20},
          {x:20, y:30},
          {x:30, y:25},
          {x:40, y:35}
        ]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Relationship Between X and Y'
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'X Value'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Y Value'
          }
        }
      }
    }
  });
})();
</script>

---

## 3 Variables (Multivariate)
- Bubble Charts
- Heatmaps
- Small multiples

### Example Bubble Chart

<canvas id="bubbleChart" width="400" height="300" class="chart"></canvas>

<script>
(function() {
  const ctx = document.getElementById('bubbleChart');

  new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: [{
        label: '3 Variable Example',
        data: [
          {x:10, y:20, r:10},
          {x:20, y:30, r:15},
          {x:30, y:25, r:8},
          {x:40, y:35, r:12}
        ]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Bubble Chart (Size = Third Variable)'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'X Variable'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Y Variable'
          }
        }
      }
    }
  });
})();
</script>

---

## Key Takeaways
- 1 variable → distribution  
- 2 variables → relationships  
- 3+ variables → patterns  