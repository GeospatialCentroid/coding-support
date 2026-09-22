---
layout: single
sidebar:
  nav: r_sidebar
title: "Reading Data"
toc: true
toc_sticky: true
---

## Working With Data using R 

R is commonly used for it's ability to work with data, ranging from cleaning
all the way through analysis. This is possible through R's diversity of libraries and tools
to efficiently work with datasets. 

 This guide will focus on 
how to move data into R and the basics on accessing data in a data set 

-------------------------------------------------------------------------------

## Reading Data into R 

In order to work with data in R, we need to first **Read** our data into R. 

This is the process of taking a file that we have in our **File System** or from an **Online URL**, and entering 
a command that allows R to read the file contents and store them in our **Environment**. 

### Commonly Installed Files 

|File Abbreviation| File Name| 
|-----------------------|-----------------|
|CSV|Comma-Separated Values|
|TSV| Tab-Separated Values|
|XLS|Excel Spreadsheet (old)|
|XLSX|Excel Spreadsheet (New)|
|gsheet|Google Sheet File|
|FWF|Fixed-Width File|
|JSON|Java Script Object Notation|

### Base R Data Reading

R provides simple commands that revolve around ```read.``` These are useful for simple file types such as **CSV's**.
that are much more robust through our **Library** 


Reading a CSV file from the file tree

```r

read.csv("enter/your/file/path/here.csv")

```
Reading a CSV from a URL 

```r

read.csv(url(enter your url link here.csv))

```
If we want to broaden our file reading scope, we can do so by **Installing Packages** 

--------------------------------------

### Installing Packages

Installing packages can Widen the Scope of Your Data Reading Capabilities. 

|Package|Readable File Types|
|--------------------|-------|
|tidyVerse     |CSV's, TSV's, Text, XLSX, Google Sheets,Fixed Width Files| 
|readr         |CSV'S, TSV'S, Text, XLSX, Google Sheets, FWF|
|readxl        |XLX,XLSX| 

Installing the **Tidyverse Package** will be suitable for most file reading needs.

--------------------------------------------------------------------------------

## File Reading Procedures 

### Setting up your file directory

To succefully read files in, you will need to make sure that your current working directory is set to your home directory, or the directory you want to work in. 

Doing so will make sure the file is added to this directory / folder. 

```r

> cd ~

#This will take you to the home directory in the console.

> cd "/Enter/Directory/Path/Here"

#This will take you to a specific working directory. 
```

Download the **Desired Files** to Your Computer. 

Make sure that you know where
your storing them in your computer so you can pull them later with ease. 

### Installing your package of choice 

Let's use **Tidyverse** as an example. We first need to install Tidyverse. 

```r
install.packages("tidyverse")
```

We know tidyverse has been installed when we run this command and are given a **Long Series of Code**; 
this is our computer downloading all the packages and programs that tidyverse uses.

Next, we will pull this package from our **Library**.  

```r
library(tidyverse)
```

This will allow us to use **Commands** in the **Tidyverse Package**

### Reading in a file

For Tidyverse, we can read in a multitude of files like so 

```r
read_file(This/is/the/path/to/your/file/file_name.filetype)
```

you will know the file has been successfully downloaded when it **Appears in Your 
Environment** in the top right panel, or no error signs are given. 

## Next Steps

Now that you have the tools to access data from the internet and effectively add it to your RStudio environment, now it is time to learn how to work with that data! 

-------------------------------------------------------------------------------


