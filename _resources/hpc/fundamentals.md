---
layout: single
sidebar:
  nav: hpc_sidebar
title: "HPC Fundamentals" 
toc: true
toc_sticky: true
---
# Accessing and Using an HPC

This guide introduces the basics of accessing a **High-Performance Computing (HPC)** system and running computational jobs on a cluster.

Because HPC systems are shared resources designed to support many users, they work somewhat differently from the personal computers most people are familiar with. Rather than running computationally intensive programs directly on your own computer, you typically connect to the HPC remotely, transfer your files, and submit jobs to the cluster's computing resources.

> **Note:** HPC systems differ from one another. The commands and procedures in this guide are examples commonly used on Linux-based systems and **Slurm** clusters. Always consult the documentation for your institution's HPC system for system-specific instructions.

---

## Accessing an HPC

Unlike a **Graphical User Interface (GUI)**, where you interact with a computer through windows, buttons, and menus, HPC systems are commonly managed through the **command line**.

HPC systems are accessed remotely over a network. Your institution may provide several ways to connect, including:

* **SSH (Secure Shell)** from a terminal
* A web-based portal
* A virtual desktop environment
* Jupyter or other browser-based interfaces

For example, **CSU's Riviera HPC** can be accessed remotely after a user has been granted an account.

Before you can use an institutional HPC, you will generally need to **request an account or be granted access**. Depending on the institution, this may require:

* Logging into the university's VPN when connecting from off campus
* Completing an account request
* Being added to a research group or project
* Agreeing to institutional computing policies
* Setting up SSH authentication

The exact process varies between institutions.

---

## Connecting with SSH

**SSH (Secure Shell)** is a network protocol that allows you to securely connect to a remote computer through the command line.

SSH is commonly used to connect to an HPC's **login node**, which serves as the entry point to the cluster. Once connected, you can manage files, prepare your job, and submit jobs to the cluster's computing resources.

### SSH Keys

Many HPC systems use **SSH keys** for authentication. An SSH key consists of two related files:

* **Private key:** Stored securely on your computer. Never share this file with anyone.
* **Public key:** Can be provided to the HPC system or institution to associate the key with your account.

Your HPC administrator may provide specific instructions for creating or registering your SSH key. Follow those instructions rather than assuming that every HPC uses the same authentication process.

Most modern Linux and macOS systems include an SSH client. Windows also provides SSH through modern versions of PowerShell and Windows Terminal.

If you are using Ubuntu or another Debian-based Linux distribution and SSH is not installed, you can install the OpenSSH client with:

```bash
sudo apt update
sudo apt install openssh-client
```

> **Note:** You generally only need the SSH client to connect to an HPC. You do not normally need to install an SSH server on your personal computer.

### Generating an SSH Key

If your institution requires you to create your own SSH key, you can generate one with:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

`ed25519` is a modern SSH key algorithm and is generally preferred over RSA for new keys when it is supported by the system.

The command includes several options:

1. **`-t ed25519`** specifies the type of key to create.
2. **`-C`** adds a comment, such as your email address, to help identify the key.

When prompted, you can accept the default location or provide a custom filename. SSH keys are typically stored in the `.ssh` directory in your home directory.

For example:

```text
~/.ssh/id_ed25519
```

The corresponding public key will normally have `.pub` appended:

```text
~/.ssh/id_ed25519.pub
```

You can view the files in your `.ssh` directory with:

```bash
ls ~/.ssh/
```

### Registering Your Public Key

The process for registering your public key depends on your institution.

Some HPC systems allow you to use:

```bash
ssh-copy-id username@server.example.edu
```

This copies your public key to the remote account.

However, **not every HPC system supports `ssh-copy-id`**. Some institutions require you to upload your public key through an account-management website or provide it to an HPC administrator.

> **Never share your private SSH key.** If you need to provide a key to an HPC administrator, provide the **public key** (`.pub` file).

### Connecting to the HPC

Once your account and SSH authentication have been configured, you can connect to the HPC's login node using:

```bash
ssh username@server.example.edu
```

Your institution may provide a hostname rather than an IP address. For example:

```bash
ssh username@hpc.example.edu
```

After successfully connecting, commands you enter in the terminal will run on the remote HPC system rather than on your personal computer.

---

## Running Your Program on an HPC

HPC systems are typically **shared resources**. Hundreds or thousands of users may be using the same cluster, so users generally do not run computationally intensive programs directly on the login node.

Instead, you prepare a **job** and submit it to a **job scheduler**.

The scheduler determines when and where your job should run based on the resources you request and the current workload of the cluster.

Common HPC job schedulers include:

* **Slurm**
* PBS
* LSF

