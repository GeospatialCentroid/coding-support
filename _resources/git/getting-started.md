---
layout: single
title: "Getting Started"
permalink: git/getting-started/
sidebar:
  nav: "git_sidebar"
toc: true
toc_sticky: true
---

### Install Git
https://git-scm.com/downloads

Check:
```bash
git --version
```

---

## Basic Workflow

### Step-by-step Visual

```
1. Edit files
2. git add .
3. git commit -m "message"
4. git push
```

---

## Commands

### Check status
```bash
git status
```

### Add files
```bash
git add .
```

### Commit
```bash
git commit -m "Your message"
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