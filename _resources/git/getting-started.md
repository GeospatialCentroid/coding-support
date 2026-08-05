---
layout: single
title: "Getting Started"
sidebar:
  nav: "git_sidebar"
toc: true
toc_sticky: true
---

## Install Git

You can install Git by clicking [here](https://git-scm.com/downloads).

Check:

```bash
git --version
```
This will help you confirm that the installation was succesful. 

---

## Basic Workflow

### Step-by-step Visual

```
1. git pull
2. Edit files
3. git add .
4. git commit -am "message"
5. git push
```
It is important to pull recent changes made before you modify files. Failing to do so can result in creating two different versions of a file, making it difficult to push changes. 

---

## Commands

### Check status

This command allows you to see what files have been changed in your local file as well as the global file. 


```bash
git status
```

### Add files

This will allow you to add changes you have made to files to the staging area to be pushed 

```bash
git add .
```

### Commit

Document the changes you have made with a quick message 

```bash
git commit -m "Your message"
```
### Push Files

Move local changes that you have made to the global online repository

```bash
git push
```


---

## GitHub Workflow

### Push to GitHub
```bash
git push origin main
```

### Pull updates
```bash
git pull origin main
```

---

## Branching Visual

```
main branch:      o----o----o
                      \
feature branch:        o----o
```

---

## Collaboration Flow

```
Create Branch → Make Changes → Commit → Push → Pull Request → Merge
```

---

## Cheat Sheet

| Command | What it does |
|--------|-------------|
| git status | See changes |
| git add . | Stage changes |
| git commit | Save snapshot |
| git push | Upload to GitHub |
| git pull | Download updates |

---

## Tips

- Commit often
- Use clear messages
- Use branches
- Pull before pushing

---