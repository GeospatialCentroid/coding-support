---
layout: single
sidebar:
  nav: matlab_sidebar
title: "Fundamentals" 
toc: true
toc_sticky: true
---

## Access Matlab

Due to matlabs paywall, it can only be accessed by those who have an institution or 
organization key. 

If you don't you will need to pay for it's services

For those who have access to Matlab, you can follow the downloading procedures 
[here](https://www.mathworks.com/help/install/
ug/install-products-with-internet-connection.html)


----------------------------------------------

## Syntax 

Matlab uses a ```;``` line syntax. This means that if you are working with programs that
use multiple lines of code. Then after each line you will enter the symbol. 

We can also use comments in our code with  the ```%``` key.

```m

% this line of code wont run 

disp("This line of code will run")


```

as shown earlier, if we want to run a line of code that displays something from our 
terminal, we can use the **disp** command. 


Lets look at some of the introductory Matlab commmands.

|Command Name | Function |
|---------|--------------|
| disp | Displays text or variables within parenthesis | 
| diary | allows you to create a file with lines of code within |
|fprintf| prints strings with variables inside of them|

Lets print a string that has a integer variable inside of it.

```m

first, lets assign our variable 

x = 10 

now, lets use the fprintf command 

fprintf('the number ten in nuemric format is %d', x)

% The symbol %d is where our x variable will move to once it is returned. %d symbolizes integer. 

```
-------------------------------------------------------------------------------

## Data Types & Assigning Variables  

There are several different types of data that we can assign to a **Variable** in Matlab


|Data Type| Supported Values | 
|----|-----------------------|
|Char| Supports individual characters | 
|string| Supports series of characters and words |
|Integers | Supports Signed and Unsigned non decimal numbers |
|Single Floating Point | Supports numbers with decimals up to seven points | 
|Double Floating Point | Supports numbers with decimals greater then 8 points | 
|Date | Supports calendar date values | 
|Time| Suppots numeric time values | 
|Arrays | Series of 1 dimensional numbers in a comma seperated series | 


Numeric data types are able to support **Signed** and **Unsigned** numbers

- **Signed** numbers are those that are all positive or negative
- **Unsigned** numbers are those that cannot be negative

Matlabs different text and numeric data types allow us to **Manage the Memory** of our programs. 

When we run code, the code we run **Takes up Memory** in our computer space.

Having options for our text and numbers that take up less memory help us lower the **Required  Bytes of Data** will help conserve memory on our computer when we run complex series of code.

We can also **Change the Data Type** of a variable through this process. 

```m

% First, lets assign a variable a value 

charac = 'a' % make sure your variable assignments consist of letters and do not have numbers or commands in them 

% Now, lets change our variable type to a string from the inferred character type 

strin = cast(charac, 'string'). We now have a string with 1 letter. 

```

One benefit of using matlab is that it automatically assigns variables a data type. Where with most other languages this must be specified.

We can also leave variables unassigned. This is because of the  **ans** variable, which acts as a **Placeholder** for unassigned values. 

Here is an example of using the ans command. 


```m

5 + 8 

% Because we did not assign a variable name to this command, ans is now equal to the sum of 

5 and 8 

ans + 9 

```

Because ans is the sum of 5 and 8, this will return 22. 


--------------------------------------------------------------------------------

## Operators and Statements


In matlab and other coding languages, we can use a combination of **Arithmetic** and **Comparative**
operators to control program flow and program quality with the help of **Logical** and **Conditional** Statements. 



### Operators 

The two types of operators that we will be focusing on are our **Arithmetic** and **Comparative** Operators 

|Arithmetic|            
|----|-----|            
| + | Addition |      
| - | Subtraction | 
| * | Multiplication | 
| / | Division | 
| % | Modulo |


|Comparative|
|-----|-----|
| < | Less Than | 
| > | Greater Than |
| == | Equal to | 
| <= | Less Than or Equal to |
| >= | Greater Than or Equal to | 
| ~= | Not Equal to


Lets look at some examples of how we can use these. 


Here is an example of us using the modulo operator 


```m

modu = (17 % 3) 

% when we run this operator. It will return the remainder of 17/3 which is 2

disp(modu)
 

```

We can do the same for our multiplication operator 


```m

8*8

% by not assigning a variale, we will assign the product to ans 

disp(ans)

this will return 64

```

Lets look at how we can use comparative operators in accordance with our arithmetic operators

```m

% Lets assign a variable the sum of 2 other variables

A = 8
B = 7

combined = A + B 

```

Now lets us our comparative operators to make a yes or no condition. 

```m

bool = combined > 20 

```

If we were to display bool our function would return **false**, as our summed value is less then 20. It would return **true** if we had a value greater than 20. 



-------------------------------------------------------

## Conditional Statments

We will be looking at **If statements** and **Switch statments** here. 

If Statements and Switch statements allow us to control our programs flow depending on if certain predefined conditions are met. 


Here is a simple example of a if statement in action 

```matlab

condition = 10 

if condition < 0 
  fprintf ("This is a negative number");
else
  fprintf ("This is a positive number");
end

```

If this alone is not specific enough. We can use the **elseif** statement to add conditionals to narrow our responses scope. 

```m
if condition < 0 
  fprintf("this is a negative number");
elseif condition < 10 
  fprintf("This is a positive number less then 10");
else
  fprintf("This is a positive number greater then 10")
```

This gives us more specific responses. However, it can be tedious to write. We 
can simplify this code using our **Swtich command** 

Switch commands offer us a **Quicker Syntax** for writing conditionals wilth  multiple statements. 

```matlab

num = 2 

switch num    %  This is where we specificy what variable we are looking at 
  Case 1
    fprintf("num is equal to 1");
  Case 2
    fprintf("num is equal to 2");
  Case 3
    fprintf("num is equal to 3");
  Otherwise
    fprintf("This nubmer is greater than 3")
end 

```

-----------------------------------------------------

## Next Steps 

Now that we have established some basic fundamentals of matlab. We will now briefly  go over 
how to read in data, and how to visualize data in matlab. 



