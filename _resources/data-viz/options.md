---
layout: single
title: "Choosing the Right Visualization"
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
<div style="position: relative; width: 100%; max-width: 600px; margin-left: 0; margin-right: auto; aspect-ratio: 16 / 9;">
  <canvas id="barChart"></canvas>
</div>

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
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }, // Saves horizontal space
        title: {
          display: true,
          text: 'Distribution of Values'
        }
      },
      layout: {
        padding: 0 // Prevents internal Chart.js offsets
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

<div style="position: relative; width: 100%; max-width: 600px; height: 350px; margin-left: 0; margin-right: auto; display: block; clear: both;">
  <canvas id="scatterChart"></canvas>
</div>

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
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Prevents infinite expansion
      resizeDelay: 50,             // Stabilizes the chart during page load
      plugins: {
        title: {
          display: true,
          text: 'Relationship Between X and Y'
        },
        legend: {
          display: true,
          position: 'top'
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
          beginAtZero: true,
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
<div style="position: relative; width: 100%; max-width: 600px; height: 350px; margin-left: 0; margin-right: auto; display: block; clear: both;">
  <canvas id="bubbleChart"></canvas>
</div>

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
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        clip: false // Prevents bubbles near the axes from being cropped
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      resizeDelay: 50,
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
          },
          beginAtZero: true
        },
        y: {
          title: {
            display: true,
            text: 'Y Variable'
          },
          beginAtZero: true
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