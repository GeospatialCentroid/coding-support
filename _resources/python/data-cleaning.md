---
title: Data Cleaning in Python
layout: single
toc: true
toc_sticky: true
permalink: python/data-cleaning
sidebar:
  nav: "python_sidebar"
---

Data cleaning is the process of **identifying and fixing problems in a dataset** before analysis. Real-world data often contains issues such as:

* Missing values
* Inconsistent formats
* Duplicate records
* Incorrect data types
* Outliers or invalid values

Cleaning data ensures your analysis and visualizations are **accurate and reliable**.

This guide focuses on data cleaning using the **pandas** library.

---

# Installing Required Libraries

Install pandas if it is not already installed:

```bash
pip install pandas
```

Import pandas:

```python
import pandas as pd
```

---

# Example Dataset

Consider the following dataset stored in a CSV file:

```
name,age,city,salary
Alice,30,Denver,70000
Bob,,Boulder,65000
Charlie,25,Denver,72000
Alice,30,Denver,70000
Dana,29,,68000
```

Common problems include:

* Missing values
* Duplicate rows
* Inconsistent formatting

---

# Loading the Dataset

Load the data into a pandas DataFrame.

```python
data = pd.read_csv("employees.csv")
```

View the first rows:

```python
data.head()
```

Inspect the structure:

```python
data.info()
```

---

# Identifying Missing Values

Missing values often appear as `NaN`.

Check for missing values:

```python
data.isnull()
```

Count missing values per column:

```python
data.isnull().sum()
```

---

# Handling Missing Values

There are several strategies for dealing with missing data.

## Removing Rows With Missing Values

```python
data_clean = data.dropna()
```

This removes rows containing any missing values.

---

## Filling Missing Values

You can replace missing values with a default value.

Example:

```python
data["age"] = data["age"].fillna(0)
```

Fill missing values with the column mean:

```python
data["age"] = data["age"].fillna(data["age"].mean())
```

---

# Removing Duplicate Records

Duplicate rows can distort analysis results.

Check for duplicates:

```python
data.duplicated()
```

Remove duplicates:

```python
data = data.drop_duplicates()
```

---

# Fixing Data Types

Columns sometimes load with incorrect types.

Check types:

```python
data.dtypes
```

Convert a column type:

```python
data["age"] = data["age"].astype(int)
```

Convert dates:

```python
data["date"] = pd.to_datetime(data["date"])
```

---

# Cleaning Text Data

Text fields often contain formatting issues such as extra spaces or inconsistent capitalization.

Remove leading and trailing spaces:

```python
data["city"] = data["city"].str.strip()
```

Convert text to lowercase:

```python
data["city"] = data["city"].str.lower()
```

Standardize capitalization:

```python
data["city"] = data["city"].str.title()
```

---

# Renaming Columns

Sometimes column names are inconsistent or unclear.

Rename columns:

```python
data = data.rename(columns={
    "salary": "annual_salary"
})
```

---

# Filtering Invalid Data

Remove rows with unrealistic values.

Example: remove negative ages

```python
data = data[data["age"] >= 0]
```

Example: filter salary range

```python
data = data[data["salary"] > 30000]
```

---

# Detecting Outliers

Outliers can distort analysis.

Basic detection using summary statistics:

```python
data.describe()
```

Example: remove extreme values

```python
data = data[data["salary"] < 200000]
```

---

# Standardizing Values

Categorical variables often contain inconsistent labels.

Example problem:

```
Denver
denver
DENVER
```

Standardize values:

```python
data["city"] = data["city"].str.lower()
```

Then optionally capitalize:

```python
data["city"] = data["city"].str.title()
```

---

# Creating Clean Columns

Sometimes you may need derived variables.

Example:

```python
data["salary_k"] = data["salary"] / 1000
```

---

# Saving the Clean Dataset

Once data is cleaned, save it for further analysis.

```python
data.to_csv("clean_employees.csv", index=False)
```

You can also save to Excel:

```python
data.to_excel("clean_employees.xlsx")
```

---

# Example Data Cleaning Workflow

A typical workflow might look like this:

```python
import pandas as pd

# load data
data = pd.read_csv("employees.csv")

# remove duplicates
data = data.drop_duplicates()

# fill missing ages
data["age"] = data["age"].fillna(data["age"].mean())

# clean city names
data["city"] = data["city"].str.strip().str.title()

# remove invalid rows
data = data[data["salary"] > 30000]

# save cleaned data
data.to_csv("employees_clean.csv", index=False)
```

---

# Data Cleaning Checklist

When preparing a dataset for analysis, consider checking:

* Missing values
* Duplicate records
* Incorrect data types
* Inconsistent text values
* Outliers
* Invalid or unrealistic values

Cleaning these issues ensures that later analysis and visualization are **trustworthy**.

---

# Summary

Data cleaning is a critical step in any data workflow. Using pandas, you can:

* Detect missing values
* Remove duplicates
* Standardize text fields
* Correct data types
* Filter invalid data

Clean data leads to **more accurate analysis, better visualizations, and reliable conclusions**.
