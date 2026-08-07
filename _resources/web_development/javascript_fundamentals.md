---
layout: single
title: "JavaScript Fundamentals"
sidebar:
  nav: "web_development_sidebar"
toc: true
toc_sticky: true
---


JavaScript is designed to support web development and work alongside other web technologies such as HTML and CSS.

This guide introduces the fundamentals of accessing JavaScript, writing JavaScript code, and understanding core programming concepts.

---

## JavaScript Fundamentals

### Accessing JavaScript

JavaScript is built into most web browsers, allowing experimentation without installing additional software. Once a preferred browser is open:

* **Windows & Linux:** Press **Ctrl + Shift + J**
* **Mac:** Press **Cmd + Option + J**

This opens the browser’s developer console, where JavaScript code can be entered and executed.

JavaScript can also be developed using an **Integrated Development Environment (IDE)** such as [**VS Code**](https://code.visualstudio.com/download?_exp_download=fb315fc982).

---

## Syntax

When writing code, precision is important. JavaScript commonly uses **Commands** and **Targets**.

Commands define what the code should do, while targets identify the elements or data that the command should affect.

Parentheses `()` are commonly used to define inputs or specify targets within code. Longer code structures, such as **Functions** and **Conditional Statements**, also use curly brackets `{}` to define blocks of code.

Brackets must always be properly opened and closed. Every opening bracket requires a corresponding closing bracket. Maintaining proper structure ensures that code can run successfully.

---

## Data and Variables

JavaScript uses several different **Data Types** to store and manage information.

| Data Type | Supported Data                                           |
| --------- | -------------------------------------------------------- |
| Number    | Supports numerical values                                |
| Integer   | Supports whole numbers without decimals                  |
| String    | Supports characters and combinations of words            |
| Boolean   | Supports `true` and `false` values                       |
| null      | Represents an intentional absence of a value             |
| undefined | Represents a variable that has not been assigned a value |

Unlike some programming languages that require variables to be assigned a specific **Data Type**, JavaScript automatically determines the data type based on the value assigned.

Variables can be created using the **let** or **const** commands.

```javascript
let exampleVariable = "Hello World"
```

The **let** command allows a variable to be reassigned later. When a value should remain unchanged, the **const** command can be used.

```javascript
const permanentVariable = "This Can't Change!"
```

---

## Output Commands

The **console.log()** command can be used to display variables, text, and values in the browser console.

A sample string can be printed using:

```javascript
console.log("Hello World")
```

This returns:

```
Hello World
```

Variables can also be displayed:

```javascript
console.log(exampleVariable)
```

Strings can be combined with variables to create dynamic messages:

```javascript
let name = "Ethan"

console.log("Hello There " + name + "!")
```

This returns:

```
Hello There Ethan!
```

## Arrays and Objects

Variables can store multiple values using **Arrays** and **Objects**.

### Arrays

Arrays allow multiple values to be stored within a single variable. Each value in an array is assigned an index position, starting at **0**.

```javascript
let numbers = [1, 2, 3, 5]

// Arrays can also store strings

let fruit = ["banana", "apple", "kiwi", "cherry"]
```

Values within an array can be accessed by referencing their index position:

```javascript
console.log(fruit[0])
```

This returns:

```text
banana
```

Because JavaScript arrays begin counting at **0**, the first value is accessed using `[0]`, the second value using `[1]`, and so on.

For example, to access **Kiwi** from the array:

```javascript
console.log(fruit[2])
```

This returns:

```text
kiwi
```

Understanding indexing is important because different programming languages may use different conventions. Always check how a language handles indexing when working across multiple programming languages.

---

### Objects

Objects provide another way to organize related information. An object stores values as **key-value pairs**, allowing multiple pieces of information to be grouped together.

For example:

```javascript
const person = {
    name: "Elena",
    role: "Student",
    instrument: "Trombone"
}
```

Individual values within an object can be accessed using the object name followed by the key:

```javascript
console.log(person.instrument)
```

This returns:

```text
Trombone
```

Objects are commonly used in JavaScript because they provide a flexible way to organize and manage structured data.

---

## Boolean Values and Comparisons

The `console.log()` command can also be used with Boolean values and comparisons.

A Boolean value can only contain one of two values:

* `true`
* `false`

Example:

```javascript
let booleanVariable = true

console.log(booleanVariable === true)
```

This returns:

```text
true
```

Comparison operators can also be used to evaluate conditions:

```javascript
console.log(5 < 3)
```

This returns:

```text
false
```

because 5 is not less than 3.

---

# Operators

JavaScript includes **Arithmetic Operators** and **Comparison Operators** that allow calculations and comparisons to be performed.

## Arithmetic Operators

| Operator Symbol | Function              |
| --------------- | --------------------- |
| +               | Addition              |
| -               | Subtraction           |
| *               | Multiplication        |
| /               | Division              |
| %               | Modulo (remainder)    |
| ++              | Increment by 1        |
| --              | Decrement by 1        |
| +=              | Addition shorthand    |
| -=              | Subtraction shorthand |

Arithmetic shorthand operators allow values to be updated more efficiently.

Example:

```javascript
let value = 5

value += 3
```

The value of `value` is now:

```text
8
```

Incrementing increases a value by 1:

```javascript
value++
```

The value becomes:

```text
9
```

Decrementing reduces a value by 1:

```javascript
value--
```

The value becomes:

```text
8
```

Increment and decrement operators are commonly used with **Loops** and **Conditional Statements**.

---

## Comparison Operators

Comparison operators evaluate relationships between values.

| Operator Symbol | Meaning                  |
| --------------- | ------------------------ |
| >               | Greater than             |
| <               | Less than                |
| ===             | Equal to                 |
| !==             | Does not equal           |
| >=              | Greater than or equal to |
| <=              | Less than or equal to    |

Comparison operators are commonly used when creating **Conditional Statements** and **Loops**.

---

# Conditional Statements

Conditional statements allow programs to make decisions based on whether a condition is true or false.

An **if statement** runs code only when a specific condition is met.

Example:

```javascript
let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

If additional conditions are needed, an `else if` statement can be added:

```javascript
let age = 18;

if (age === 18) {
    console.log("New Adult");
} else if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

# Using Loops

Loops allow code to be repeated while a condition is met. JavaScript commonly uses **for loops** and **while loops**.

## For Loops

A `for` loop contains three main components:

1. **Initialization** — creates the starting variable
2. **Condition** — determines when the loop should continue
3. **Increment** — updates the variable after each loop

Example:

```javascript
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
```

This code prints every number from 0 to 10.

---

## While Loops

A `while` loop continues running as long as a condition remains true.

Example:

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

When creating loops, it is important to include a condition that allows the loop to end. Without an ending condition or increment, a program may create an **infinite loop**, which can consume system resources.

---

# Functions

Functions allow reusable blocks of code to be created. They help organize programs, reduce repetition, and make code easier to maintain.

Example:

```javascript
function greetUser(name) {
    return `Hello ${name}`;
}
```

A function can be called by providing a value for the required input:

```javascript
console.log(greetUser("Elena"))
```

This returns:

```text
Hello Elena
```

Functions are an important part of JavaScript because they allow code to be organized into reusable components.

---

# Next Steps

After reviewing these JavaScript fundamentals, the next step is exploring how JavaScript can be used to create interactive websites, visualize data, and build web applications.





