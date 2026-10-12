---
layout: single
sidebar:
nav: r_sidebar
title: "Command Line Running"
toc: true
toc_sticky: true
---

-----------------------------------------------

Knowing how to run R scripts within the command line is essential for moving from personal projects to professional implementation. This page covers why it matters, how to set it up, and what running your first scripts looks like. Every example shows both the command and the output you would see, so you can follow along just by reading.

-----------------------------------------------

# What are the advantages

## Automation

Running R scripts from the command line allows for hands-off execution. A script can be started by another program, a scheduler, or a server without anyone opening RStudio and clicking "Run".

## Scheduling

With command line execution, scripts can run at specific times of day, or several times a day, using tools that are built into your operating system.

## True Reproducibility

Instead of hard-coding parameters in your code, the command line lets you pass parameters within the call to the script itself, allowing various inputs to be given without changing any of the code.

Each command line run also starts in a fresh R session. IDEs such as RStudio can keep objects from earlier work in memory (or reload them from a saved .RData file), and those hidden values can affect your results without you noticing. Running from the command line makes sure your script only depends on what it actually creates or loads.

## Integration into Pipelines

Command line scripts can be chained together with other scripts and tools, such as a Python script that downloads data, an R script that analyzes it, and a shell command that emails the report.

-----------------------------------------------

# Before You Start

## Opening a terminal

The **terminal** is a window where you type commands instead of clicking buttons. You type a command, press Enter, and the computer prints the result underneath.

| Operating system | How to open a terminal |
| --- | --- |
| Windows | Search for **PowerShell** in the Start menu |
| macOS | Open **Terminal** (Applications → Utilities) |
| Linux | Press `Ctrl + Alt + T` |

RStudio also has a Terminal tab next to the Console, which is a convenient place to practice.

## Checking that R is available

To check that the terminal can find R, you type:

```bash
Rscript --version
```

If R is set up correctly, the terminal prints the installed version:

```
Rscript (R) version 4.4.1 (2024-06-14)
```

If R can't be found, you'll see an error like one of these instead:

```
'Rscript' is not recognized as an internal or external command    (Windows)
zsh: command not found: Rscript                                   (macOS/Linux)
```

That's a setup issue, not a problem with your code. See [Adding R to your PATH (Windows)](#adding-r-to-your-path-windows) at the bottom of this page.

-----------------------------------------------

# Running a Script

## An example script

Here is a very small R script saved in a file called `hello.R`:

```r
print("Hello from the command line!")
print(2 + 2)
```

## Finding your way around

The terminal is always "inside" one folder at a time, and it looks for files in that folder. These three commands help you get to the right place:

| Command | What it does |
| --- | --- |
| `pwd` | Prints the folder you're currently in |
| `ls` | Lists the files in the current folder |
| `cd folder_name` | Moves into a folder (`cd ..` moves back up one level) |

For example, say `hello.R` is saved in a folder called `my_project` on the Desktop. Here is what moving there and checking the files looks like:

```bash
cd Desktop/my_project
pwd
```
```
/Users/sam/Desktop/my_project
```

```bash
ls
```
```
hello.R    students.csv
```

The terminal is now in the same folder as the script, so it's ready to run it.

## The basic command

To run a script, type `Rscript` followed by the file name:

```bash
Rscript hello.R
```

The terminal runs the whole script from top to bottom and shows the output:

```
[1] "Hello from the command line!"
[1] 4
```

This is the same output you'd see in the RStudio Console. Anything your script prints with `print()` or `cat()` appears in the terminal.

## Running a single line of code

The `-e` flag runs a line of R code without needing a script file. This is handy for quick checks:

```bash
Rscript -e 'print(2 + 2)'
```
```
[1] 4
```

On Windows Command Prompt, use double quotes on the outside and single quotes inside: `Rscript -e "print('hello')"`.

You may see `R CMD BATCH` in older tutorials. It does a similar job, but `Rscript` is simpler and is what you should use for new work.

-----------------------------------------------

# Passing Arguments to Your Script

An **argument** is an extra piece of information you type after the script name. Your script can read it and use it, so the same script can work on different inputs without you editing the code.

## The example data

The examples in this section use a small file called `students.csv`, saved in the same `my_project` folder. Its contents are:

```
name,score,grade
Ana,92,A
Ben,85,B
Cara,78,C
Dev,88,B
Eli,95,A
Fay,70,C
```

## Using commandArgs()

Base R reads arguments with `commandArgs(trailingOnly = TRUE)`. It returns everything typed after the script name as a character vector, so `args[1]` is the first argument, `args[2]` is the second, and so on.

This script, `summarize.R`, takes a file name and a number of rows to show:

```r
# summarize.R
args <- commandArgs(trailingOnly = TRUE)

input_file <- args[1]
n_rows     <- as.numeric(args[2])   # arguments always arrive as text

data <- read.csv(input_file)
print(head(data, n_rows))
```

Running it with `students.csv` and `3`:

```bash
Rscript summarize.R students.csv 3
```

shows the first three rows of the file:

```
  name score grade
1  Ana    92     A
2  Ben    85     B
3 Cara    78     C
```

