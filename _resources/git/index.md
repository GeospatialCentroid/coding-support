---
layout: single
title: "Git & GitHub"
permalink: git/
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

Here’s your content as a **single clean Markdown section** (no nested headers beyond the section title, consistent formatting, ready for Jekyll):


## Traditional vs Modern Approach to Version Control

**Traditional Approach**

Say you have a text file called `file.txt`. You make a change to it but want to track that change, so you save it with a new name like `file_v01.txt`.

As you continue working, you might end up with:

```

file.txt
file_v01.txt
file_v02.txt
file_v02_FINAL.txt
file_v02_FINAL_REALLY.txt

```

Over time, this approach becomes difficult to manage.

**Common Problems**

- Hard to know which version is the most up-to-date  
- No clear history of what changed between versions  
- Difficult to collaborate with others  
- Easy to accidentally overwrite or lose work  
- No record of who made specific changes  


**Modern Approach (Using Git)**

With Git, you keep a single file and track changes using commits.

```

file.txt

Git History:
o──o──o──o

```

Each point represents a saved version of your project.

**Advantages of Git**

- Tracks changes automatically  
- Allows you to revert to previous versions at any time  
- Makes collaboration easier and safer  
- Records who made changes and why  
- Keeps your project organized without duplicate files  

---

**Visual Comparison**

```

Traditional:                Git:

file_v1.txt                 file.txt
file_v2.txt                    |
file_v3.txt                    v
file_FINAL.txt              o──o──o──o

```

Instead of managing many confusing file copies, Git provides a clear and reliable history of your work—making it easier to organize, track, and collaborate on projects.


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

## GitHub Features
In addition to version control management, GitHub offers:
- Issue tracking
- Project management
- Collaborations 
- And many other features 


## Making Your Code Citable (Zenodo + GitHub)
While GitHub is great at keeping your code up-to-date, 
in research publication, you often want to create a snapshot
of the code you used as part of your analyis. GitHub does offer 'releases', but in the academic world, **DOIs (Digital Object Identifier)** are the gold standard.

You can turn your GitHub repository into a **citable research product** using Zenodo.

### How it Works

1. Create a repository on GitHub  
2. Connect it to Zenodo (https://zenodo.org)  
3. Create a release in GitHub  
4. Zenodo assigns a DOI

### Visual: Citation Workflow

## Summary

- Version control keeps your work safe and organized  
- GitHub enables collaboration and project management  
- Zenodo allows your code to be cited like a research publication  
