---
layout: single
sidebar:
  nav: unix_sidebar
title: "Working With Files"
toc: true
toc_sticky: true
---

## Accessing File Contents in UNIX

Accessing file contents is one of the most powerful features of UNIX-based systems. It allows you to quickly inspect, modify, and analyze data directly from the terminal, which is essential for many real-world workflows.

---

## Opening & Working With Files

### Viewing File Contents with `cat`

The `cat` command is a standard tool used to display the contents of files such as `.txt` and `.csv`.

```bash id="a9k2q1"
cat file_name.csv
```

You can also display multiple files at once:

```bash id="p3x8lm"
cat file1.txt file2.txt
```

---

### Creating and Combining Files with `cat`

The `cat` command can also be used to create and combine files.

#### Create a New File

```bash id="z7r2kf"
cat > file_3.txt
```

After running this command, you can type content directly into the terminal and save it to the file.

#### Combine Files

```bash id="v1q9bc"
cat file1.txt file2.txt > combined_file.txt
```

This merges the contents of multiple files into a new file.

---

### Useful `cat` Options

| Option | Description                  |
| ------ | ---------------------------- |
| `-n`   | Show line numbers            |
| `-b`   | Number non-empty lines       |
| `-s`   | Remove repeated blank lines  |
| `-A`   | Show non-printing characters |

---

## Reading Files in Reverse with `tac`

The `tac` command works similarly to `cat`, but displays file contents in reverse order (bottom to top).

```bash id="j2m8rt"
tac combined_file.txt > reversed_file.txt
```

---

## Viewing Sections of Files

### `head` (Top of File)

Displays the first 10 lines by default:

```bash id="e8l4hp"
head file.txt
```

Specify a number of lines:

```bash id="u3k9we"
head -n 15 file.txt
```

---

### `tail` (Bottom of File)

Displays the last 10 lines:

```bash id="y7f2ds"
tail file.txt
```

---

### Combining `head` and `tail`

You can combine commands to view specific sections of a file:

```bash id="q4n8zc"
head -n 20 file.txt | tail -n 10
```

This displays lines 11–20 of the file.

---

## Searching File Contents with `grep`

The `grep` command allows you to search for specific text within files.

```bash id="m6w2xp"
grep "keyword" file.txt
```

### Common Options

| Option | Description                  |
| ------ | ---------------------------- |
| `-i`   | Ignore case                  |
| `-n`   | Show line numbers            |
| `-v`   | Show lines that do NOT match |

Examples:

```bash id="c9v5kb"
grep -in "keyword" file.txt
grep -v "keyword" file.txt
```

---

## Opening Files

Some systems allow you to open files (like PDFs or images) directly from the terminal using commands such as `open` (macOS) or system-specific equivalents.

---

## Best Practices

* Use `cat`, `head`, and `tail` to quickly inspect files before editing
* Combine commands with pipes (`|`) to refine output
* Be mindful when overwriting files using `>`
* Practice commands in a safe directory before applying them to important data

---

## Summary

Working with file contents in the shell is essential for efficient data handling and analysis. These tools allow you to quickly explore files, extract information, and build streamlined workflows directly from the command line.

---

## Next Steps

To continue building your skills, consider learning:

* Bash scripting for automation
* Advanced text processing tools (e.g., `awk`, `sed`)
* Integrating shell workflows with programming languages

These skills will help you work more effectively with data and scale your projects across different systems.