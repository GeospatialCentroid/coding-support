---
layout: single
sidebar:
  nav: unix_sidebar
title: "Fundamentals"
toc: true
toc_sticky: true
---

## What is a Shell?

A Shell is a computer program that allows you to **Connect** with your computers operating system. This is where you can write code that will directly interact with you computers **File System**. 

### Accessing a Shell

In order to code in UNIX or any other Operating Systme (OS), it's important we know where to access our shell as well as download a shell. 

We will look at some shells you can utilize to code in a similar fashion to coding in a UNIX operating system.

- Accessing Through **Your Computer**

Most operating systems offer a  terminal or console that contains a pre-installed 
shell. You can search up keywords such as **Terminal** or **Shell** to access this.

- Accessing through **File Explorer**

You can also use the **File Explorer** for some operating systems. Right click on a directory
such as your documents directory and click **Open in Terminal**. This will take you into your 
computers shell. 

### Installing a Shell 


- Installing the **BASH** Shell

For most computers, it may be easier to use the Bourne Again Shell(BASH).
You can access a tutorial to download this shell [Here].
(https://carpentries.github.io/workshop-template/install_instructions/).

--------------------------------------------------------------------------------

## Directory Structure 

It's important to understand all the terminology used when referring to our file 
system to understand where you are and where commands will take you. 


### Types of Files 

Unix has a wide assortment of files that we will use in our file system. 

|File Name|File Description|
|---------------|----------|
|Ordinary Files| Holds basic file types (csv,txt)| 
|Special Files| Files associated with devices such as your printer|
|Directories| Holds Ordinary Files and Special Files in branches beyond the root| 
|Links|Shortcuts to a file or directory|

### Unix Directory Terminology

- **Root** 
  
  The root directory is the highest level directory in any Unix System. It is commonly
  represented by the first ```/``` in your file path. 
  
  ```bash
  
  root --> /
  
  ```
  
- **Sub Directories** 

  As we move into our file system, we will encounter **Subdirectories**, which can hold files, and other subdirectores.

  Our File System is similar to a plants root system; our **Root Directory** is our beginning point that connects to our "plant".
  As we move through our subdirectories, it's like were tracing a root down it's root system. 
 
  With a plant, we would see points where a root breaks off, these points are represented with the ```/``` character. They help
  symbolize **What Subdirectory** we are in and **How Deep** we are into our file system. 
  
```bash

           -----> Subdirectory ----> file.csv
  root ----|
           |
           -----> Subdirectory

```          

When we want to access a file, we will move through our subdirectories until we reach 
the directory our file is located in. This path we take is known as the file path. 

**Example File Path**

```bash
C:/Subdirectory/file.csv
```

- **Working Directory**

  A working directory is the current field that commands are being ran. Files that are maniuplated or created
  while your coding will be created in the directory you have set to be your working directory.  
  
### Other Types of Directories 

There are a wide array of other directories that hold information that is essential for 
UNIX and CPU functioning

|Directories|Directory Function| 
|----------------------|-------|
|/bin| Holds essential system commands| 
|/dev| Represents devices attached to the local system|
|/etc| Stores various files for configuration|
|/home| Default locations for file storage| 
|/lib| Stores Essential Libraries for bin to run| 
|/media| Stores mount for media like flash drives, and USB's| 
|/mnt| Serves as a location for external files and system structures| 
|/proc| Allows access to processes and system parameters| 
|/tmp| directory for files that are temporary|
|/usr| Stores read only data across the system| 
|/Var| Stores variable data that changes as the system is running| 

We will not look a these extensively in this guide. However, it's beneficial to know what they are and how to use them. 

--------------------------------------------------------------------------------

## Syntax

### Command Structure 

There are four parts to a UNIX command.

- **Prompt**

  This is the beginning of your command.  it contains information surrounding your **System** and **Current Working Directory**.
  
  ```bash 
  
  username@ServerCurrentWorkingDirectory$ 'This is the area you will write your commands'
  
  ```

- **Command**

  This is where you will write your commands to work with your file system 
  
- **Option**

  Allows you to modify the behavior of a command, tbey are extra parameters that you can add
  

- **Argument**

  The argument is where you will be adding the target of your command. 
  
  
These commands are commonly used in most terminal systems and widely applicable to any 
console you may be operating on. 

### File Navigation Commands

Moving through directories requires a strong foundational knowledge of how to do so 
effectively

- **PWD**

  Tells you which directory you are currently working in 
  
- **ls**
  
  Lists all **Files** and **Subdirectories** from your **Current** working directory. 
  
- **cd**

  This command has a wide range of uses to help navigate through your file tree. 

  Here are some examples. 
  
  ```bash

  cd / 

  'This takes you back to your root directory' 
  
  cd.. 
  
  'Takes you back to the parent directory you are in (This is the top of the subdirectory)'
  
  cd <enter file path>
  
  'This will take you down your subdirectory to the next subdirectory or file 
  
  ```
  

--------------------------------------------------------------------------------------------------------------------------------------

## File and Directory Manipulation 

In the terminal, you are able to move **Manipulate Files and Directories** to meet your goals. 


### Directory Manipulation

- **Mkdir**

  This command allows you to create a new directory, be careful that your working directory is set to where you want this 
  new branch to be located 
  
  ```bash
 
  cd C:/Subdirectory_2
  
           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|
           |
           -----> Subdirectory_2
  ```

  ```bash

  mkdir directory_name 
  
           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|
           |
           -----> Subdirectory_2 ----> directory_name
```


here, we created a new directory in Subdirectory_2

You can also make **Multiple Directories** at once. 

```bash
           
  
  mkdir dir_1 dir_2 dir_3 
  
           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|    
           |                     |---> dir_1
           -----> Subdirectory_2 |---> dir_2
                                 |---> dir_3
  
```

We just made three subdirectories of Subidrectory_2. 


We can also remove subirectories with the **rmdir** command. 

```bash

cd C:/Subdirectory_2

           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|    
           |                     |---> dir_1
           -----> Subdirectory_2 |---> dir_2
                                 |---> dir_3

rmdir dir_2

           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|    
           |                     |---> dir_1
           -----> Subdirectory_2 |
                                 |---> dir_3

```

Be careful not to remove a subdirectory that has files or other subdirectories that you need!



### File Manipulation 

The **mv** command allows you to move files from place to place. 


```bash

'make sure your cd is in the directory you want to move your file from'

cd C:/Subdirectory_2

           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|    
           |                     |---> dir_1
           -----> Subdirectory_2 |
                                 |---> dir_3
                                 
mv file.csv /C/Subdirectory_1

                                 
           -----> Subdirectory_1 
           |                     
  root ----|    
           |                     |---> dir_1---> file.csv
           -----> Subdirectory_2 |
                                 |---> dir_3
```

here, we effectively moved file.csv from Subdirectory_1 to Subdirectory_2. 


If we don't want to move a file but want to make a new file, we can do so using hte **Touch** command. 
  
```bash

cd C:/Subdirectory_1

                                 
           -----> Subdirectory_1 
           |                     
  root ----|    
           |                     |---> dir_1---> file.csv
           -----> Subdirectory_2 |
                                 |---> dir_3
                                 
touch file_2.csv

           -----> Subdirectory_1 --> file_2.csv
           |                     
  root ----|    
           |                     |---> dir_1---> file.csv
           -----> Subdirectory_2 |
                                 |---> dir_3

```

This created file_2.csv in Subdirectory_1. 


If we want a a file in multiple directories, we can copy it using the **cp** command. 


```bash
cd C:/Subdirectory_2

           -----> Subdirectory_1 --> file_2.csv
           |                     
  root ----|    
           |                     |---> dir_1---> file.csv
           -----> Subdirectory_2 |
                                 |---> dir_3
                                 
cp C:/Subdirectory2/dir_1/file.csv C:/Subdirectory1

'we first put in the line of code for the file we want to copy, then where we 
want to copy it to.' 
                                 |--> file_2.csv
           -----> Subdirectory_1 |
           |                     |---> file.csv
  root ----|    
           |                     |---> dir_1---> file.csv
           -----> Subdirectory_2 |
                                 |---> dir_3
```


Similar to our directory removing command, we can remove files uising a **rm** command.

Once again, be careful not to remove the wrong files and you **Cannot** undo this. 

```bash

cd C:/Subdirectory_2


                                 |--> file_2.csv
           -----> Subdirectory_1 |
           |                     |---> file.csv
  root ----|    
           |                     |---> dir_1---> file.csv
           -----> Subdirectory_2 |
                                 |---> dir_3
                                 
rm file.csv


                                 |--> file_2.csv
           -----> Subdirectory_1 |
           |                     |---> file.csv
  root ----|    
           |                     |---> dir_1
           -----> Subdirectory_2 |
                                 |---> dir_3
   
```

## Summary 

UNIX provides a series of functions that allow you to navigate your file directory 
Understanding how to effectively use these will allow you to access directories and files with ease! 

## Next Steps 

This guide will now focus on how to access and manipulate the contents of files. 


                                 
-------------------------------------------------------------------------------






