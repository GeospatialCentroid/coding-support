---
layout: single
sidebar:
  nav: unix_sidebar
title: "Working With Files"
toc: true
toc_sticky: true
---

## Accessing File Contents in UNIX

Accessing file contents is one of the most beneficial features of unix. On top 
of moving and manipulating files and directories, accessing their contents allows 
us to deepend the work we do in UNIX 

### Opening & Working With Files

To display and work with files in the terminal, the common commands we will 
be used are the **cat** and **tac** comamands

The **cat** command is a standard command you can use on files such as text 
files and CSV's that will allow you to display the contents of the file. 

```bash

'we will use a simple command prompt to open a file'

cat <file_name.csv>

'we can also read multiple files with the cat command' 

cat file_name1 file_name2 

```

the cat command goes beyond reading files, we can also create new files, modify existing
files, and combine files 

```bash

'if we want to make a new file, we can use the cat command to do so. Lets pick
up where we left off in our file system' 

cd /Subdirectory 2/ dir_1


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
           
'doing this allows us to add contents to a new text file which we can place in 
our subdirector dir_1'
           
'we can also merge files'

cd /Subdirectory_1

cat file file_2 > combined_file

                                
           -----> Subdirectory_1 ---> combined_file 
           |                    
  root ----|    
           |                     
           -----> Subdirectory_2 ---> dir_1 ---> file_3.txt

```

There are a series of extra **options** we can use with the cat command 

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
there are similar functions between the two, however the tac command will read from 
the tail to the head (bottom to top) of a file instead of the head to tail (top to bottom).

```unix

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
sections of a file with east

**Head**

- the head command allows you to view the first 10 rows of a file, however this 
can be modified with options 

```unix

head file_3.txt 

'this would automatically read the first 10 lines

head -n 15 file_3.txt 

'this would read the first 15 lines instead'

head -n 5 reversed_file combined_file 

'this would read the first five lines of two files'

```

**Tail**

Similar to the tac command, the tail command provides a similar function as the 
head command except starting at the bottom of the file instead 

```unix

tail file_3.txt

'this would readthe bottom 10 lines of a file. 

'we can use the head and tail commands together to read certain middle parts of a file 

head -n 10 file_3.txt | tail -n 20 file_3.txt

```

The **open** command is another useful tool that allows you to open non text files 
such as PDF's. 

Finally, we can use commands such as **Grep** to search for keywwords and values in files 

```Bash

Grep -in "keyword" 

'we can also tell grep to ignore certain words in files'

Grep -i "keyword"

'and we can tell grep to find files that do not match to a word'

Grep -v "keyword"

```

--------------------------------------------------------------------------------

## Summary

The terminal shell can be used for a variety of applications related to file management and working with 
text based data. Understanding the file directory is  extremely importannt in having strong data organization skills
and clean workflows for large scale projects. 

## Next Steps

Learning to apply UNIX to script writing and import code is key when using terminals. Our BASH fundamentals
guide will go over basic script writing in the terminal. This guide can be accessed [Here]('enter link here')





