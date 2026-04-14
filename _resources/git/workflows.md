---
layout: single
title: "Merge Conflicts, Rebasing, and Workflows"
author_profile: false
sidebar:
  nav: "git_sidebar"
toc: true
toc_sticky: true
---

# Git Intermediate Guide

This guide builds on Git basics and introduces:
- Merge conflicts
- Rebasing
- Common workflows

---

## Merge Conflicts

A **merge conflict** happens when Git cannot automatically combine changes.

### Visual

```
Branch A:   o----A1----A2
                     \
Branch B:             B1----B2

Conflict occurs when merging B into A if both modified same lines.
```

---

## Example Conflict

```
<<<<<<< HEAD
print("Hello from main branch")
=======
print("Hello from feature branch")
>>>>>>> feature-branch
```

### How to Resolve

1. Open the file
2. Choose which code to keep (or combine)
3. Remove conflict markers
4. Save file
5. Run:
```bash
git add .
git commit -m "Resolve merge conflict"
```

---

## Rebasing

Rebasing moves your branch onto a new base.

### Visual: Merge vs Rebase

Merge:
```
main:    o----o----o
              \    \
feature:      o----o
```

Rebase:
```
main:    o----o----o
                    \
feature:            o----o
```

---

## Rebase Command

```bash
git checkout feature-branch
git rebase main
```

---

## When to Use Rebase

- Cleaner history
- Before merging feature branches
- Avoid messy commit graphs

⚠️ Avoid rebasing shared/public branches

---

## Git Workflows

### 1. Feature Branch Workflow

```
main → create branch → work → commit → push → pull request → merge
```

Commands:
```bash
git checkout -b feature-name
git add .
git commit -m "Add feature"
git push origin feature-name
```

---

### 2. Git Flow (Simplified)

Branches:
- main (production)
- develop (integration)
- feature/*
- hotfix/*

---

### 3. Forking Workflow

Used in open source:

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

---

## Handling Conflicts During Rebase

If conflict occurs:

```bash
git rebase main
# fix conflicts
git add .
git rebase --continue
```

To cancel:
```bash
git rebase --abort
```

---

## Best Practices

- Pull often
- Keep branches small
- Write clear commit messages
- Use rebase for local cleanup
- Use merge for shared history

---

## Cheat Sheet

| Task | Command |
|------|--------|
| Merge branch | git merge branch-name |
| Rebase branch | git rebase main |
| Abort rebase | git rebase --abort |
| Continue rebase | git rebase --continue |

---

## Summary

- Merge = combine history
- Rebase = rewrite history
- Workflows help teams collaborate efficiently

