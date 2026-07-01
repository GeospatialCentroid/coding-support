---
layout: single
sidebar:
  nav: unix_sidebar
title: "Fundamentals"
toc: true
toc_sticky: true
---

## Accessing UNIX

Because UNIX is primarily based on coding within your terminal. Accessing it 
requires using a compatible shell. 

Accessing Through **your computer**

Some operating systems offer a terminal or console that contains a pre-installed 
shell. You can search up keywords such as "Terminal" or "Shell" to access this 

Accessing through **file explorer**

You can also use the file explorer for some operating systems. Right click on a directory
such as your documents directory and click open in terminal. This will take you into your 
computers shell. We will go over how to move out of this directory later.

### Installing a Shell 


- Installing the **BASH** Shell

For most computers, it may be easier to use the Bourne Again Shell(BASH).
You can access a tutorial to download this shell [Here]
(https://carpentries.github.io/workshop-template/install_instructions/).

--------------------------------------------------------------------------------

## Directory Structure 

It's important to understand all the terminology used when referring to our file 
system to understand where you are and where commands will take you. 


### Types of Unix Files 

Unix has a wide assortment of files that we will use in our file system. 

|File Name|File Description|
|---------------|----------|
|Ordinary Files| Holds basic file types(csv,txt)| 
|Special Files| Files associated with devices such as your printer|
|Directories| Holds Files and Special Files in branches beyond the root| 
|Links|Shortcuts to a file or directory|

### Unix Directory Terminology

- **Root** 
  
  The root directory is the highest level directory in any Unix System. It is commonly
  represented by the first ```\``` in your file path 
  
  ```bash
  
  root --> \
  
  ```
  
- **Sub Directories** 

  As we move into our file system, we will encounter subdirectories of the root directory. 
  These are structured similary to a tree, where they branch out of our root system into more 
  and more directories. As we move through subdirectories, our file path will continue to add 
  the ```/``` character. 
  
```bash

           -----> Subdirectory ----> file.csv
  root ----|
           |
           -----> Subdirectory

```          

When we want to access a file, we will move through our subdirectories until we reach 
the directory our file is located in. This path we take is known as the file path. 

Example File Path

/C:/Subdirectory/file.csv

- **Working Directory**

  The current field that commands are being ran. Files that are maniuplated or created
  while your coding will be created in wherever the working directory is 
  
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

--------------------------------------------------------------------------------

## Syntax

### Command Structure 

There are four parts to a UNIX command

- **Prompt**

  Where you will type commands, it contains information surrounding your account and system
  
  ```Bash 
  
  username@ServerCurrentWorkingDirectory$ 'This is the area you will write your commands'
  
  ```

- **Command**

  This is where you will write your commands to work with your file system 
  
  ```bash
  
  cd C:\Directory\Directory
  
  'This example command would change the working directory you wish operate in' 
   ```
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
  
  Lists all files and subdirectories from the directory you are currently in 
  
- **cd**

  Takes you back to your home directory. However there are modifications to this command 
  
  ```bash
  
  cd.. 
  
  'Takes you back to the parent directory you are in (This is the top of the subdirectory)'
  
  cd <enter file path>
  
  'This will take you down your subdirectory to the next subdirectory or file 
  
  ```
  
### File and Directory Manipulation 

In the terminal, you are able to move files, manipulate files, and manipulate directories in various ways 

**Directory Manipulation**

- **Mkdir**

  This command allows you to create a new directory, be careful that your working directory is set to where you want this 
  new branch to be located 
  
  ```bash
 
  cd /C/Subdirectory_2
  
           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|
           |
           -----> Subdirectory_2
  
  mkdir directory_name 
  
           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|
           |
           -----> Subdirectory_2 ----> directory_name
           
  'you can also make multiple directories'
  
  mkdir dir_1 dir_2 dir_3 
  
           -----> Subdirectory_1 ----> file.csv
           | 
  root ----|    
           |                     |---> dir_1
           -----> Subdirectory_2 |---> dir_2
                                 |---> dir_3
  
  ```

- **rmdir**

This command will do the opposite, it will remove a subdirectory 

```bash

cd /c/Subdirectory_2

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

'Be careful not to remove a subdirectory that has files or other subdirectories that you need!'

```

**File Manipulation**

- **mv**

Moving files from one directory to another

```bash

'make sure your cd is in the directory you want to move your file from'

cd /c/Subdirectory_2

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

- **touch**

  This command allows you to create a new file in a subdirectory
  
```bash

cd /c/Subdirectory_1

                                 
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

- **cp**

This command works as a copy function 

```bash
cd /c/Subdirectory_2

           -----> Subdirectory_1 --> file_2.csv
           |                     
  root ----|    
           |                     |---> dir_1---> file.csv
           -----> Subdirectory_2 |
                                 |---> dir_3
                                 
cp /c/Subdirectory2/dir_1/file.csv /c/Subdirectory1

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


- **rm**

This command will allow you to remove a file or directory. Be careful, as it can be impossible to undo this action once
completed 

```bash

cd /c/Subdirectory2


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
                                 
'we can also remove directories

cd..
rm dir_3

                                 |--> file_2.csv
           -----> Subdirectory_1 |
           |                     |---> file.csv
  root ----|    
           |                     
           -----> Subdirectory_2 ---> dir_1
           
```

## Summary 

UNIX provides a series of functions that allow you to navigate your file directory 
Understanding how to effectively use these will allow you to perform more complex operations 
and access files with ease. 

## Next Steps 

This guide will now focus on how to access the contents of files 


                                 
-------------------------------------------------------------------------------






