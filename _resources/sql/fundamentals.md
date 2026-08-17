---
layout: single
sidebar:
  nav: sql_sidebar
title: "SQL Fundamentals"
toc: true
toc_sticky: true
---
## Accessing SQL

There are several ways to access and work with databases using SQL, depending on your system and preferences.

### Graphical Tools (GUI)

One common option for working with SQL databases is **SQL Server Management Studio (SSMS)**, a tool developed by Microsoft.

* Install SSMS [here](https://learn.microsoft.com/en-us/ssms/install/install)
* Provides a user-friendly interface for querying and managing databases

Another popular GUI option is DataGrip, which supports multiple database systems and works on macOS, Windows, and Linux:

* You can install these by clicking [here](https://www.jetbrains.com/datagrip/features/sqlserver/)

For open-source workflows, you can also use:

* **pgAdmin** — commonly used with PostgreSQL
* **SQLite** — a file-based database that can be accessed with simple tools or command line interfaces

---

### Command Line Tools

SQL can also be accessed through command-line interfaces (CLI), which allow you to run queries directly in a terminal.

* Tools like `sqlcmd` (for SQL Server) or SQLite’s built-in CLI are commonly used
* These environments are lightweight and useful for scripting and automation

---

## Connecting to a Database

To access a database, you typically need credentials provided by a database administrator.

### Required Information

* **Server name** (or database file, in the case of SQLite)
* **Username and password**

Once connected, you can select and interact with a specific database.

> Note: Exact connection steps vary depending on the tool and database system you are using.

---

## SQL Syntax Basics

SQL syntax can vary slightly between database systems, but the core structure is consistent.

### Basic Query Structure

Most SQL queries follow this pattern:

```sql
SELECT column_name
FROM table_name
WHERE condition;
```

* `SELECT` → Choose which columns to retrieve
* `FROM` → Specify the table
* `WHERE` → Filter results based on conditions

---

### Working with Tables

Before running queries, ensure you are working with the correct table or database.

```sql
SELECT * 
FROM table_name;
```

This retrieves all columns and rows from a table.

---

## Data Types

SQL databases typically include the following categories of data types:

### Numeric Types

* Integers, decimals, and floating-point numbers

### Text Types

* Fixed-length (`CHAR`) and variable-length (`VARCHAR`) strings
* Large text fields (e.g., `TEXT`, `CLOB`)

### Date and Time Types

* Store dates, times, and timestamps

### Boolean Types

* Store logical values (`TRUE` or `FALSE`)

---

## Operators and Conditions

SQL relies on comparison and logical operators to filter data.

### Comparison Operators

| Operator | Description              |
| -------- | ------------------------ |
| `=`      | Equal to                 |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |
| `<>`     | Not equal to             |

### Logical (Boolean) Operators

| Operator  | Description                         |
| --------- | ----------------------------------- |
| `AND`     | Both conditions must be true        |
| `OR`      | At least one condition must be true |
| `NOT`     | Excludes a condition                |
| `BETWEEN` | Filters within a range              |
| `LIKE`    | Matches patterns in text            |

---

## Working with NULL Values

Missing data in SQL is represented as `NULL`. These values require special handling.

### Find NULL Values

```sql
SELECT column_name
FROM table_name
WHERE column_name IS NULL;
```

### Find Non-NULL Values

```sql
SELECT column_name
FROM table_name
WHERE column_name IS NOT NULL;
```

Handling `NULL` values is important because they can affect query results and data analysis.

---

## Best Practices

* Always confirm your database and table before running queries
* Use `WHERE` clauses to limit results and improve performance
* Be aware of `NULL` values in your dataset
* Test queries on small datasets before scaling up

---

## Summary

SQL is widely accessible through both graphical tools and command-line interfaces. Whether you are using enterprise tools like SSMS or lightweight options like SQLite, the core principles of SQL remain consistent.

Understanding how to connect to databases, structure queries, and filter data is essential for working effectively with structured data.

---

## Next Steps

Now that you understand how to access SQL and write basic queries, the next step is to:

* Learn more advanced queries (`JOIN`, `GROUP BY`, `ORDER BY`)
* Practice working with real datasets
* Integrate SQL with tools like Python, R, or GIS platforms

These skills will help you move from basic database interaction to more advanced data analysis and application development.
