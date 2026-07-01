---
layout: single 
sidebar:
  nav: r_sidebar
title: "Using RStudio"
toc: true
toc_sticky: true 
---

While base r provides the tools necessary to analyze complex datasets and perform
most necessary functions. Utilizing R can be far easier through the use of **RStudio.**

This guide goes through the **basics of the RStudio software.** 

--------------------------------------------------------------------------------

## What is RStudio? 

- **RStudio is an Integrated Development Environment (IDE)**. It allows for individuals 
to run various coding languages; predominantly R. 

- **RStudio Provides More Resources Then Base R**. It can also help with **Visualizing the Scripts** that you are writing.

- RStudio provides a **coding environment, global environment, console, and file 
storage location**.

- **RStudio also provides syntax highlighting and debugging assistance** while writing code,
making it especialy suitable for beginner and intermediate coders.

--------------------------------------------------------------------------------

## Downloading RStudio

**You can Download RStudio** for Windows,MacOS, and other softwares using the installer

[Visit The Downloading Site](https://docs.posit.co/ide/user/#rstudio-ide-oss-downloads)

---

## Navigating the RStudio Environment 

There are **Four Sections** of the RStudio IDE that we will cover in this guide 

1. Console

2. Source 

3. Environment 

4. Output


### The Console 


**The Console** is where 1 line code is written to run **single commands**.

The **> Arrow** signifies the line that you will write code on 

```r
> #This is where you will write your commands
```

The **+ Symbol** tells you your command is incomplete 

```r
> print 
+ ("This is where you will need to finish your command")
```

The **Up Arrow and Down Arrow** will allow you to move through previously ran commands 

The console is also home to our **Terminal**. The terminal operates as a **Shell** that allows
us to interact with our computer file system and git. 

We focus more on how to use the terminal in our [Unix](https://geospatialcentroid.github.io/coding-support/unix/), and [Git](https://geospatialcentroid.github.io/coding-support/git/) guides. Check them out! 

The terminal is especially useful when executing commands to **Make new Folders**, **Change Working Directories** and 
**connect with github services**. 

```r

mkdir ("New_Folder")

cd ("path/to/your/desired/folder")

```

--------------------------------------------------------------------------------


### The Environment 




**The Environment**, located at the top right is where all of our **objects** will be stored 

This is where any **Files we Read**, **Variables we Assign**, and **Databases we Work With** will be stored


```r

Stored_String <- "This variable will be stored in our environment"

read_csv("/This/will/store/in/our/environment.csv"")

```

**The Environment Provides us With Information** about the amount of rows, columns, and objects in variables stored within it.

We can also **View and Interact** with these elements in the environment.

If we want to view and access previously ran code, we can do so with the **History Tab**.

--------------------------------------------------------------------------------

### The Code Editor 

The top left window of our IDE is where our **Code Editing Platform is Located**. For some operating 
systems such as Windows and Linux. you may need to press **CTRL+Shift+N** to open this 
window. 

The code editor window is where you will be writing the majority of your code.

The code editor provides multilpe benefits:
  
 - **Code editor will highlight incorrect and incomplete** command syntax and provide comments on what is incorrect
  before you run your code.
  
 - **You can have multiple files open at a time**, allowing you to move between them and interact your
  global environment.

 - **You can create foldable code chunks** with some file types, allowing you to run specific blocks of code and keep your script clean and organized.
  
### Outputs 

The **Output Window** is located at the bottom right of our IDE, it
contains tools to navigate your system directory and manage your coding outputs:

 - **The Files Folder Houses Your System Directory**  You can create and manage new files,
   and navigate through your file tree.
  
 - **View Graphs and Other Plots That you Have ran in Your Script**. You can export these as
   as images. 

 - **Access a List of Installed r Packages That you can add to Your Code**, giving you access to new 
   commands that will help you meet your goals. 
  
 - **Search up Commands and Functions**, where it will provide you with examples of how to use
   them and what every part of the command is. 
  

## Next Steps 

RStudio offers an interactive environment that allows you to view the products of your code while your making scripts. Next, we will look at how we can use R/RStudio to read in 
and work with data. 

  

  


