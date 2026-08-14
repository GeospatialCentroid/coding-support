---
layout: single
sidebar:
  nav: unix_sidebar
title: "Fundamentals"
toc: true
toc_sticky: true
---



## What is a Shell?

A **shell** is a program that allows you to interact directly with your computer’s operating system. Through the shell, you can run commands, navigate your file system, and automate tasks using a command-line interface (CLI).

---

## Accessing a Shell

Most operating systems include a built-in terminal or console that provides access to a shell.

### Common Ways to Access a Shell

* **Search your system** for “Terminal,” “Command Prompt,” or “Shell”
* **Open from a folder** (e.g., right-click a directory and select “Open in Terminal”)

### Installing a Shell

Many systems use the **Bash (Bourne Again Shell)**, a widely adopted shell for UNIX-like environments.

* You can install Bash or similar tools using online tutorials and system-specific instructions
* These tools provide a consistent interface for working with files and running commands

### For Windows Users

If you are using Windows, you can install Git (which includes Git Bash) here:

👉 https://git-scm.com/install/windows

Git Bash provides a UNIX-like environment where you can practice shell commands and workflows.

---

## Understanding the File System

Before using shell commands, it’s important to understand how files and directories are organized.

### Key Concepts

* **Root Directory (`/`)**: The top-level directory of your system
* **Subdirectories**: Folders within other directories
* **File Path**: The route you take to reach a file or folder

Example:

```bash
C:/Subdirectory/file.csv
```

This path shows how to navigate from the root to a specific file.

---

## Command Structure

Most shell commands follow this structure:

```bash
command [options] [arguments]
```

* **Command** → The action you want to perform
* **Options** → Modifiers that change behavior
* **Arguments** → The target of the command

---

## Navigating the File System

### Common Navigation Commands

| Command | Description                            |
| ------- | -------------------------------------- |
| `pwd`   | Shows your current directory           |
| `ls`    | Lists files and folders in a directory |
| `cd`    | Changes your current directory         |

### Examples

```bash
pwd            # Show current directory
ls             # List contents
cd /           # Go to root directory
cd ..          # Move up one directory
cd folder_name # Move into a directory
cd ~           # Go to home directory
```

---

## File and Directory Management

Shell commands allow you to create, move, copy, and delete files and folders.

### Directory Commands

| Command | Description               |
| ------- | ------------------------- |
| `mkdir` | Create a new directory    |
| `rmdir` | Remove an empty directory |

Example:

```bash
mkdir new_folder
```

---

### File Commands

| Command | Description          |
| ------- | -------------------- |
| `touch` | Create a new file    |
| `mv`    | Move or rename files |
| `cp`    | Copy files           |
| `rm`    | Delete files         |

Examples:

```bash
touch file.txt          # Create a file
mv file.txt folder/     # Move file
cp file.txt copy.txt    # Copy file
rm file.txt             # Delete file (use with caution)
```

> ⚠️ Be careful with `rm` and `rmdir`—these actions cannot be undone.

---

## Best Practices

* Always check your current directory using `pwd` before running commands
* Use `ls` to confirm file locations before modifying them
* Be cautious when deleting files or directories
* Practice commands in a safe environment (like a test folder or Git Bash)

---

## Next Steps

Now that you understand the basics of the shell, you can begin to:

* Automate repetitive tasks
* Work more efficiently with files and directories
* Use version control tools like Git
* Explore scripting with Bash

Learning shell commands is a foundational skill that will support many areas of programming, data science, and research workflows.
