---

title: Data Visualization in Python
layout: single
toc: true
toc_sticky: true
permalink: /python/data-visualization
sidebar:
  nav: "python_sidebar"
---

Data visualization helps us **explore, understand, and communicate patterns in data**. Python provides powerful libraries for creating charts and graphs.

This guide introduces two popular visualization tools:

* **matplotlib** – the foundational plotting library in Python
* **plotnine** – a visualization library based on the Grammar of Graphics (similar to ggplot2 in R)

By the end of this guide you will know how to:

* Create basic charts
* Visualize trends and distributions
* Customize plots
* Build layered visualizations

---

# Installing Required Libraries

Install the required packages using pip:

```bash
pip install matplotlib plotnine pandas
```

Import the libraries:

```python
import pandas as pd
import matplotlib.pyplot as plt
from plotnine import *
```

---

# Example Dataset

We will use a small dataset for demonstration.

```python
data = pd.DataFrame({
    "year": [2019, 2020, 2021, 2022, 2023],
    "sales": [120, 150, 170, 160, 200],
    "profit": [20, 35, 40, 38, 50]
})
```

This dataset contains:

| year | sales | profit |
| ---- | ----- | ------ |
| 2019 | 120   | 20     |
| 2020 | 150   | 35     |
| 2021 | 170   | 40     |
| 2022 | 160   | 38     |
| 2023 | 200   | 50     |

---

# Part 1: Visualization with Matplotlib

Matplotlib is the **most widely used plotting library in Python**.

## Creating a Line Chart

Line charts are commonly used to visualize trends over time.

```python
plt.plot(data["year"], data["sales"])
plt.xlabel("Year")
plt.ylabel("Sales")
plt.title("Sales Over Time")

plt.show()
```

This produces a line graph showing how sales change across years.

---

## Creating a Scatter Plot

Scatter plots show relationships between two variables.

```python
plt.scatter(data["sales"], data["profit"])

plt.xlabel("Sales")
plt.ylabel("Profit")
plt.title("Sales vs Profit")

plt.show()
```

This helps reveal correlations between variables.

---

## Creating a Bar Chart

Bar charts compare categories.

```python
plt.bar(data["year"], data["sales"])

plt.xlabel("Year")
plt.ylabel("Sales")
plt.title("Annual Sales")

plt.show()
```

---

## Multiple Lines in a Chart

You can visualize multiple variables on the same graph.

```python
plt.plot(data["year"], data["sales"], label="Sales")
plt.plot(data["year"], data["profit"], label="Profit")

plt.xlabel("Year")
plt.ylabel("Value")
plt.title("Sales and Profit Over Time")

plt.legend()

plt.show()
```

---

## Customizing Charts

Matplotlib allows many visual customizations.

Example:

```python
plt.plot(data["year"], data["sales"], marker="o", linestyle="--")

plt.title("Customized Sales Plot")
plt.xlabel("Year")
plt.ylabel("Sales")

plt.grid(True)

plt.show()
```

Custom options include:

* colors
* markers
* grid lines
* labels
* legends

---

# Part 2: Visualization with Plotnine

Plotnine implements the **Grammar of Graphics**, which builds plots using layers.

A plot is constructed using:

* data
* aesthetics
* geometric objects
* scales
* themes

---

# Creating a Plotnine Plot

Basic syntax:

```python
ggplot(data, aes(x="year", y="sales")) + geom_line()
```

Explanation:

* `ggplot()` defines the dataset
* `aes()` defines the variables used
* `geom_line()` defines the type of plot

---

# Scatter Plot

```python
ggplot(data, aes(x="sales", y="profit")) + geom_point()
```

This creates a scatter plot showing the relationship between sales and profit.

---

# Line Chart

```python
ggplot(data, aes(x="year", y="sales")) + geom_line()
```

---

# Bar Chart

```python
ggplot(data, aes(x="year", y="sales")) + geom_bar(stat="identity")
```

`stat="identity"` tells plotnine to use the actual values.

---

# Adding Titles and Labels

```python
(
    ggplot(data, aes(x="year", y="sales"))
    + geom_line()
    + labs(
        title="Sales Over Time",
        x="Year",
        y="Sales"
    )
)
```

---

# Adding Color by Category

Example dataset:

```python
data["region"] = ["North","North","South","South","North"]
```

Plot by region:

```python
ggplot(data, aes(x="year", y="sales", color="region")) + geom_line()
```

This creates **separate colored lines for each region**.

---

# Using Themes

Themes improve visual appearance.

```python
(
    ggplot(data, aes(x="year", y="sales"))
    + geom_line()
    + theme_minimal()
)
```

Common themes include:

* `theme_minimal()`
* `theme_bw()`
* `theme_classic()`

---

# Matplotlib vs Plotnine

| Feature        | Matplotlib    | Plotnine                        |
| -------------- | ------------- | ------------------------------- |
| Style          | Imperative    | Grammar of graphics             |
| Learning curve | Moderate      | Easier for statistical graphics |
| Flexibility    | Very high     | High                            |
| Best for       | Custom charts | Data analysis workflows         |

---

# Example Visualization Workflow

Typical workflow for analyzing data visually:

```python
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("sales.csv")

# explore data
print(data.head())

# visualize trend
plt.plot(data["year"], data["sales"])

plt.title("Sales Trend")
plt.xlabel("Year")
plt.ylabel("Sales")

plt.show()
```

---

# Visualization Best Practices

Good data visualizations should:

* Use clear labels
* Avoid unnecessary clutter
* Highlight the main message
* Use consistent scales
* Include legends when needed

Ask yourself:

* What pattern am I trying to reveal?
* What chart type best communicates it?

---

# Summary

Python provides powerful tools for visualizing data.

Matplotlib offers:

* complete customization
* flexible plotting

Plotnine provides:

* layered graphics
* intuitive syntax for analysis workflows

Together they allow you to create **clear and effective data visualizations** for research, data science, and reporting.
