---
layout: single
sidebar:
  nav: hpc_sidebar
title: "HPC Fundamentals" 
toc: true
toc_sticky: true
---

This guide will focus on the basics of accessing an HPC and how they work. 

## Accessing an HPC

HPC's are different then a **Graphical User Interface** (GUI) that we are accustomed to. Because we are working with nodes
remotely. Using the command line is the best way to remove into an HPC. 

HPCs can be accessed online such as **CSU's Riviera HPC**. However, in order
to actually use an institutions HPC you must receive access. For some institutions, this will 
consist of logging into the universities VPN system. For others, you may need to apply online.

Upon recieving access to an HPC, you will be given a **Public Key** which will commonly consist of 
a username and a server id. With this and commonly your email, you can create a **Secure Shell**


### Creating a Secure Shell and key. 

Creating a **SSH** (Secure Shell) is important for maintaining the security of the HPC and your computer from external threats. You will also need
to create a Secure Shell to access a remote system. 



Some operating systems come pre installed with a SSH client such as Linux and MacOS operating systems. If your's does not. You can 
enter a command in your operating system such as this one. 

```bash

sudo apt update
sudo apt install openssh-clent openssh-server

```

Upon having our SSH client properly installed. We will now **Generate a Key**. Our key is how we will make our SSH secure and access our HPC. 

```bash

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

```

Let's take a look at the commands that have gone into generating our key. 


1. **-t rsa** is our keytype and the algorithim that it uses 


2. **b 4096** is the bit size of our key. This one is 4096 bits


3. **-C** the comment we can add to identify our key

Once we have made our key, we will save our key to our **.ssh** directory. 

```bash 

/Users/YOU/.ssh/enter_custom_id_here

'Our custom ID is used for if we have multiple SSH keys.'

```

To find our key, we can use file navigation commands such ash the **ls** command 

```bash 

ls ~/.ssh/

```


Once we have made this, we can copy it with our username and other information provided by our HPC server

```bash

ssh-copy-id username@server_ip

```

Finally, to **Access the HPC Server**. We can use the ssh command and our newly authorized username

```bash

ssh username@server_ip

```

This is how we access our HPC. For troubleshooting concerns. Check out this [resource](
https://www.bing.com/ck/a?!&&p=0b0c1b47f6aee6b4220f3890f10b7a9a29d3d509f2cc360a9496ac7f2335d20dJmltdHM9MTc4MTgyNzIwMA&ptn=3&ver=2&hsh=4&fclid=2a68803d-d7c7-641b-3466-96e4d6066551&psq=connecting+to+an+HPC+with+SSH&u=a1aHR0cDovL3d3dy5ocGMtY2FycGVudHJ5Lm9yZy9ocGMtc2hlbGwvMDEtY29ubmVjdGluZy9pbmRleC5odG1s
)


## Running Your Program in an HPC 

Typically, because HPC's are public systems for the use of hundreds to thousands of people, there will be queues that 
 exist before your program is executed. This guide will focus on how to upload your code to an HPC and how to make the queue time shorter. 


### Node Types 

We want to establish the common types of nodes that exist within an HPC that will be important for you running a job. 

|Node Type|Function|
|-----|------------|
|Head Node| Serves as an entry point, responsible for managing resources|
|Compute Node | Runs computational tasks| 
|Storage Node | Stores large datasets and data 
|Login Node | Point of interaction with the cluster where you will manage files and submit job requests | 

### Submitting a Script

In order to submit a script we will first want to run a Hash-bang terminal command. This will allow us 
to view all the scripts that are in our file that we can run in our HPC system. 

```bash

Hash-bang/bin/bash

```

This allows us to know the file names for all files we want to run as they will appear in a list


**HPC Syntax** differs among the different types of systems. The best practice is to look into your HPC system 
to know what syntax should be used to submit commands, view the queue, and cancel them. 

In order to submit a script as a job. We will use the **Sbatch** Command. This will move our script from the login node
to the computing node where it will begin running our program once the queue is over.

Having knowledge of where scripts are located in your file system makes this step much easier. You are essentially moving your script from your file system to an HPC and telling it, "I would like you to run this when you get time!" 

```bash

sbatch example_script.sh

```

If we want to view the queue for our script. We can do so with the **squeue** command. 


If we need to cancel our script request. We can use the **scancel** command. 



### Resource Estimation 

While we can just submit a script file for running and wait for the queue to end. We can also provide
more information about our scripts resource requirements that will allow the **HPC System** to figure out where to fit our script in the queue 
to maximize it's resources. There are a few categories of information that we can provide. 

This information does not need to be perfectly accurate. It simply needs to be our best estimation for our job. 


- ```n<tasks>```

  This will help inform the system of how many tasks our program will run
  
- ```time```

  We can tell the HPC system how many days,hours,minutes, and seconds it will take for our code to run. 
  
- ```mem<megabytes>```

  This will inform the system of how much memory our job will take up 
  
- ```N<nodes>```

  This will inform our system of how many seperate processors we will require 
  



-------------------------------------------------------------------------------


## Next Steps 

Because HPC systems are so vast and diverse. We recommend looking at our learning resources
to learn more about how they operate. After this, check out your institutions HPC system or 
HPC systems of interest to learn more about how they specifically run and their syntax! 




