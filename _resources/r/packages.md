---
layout: single
sidebar:
  nav: r_sidebar
title: "Packages"
toc: true
toc_sticky: true
---


## Introduction 

In this section, we will go over **Packages**. Every coding language has their own libraries that consist of various scripts and functions that can make complex and somtimes impossible coding tasks possible and easier. For the r language, these are in the form of packages. 

## What are Packages 

Packages are a suite of scripts and functions that are all bundled into one folder. Packages allow you to run **Commands** that are not avaliabe to you in base r. An example is using the **dplyr** function to filter data for a column versus using base r 

**Base R** 

```bash

#Filtering dataset data for values in a column named col named example

data_filtered <- data[data$col == "example"]
```

**dplyr package**

```bash

data %>% filter( col == "example")

```

While in this case, the example may not be vastly different. In some cases such as trying to plot using ggplot or conducting analysis, using r packages is incredibly useful and can make your work far quicker and simpler. 

## Common Packages and Libraries

There are a suite of commonly used packages in RStudio, where it can be more common to use the package then not! 

|-------|---------|
|Package Name| Best Purpose|
|dplyr | data acquisition and cleaning | 
| ggplot2 | Creating informative graphics | 
| tibble | Creating professional grade tables
| rmarkdown | rendering r files as various visual files such as HTML, MS Word, and PDF | 
| ggthemes | creating themes for ggplot made visualizations | 
| rstatix | lets you compute statistical tests | 
| broom | lets you turn statistical objects into tibbles | 
| readr | let's you read more file types into your environment| 

all of these packages provide a huge variety of functions that you can use. While this may seem overwhelming. packages also come with indepth documentation of functions within said package. All of this can be found with the  ```?``` command. 

```bash
?dplyr
```
This would provide documentation of the functions and purpose of dplyr. For help using a function within dplyr specifically, the ```help``` command can be used 

```bash
help(filter)
```
In some cases, packages can be nested within larger packages. Packages such as **tidyverse** allow you to download useful packages like **dplyr**, **ggplot**, and **tibble** all at once. 

## Using Packages 

Using packages is a simple process, only requiring 2 steps. 

### Installing Packages 

first, you need to install the package of interest. This can be done with this ```install.packages``` command. This will install said package onto your computer, allowing it to be called into any document

```bash
install.packages("package_name")
```
one thing to note is that your package name must be in string format! 

### Calling Packages 

calling packages is just as simple and only requires one command, this is the component you need to actually use package functions in your current script / document. 

```bash
library(package_name)
```
Unlike in our install.packages command, this is not a string and should instead be a variable. 

### Package Running Script

If you are interested in using a **Script**, you can do so by saving a .R document to your working directory, then simply use the ```source``` command as outlined in the fundamentals section to call it. 

```bash
# let's pretend this .R file is called download
packageLoad <- function(x){
for (i in 1:length(x)){
    if (!x[i] %in% installed.packages()){
        install.packages(x[i])
       }
library(x[i], characters.only = TRUE)
      }
   }  

# To call it, we would use this command 

source(download.R)
```
This function first checks to see if a package inside a list of packages you have made is installed. If not, it installs it. If it is, the function then reads the package in from your library. This can be beneficial for when you have a long list of packages you wnat to use for a project and want to save time. 


## Creating a Package

In the fundamentals section, we briefly went over writing **Scripts**. Scripts are similar to packages, as a package is essentially a large compilation of scripts and functions. There are some requirements and simple steps to follow before you can start writing scripts! 


### Software Requirements 
There is a short list of requirmenets you will need to build packages in RStudio

- GNU software development tools such as a C/C++ Compiler 
- LaTeX for building R manuals and vignettes 
- Four R packages (devtools, roxygen2, tsetthat, knitr)

>NOTE: to download multiple packages at once. you can use c("package","package_2","package_3") within your install.packages() command. 


### Creating your Package 
There are two methods for creating a package in RStudio. One is a **Terminal / Console** based method, the other is through RStudios **Graphical User Interface (GUI)**


#### Using the Graphical user Interface

Creating a package in the R GUI will require you to first use the **Create Project** command that is avaliable on the **Projects** menu. After doing this, you can either create a new subdirectory, or create your package in an existing subdirectory. You should only create a package in an existing subdirectory if you want to modify an existing package. If you are creating a package from scratch you should create a new directory. 

Finally, you will specicy your project type to be **Package** and give it a name. And just like that, you have your first R Package! 

#### Using the Command Line 

RStudio offers a **Console** that allows you to create directories and projects with just one line of code.

```bash
usethis::create_package()
```
## Adding Content to Your Package 

Now that we have created our package, we will go over how you can add scripts and functions to your package. 

### Contents of Your Package

When you create your RStudio package, there will be multiple files that you will use. 

|------|-------|
|File Name | Purpose| 
|DESCRIPTION | Add metadata and helpful documentation for your package | 
|R|Where to add scripts and functions| 
|man| Add specific use examples for your functions and scripts | 

### Process of Adding Package Information 

The general process for adding package content is as follows 

- Add the purpose of your package to the DESCRIPTION column 
- Create a new RScript with the function that you want to add to your package, and add this to your R folder. 
- Add a new rd document to your man folder that matches your rscript to describe what your function does and how to use it.
- Test your code to ensure that it works, debug, and build! (We will get into building next).

## Build Your Package 

Once you have completed your package, it's time to **Build**! 

In the Environment window, there will be a Build option. Here, you can use multiple commands to ensure your package is ready for sharing! 

|----|-----|
|Command|Purpose| 
|Clean and Install|Makes sure that your package is in a clean environment and is properly loaded | 
|Test|runs tets for current package|
|Check|tests package code and checks for documentation problems| 
|Build Source Package| Builds a source package|
|Build Binary Package| Builds a binary package| 
|Configure Build Tools | Configures Project Options for Build Tools to make more modifications| 

And with that, you have built your first R Package! There are lots of steps before your package can be published, such as rigorous testing, cleaning, and publication. For more information on building an indepth R Package, check out this [book](https://r-pkgs.org/data.html).

## Next Steps.

Now that we have looked at package building, let's look at some of the ways that you can work with data to build upon your script writing experience! 