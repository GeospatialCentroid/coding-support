---
title: Python Syntax Basics
layout: single
sidebar:
  nav: "python_sidebar"
permalink: python/basics
toc: true
toc_sticky: true
---

Python is designed to be **simple, readable, and expressive**. Unlike many programming languages, Python emphasizes clean syntax and uses **indentation instead of braces** to define code blocks.

This guide introduces the fundamental syntax used in Python programs.

---

## Running Python

You can run Python in several ways:

### Interactive Interpreter

```python
python
```

### Running a Script

```python
python script.py
```

Comments
========

Comments are ignored by Python and help explain your code.

### Single Line Comment

```python
# This is a commentprint("Hello World")
```

### Multi-line Comment (Docstring style)

```python
"""This is often used fordocumentation strings"""
```

## Variables

Variables store values. Python automatically determines the variable type.

```python
name = "Alice"age = 30
height = 5.6
```

Variables **do not require explicit type declarations**.

## Basic Data Types

### Strings

```python
message = "Hello"
```

### Integers

```python
count = 10
```

### Floats

```python
temperature = 98.6
```

### Booleans

```python
is_active = True
```

## Printing Output

The print() function displays output.

```python
print("Hello World")
```

Multiple values can be printed:

```python
name = "Alice"
print("Hello", name)
```

##  User Input

Python can accept user input using input().

```python
name = input("Enter your name: ")
print("Hello", name)
```

Note: input() always returns a **string**.

## Type Conversion

Convert between data types using built-in functions.

```python
age = input("Enter age: ")
age = int(age)
temperature = float("98.6")
number = str(42)
```

Common conversions:

| Function  | Purpose            |
| --------- | ------------------ |
| `int()`   | convert to integer |
| `float()` | convert to decimal |
| `str()`   | convert to string  |


## Arithmetic Operators

Python supports standard mathematical operations.

```python
 a = 10
 b = 3
 print(a + b)  # addition
 print(a - b)  # subtraction
 print(a * b)  # multiplication
 print(a / b)  # division
 print(a ** b) # exponent
 print(a % b)  # remainder
 ```

## Comparison Operators

Used to compare values.

```python
x = 10
y = 5
print(x > y)
print(x < y)
print(x == y)
print(x != y)
```

## Conditional Statements

Conditional statements control program flow.

### If Statement

```python
age = 18
if age >= 18:    
    print("You are an adult")
```

### If / Else

```python
age = 16
if age >= 18:
    print("Adult")
else:    
    print("Minor")
```

### If / Elif / Else

```python
score = 85
if score >= 90:    
    print("A")
elif score >= 80:    
    print("B")
else:    
    print("C")
```

## Indentation

Python uses **indentation to define blocks of code**.

```python
if True:
    print("This runs")
```

Incorrect indentation will cause an error:

```python
if True:
    print("Error")
```

Standard practice is **4 spaces per indentation level**.

## Loops

Loops allow code to run multiple times.

### For Loop

Used to iterate over sequences.

```python
for i in range(5):
    print(i)
```

Output:

```python
0
1
2
3
4
```

### While Loop

Runs until a condition becomes false.

```python
count = 0
while count < 5:    
    print(count)    
count += 1
```

## Lists

Lists store multiple values.

```python
fruits = ["apple", "banana", "orange"]
```

Access elements:

```python
print(fruits[0])
```

Add an item:

```python
fruits.append("grape")
```

Loop through a list:

```python
for fruit in fruits:    print(fruit)
```

## Dictionaries

Dictionaries store **key-value pairs**.

```python
person = { "name": "Joe","age": 30,"city": "Denver"}
```

Access values:

```python
print(person["name"])
```

Add a new key:

```python
person["email"] = "joe@example.com"
```

Functions
=========

Functions organize reusable code.

```python
def greet(name):    
    print("Hello", name)
```

Call the function:

```python
 greet("Alice")
 ```

Functions can return values:

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)
```

## Importing Libraries

Python includes many built-in libraries.

```python
import mathprint(math.sqrt(16))
```

Import specific functions:

```python
from math import sqrt
```

## Writing Your First Script

Example program:

```python
name = input("What is your name? ")
if name:
    print("Hello", name)
else:
    print("Hello stranger")
```

Save the file as:

```bash
hello.py
```

Run it:

```bash
 python hello.py
 ```