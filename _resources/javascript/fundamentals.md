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

For **Windows & Linux** you can press CTRL + Shift + J.

For **Mac** you can  pres Cmd + Option + J.

From here, you can enter JavaScript code.

You can also use an **Integrated Development Environment** such as 
[**VS Code**](https://code.visualstudio.com/download?_exp_download=fb315fc982), or
[**Eclipse**](https://www.eclipse.org/downloads/]).


------------------------------------------------------------------------------------------

## Syntax 

When we write code, we need to be very specific with what we write. We commonly have our 
**Commands**, and our **Targets**. Our commands are what we want our code to do, and our 
targets are what we wan't our code to impact. 

We usually will use ```()``` to dictate what we want to target in our code. For some 
longer code blocks such as **Functions** and **Conditional Statements** we will also use ```{}```.

You will notice that we always ensure our bracketing is closed. Meaning no matter how much code we write we have an equal amount of opening and closing brackets. We will see many examples of this throughout our guide. This is important in ensuring our code will run!

## Data and Variables 

There are various **Data Types** that are used within JavaScript 

|Data Type|Supported Data|
|----|-------------------|
|Number| supports numbers of any type|
|Integer| Supports non decimal numbers| 
|String| Supports Characters and combinations of words|
|Boolen| true and false|
|null|values that are invalid or have nothing|
|notDefined|blank variables

Unlike other coding languages where you need to assign variables a **Data Type**, **Variables** that we create are automatically assigned these data types based
on what you enter. 


We can assign variables with the **let** command as well as the **const** command


``` javascript
let exampleVariable = "Hello World"

```

When we use the **Let** command, it allows us to later reassign the variable. If we wan't 
to create a variable that can't be asisgned later on, we will use the **Const** Command

``` javascript

const permanentVariable = "This Can't Change!"

```

### Output Commands 

we can print variables, and strings using the **console.log** command. 

We can print a sample string of our choosing

``` javascript

console.log("Hello World")

```

This would return Hello World to our console. 

We can print the same text using our **exampleVariable** from earlier.

``` javascript

console.log(exampleVariable)

```

If we want to create a string that combines **Text** and **Variables**, we can do that like
so. 

``` javascript

let name = "Ethan"

console.log("Hello There " + name + " !" )

```

This would print: Hello There Ethan!


### Arrays and Objects

We can assign variables multiple values using **Arrays** and **Objects** 

Array's allow us to create a single variable with multiple different values 

``` javascript

let array = (1,2,3,5) 

// This is a comment! We can do the same for strings.

let fruit = ("banana","apple","kiwi","cherry")

```

Similar to printing our single value variables, we can print values from our **fruit** variable as well. 

```javascript

console.log(fruit[0])

```

When targetting variables in an array, it's important to know they start on 0. This means that when we want to call the first value in an array we start with [0]. As we move down our values, we will increase our number. 

It's important to know this because some languages will start on 1. when coding in multiple languages, make sure you know which value you should start on!

Let's print the word **Kiwi** from our array from earlier. 

``` javascript

console.log(fruit[2])

```

Something similar to an array is an **Object**

An object is essentially an array of variables. This means that we can assign multiple variables within our object, and then call individual variables within the object. Let's look at an example. 

```javascript

const person = {
name: "Elena",
role: "Student",
instrument: "Trombone", 
}

```
We can print variables from our object with a similar **console.log** command as wth our array's 

```javascript

console.log(person.instrument)

```

This would return: Trombone

Let's go back to our **Output Commands**. 

Our console.log command is not limited to strings and numbers. We can also use 
this with boolean commands

```javascript

let booleanVariable = true

console.log(booleanVariable === true)

/* This is a multi-line comment: this will return the value true
lets look at another example */ 

console.log(5 < 3)

//because 5 is greater then 3, this will return false. 

```

## Operators

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

let longFormat = 5 
let Shorthand = longFormat 

Shorthand += 3 

// this would add 3 to the value of our shorthand variable, giving it a value of 8

```

**Incrementing** allows us to add values of 1 to a variable, this will become useful when looking at **Conditional Statements** and **Loops** 

``` javascript
Shorthand ++

// This would give us a value of 9

Shorthand -- 

// This would bring us back to 8

```

**Comparison Operators**

|Operator Symbol|Operator Meaning|
|---|----------------------------|
| > | Greater Than | 
| < | Less Than | 
| === | Equal to | 
| !== | Does not Equal | 
| >= | Greater than or equal to |
| <= | Less than or equal to | 

We will use conditional operators commonly when we write **Conditional Statements** and **Loops** 

## Conditional Statments

We can apply our operators to an **If-Statement**. If statements allow us to control
the flow of our program. Lets look at an example. 

```javascript 

let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

```

If we want to add more conditions, we can use the else if command

```javascript 

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

First we **Assign** our variable.

```javascript

for (let i = 0);

```
Then, we will set our **Condition**.

```javascript

for (let i = 0; i <= 10)

```

Next, we want to **Increment** our variable. 

```javascript

for (let i = 0; i <= 10; i++)
```

Finally, we will create our **Command** 

```javascript

for (let i = 0; i <= 10; i++) {
    console.log(i);
    }
```
This example code would log every number from 0 to 10 
**While Loops** follow a similar format 

``` javascript

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

```

Note: It is important to set a condition in which the program ends, as well as 
**incrementing** our conditional value. If we do not we could end up with an **infinite** loop,
which would harm our CPU and fry its memory.




## Functions

We can re-use code in java through through **Functions**. This helps us save time as well as 
writing **Scripts** that can be broadly used between coders. 

```javascript

function greetUser(name) {
    return("Hello" ${name}"); 
    //This is another way to print a string with a variable within it. 
}

```

When we want to call this function, we can enter the function

```javascript

console.log(greetUser(Elena))

//This will return: Hello Elena

```
--------------------------------------------------------------------------------

## Next Steps 

Now that we have gone over some of the introductory fundamentals of JavaScript, lets look
at how we can use Javascript in a website. 



