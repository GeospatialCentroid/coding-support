---
layout: single
sidebar:
  nav: matlab_sidebar
title: "Fundamentals" 
toc: true
toc_sticky: true
---

## Access MATLAB

**MATLAB** is a licensed software developed by MathWorks, which means access typically requires a paid license.

### For CSU Students

If you are a student at Colorado State University, you likely already have access through the university.

Follow the official CSU installation and access instructions here:
👉 [https://www.engr.colostate.edu/ets/matlab/](https://www.engr.colostate.edu/ets/matlab/)

### General Access

If you are not affiliated with an institution that provides MATLAB, you will need to purchase a license or use a trial through [MathWorks](https://www.mathworks.com/help/install/ug/install-products-with-internet-connection.html).

---

## Syntax

MATLAB syntax is designed to be simple and readable.

* A semicolon `;` at the end of a line **suppresses output** in the Command Window
* Comments are written using the `%` symbol

```matlab
% This line is a comment and will not run

disp("This line of code will run")
```

The `disp` function displays text or variable values in the Command Window.

### Common Commands

| Command   | Description                                 |
| --------- | ------------------------------------------- |
| `disp`    | Displays text or variables                  |
| `fprintf` | Prints formatted text with variables        |
| `diary`   | Saves Command Window input/output to a file |

Example using `fprintf`:

```matlab
x = 10;
fprintf('The number ten in numeric format is %d\n', x);
```

* `%d` is a placeholder for integers
* `\n` creates a new line

---

## Data Types & Assigning Variables

MATLAB automatically assigns a data type when you create a variable.

### Common Data Types

| Data Type  | Description                             |
| ---------- | --------------------------------------- |
| `char`     | Single characters (e.g., `'a'`)         |
| `string`   | Text strings (e.g., `"hello"`)          |
| `double`   | Default numeric type (floating-point)   |
| `single`   | Single-precision floating-point numbers |
| `int`      | Integer types (e.g., `int8`, `uint32`)  |
| `datetime` | Date and time values                    |
| `array`    | Ordered collections of values           |

### Example

```matlab
charac = 'a';           % character
strVal = string(charac); % convert to string
x = 42;                 % numeric (double by default)
```

### The `ans` Variable

If you don’t assign a result to a variable, MATLAB stores it in a default variable called `ans`.

```matlab
5 + 8       % ans = 13
ans + 9     % returns 22
```

---

## Operators and Expressions

MATLAB supports arithmetic and comparison operators for calculations and logical evaluation.

### Arithmetic Operators

| Operator   | Description        |
| ---------- | ------------------ |
| `+`        | Addition           |
| `-`        | Subtraction        |
| `*`        | Multiplication     |
| `/`        | Division           |
| `mod(a,b)` | Remainder (modulo) |

> Note: MATLAB uses the `mod()` function for remainders (not `%`).

```matlab
modu = mod(17, 3);  % returns 2
disp(modu)
```

### Comparison Operators

| Operator | Description              |
| -------- | ------------------------ |
| `<`      | Less than                |
| `>`      | Greater than             |
| `==`     | Equal to                 |
| `<=`     | Less than or equal to    |
| `>=`     | Greater than or equal to |
| `~=`     | Not equal to             |

Example:

```matlab
A = 8;
B = 7;
combined = A + B;

bool = combined > 20;  % returns false
```

---

## Conditional Statements

Conditional statements allow you to control program flow based on logical conditions.

### If Statements

```matlab
condition = 10;

if condition < 0
    fprintf("This is a negative number\n");
elseif condition < 10
    fprintf("This is a positive number less than 10\n");
else
    fprintf("This is a positive number greater than or equal to 10\n");
end
```

### Switch Statements

`switch` is useful when comparing a variable against multiple specific values.

```matlab
num = 2;

switch num
    case 1
        fprintf("num is equal to 1\n");
    case 2
        fprintf("num is equal to 2\n");
    case 3
        fprintf("num is equal to 3\n");
    otherwise
        fprintf("This number is greater than 3\n");
end
```

---

## Next Steps

Now that you’ve learned the basics of MATLAB syntax, variables, and control flow, the next step is to explore:

* Importing and working with datasets
* Creating visualizations and plots
* Applying MATLAB to real-world engineering and research problems

These skills will help you move from basic scripting to practical data analysis and modeling.
