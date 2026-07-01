---
layout: single
sidebar:
  nav: bash_sidebar
title: Bash Fundamentals
toc: true
toc_sticky: true
---

## Installing Bash 

Bash can be installed on various different computer systems such as **Windows** and **MacOS**.

Something to note is that each processing system will have it's own unique Shell with terminal commands. This makes bash scripting concepts easiy applicable
to other shells with minor differences. 

**Git Bash Installation**

to install **Bash**. You can do so by pressing
the [Link](https://git-scm.com/install/windows) here.

Bash is a shell that is compatible with **Git**, which allows you to push and pull file work you have done to an online repository. More information about git can be found [Here](http://127.0.0.1:4000/coding-support/git/) 


### Virtual Machine Usage**

You can also access bash through a **virtual machine**. This is best if you do not use a linux system.

To use a **Virtual Machine**, click [Here](https://linuxbash.sh/post/installation-differences-on-virtual-machines-vms)

--------------------------------------------------------------------------------

## Data Types 

There are a few data types that we want to be familiar with before we begin programming

- **Characters**

  Characters are single letters. They are wrapped with a **" "**

- **Strings**

  Strings are **Series of Characters** that formulate words. Similar to characters, they are
  wrapped with a " " quotation in commands as they usually contain spaces and special 
  characters that would make our code unsuable. 
  
- **Integer**

  Integers are non decimal point numbers such as 1 and 10. They are one of the smaller
  byte size data types. When printing and using with variables they do not require quotation marks 
  
- **Boolean**

   Boolean varaibles are those that are determined only by a TRUE or FALSE value.
   We can create boolean variables by assigning variables a TRUE or FALSE VAlUE.
  
  0 = TRUE 

  non-zero = FALSE 
  
  We can also use logical operators in Bash
  
  - && AND, operations that require multiple conditions to be true 
  
    ex: a integer variable is greater then 10 *AND* is even 
    
  - || OR, operations that require one condition to be true. In our example above for 
    AND, instead of both needing to be true. One could be true and the other could be false 
    
  - ! NOT, operations that require one condition to not be true, If we took are example above in the AND,
      would could say that we want an integer that is NOT even. 
      
      
  We will focus more on variable assignments and computing boolean operators later 
  


--------------------------------------------------------------------------------

## Syntax


there are two types of **comments** in the bash system. THe first is a single line comment

```bash

#This is a single line comment, when we run a script this will not run as code 

```

There are also multi-line commenets

```bash

'This is a multi line 
comment, the code 
will not run
no matter how many
lines I 



Use'

```


Before we do anything else, it's important to establish how we **Assign Variables** in bash 

There are 3 types of variables we will focus on in this guide: 

**Local Variables**

 Local variables are those that only avaliable inside a function or our current shell

```bash

#These variables are easy to assign

name = "Jason"

```

**Global Variables** 

- Global Variables are avaliable for use no matte which function you are in 
They will require us to **Specify the Path** and use the Export function.

```bash
Export Path = /Usr/directory/subdirectory:$PATH
```

**Array Variables**

- We can assign these variables multiple values, almost like a **List**.

```bash

Array_Variable = (1 5 10 20 30 50)

```

### Variable Naming Conventions


- **Ensure That Your Variables are Starting With a Letter** and not a function, number, or special character 

- **Make your Variable Names Short**, but descriptive. Keep it concise.


### Print commands

We can output text and other data types to our console using the **Echo** command. We can print various data types with this command. 

 If we want to print  a string we can use 

```bash
echo "Hello World"
```

We can also print out assigned **Variables** 

```bash
Variable = "Hello World"

echo "$Variable"

```

The Echo command isn't the only command we can use. We can also use **printf**, which is more suitable for longer strings and easily incorporate variables 
such as the day! 

There are multiple other commands we can do to **Print** in Bash, 

```bash

#Printf is one way that we can print a line with formatting in bash. 

'Lets Imagine its the Fourth of July in 2026.' 

printf "Todays date is $(%D,%M,%Y), happy Fourth of July!"


'this would print 

Todays date is 4, July, 2026, happy Fourth of July!

```

Let's look at another example where we are only calling one variable.

```bash

name = "Elena"

printf "Hello $(name)!"

'This would print: Hello Elena!
```

### Operators 

we can use our logical operators from above in collaboration with arithmetic operators and comparison operators 

**Arithmetic Operators**

| Name|Function|
|-----------|--|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulo | 

The most foreign operator is the **Modulo** operator. This operator will determine the remainder for any number 
when it is divided by another number.

```bash

#if we were to compute 17%3. We would be left with the number 2. This is because 
the largest factor that the closest value you can achieve with 3 is 15, leaving a remainder of 2. 

```

we can use Operators with **Variables**

```bash

age = 18

age next_year = age + 1

age last_year = age - 1 


```

if we want to use a shorthand for this, we can use **incremental code**

```bash

age = 18 

age ++ 

#This will give us our value for age next year by adding 1

age -- 

#This will give ous an age value for the year before by subtracting 1

```



 if we want to know our age value in three years we can use +=

``` bash
age =+ 3

# We can do the opposite for 3 years ago

age -= 3

```

Our other set of essential operators to know how to use are **Comparison Operators**

|Name|Function|
|---|---------|
|>|Greater Than|
|<|Less Than|
|==|Equals|
|>=|Greater than or equal to|
|<=|Less than or equal to| 
|!=|Not equal to| 
|gt|Greater Than|
|lt|Less Than|
|eq|Equal to|

These operators are more commonly used when we run **Conditional Statements** 

### Conditional Statements 

Conditional Statements rely on using **Boolean Logic** to control program flow. 

They will become incredibly useful when cleaning data you are working with as well as ensuring
that programs run properly

our conditional statements run off of if a variable meets a certain condition.

```bash

Age=18 

#Lets run a simple if statement

if [$Age -gt 17]; then
  echo "You are an adult."
fi
```
We can also add a condition if our variable does not meet a certain condition using the **Else** statement.

```bash
if[$Age -gt 17]; then 
  echo "You are an adult.""
else
  echo"You are not an adult."
fi

```
If we have multiple conditions we wan't to evalaute, we can use an **Elif** command. 

```bash

if[$Age -lt 2];then 
  echo "you are a baby!"
elif($Age -lt 5); then
  echo "you are a toddler!"
elif($Age -lt 13); then
  echo "you are a child"
elif($Age -lt 18); then 
  echo "you are a teenager"
else
  echo "you are an adult!"
fi
```

### Loops

Another effective way at controlling our program flow is by using **Loops**.

There are two loops we will be focusing on.

**While loops** 

While loops will run a series of code until a condition has been met. When the condition has 
been met the code will end. 


```bash

'lets make a code that prints every number from 1-100'

var = 1

while [$var -lt 100]; do 
  echo $var
  ((var++))
done

```
Note: Be sure your condition can be met AND that youa re **Incrementing** your variable.

Failing to do so can result in an **Infinite Loop**, which can fry your computer! 

**Until Loops** 

Until loops are similar to While loops. Except while a while loop runs until a condition becomes false. An
Until loop will run until a condition becomes true

```bash

'lets run the same command' 

var = 1

until [$var -gt 100]; do 
  echo $var
  ((var++))
done

```

--------------------------------------------------------------------------------

## Summary

There are a wide array of functions and tools at your disposal to work with data in bash.
From printing lines, to controlling the flow of programs, these introductory tools can provide you 
with the foundation to automate complex processes and efficiently work with files. 

### Next Steps

Next, this guide will focus on how to create functions and scripts in bash. 









