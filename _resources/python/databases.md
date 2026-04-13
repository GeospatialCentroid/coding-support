---
title: Databases with Python
layout: single
toc: true
toc_sticky: true
permalink: python/databases/
sidebar:
  nav: "python_sidebar"
---

Databases are used to **store, manage, and retrieve structured data efficiently**. Python provides libraries to work with both **relational (SQL)** and **non-relational (NoSQL)** databases.

This guide covers:

* Connecting to databases
* Creating and querying tables
* Inserting, updating, and deleting records
* Working with SQLite, PostgreSQL, MySQL, and MongoDB

---

# Relational Databases (SQL)

Relational databases store data in **tables** with rows and columns. Common databases include:

* SQLite (lightweight, built-in)
* PostgreSQL
* MySQL / MariaDB

Python can interact with SQL databases using **`sqlite3`** or libraries like **`SQLAlchemy`**.

---

## Using SQLite (Built-in)

SQLite is lightweight and requires **no separate server**.

```python
import sqlite3

# Connect to database (creates file if it doesn't exist)
conn = sqlite3.connect("example.db")

# Create a cursor to execute SQL commands
cursor = conn.cursor()
```

---

## Creating Tables

```python
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    city TEXT
)
""")
conn.commit()
```

---

## Inserting Data

```python
cursor.execute("INSERT INTO users (name, age, city) VALUES (?, ?, ?)",
               ("Alice", 30, "Denver"))
conn.commit()
```

Insert multiple rows:

```python
users = [
    ("Bob", 25, "Boulder"),
    ("Charlie", 35, "Fort Collins")
]

cursor.executemany("INSERT INTO users (name, age, city) VALUES (?, ?, ?)", users)
conn.commit()
```

---

## Querying Data

```python
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()

for row in rows:
    print(row)
```

Query with conditions:

```python
cursor.execute("SELECT name, city FROM users WHERE age > ?", (30,))
for row in cursor.fetchall():
    print(row)
```

---

## Updating Data

```python
cursor.execute("UPDATE users SET city = ? WHERE name = ?", ("Broomfield", "Alice"))
conn.commit()
```

---

## Deleting Data

```python
cursor.execute("DELETE FROM users WHERE age < ?", (30,))
conn.commit()
```

---

## Closing the Connection

```python
conn.close()
```

Always close the database connection to **avoid locks or corruption**.

---

# Using SQLAlchemy

SQLAlchemy is a **higher-level ORM** that works with multiple SQL databases.

Install:

```bash
pip install sqlalchemy
```

Example:

```python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()
engine = create_engine("sqlite:///example.db")
Session = sessionmaker(bind=engine)
session = Session()
```

Define a table as a Python class:

```python
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    age = Column(Integer)
    city = Column(String)

Base.metadata.create_all(engine)
```

Insert data:

```python
new_user = User(name="Diana", age=28, city="Denver")
session.add(new_user)
session.commit()
```

Query data:

```python
for user in session.query(User).filter(User.age > 25):
    print(user.name, user.city)
```

---

# Non-Relational Databases (NoSQL)

NoSQL databases store **unstructured or semi-structured data**. Common examples:

* MongoDB
* Redis
* CouchDB

Python commonly uses the **`pymongo`** library for MongoDB.

Install:

```bash
pip install pymongo
```

---

## Connecting to MongoDB

```python
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["example_db"]
collection = db["users"]
```

---

## Inserting Documents

```python
user = {"name": "Alice", "age": 30, "city": "Denver"}
collection.insert_one(user)

users = [
    {"name": "Bob", "age": 25, "city": "Boulder"},
    {"name": "Charlie", "age": 35, "city": "Fort Collins"}
]
collection.insert_many(users)
```

---

## Querying Documents

```python
for user in collection.find({"age": {"$gt": 30}}):
    print(user["name"], user["city"])
```

---

## Updating Documents

```python
collection.update_one({"name": "Alice"}, {"$set": {"city": "Broomfield"}})
```

---

## Deleting Documents

```python
collection.delete_one({"age": {"$lt": 30}})
```

---

# Summary

Python provides tools for both **SQL and NoSQL databases**:

* **SQL**: SQLite, PostgreSQL, MySQL

  * Use `sqlite3` for lightweight apps
  * Use `SQLAlchemy` for ORM and multi-database support
* **NoSQL**: MongoDB, Redis

  * Use `pymongo` for MongoDB integration

You can **store, query, and manipulate structured and unstructured data** efficiently for applications ranging from small scripts to large-scale data systems.

---

# Next Steps

After learning the basics, explore:

* Advanced SQL queries and joins
* Indexing for faster queries
* Transactions and database locking
* Using ORMs for complex apps
* Integrating Python with cloud databases (AWS RDS, Mongo Atlas)
* Data pipelines combining Python + SQL/NoSQL databases
