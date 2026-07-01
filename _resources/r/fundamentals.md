---
layout: single
sidebar:
  nav: r_sidebar
title: "R Fundamentals"
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
environment (IDE) for working with R. We will talk more about this later. 

------------------------------------------------------------------------

## R Syntax

Practice writing and executing the following using the R console. **\**
To execute a line of code, press the *Enter* key. 

Note: to exit the R console write and execute ```quit()```

------------------------------------------------------------------------

### Comments

Starts with `#`

``` r
# This is a comment

print("This code will execute!")
```

### Multi-line Programs

to write **Multi-line Programs** we can use the ```%>%``` symbol between commands. 

``` r 

Example <- Print("Here is line 1") %>%
           var <- ("Here is line 2") %>%
           Print(var)

print(Example)

```

This would return: 

```r

here is line 1
Here is line 2

``` 

### Variables 

**Variables store values of different data types** and are assigned using <- (recommended) or =. 

``` r
name <- "Alice"
age <- 30
height <- 5.6
```
### Variable Naming Rules 

Don't include special characters in your variable assignments 
 
``` r
don't_do_this! <- "please"
```

Don't start variable assignments with numbers.  
 

``` r
3_favorite_things <- ('movies, candy, family')

```

We want our variable names to start with characters. 

```r

three_favorite_things <- ('movies, candy, family')

```r

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

#This will return: Hello, Alice

number <- 22
print(number)

#This will return: 22

test <- TRUE
print(test == TRUE)

#This will return: TRUE
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

  |Function          | Purpose|
  |------------------|---------|
  |`as.integer()`|convert to integer|
  |`as.numeric()`|convert to numeric|
  |`as.character()`|convert to string|


``` r
age <- as.integer("30")
temperature <- as.numeric("98.6")
number <- as.character(42)
```

------------------------------------------------------------------------

## Arithmetic Operators

R supports standard **Mathematical Operations**.

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

These are used to **Compare** Values and Variable

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

**Conditional Statements** control program flow.

### if statements

**If Statements Evaluate a Condition**, and then provide an appropriate output based on
if that condition is **True** or **False** 

``` r
age <- 18
if (age >= 18) {
  print("You are an adult")
}

```
### if else statements

These statements will evaluate if a condition is **True** or **False** and will 
provide statement for both options. 

```r
age <- 18
 if (age >= 18) {
   print("You are an adult")
} else {
   print("you are not an adult")
 }
```
### else if statments 

These statements will allow for **Multiple Different** conditional statements to be 
evaluated. 

```r
age <- 18
 if (age >= 18) {
   print("You are an adult")
} else if (13 < age < 18) {
print("You are a teenager")
}
else {
   print("you are a child")
 }
```
------------------------------------------------------------------------

## Loops

**Loops Will Cycle Through a set Range of Values** and run a program for every
iteration

### For Loop

``` r
for (i in 1:5) {
  print(i)
}

# This loop will print the numbers 1-5. 
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

**Vectors** are series of data such as **Numbers**,**Strings**, and **Characters** 
``` r
numbers <- c(1, 2, 3, 4, 5)

# We can call the number 1 with this command 

print(numbers[1])


```


-------------------------------------------------------------------------------


## Matrices

**Matrices* can be thought of as a **Two Dimensional Vector**. 

```

# to make a matrix, we can assign our numbers of rows and columns to set our 
dimensions 

numbers <- matrix (c(1,2,3,4,5,6,7,8,9), nrow = 3, ncol = 3)

```

-------------------------------------------------------------------------------

## Lists


``` r
my_list <- list(name = "Alice", age = 30, active = TRUE)
```

------------------------------------------------------------------------

## Data Frames

Data Frames allow us to make a set of data similar to a matrix.


``` r

df <- data.frame(
  name = c("Alice", "Bob"),
  age = c(25, 30)
)

```

------------------------------------------------------------------------------


## Functions

**Functions Allow us to Take in User Input** and provide an outcome based on that 
input. These are largely applicable among all coding languages and are benfical 
to familiarize yourself with 


``` r
greet <- function(name) {
  print(paste("Hello", name))
}

greet("Alice")
```

------------------------------------------------------------------------

## Installing and Loading Packages

**Packages** are a **Series of Commands and Programs** that are made outside of basic R,
commonly by developers and others.

**They Allow us to Perform Functions Beyond the Capabilities of Basic R** 
as well as simplifying actions that would otherwise be complex and tedious. 

**ggplot2** is one library that is important for **Creating Data Visualizations**.


``` r
install.packages("ggplot2")
library(ggplot2)

```
### Package and Function Information

**The Help Command** is one of the most useful tools in R. Running this command 
will allow you to **view all information about a select base R command** as well as commands
that are stored within libraries

```r
help(print)

#This command will return a full resource page of how to use the print command as well as examples

```

------------------------------------------------------------------------

## Writing Your First Script

Lets look at an example of creating a script that returns someones name. Try
it out on your r console!

if we have a file named hello.R, we can make the following script in it. 

``` r
greetings <- function(name) {

if (nchar(name) > 0) {
  print(paste("Hello", name))
} else {
  print("Hello stranger")
}
}
```

Run from command line, or press CTRL + Enter to run your script:

``` bash
Rscript hello.R
```
