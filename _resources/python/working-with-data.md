---
title: "Working with Data"
layout: single
sidebar:
  nav: "python_sidebar"
toc: true
toc_sticky: true
---

Python is widely used for working with data because it has simple syntax and powerful libraries for analysis, visualization, and data processing.

In this guide you will learn how to:

* Load data
* Store data in Python structures
* Work with tabular data
* Filter and transform data
* Save results

---

# Reading Data From a CSV File

CSV (Comma Separated Values) files are one of the most common data formats.

Example CSV:

```
name,age,city
Alice,30,Denver
Bob,25,Boulder
```
This example shows a CSV (Comma-Separated Values) file, which is a simple format used to store tabular data.

The first line is the header row.
It defines the column names for the data. In this case, the columns are:
- name
- age
- city

Commas separate each column value.
Each comma marks the boundary between columns.

Each line after the header represents a row of data.
Every row must follow the same column order and structure defined in the header.

**Create a plain text file on your computer and save it as 'people.csv'**

Using Python's built-in `csv` module:

```python
import csv

with open("people.csv") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row["name"], row["age"])
```

---

# Using Pandas for Data Analysis

The **pandas** library is the most popular tool for working with tabular data in Python.

Install pandas:

```bash
pip install pandas
```

Import pandas:

```python
import pandas as pd
```

---

# Loading Data With Pandas

Load a CSV file:

```python
data = pd.read_csv("people.csv")
```

View the first rows:

```python
data.head()
```

Example output:

```
   name  age    city
0 Alice   30  Denver
1 Bob     25 Boulder
```

---

# Exploring Data

Check column names:

```python
data.columns
```

Basic summary statistics:

```python
data.describe()
```

View data types:

```python
data.dtypes
```

---

# Selecting Columns

Select a single column:

```python
data["age"]
```

Select multiple columns:

```python
data[["name", "city"]]
```

---

# Filtering Data

Select rows matching conditions.

Example: people older than 25

```python
filtered = data[data["age"] > 25]
```

Example: select a specific city

```python
denver_people = data[data["city"] == "Denver"]
```

---

# Creating New Columns

You can calculate new data from existing columns.

Example:

```python
data["age_next_year"] = data["age"] + 1
```

---

# Sorting Data

Sort by a column:

```python
data.sort_values("age")
```

Sort descending:

```python
data.sort_values("age", ascending=False)
```

---

# Grouping Data

Grouping summarizes data by categories.

Example dataset:

```
city,temperature
Denver,70
Denver,72
Boulder,68
```

Calculate average temperature by city:

```python
data.groupby("city")["temperature"].mean()
```

---

# Handling Missing Data

Check missing values:

```python
data.isnull()
```

Remove missing rows:

```python
data.dropna()
```

Fill missing values:

```python
data.fillna(0)
```

---

# Saving Data

Save a DataFrame to CSV:

```python
data.to_csv("output.csv", index=False)
```

Save to Excel:

```python
data.to_excel("output.xlsx")
```

---

# Working With JSON Data

JSON is commonly used in APIs.

Example JSON:

```
{
  "name": "Alice",
  "age": 30
}
```

Load JSON in Python:

```python
import json

with open("data.json") as f:
    data = json.load(f)
```

Access values:

```python
print(data["name"])
```

---

# Example Data Workflow

Example complete workflow:

```python
import pandas as pd

# load data
data = pd.read_csv("sales.csv")

# filter rows
recent_sales = data[data["year"] == 2024]

# calculate totals
total = recent_sales["revenue"].sum()

print("Total revenue:", total)

# save results
recent_sales.to_csv("filtered_sales.csv", index=False)
```

---

# Summary

Python provides powerful tools for working with data:

* Lists and dictionaries store structured data
* CSV and JSON allow data exchange
* Pandas simplifies tabular analysis
* Filtering, grouping, and sorting reveal insights

These tools make Python one of the most widely used languages for **data science, research, and analytics**.


