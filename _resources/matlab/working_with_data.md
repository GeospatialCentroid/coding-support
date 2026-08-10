---
layout: single
sidebar:
  nav: matlab_sidebar
title: "Working With Data" 
toc: true
toc_sticky: true
---
---

## Introduction

Two of **MATLAB’s** greatest strengths are **analyzing datasets** and **visualizing data**.

In this guide, you’ll learn how to:

* Import data into MATLAB
* Perform basic statistical analysis
* Create simple visualizations

These are foundational skills for working with real-world data in engineering and research contexts.

---

## Reading in Data

### Common Data Types

MATLAB can work with a wide variety of data formats, including:

* Images
* Text and text files
* Spreadsheets (e.g., CSV, Excel)
* Scientific data formats
* Audio files
* JSON and structured data

In this section, we’ll focus on **Comma-Separated Values (CSV)** files, one of the most commonly used formats.

### Reading a CSV File

You can import CSV data using the `readtable` function:

```matlab
T = readtable('path/to/your/file.csv');
```

* `T` is stored as a **table**, which is ideal for working with structured data
* Make sure the file path is correct relative to your working directory

If you’re unsure how file paths work, refer to your Coding Support Hub resources for guidance.

### Reading Other Data Types

For example, to read an image file:

```matlab
img = imread('path/to/your/image.jpg');
```

For very large datasets, MATLAB provides tools such as **datastores** (`datastore`) that allow you to process data in chunks instead of loading everything into memory at once.

---

## Analyzing Data

MATLAB includes many built-in functions for **statistical analysis** and **exploring relationships between variables**.

### Descriptive Statistics

These functions summarize key characteristics of your data:

| Function  | Description                    |
| --------- | ------------------------------ |
| `mean`    | Average value                  |
| `median`  | Middle value                   |
| `mode`    | Most frequent value            |
| `range`   | Difference between max and min |
| `min/max` | Minimum and maximum values     |
| `std`     | Standard deviation             |

Example:

```matlab
dataset = [10, 15, 20, 25, 27, 30];

mean_dataset = mean(dataset);
```

---

### Correlation and Relationships

To measure the relationship between variables, you can use correlation:

```matlab
x = [2, 4, 5, 6];
y = [1, 3, 5, 6];

corr_value = corr(x', y');
```

* Values close to **1** or **-1** indicate a strong relationship
* Values near **0** indicate a weak relationship

---

## Visualizing Data

Visualization helps you explore patterns and communicate results effectively.

### Scatter Plots

A simple way to visualize relationships between two variables is with a scatter plot:

```matlab
x = [2, 4, 5, 6];
y = [1, 3, 5, 6];

scatter(x, y);
```

### Grouped Scatter Plots

If your data includes categories (e.g., different years), you can group points using `gscatter`:

```matlab
year = [1998, 1998, 2002, 2002];

gscatter(x, y, year);
```

* Each group is displayed in a different color
* Useful for comparing categories within the same dataset

---

## Next Steps

This guide introduces only a small portion of what MATLAB can do. To continue learning, consider exploring:

* Advanced plotting and data visualization
* Working with large datasets and datastores
* Applying statistical models and machine learning techniques

If you are a student at Colorado State University, be sure to explore [MATLAB resources](/matlab) and training opportunities available through the university.




