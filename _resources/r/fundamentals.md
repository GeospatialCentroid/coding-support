---
layout: single
sidebar:
  nav: r_sidebar
title: R Fundamentals
toc: true
toc_sticky: true
---



R is designed for **data analysis, statistics, and visualization**. It
emphasizes working with data structures like vectors, data frames, and
lists, and provides powerful tools for analysis and reporting.

This guide introduces the fundamental syntax used in R programs.

------------------------------------------------------------------------

## Running R

You can run R in several ways, with the simplest being via the command
line or the interactive R console.

### Interactive R Console

#### Windows

Open the Command Prompt and type:

``` bash
R
```

#### macOS

Open the Terminal and type:

``` bash
R
```

You can also use **RStudio**, a popular integrated development
environment (IDE) for working with R.

------------------------------------------------------------------------

## R Syntax

Practice writing and executing the following using the R console.\
To execute a line of code, press the *Enter* key. 

Note: to exit the R console write and execute ```quit()```

------------------------------------------------------------------------

## Comments

Comments are ignored by R and help explain your code.

### Single Line Comment

Starts with `#`

``` r
# This is a comment
print("This code will execute!")
```

------------------------------------------------------------------------

## Variables

Variables store values and are assigned using `<-` (recommended) or `=`.

``` r
name <- "Alice"
age <- 30
height <- 5.6
```

------------------------------------------------------------------------

## Basic Data Types

### Character (Strings)

``` r
message <- "Hello"
```

### Numeric

``` r
count <- 10
temperature <- 98.6
```

### Logical (Boolean)

``` r
is_active <- TRUE
```

------------------------------------------------------------------------

## Printing Output

Use `print()` or simply type the variable name.

``` r
print("Hello World")

name <- "Alice"
print(paste("Hello", name))
```

------------------------------------------------------------------------

## User Input

R can accept user input using `readline()`.

``` r
name <- readline(prompt = "Enter your name: ")
print(paste("Hello", name))
```

------------------------------------------------------------------------

## Type Conversion

Convert between data types using built-in functions.

  Function           Purpose
  ------------------ --------------------
  `as.integer()`     convert to integer
  `as.numeric()`     convert to numeric
  `as.character()`   convert to string

``` r
age <- as.integer("30")
temperature <- as.numeric("98.6")
number <- as.character(42)
```

------------------------------------------------------------------------

## Arithmetic Operators

R supports standard mathematical operations.

``` r
a <- 10
b <- 3

a + b
a - b
a * b
a / b
a^b
a %% b
```

------------------------------------------------------------------------

## Comparison Operators

Used to compare values.

``` r
x <- 10
y <- 5

x > y
x < y
x == y
x != y
```

------------------------------------------------------------------------

## Conditional Statements

Conditional statements control program flow.

``` r
age <- 18
if (age >= 18) {
  print("You are an adult")
}
```

------------------------------------------------------------------------

## Loops

### For Loop

``` r
for (i in 1:5) {
  print(i)
}
```

### While Loop

``` r
count <- 0
while (count < 5) {
  print(count)
  count <- count + 1
}
```

------------------------------------------------------------------------

## Vectors

``` r
numbers <- c(1, 2, 3, 4, 5)
numbers[1]
```

------------------------------------------------------------------------

## Lists

``` r
my_list <- list(name = "Alice", age = 30, active = TRUE)
```

------------------------------------------------------------------------

## Data Frames

``` r
df <- data.frame(
  name = c("Alice", "Bob"),
  age = c(25, 30)
)

print(df)
```

------------------------------------------------------------------------

## Functions

``` r
greet <- function(name) {
  print(paste("Hello", name))
}

greet("Alice")
```

------------------------------------------------------------------------

## Installing and Loading Packages

``` r
install.packages("ggplot2")
library(ggplot2)
```

------------------------------------------------------------------------

## Writing Your First Script

``` r
name <- readline(prompt = "What is your name? ")

if (nchar(name) > 0) {
  print(paste("Hello", name))
} else {
  print("Hello stranger")
}
```

Run from command line:

``` bash
Rscript hello.R
```
