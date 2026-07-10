---
layout: single
sidebar:
  nav: c++_sidebar
title: "C++ Fundamentals" 
toc: true
toc_sticky: true
---

## Accessing C++ 

You can access C++ coding from your windows or MacOS terminal through the use of
simple commands 

For **Windows** you can use a package installing command 

```bash

sudo apt-get install g++

```

for **MacOS** you can use the **brew** package 

```bash

brew install gcc

```

### Integrated Development Environment.

You can also use an **Integrated Development Environment** to write scripts in C++. 


These environments pose many benefits such as:


- **Syntax Error Highlighting** that tells you when your code is missing necessary
syntax or when syntax is incorrect.

- **Debugging software** that is able to help you bullet proof your code before 
lauching it.

- **Increased Interaction** through git tools that allow you to collaborate on your code with others.


some popular IDE's consist of [**VSCode**](https://code.visualstudio.com/download?_exp_download=fb315fc982),
[**Eclipse**](https://eclipseide.org/), and 
[**Clion**](https://www.jetbrains.com/clion/promo/?msclkid=7afffa6999611badea64905f5c2513d7&utm_source=bing&utm_medium=cpc&utm_campaign=AMER_en_dc_Clion_Branded&utm_term=clion&utm_content=clion)

--------------------------------------------------------------------------------------------


## Fundamentals

### LIbraries 

Before we look at series of code, lets talk about **Libraries**. 

Libraries are **Sets of Commands** you can run that consist of complex scripts. Libraries make tasks that would otherwise be difficult much easier


In C++, we use **include** command above our main command to incorporate libraries. 

We will talk about what the main command is as well as some popular libaries such as such as **iostream** library later.

 Here are some other beneficial libraries that are commonly used in C++ code. 

- **Vector**

- **Algorithms**

- **Figcone**

- **Libconfig**

- **Boost**

- **Cmath**


### Syntax

We can write commands in c++ using ```//``` and   ```/*```

```c++ 

// This is  a single line comment

/* This is a 
Multi line 
Comment */ 

```


All c++ programs begin with a **main** command. This is where you tell your computer what program to run and when.

When we run commmands in C++, they will always have a **Beginning**, **Middle**, and **End**.


Let's look at how we can write a program with comments, and a print comamnd that will return a statement to the user of the code.

Our **Beginning** will consist of us creating our main command and specifiying our libraries we would like to use. 

```c++
include iostream

int main {

 //We will need to close our bracket at the end. 

```

Here, we tell our computer what libraries we would like to use in this main command. 

Our **Middle** component will conssit of the commands that we wouuld like to run. 

```c++

std.cout("This is how we write a print command");

```

Finally, we will conclude our code with an **Ending** that tells our computer the program is finished. 

```c++

return 0
}
// This is where we can add our closing bracket from earlier 
```

This is how our command will look in full!  

```c++

int main{


std.cout("This is how we write a print command")

return 0 //this is how we tell our program to end

}

```

Note: When we write multi-line code. We will add a ```;``` character after every line. 

These are some of the most basic components of writing code. If we want to write more complex code that performs a function. We can utilize **Variable Assignments** and **Operators**. 


--------------------------------------------------------------------------------


## Variable Assignments  


Assigning variables is when we take a **Keyword** or word of meaning such as **Age** and assign it a type of value. 

These values can be numbers, text, and various different data types.

```c++

int main {

int age = 10

//our int operator tells the program this is a number type

return 0 
}

```


as mentioned earlier, there are various different data types when programming. In the case above, The variable **age** was type**Integer**. This means that it can't hold decimal values. Let's look at our other most common data types 

- **Floating** data types are numbers that can hold decimals up to 7 decimal places

- **Doubles** are datay types that can hold numbers with decimals more then 8 places long

- **Chars** are a text data type that can hold single letters as well as longer words known as **Strings**

- **Boolean's** are capable of holding a **true** or **false value 

- **Void** is a data type that holds nothing 





### Memory Allocation 

We can make our data types more specific by allocating **Memory** to specific variables. 

This will help us control how much space on our computer our programs are taking up.


Lets look at our most common memory variables. 


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

char_16[10] greetings = "Hello Kyle" // the [10] tells our system this variable is 10 characters long. 

std.cout << greetings << end1;

return 0 
//Here is another way to print a line in c++ 

int main{

std.string("Hello Kyle");

return 0 
}


```

While **Variables** by themselves can broaden what we can do with our code, they are still quite
limited. However, through the use of **operators** and 
**conditional statements**, we are able to bolster our code yet again. 


### Operators 


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

```



Let's use an example where we use the modulo variable on a integer.

```c++

short_int mod_example = 17

std.cout << (mod_example % 3) << end1;

return 0

```

When this program runs, our output would be 2. This 
is because our modulo operator will calculate the largest fit 
of 3 into 17 and provide the remainder. 


Lets use our += command to make our addition quicker 

```c++

short_int add_quickly = 5 

short_int add_quickly += 8

std.cout << (add_quickly) << end1; 

return 0 

```

This would return 13. This is effective for quickly performing arithemtic operations. 

For addition and subtraction. We can use **Incrementing** to make 1 value addition much quicker. 


```c++

short_int increment = 8 

short_int increment ++     //this would give us the value 9 

short_int incremenet --    // now were back down to 8 

```

**Comparison Operators** are operators that allow us to compare two values. 


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

```

Because 10 is greater then 5, This will return the word **true**

Let's look at an example where our comparison will return false. 

```c++
std.cout << (10 > 20) ,, end1; 

return 0 

```

We will use a combination of our **Arithmetic Operators** and our **Comparison Operators** to work with **Conditional Statements** and **Loops** to control program flow. 


--------------------------------------------------------------------------------


## Conditional Statments and Loops 


To control program flow, we use Conditional Statements called **if statements**, 
as well as common loops known as **for loops** and **while loops**


### If Statements

**If Statements** are a type of conditional statement that run off of a yes or no framework. 

The core premise of if statements is. Is this **true?** if it is, do this. **false?** do this instead. 

Here is an example. 


``` c++

#include iostream           // we want to install these libraries// 
#include integer            


int main{

int example_num = 15

if (example_num > 10){
std.cout << "The Number is Greater Then 10" << end1;
}
else
{std.cout << "The Number is Less Then 10" << end1;
}
return 0

}
```

In this exmaple, our program would return "The Number is Greater Then 10".


You can see how if we added different values to example_num, we would get 
different outcomes from our if statement.


If our conditional statement requires **More Than** 2 options. We will accomodate this with the **Else if**  function.


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

**If Statements** are a commonly used tool for **Data Validation**; allowing us to ensure that data that we are reading into our code exists, and is usable for our purposes 


### Loops 

We can also use **For-Loops** and **While-Loops** to control the flow of our programming. 

Loops work by running
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
  
  return 0 
    }
  
```
// This while loop would print every value from 1 to through 10. That is unless we have
created an **infinite loop**. 

An infinite loops is where we have not added a command that allows our condition to be met. 

If our condition cannot be met, our program cannot stop. This threatens to fry our CPU 
and take up all of our computers memory. Don't make infinite loops!


Lets look at a **For-Loop**. For loops operate differently because they usually 
will **Run Through** a predetermined amount of iterations. They can also work better when we 
have varying ending condtions, as they don't require us to know the value that we want to end at. 


Lets look at an example. 


``` c++ 

    for (int i = 1; i <= n; i++) {
        std::cout << "loop iteration" << end1;
    }

    return 0;

```


n can be any value. It can be the length of a dataset, or it can be a predetermined amount. 

For loops are also effective because they reduce the risk of **Infinite Loops**

````````````````````````````````````````````````````````````````````````````````````````


## Next Steps 

Now that we have established the fundamentals to c++ progrmaming. lets look at some of the ways we can use it 
to work with data and files. 