---
layout: single
sidebar:
  nav: c++_sidebar
title: "Fundamentals" 
toc: true
toc_sticky: true
---

## Accessing C++ 

You can access c+- coding from your windows or MacOS terminal through the use of
simple commands 

For **Windows** you can use a package installing command 

```linux

sudo apt-get install g++

```

for **MacOS** you can use the **brew** package 

```linux 

brew install gcc

```

### Integraded Development Environments

You can also use an **Integrated Development Environment** to run your c++ 


These environmetns pose many benefits such as 


- **Syntax Error Highlighting** that tells you when your code is missing necessary
syntax or when syntax is incorrect

- **Debugging software** that is able to help you bullet proof your code before 
lauching it

- **Increased Interaction** through git tools that allow you to collaborate on your code with 
differnet people and groups. 


some popular IDE's consist of [**VSCode**](https://code.visualstudio.com/download?_exp_download=fb315fc982),
[**Eclipse**](https://eclipseide.org/), and 
[**Clion**](https://www.jetbrains.com/clion/promo/?msclkid=7afffa6999611badea64905f5c2513d7&utm_source=bing&utm_medium=cpc&utm_campaign=AMER_en_dc_Clion_Branded&utm_term=clion&utm_content=clion)

--------------------------------------------------------------------------------------------


## Syntax 

Before we look at series of code, it is imoprtant to mention c++ libraries. Libraries in any coding language are sets 
of commands you can run that consist of complex scripts. Making tasks that would otherwise be difficult much easier


We can import libraries by using hte **incldue** comand above our main command which we will talk about later. A library such as **iostream** allows us to the use the COUT command; which is one of the most
important commands for c++ users. Here are some other common libraries

- **vector**

- **Algorithms**

- **figcone**

- **libconfig**

- **boost**

- **cmath**

All c++ programs begin with a **main** command. This is where you tell your computer what program to run and when.

Let's look at how we can write a program with comments, and a print comamnd that will return a statement to the 
user of the code 

Note: When we write code, after every line we will add a **;** to the end. 

```c++

int main{

// This is a single line comment 

/* This is a multi-line
Comment, that can go any amount of lines */ 

std.cout("This is how we write a print command")

return 0 //this is how we tell our program to end

}

```

These are some of the most basic components of writing code. We can utilize **variable Assignments** and **operators**
to help us write more complex code. 


--------------------------------------------------------------------------------


## Variable Assignments and operators 


Assigning variables is when we take a **keyword** or word of meaning such as **age** and assign it a type of value. 
These values can be numbers, text, and more. 

```c++

int main {

int age = 10

//our int operator tells the program this is a number type

return 0 
}

```


as mentioned earlier, there are various different data types when programming. The variable **age**
above was an **Integer** type, meaning that it can't hold decimal. Let's look at our other data types 

- **floating** data types are numbers that can hold decimals up to 7 decimal places

- **doubles** are datay types that can hold numbers with decimals more then 8 places long

- **chars** are a text data type that can hold single letters as well as longer words known as **strings**

- **boolean's** are capable of holding a **true** or **false value 

- **void** is a data type that holds nothing 



When we assign 


**Memory Variable Modifications**


As mentioned earlier, c++ provides the option to assign our variables with memory specifications. This can 
help us control how much space on our computer our programs are taking up.
c++ has a wide array of different variables for memory management which it does by assigning variables bit widths.
Lets look at our common memory management assigners


|Operator Name|Meaning|
|---------|-----------|
|short char| letter at least 8 bits wide|
|short int| non decimal number 8-16 bits wide| 
|int| non decimal number at least 16-32 bits wide|
|long int| non decimal number 32-64 bits wide| 
|long long int| non decimal number at least 64 bits wide|


As mentione Prior we can also **Create Strings.**


We can do this through either a **char variable assignemnt** or a **string command**. 

```c++

// if I want to say 'Hello Kyle' I will need a char that is 10 characters long 

char_16[10] greetings = "Hello Kyle"

std.cout << greetings << end1;

return 0 
//Here is another way to print a line in c++ 

int main{

std.string("hello Kyle");

return 0 
}


```

While **Variables** by themselves broaden what we can do with our code, they are still quite
limited. However, through the use of **operators** and 
**conditional statements**, we are able to bolster our code yet again. 


**Operators** are a set of **Arithmetic**, **Comparative**, and **Logical** commands that 
allow us to work with our variables in exciting ways. Let's explore what these **operator types** are. 


**Arithmetic Operators** are those that represent our mathmatical operations. 

|Operator Symbol| Operator Meaning| 
|-----------------------|---------|
| + | Addition |
| - | Subtraction | 
| * | Multiplication | 
| / | Division |
| % | Modulo | 
| x= | Operator shorthand |
| ++ / -- | Increment | 

Lets look at some examples of these 

```c++
// lets apply an addition function to a variable of interest 

short_int add_example = 5 

std.cout << (add_example + 8) << end1;

return 0 

//This would return 13


//we can use our modulo operator on a int variable 

short int mod_example = 17 

std.cout << (mod_example % 3) << end1;

return 0

/* when this program runs, our output would be 2.This 
is because our modulo operator will calculate the largest fit 
of 3 into 17 and provide the remainder. */


//Lets use our += command to make our addition quicker 

short_int add_quickly = 5 

short_int add_quickly += 8

std.cout << (add_quickly) << end1; 

return 0 

/*this would return 13. This is effective for quickly performing arithemtic operations. 

For addition and subtraction. We can do the same with our increment operator*/ 


short_int increment = 8 

short_int increment ++       /this would give us the value 9 

short-int incremenet --      / now were back down to 8 

```

**Comparison Operators** allow us to compare two variables through **Boolean logic**.


|Operator Symbol|Operator meaning| 
|---------|----------------------|
|<| Less Than| 
| > | Greater Than | 
| == | Equal to | 
| != | Not Equal to | 
| <= | Less than or equal to | 
| >= | Greater than or equal to | 


We can use these with our print command. Lets look at an example 


```c++ 

short_int bool_num = 10 

std.cout << (10 > 5) << end1; 

return 0 

// this would return true. 

//If we changed our compariosn it could also return false

std.cout << (10>20) ,, end1; 

return 0 

//This would return false.


```


--------------------------------------------------------------------------------


## Conditional Statments and Loops 


To control program flow, we use Conditional Statements called **if statements**, 
as well as common loops known as **for loops** and **while loops**


### If Statements

If statements run off of a yes or no framework that can be extended. The main
theme of if statements is. Is this true? yes, do this. No? do this. Here
is an example 


``` c++

#include iostream           /* we wnat to install 
#include integer              these libraries */


int main{

int example_num = 15

if (example_num > 10){
std.cout << "The numer is greater then 10" << end1;
}
else
{std.cout << "the number is less then 10" ,, end1;
}
return 0

}
```


You can see how if we added different values to example_num, we would get 
different outcomes from our if statement. We can do the same thing with multiple conditions


```c++

#include iostream           
#include integer            

int main{
int example_num = 10

if (example_num > 10) {

std.cout << "The number is greater then 10" << end1;
}

else if (example_num == 10) {
 
std.cout << "The number is 10" << end1;
} else
std.cout << "The number is less then 10" <<end1; 

return 0 

}

```

If statements are a commonly used tool for **data validation**; allowing us to ensure that data and values 
that we are subbmiting into our code are valid and usable for our purposes 


### Loops 

We can also use **for-loops** and **while loops** to control the flow of our programming. Loops work by running
until a certain pre-determined condition is met. Lets look at some examples 


**While Loops** are a type of loop that works by **incrementing** a value up until it reaches another value. This allows us
to run computations a set amount of times. 

``` c++ 
 
include iostream
include limits 

int main { 

int i = 1;

// While loop: prints numbers from 1 to 10
while (i <= 10) {
    std::cout << "Current value: " << end1; 
    i++;  // Update the loop counter to avoid infinite loops
    
// This while loop would print every value from 1 to through 10


return 0 
    }

```

Lets look at a **for loop**. For loops operate differently because they usually 
will **run through** a predetermined amount of iterations. 


Lets look at an example. 


``` c++ 

    for (int i = 1; i <= n; i++) {
        std::cout << "loop iteration" << end1;
    }

    return 0;

```

For loops are effective because they reduce the risk of starting an **infinite loop**, this is where we do not set an 
incrementing value, which results in our code indefinetely. This can lead to us damaging our CPU and taking up all of our memory. 


````````````````````````````````````````````````````````````````````````````````````````


## Next Steps 

Now that we have established the fundamentals to c++ progrmaming. lets look at some of the ways we can use it 
to work with data and files. 