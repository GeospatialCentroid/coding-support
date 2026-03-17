---
layout: single
title: "Git & GitHub"
permalink: /git/
sidebar:
  nav: "git_sidebar"
toc: true
toc_sticky: true
---


## What is Git?

Git is a **version control system** that tracks changes in your code.

---

## Why Version Control is Important

Version control helps you manage your code safely and efficiently.

### Key Benefits

- **Track Changes** – See what changed and when  
- **Undo Mistakes** – Revert to earlier versions  
- **Collaboration** – Work with others without overwriting work  
- **Backup** – Your code history is stored and recoverable  



### Visual: Git as a Timeline

```
Working Directory → Staging Area → Repository

   file.txt        git add          git commit
      |               |                 |
      v               v                 v
   (edited)      (staged)        (saved snapshot)
```

Think of Git as a **time machine for your code**.


## What is GitHub?

GitHub is a **cloud platform** where you store and share your Git repositories.

### Visual: Local vs GitHub

```
Your Computer (Local)        GitHub (Remote)
---------------------        ----------------
   Your Project   ───────▶    Online Repository
       ▲                         │
       └───────────────◀─────────┘
           push              pull
```



## Making Your Code Citable (Zenodo + GitHub)

You can turn your GitHub repository into a **citable research product** using Zenodo.

### How it Works

1. Create a repository on GitHub  
2. Connect it to Zenodo (https://zenodo.org)  
3. Create a release in GitHub  
4. Zenodo assigns a **DOI (Digital Object Identifier)**  

### Visual: Citation Workflow

## Summary

- Version control keeps your work safe and organized  
- GitHub enables collaboration and project management  
- Zenodo allows your code to be cited like a research publication  
