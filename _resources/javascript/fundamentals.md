---
layout: single
title: "JavaScript Fundamentals"
sidebar:
  nav: "javascript_sidebar"
toc: true
toc_sticky: true
---

Javascript is designed to aid in web development and work with other coding languages

This guide will inroduce the fundamentals of accessing Javascript and coding in 
Javascript 

-------------------------------------------------------------------------------

## JavaScript Fundamentals


### Accessing Javascript


Javascript is built into most **Computer Systems**

For **Windows & Linux** you can press CTRL + Shift + J 

For **Mac** you can  pres Cmd + Option + J

From here, you can enter JavaScript code

You can also use and **Integrated Development Environment**

- [**VS Code**](https://code.visualstudio.com/download?_exp_download=fb315fc982)

- [**Eclipse**](https://www.eclipse.org/downloads/])


### Syntax


There are various **Data Types** that are used within JavaScript 

|Data Type|Supported Data|
|----|-------------------|
|Number| supports numbers of any time|
|String| Supports Characters and combinations of words|
|Boolen| true and false|
|null|NuLL|
|notDefined|blank variables

**Variables** that we create are automatically assigned these data types based
on what you enter. 


We can assign variables with the **let** command as well as the **const** command


``` JavaScript
let exampleVariable = "sample string"

// This is a single line comment, when we assign the let command it can be reassigned. the 
const command cannot

const permanentVariable = "this can't change"

```
If we want to reassign our exampleVariable we can do so. However, we can't change
permanentVariable. 

We can also assign a variable multiple values. We do this by creating an array 

```JavaScript

let array = (1,2,3,5) 

//we can do the same for strings 

let fruit = ("banana","apple","kiwi","cherry")

```

Something similar to an array is an object, we can use objects in a similar capacity

```Javascript

const obj = {
name: "Elena",
role: "Student"
}

```

### Output commands 

We can print **Variables** and **Commands** through the console.log() command

``` JavaScript

console.log("Hello Reader")

// This would return Hello Reader 

let print_variable = "This will print this string"

console.log(print_variable)

// This would return: This will print this string

```

We can also add variables to strings through console.logs

```JavaScript

let insertVariable = "Elena"

console.log("Hello + {insertVariable}")

// This would return, Hello Elena. 

```


our console.log command is not limited to strings and numbers. We can also use 
this with boolean commands

```Javascript 

let booleanVariable = true

console.log(booleanVariable === true)

/* This is a multi-line comment: this will return the value true
lets look at another example */ 

console.log(5 < 3)

//because 5 is greater then 3, this will return false. 

```
Remember our Arrays from earlier? We can use these in our console.log as well 

```JavaScript

console.log(fruit[0])

// because the first value in our array was banana, this will return banana. 

```
We can do the same thing with our object from earlier 

```Javascript

console.log(obj['role])

// we can also use 

console.log(obj.role)

```
### Operators

Javascript offers **Arithmetic** and **Comparison** operators that allow us to 
perform computations 

These are our **Arithmetic Operators** 

|Operator Symbol|Operator Function|
|-------|-------------------------|
| + | Plus|
| - | Minus|
| * | Multiply|
| / | Divide|
| % | Modulo|
| ++| Positive Increment|
| --| Subtract Increment|
| =+| Addition Shorthand|
| -=| Subtraction Shorthand|

our **Increment** and **Shorthand** operators allow us to shorten the length
of numeric variable assignments 

```javascript

let longFormat = 5 + 4 
let Shorthand = LongFormat 

Shorthand += 3 

// this would add 3 to the value of our shorthand variable 
// if we want to increment shorthand we can do so as well 

Shorthand ++
Shorthand -- 

Because we did a +1 increment and a -1 increment our value did not change

```

We also have **Comparison Operators**

|Operator Symbol|Operator Meaning|
|---|----------------------------|
| > | Greater Than | 
| < | Less Than | 
| === | Equal to | 
| !== | Does not Equal | 
| >= | Greater than or equal to |
| <= | Less than or equal to | 

### Conditional Statments

We can apply our operators to an **If-Statement**. If statements allow us to control
the flow of our program. Lets look at an example. 

```Javascript 

let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

```

If we want to add more conditions, we can use the else if command

```Javascript 

let age = 18;

if (age === 18) {
  console.log("New Adult");
} else if (age > 18){
  console.log("Old Adult");
}else() {
  console.log("Minor");
}

```

## Using Loops

Loops are another way of effectively controlling program flow. We will look at 
**For Loops** and **While Loops** 

There are 3 large components of a for loop

- **Assigning our Variable**

```Javascript

for (let i = 0;

```
- **Setting our Condition**

```Javascript

for (let i = 0; i < 10

```

- **Changing our i value per loop**

```Javascript

for (let i = 0; i < 10; i++)

- **Creating our command**

for (let i = 0; i < 10; i++) {
    console.log(i);
    }
```

**While Loops** follow a similar format 

```JavaScript

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

```

Note: It is important to set a condition in which the program ends, as well as 
**incrementing** our conditional value. If we do not we could end up with an **infinite** loop,
which would harm our CPU and fry its memory.


}

### Functions

We can re-use code in java through through **Functions**

```Javascript

function greetUser(name) {
    return("Hello" ${name} );
}

```

When we want to call this function, we can enter the function

```Javascript

console.log(greetUser(Elena))

//This will return: Hello Elena

```
--------------------------------------------------------------------------------

## Next Steps 

Now that we have gone over some of the introductory fundamentals of JavaScript, lets look
at how we can use Javascript in a website. 



