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

## File reading Procedures 

Before we can read a file into our environment, we will need to have a decent understanding of our file directories setup. 

### Setting up your file directory

To succefully read files in, you will need to make sure that your current working directory is set to your home directory, or the directory you want to work in. 

Doing so will make sure the file is added to this directory / folder. 

```r

> cd ~

#This will take you to the home directory in the console.

> cd "/Enter/Directory/Path/Here"

#This will take you to a specific working directory. 
```

### Finding Your Files of Choice. 

When reading files in, you can either use files in your **Local Computer**, or you can take files from **the Internet**. 

The most important thing is to have the correct path whether you are using an online source, or if yoou are using information from the internet. You wil also need to have the right file installation command at your disposal. To do so, it is benefical to have an understanding of what packages you will need to install different files from different locations. 

### Base R Data Reading

Your first option is to use **Base R** commands to read files. Reading files with base R will most likely consist of using some variation of the ```read``` command.

The read command is good for simple file types such as **CSV's**. Another good thing is that the read command can read files from **Our Computer** as well as from **the Internet**. 


Reading a CSV file from the file tree

```r

read.csv("enter/your/file/path/here.csv")

```
Reading a CSV from a URL 

```r

read.csv(url("enter your url link here.csv"))

```
While this will work fine for most common instances, you may find yourself needing more options when dealing with complex data and special cases. 

This is when our packages we looked at earlier can come in handy!

--------------------------------------

### Installing Packages

Installing packages can widen the scope of your data reading capabilities. 

|Package|Readable File Types|
|--------------------|-------|
|tidyVerse     |CSV's, TSV's, Text, XLSX, Google Sheets,Fixed Width Files| 
|readr         |CSV'S, TSV'S, Text, XLSX, Google Sheets, FWF|
|readxl        |XLX,XLSX| 

Installing the **Tidyverse Package** will be suitable for most file reading needs.

### Reading Files With Packages 

--------------------------------------------------

The core concepts of file reading are the same with package commands such as ```read_csv```. However, they typically will have different syntax needs and may have more parameters you can enter. The best way to learn how to read a certain file type using a package is to use the ```?``` and ```help()``` commands. 

--------------------------------------------------------------------------------


## Next Steps

Now that you have the tools to access data from the internet and effectively add it to your RStudio environment, now it is time to learn how to work with that data! 

-------------------------------------------------------------------------------