This guide uses **Slurm** examples. If your institution uses a different scheduler, the commands will be different.

---

## Understanding HPC Nodes

An HPC cluster may contain many different types of nodes. The exact architecture varies between systems.

| Node Type          | Function                                                                                              |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| **Login Node**     | Provides an entry point to the cluster. Used for managing files, preparing jobs, and submitting jobs. |
| **Compute Node**   | Runs computational jobs submitted through the scheduler.                                              |
| **GPU Node**       | A compute node equipped with GPUs for workloads that can take advantage of GPU acceleration.          |
| **Storage System** | Provides shared storage for programs, datasets, and results.                                          |

You may also encounter terms such as **head node**, **management node**, or **storage node**, but these have different meanings depending on the architecture of a particular HPC system.

### Login Nodes vs. Compute Nodes

One of the most important concepts for new HPC users is the distinction between the **login node** and **compute nodes**.

When you connect through SSH, you will typically arrive at a login node.

The login node is intended for tasks such as:

* Managing files
* Editing scripts
* Installing or loading software
* Preparing jobs
* Submitting jobs
* Monitoring jobs

Computationally intensive programs should generally be run on **compute nodes**, not login nodes.

Instead of manually connecting to a compute node and running a long program, you submit a job to the scheduler.

---

## Creating a Job Script

A job script is a text file containing the instructions the scheduler needs to run your program.

For example:

```bash
#!/bin/bash

python my_program.py
```

The first line is called a **shebang**:

```bash
#!/bin/bash
```

It tells the operating system which interpreter should be used to execute the script.

The shebang **does not list the scripts available on the HPC**. To view files in your current directory, you can use:

```bash
ls
```

For example:

```bash
ls
```

might show:

```text
my_program.py
job_script.sh
data/
results/
```

---

## Submitting a Job with Slurm

If your HPC uses the **Slurm** scheduler, you can submit a job script using the `sbatch` command:

```bash
sbatch job_script.sh
```

Slurm will place the job into the appropriate queue and run it on an available compute node when the requested resources become available.

Think of the process as:

```text
Your computer
     ↓
SSH
     ↓
HPC Login Node
     ↓
Submit job
     ↓
Slurm Scheduler
     ↓
Compute Node
     ↓
Your program runs
```

### Viewing Your Jobs

You can use `squeue` to view jobs currently in the queue:

```bash
squeue
```

To see only your own jobs, you can typically use:

```bash
squeue -u $USER
```

### Canceling a Job

If you need to cancel a job, use:

```bash
scancel JOB_ID
```

For example:

```bash
scancel 123456
```

The job ID is provided when you submit the job and can also be found using `squeue`.

---

## Requesting Resources

When submitting a job, you can provide the scheduler with information about the resources your program needs.

Providing reasonable resource estimates helps the scheduler determine where and when your job can run.

Common resources include:

* **CPU cores:** How many CPU cores your program needs
* **Memory:** How much RAM your program requires
* **Time:** How long you expect the job to run
* **Nodes:** How many compute nodes your job requires
* **GPUs:** How many GPUs your program requires, if applicable

For example, a Slurm job script might include:

```bash
#!/bin/bash

#SBATCH --time=01:00:00
#SBATCH --mem=4G
#SBATCH --cpus-per-task=2

python my_program.py
```

These directives tell Slurm that the job is expected to require approximately:

* **1 hour** of runtime
* **4 GB of memory**
* **2 CPU cores**

The exact resource syntax and available resources depend on the HPC system.

### Why Resource Estimates Matter

Resource requests do not need to be perfectly accurate, but they should be reasonable.

Requesting **too few resources** may cause your program to fail—for example, because it runs out of memory or exceeds its time limit.

Requesting **far more resources than necessary** can also be problematic. Depending on the scheduling policies of the HPC, larger resource requests may take longer to schedule and can prevent other users from accessing resources efficiently.

As you gain experience with your program, you can use previous jobs to make better resource estimates.

---

## Next Steps

HPC systems can vary considerably in their hardware, software, authentication methods, storage systems, and job schedulers.

Once you understand the basic workflow, the best next step is to learn how your institution's specific HPC system works.

Look for documentation covering:

* Connecting to the HPC
* Requesting an account
* SSH authentication
* File transfer
* Available software and modules
* Storage locations
* Job submission
* Resource requests
* Monitoring jobs
* Canceling jobs
* GPU computing
* Data management and storage policies

The most important concept to remember is the basic HPC workflow:

**Connect → Prepare → Submit → Queue → Compute → Retrieve Results**

Your personal computer is primarily used to prepare and interact with your work, while the HPC provides the computing resources needed to run larger or more computationally intensive jobs.





