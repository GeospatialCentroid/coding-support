---
layout: single
sidebar:
  nav: bash_sidebar
title: Writing Functions and Scripts
toc: true
toc_sticky: true
---

Knowing how to use bash functions are the first step in creating effective and efficient scripts. 

## Creating Functions

**Functions** allow you to input your own values and run them through a series of code. 

Using functions relies on using a () amd {} keys. 

```bash

#to create our function, we will give it a name and then use the () keys 

function_name()

#next, we will insert our comands within the {}. These commads can be anythnig we have learned 
about: if statements, echo commands, etc. 

function_name(){

echo "this is our first function";
return 0
} output.txt 

```
**output.txt** is a file location that our function will save to. When we run our function, the 
products of it will get saved to here. This is benfeicial for script organization. 

The efficiency of our function comes from having variables we can assign within it 

```bash

Lets create a multiplication function 

multiply(){
values=$(($1 * $2))
echo "The product is $values "
return 0 
} output.txt 

multiply "50" "4"

#The output will not show in the terminal, however it would show up in an output.txt file 

```
In the function above. We set our values variable to be equal to an equation **$1 and $2**. This will allow us to assign these variables when we call our function later.

We called our function by using the function name and then providing 2 values for our functions varaibles to equal 

In this situation

- $1 = 50 
- $2 = 4

Functions may seem trivial now. However, when working with datasets where processes need to be automated, functions can allow you to automatically enter hundreds of values into a variable to run through a function, and then provide a file of outputs!

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Writing a Bash Script


This guide will focus on introducing you to the basics in 
creating and writing scripts in Bash. These can be very beneficial in combining the power
of functions to automate long processes. 

Scripts are also benefical as they can be ran across different computers, allowing you to take scripts from others and share scripts. 

Some content in this guide is also mentioned in our unix fundamentals guide. If you would like to learn more, check it out!


**Terminology**

**touch**

- This command allows you to create a new file 

**shebang**

- This is marked with an !, and is an important part in enablging our script to run 

**/bin/bash**

- This is the path to our bash interpreter which we will allow us to run our script.


Lets create a **Script** that allows us to print **Hello** and a name a user can enter!

### **Step 1**

Our first step is to create a file to store our script in. 

```bash

touch hello_script.sh 

'This is the file that we will be writing our script in.' 

``` 

### **Step 2**

Next we will want to write out our **Shebang** and **File Path** within our script to enable script properties.

```bash

!/bin/bash

#This will be located at the top of our script. 

```

### **Step 3**

Now that we have set up our file properly, we can begin writing our commands. 

Let's work on creating our script that will take in names and greet them! 

```bash

!/bin/bash

'First, we want to assign our function name.'
'We then want to enter our commands' 


greet(){
read -p "What is your name?" name 
echo "Hello $(name)!"
}

```

## Step 4

Now that we have created our script, we can use it in the bash terminal.

```bash

'to run our script we can use a ./ command'

./hello_script.sh

'this essentially is moving us to our script directory. Calling this script should 
result in us being prompted by our read command' 

"what is your name?" Andrew



Hello Andrew

'Here is our response' 

```

## Next Steps 

It's important to expand on what you have learned to grow comfortable coding in 
bash. You can access our CSU offered coding resources as well as our open access
resources to learn more. We offer resources surrounding more bash fundamentals, writing efficient scripts, and 
more! 










```


