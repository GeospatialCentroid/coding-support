---
layout: single 
sidebar:
  nav: r_sidebar
title: "Using RStudio"
toc: true
toc_sticky: true 
---

While base R provides the tools necessary to analyze complex datasets and perform
most necessary functions. Utilizing R can be far easier through the use of **RStudio.**

This guide goes through the basics of the RStudio software. 

--------------------------------------------------------------------------------

## What is RStudio? 

- **RStudio is an Integrated Development Environment (IDE)**. It allows for individuals 
to run various coding languages; predominantly R. 

- **RStudio Provides More Resources Than Base R**. Syntax Highlighting, Debugging Assistance, and Script Visualization are all offered in an IDE.



--------------------------------------------------------------------------------

## Downloading RStudio

You can Download RStudio for **Windows**, **MacOS**, and **Other Softwares** using the installer

[Visit The Downloading Site](https://docs.posit.co/ide/user/#rstudio-ide-oss-downloads)

---

## Navigating the RStudio Environment 

There are **Four Sections** of the RStudio IDE that we will cover in this guide 

1. [Source Pane](#the-source-pane)
1. [Console](#the-console)
1. [Environment](#the-environment)
1. [Output](#outputs)

## The Source Pane

!["RStudio Source Pane"]({{site.baseurl}}/r/images/Code_Editor.png?raw=true)

The **Source Pane** (top left) is where you write and edit scripts. This is where most of your work will happen when developing reproducible code.

Key features of the Source Pane:

- **Write and save scripts** instead of running one-off commands  
- **Run code line-by-line or in chunks** using `Ctrl + Enter` (Windows) or `Cmd + Enter` (Mac)  
- **Syntax highlighting** helps identify errors before running code  
- **Code completion and suggestions** speed up development  
- **Multiple tabs** allow you to work across several files at once  
- **Foldable code sections** help organize longer scripts  

Example:

```r
# This code is written in the Source Pane
x <- 10
y <- 5
x + y
```

### The Console 

!["RStudio Console"]({{site.baseur}}/r/images/Console.png?raw=true)

**The Console** is where 1 line code is written to run **single commands**.

The ```>``` arrow signifies the line that you will write code on 

```r
> This is where you will write your commands
```

The ```+``` symbol tells you your command is incomplete 

```r
> print 
+ ("This is where you will need to finish your command")
```

The **Up** & **Down** arrows will allow you to move through previously ran commands 

The console is also home to our **Terminal**. The terminal operates as a **Shell** that allows
us to interact with our computers **File System** and **git**. 

We focus more on how to use the terminal in our [Unix]({{site.baseur}}/coding-support/unix/), and [Git]({{site.baseur}}/coding-support/git/) guides. Check them out! 

The terminal is especially useful when executing commands to **Make new Folders**, **Change Working Directories** and 
**Connect With Github Services**. 

```r

mkdir ("New_Folder")

cd ("path/to/your/desired/folder")

```

--------------------------------------------------------------------------------


### The Environment 


!["RStudio Environment"]({{site.baseur}}/r/images/environment.png?raw=true)


**The Environment**, located at the top right is where all of our **objects** will be stored.

This is where any **Files**, **Variables**, and **Databases** we are using will be stored.


```r

Stored_String <- "This variable will be stored in our environment"

read_csv("/This/will/store/in/our/environment.csv")

```

The environment provides us with information about the amount of **Rows**, **Columns**, and **Objects** in our environments items. 

We can also **View and Interact** with these elements in the environment.

If we want to view and access previously ran code, we can do so with the **History Tab**.

--------------------------------------------------------------------------------

### Outputs 
!["RStudio Output"]({{site.baseur}}/r/images/Output.png?raw=true)


The **Output Window** is located at the bottom right of our IDE, it
contains tools to navigate your **Systems Directory** and manage your coding outputs:

 - **The Files Folder Houses Your System Directory**  You can create and manage new files,
   and navigate through your file tree.
  
 - **View Graphs and Other Plots** That you have run in your script. You can export these as images. 

 - **Access a List of Installed r Packages** that you can add to your code, giving you access to new 
   commands that will help you meet your goals. 
  
 - **Search Commands and Functions**, where it will provide you with examples and explainations on how to usethem. 
  

## Next Steps 

RStudio offers an interactive environment that allows you to view the products of your code while you're making scripts. Next, we will look at how we can use R/RStudio to read in 
and work with data. 

  

  