Running the **same script** with `2` instead:

```bash
Rscript summarize.R students.csv 2
```

shows only two rows. The code didn't change, only the argument did:

```
  name score grade
1  Ana    92     A
2  Ben    85     B
```

Remember that **every argument is a character string**. Even though you typed `3`, R receives the text `"3"`, which is why the script converts it with `as.numeric()`.

## Validating arguments

Without checks, a missing argument leads to a confusing error. Here is what happens when someone runs `summarize.R` without any arguments:

```bash
Rscript summarize.R
```
```
Error in file(file, "rt") : invalid 'description' argument
Calls: read.csv -> read.table -> file
Execution halted
```

Nothing in that message tells the user they forgot the file name. Adding a check at the top of the script fixes this:

```r
# summarize.R
args <- commandArgs(trailingOnly = TRUE)

if (length(args) < 2) {
  stop("Usage: Rscript summarize.R <input_file> <n_rows>", call. = FALSE)
}

if (!file.exists(args[1])) {
  stop("Input file not found: ", args[1], call. = FALSE)
}

# ... rest of the script
```

Now the same mistake produces a clear message that shows how the script should be run:

```bash
Rscript summarize.R
```
```
Error: Usage: Rscript summarize.R <input_file> <n_rows>
Execution halted
```

And a misspelled file name gets its own message:

```bash
Rscript summarize.R studnets.csv 3
```
```
Error: Input file not found: studnets.csv
Execution halted
```

-----------------------------------------------

# Working Directory Tips

When you run a script, file paths inside it like `read.csv("students.csv")` are found starting from **the folder your terminal is in**, not the folder where the script is saved. This is the most common reason a script works in RStudio but fails on the command line.

For example, if the terminal is still in the Desktop folder instead of `my_project`, R can't find the script:

```bash
pwd
```
```
/Users/sam/Desktop
```
```bash
Rscript hello.R
```
```
Fatal error: cannot open file 'hello.R': No such file or directory
```

To avoid this:

- **`cd` into your project folder first** (check with `pwd`), then run the script.
- **Pass file paths as arguments** instead of writing them into the code.
- **Avoid `setwd("C:/Users/me/...")`** in your scripts, since that path won't exist on anyone else's computer.

-----------------------------------------------

# Common Errors

| Error message | Likely cause | Fix |
| --- | --- | --- |
| `'Rscript' is not recognized` / `command not found` | R isn't on your PATH | See [Adding R to your PATH (Windows)](#adding-r-to-your-path-windows) |
| `cannot open file 'hello.R'` | The terminal is in a different folder than your script | Use `pwd` and `ls` to check, then `cd` into the right folder |
| `cannot open file 'students.csv'` | File paths are read from the terminal's folder | `cd` into the project folder or use full paths |
| `there is no package called '...'` | The package isn't installed | Run `Rscript -e 'install.packages("package_name")'` |
| `non-numeric argument` or unexpected `NA` values | Arguments arrive as text | Convert with `as.numeric()` or `as.integer()` |
| Works in RStudio but not on the command line | The script relied on something already loaded in RStudio | Make sure the script loads its own packages and data |

-----------------------------------------------

# Putting It Together

Here is one more complete example that combines everything on this page. The script `row_count.R` takes a CSV file name, checks it, and reports the size of the file:

```r
# row_count.R
args <- commandArgs(trailingOnly = TRUE)

if (length(args) < 1) {
  stop("Usage: Rscript row_count.R <csv_file>", call. = FALSE)
}

if (!file.exists(args[1])) {
  stop("File not found: ", args[1], call. = FALSE)
}

data <- read.csv(args[1])
cat("Rows:   ", nrow(data), "\n")
cat("Columns:", ncol(data), "\n")
```

Running it on `students.csv`:

```bash
Rscript row_count.R students.csv
```
```
Rows:    6
Columns: 3
```

And running it without a file name:

```bash
Rscript row_count.R
```
```
Error: Usage: Rscript row_count.R <csv_file>
Execution halted
```

-----------------------------------------------

# Where to Go Next

Once you're comfortable running scripts from the command line, you can build on it to:

- **Use named options** like `--input data.csv` with the [optparse](https://cran.r-project.org/package=optparse) package.
- **Schedule scripts** to run automatically with cron (macOS/Linux) or Task Scheduler (Windows).
- **Chain scripts together** into pipelines with a shell script, `make`, or the [targets](https://books.ropensci.org/targets/) package.

-----------------------------------------------

# Adding R to your PATH (Windows)

On Windows, R is usually not added to the PATH during installation, so the terminal doesn't know where `Rscript` lives.

1. Find your R installation folder, usually something like `C:\Program Files\R\R-4.4.1\bin`.
2. Open the Start menu and search for **Edit the system environment variables**.
3. Click **Environment Variables**, select **Path** under *User variables*, and click **Edit**.
4. Click **New** and paste the path to the `bin` folder.
5. Close and reopen your terminal, then try `Rscript --version` again.

On macOS and Linux, the standard R installers add `Rscript` to the PATH automatically.