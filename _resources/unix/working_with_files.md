---
layout: single
sidebar:
  nav: unix_sidebar
title: "Working With Files"
toc: true
toc_sticky: true
---

## Accessing File Contents in UNIX

Accessing file contents is one of the most beneficial features of unix. 

Accessing file contents allows us to do significant work.

### Opening & Working With Files

To display and work with files in the terminal, the common commands we will 
be used are the **Cat** and **Tac** commands.

The **Cat** command is a standard command you can use on files such as text 
files and CSV's that will allow you to display the contents of the file. 

```bash

'we will use a simple command prompt to open a file'

cat <file_name.csv>

'we can also read multiple files with the cat command' 

cat file_name1 file_name2 

```

The cat command goes beyond reading files, we can also **Create** new files, **Modify** existing
files, and **Combine** files.


Let's pick up where we left off in a file system, and make a new file using the **cat** command.

```
cd C:/Subdirectory_2/dir_1


                                 |--> file_2.csv
           -----> Subdirectory_1 |
           |                     |---> file.csv
  root ----|    
           |                     
           -----> Subdirectory_2 ---> dir_1
           
cat > file_3.txt



                                 |--> file_2.csv
           -----> Subdirectory_1 |
           |                     |---> file.csv
  root ----|    
           |                     
           -----> Subdirectory_2 ---> dir_1 ---> file_3.txt

```

Doing this allows us to add contents to a new text file which we can place in 
our subdirectory ```dir_1```.


We can also **Merge Files** 


```bash

cd /Subdirectory_1

cat file file_2 > combined_file

                                
           -----> Subdirectory_1 ---> combined_file 
           |                    
  root ----|    
           |                     
           -----> Subdirectory_2 ---> dir_1 ---> file_3.txt

```

There are a series of specific modifications we can amke to the cat command to change its function. 

|Option|Purpose|
|-------|------|
|-n|show line numbers|
|-b|number non blank lines|
|file.txt|show full file content|
|-A|show tabs/chars/ and non printing lines|
|-s|squeeze repeated blank lines|
| > combine| join several text files|
|*.log| Merge matching files| 
|head - n <value>| Select a number of lines to read starting from the top|
|tail - n <value>| Select a number of lines to read starting from the bottom|
|> script.sh <<'EOF| write a script|

the **tac** command is another useful tool that builds off of the cat command

While these commands are similar, some functions of the tac command work in **Reverse**, such as reading files from bottom to top instead of 
from top to bottom. 

```bash

we can use the tac command to create files that have reversed contents

 cd /Subdirectory_1
 
                                
           -----> Subdirectory_1 ---> combined_file 
           |                    
  root ----|    
           |                     
           -----> Subdirectory_2 ---> dir_1 ---> file_3.txt
           
           
tac combined_file > reversed_file

                                 
                                 |---> reversed_file
           -----> Subdirectory_1 |
           |                     |---> combined_file 
  root ----|                     
           |                     
           -----> Subdirectory_2 ---> dir_1 ---> file_3.txt

           
```

**Head** and **Tail** commands are other tools in Unix that allow you to view 
sections of a file with ease



the **Head** command allows you to view the first **10 Rows** of a file. However this 
can be modified by adding options to our command using the **n** feature. 

```bash

head file_3.txt 

'this would automatically read the first 10 lines

head -n 15 file_3.txt'

'this would read the first 15 lines instead'

head -n 5 reversed_file combined_file 

'this would read the first five lines of two files'

```

**Tail**

Similar to the tac command, the tail command provides a similar function as the 
head command except starting at the bottom of the file instead 

```bash

tail file_3.txt

'this would read the bottom 10 lines of a file.'

```

With knowledge of both the head and tail commands. We can read sections of a files in the **Middle** 

```bash

head -n 10 file_3.txt | tail -n 20 file_3.txt

```

The **open** command is another useful tool that allows you to open non text files 
such as PDF's. 

Finally, we can use commands such as **Grep** to search for keywords and values in files 

```bash

Grep -in "keyword" 

```

We can also tell grep to ignore certain words in files.

```bash

Grep -i "keyword"

```

If we want any words except for some, we can tell grep to find files that do not match to a word.

```bash

Grep -v "keyword"

```

--------------------------------------------------------------------------------

## Summary

The  shell can be used for a variety of applications related to file management and working with 
data. Understanding the file directory is  extremely importannt in having strong data organization skills
and clean workflows and efficiency when working on large scale projects. 

## Next Steps

Learning to apply UNIX to script writing import code, and work on other computers are all key when using terminals. Soon, we will be releasing Our BASH fundamentals
guide which will go over basic script writing in the terminal!






