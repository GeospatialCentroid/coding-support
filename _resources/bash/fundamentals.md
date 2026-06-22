---
layout: single
sidebar:
  nav: bash_sidebar
title: 'Bash'
toc: true
toc_sticky: true
---

## Installing Bash 

Bash can be installed on various differnet computer systems such as Windows, MacOS, Linux, and Ubuntu.

Something to note is that each processing system will have it's own unique terminal. If you do not own a linux system
this ok! You can use unix or your version of a shell to run nearly identifcal commands with some specific differences.

**Git Bash Installation**

For collaborative purposes, it can be more beneficial to install git bash. You can do so by pressing
the [Link](https://git-scm.com/install/windows) here.

**Linux Bash Installation**

Installing bash for linux systems is fairly simple as well. T

for **Windows** software users. open up the terminal by pressing alt+S. From here, search up 
"terminal"; right click on the terminal tab and click "run as administrator"

Once you have opened up the terminal, type in "WSL" into the terminal command prompt. This will install
Ubuntu onto your computer and set it as your terminal. Upon entering WSL, be sure to restart your computer. 

After you restart your computer, open the terminal and enter a username or password. This will allow you to start
coding with Bash! 

**Virtual Machine Usage**

You can also access bash through a **virtual machine**. This is best if you do not use a linux system.

Because this is a complex and specific process. You can click [Here](https://linuxbash.sh/post/installation-differences-on-virtual-machines-vms)

--------------------------------------------------------------------------------

## Data Types 

There are a few data types that we want to be familiar with before we begin programming

- **Characters**

  Characters are letters. They are wrapped with a ""

- **Strings**

  Strings are commands that are a set of characters that create words. They are
  wrapped with a "" quotation in commands as they usually contain spaces and special 
  characters that would make our code unsuable. 
  
- **Integer**

  Integers are non decimal point numbers such as 1 and 10. They are one of the smaller
  byte size data types. When printing and using with variables they do not require quotation marks 
  
- ""Boolean**

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

` Local variables are those that only avaliable inside a function or our current shell

``` Bash

#These variables are easy to assign

name = "Jason"

```

**Global Variables** 

- Global Variables are avaliable for use no matte which function you are in 

```Bash

#These variables will require us to specify the path and use the Export function

Export Path = /Usr/directory/subdirectory$Path

```

**Array Variables**

- We can assign these variables multiple values, almost like a list. 

```Bash

Array_Variable = (1 5 10 20 30 50)

```

Following **Variable Naming Conventions** are important for ensuring you have clear and concise variables that work

Ensure that your variables are starting with a letter and not a function, number, or special character 
make your variable names short but descriptive. Keep it concise 


**Print** commands are one of the most foundational commands in code

```Bash

# The Echo command allows us to print out text and variables 

Variable = "Hello World"

# If we want to print with a string we can use 

echo "Hello World"

#We can do the same with our variable we assigned 

echo $Variable

These will provide the same output. 
```

There are multiple other commands we can do to **Print** in Bash, 

```r 

#Printf is one way that we can print a line with formatting in bash. 

printf "Todays date is "$(%Y,%M,%D)

'on June 17th, 2026, this would print 

Todays date is 2026, June, 17)'
```

When we use printf we ca call variables into a string or function using the $ Sign. Here is another example 

```r

name = "Elena"

printf "Hello $name!"

#This would print: Hello Elena!
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

The most foreign operator is the modulo operator. This operator will determine the remainder for any number 
when it is divided by another number.

```Bash
#if we were to compute 17%3. We would be left with the number 2. This is because 
the largest factor that the closest value you can achieve with 3 is 15, leaving a remainder of 2. 

```

we can use Operators with **Variables**

```r

age = 18

age next year = age + 1

age last year = age - 1 

```

if we want to use a shorthand for this, we can use **incremental code**

```r

age = 18 

age ++ 

#This will give us our value for age next year 

age -- 

#This will give ous an age value for the year before 

# if we want to know our age value in three years we can use +=

age =+ 3

# We can do the opposite for 3 years ago

age -= 3

```

Our other set of essential operators to know how to use are **Comparison** operators 

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

Conditional Statements rely on using boolean logical to control program flow. 

They will become incredibly useful when cleaning data you are working with as well as ensuring
that programs run properly

our conditional statements run off of an **if** prompt 

```Bash

Age=18 

#Lets run a simple if statement

if [$Age -gt 17]; then
  echo "You are an adult."
fi

#Let's incorporate an else statement, the alternative if our statement is false

if[$Age -gt 17]; then 
  echo "You are an adult.""
else
  echo"You are not an adult."
fi

#Let's get more specific by using elif 

if[$Age -lt 2];then 
  echo "you are a baby!"
elif($Age -lt 5); then
  echo "you are a toddler!"
elif($Age -lt 13); then
  echo "you are a child"
elif($Age -lt 18); then 
  echo "you are a teenager"
else
  echo"you are an adult!"
fi
```

### Loops

Another effective way at controlling our program flow is by using **Loops**

There are two loops we will be focusing on 

**While loops** 

while loops will run a series of code until a condition has been met. When the condition has 
been met the code will end. 


```r

#lets make a code that prints every number from 1-100

var = 1

while [$var -lt 100]; do 
  echo $var
  ((var++))
done

#By adding the increment at the end, we avoid what we call an infinite loop. 

```
if we do not add a condition that will be met or fail to incorporate the proper method 
of ending our loop. We will encounter an infinite loop that can cause our computer to run our program 
indefinitely. This can burn our CPU, take up all our memory, and even destory powerful processing units. 
Be careful to always check for infinite loops in your code.

**Until Loops** are similar to While loops. Except while a while loop runs until a conditoin becomes false. A 
Until loop will run until a condition becomes true

```bash
lets run the same command 

var = 1

until [$var -gt 100]; do 
  echo $var
  ((var++))
done

```

--------------------------------------------------------------------------------

## summary

There are a wide array of functions and tools at your disposal to work with data in bash.
From printing lines, to controlling the flow of programs, these introductory tools can provide you 
with the foundation to automate complex processes and work will files efficiently

### Next Steps

Next, this guide will focus on how to create functions and scripts in bash. 









