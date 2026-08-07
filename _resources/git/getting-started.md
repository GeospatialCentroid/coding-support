---
layout: single
title: "Getting Started"
sidebar:
  nav: "git_sidebar"
toc: true
toc_sticky: true
---
# Git and GitHub

Git is a **version control system** that allows you to track changes to files, collaborate with others, and maintain a history of your work.

**GitHub** is an online platform that hosts Git repositories. A repository on GitHub is commonly called a **remote repository**, while the copy of that repository on your computer is your **local repository**.

This guide will show you how to:

- Install Git
- Configure Git on your computer
- Connect your computer to your GitHub account
- Clone a GitHub repository to your computer
- Make changes locally
- Commit your changes
- Push your changes back to GitHub
- Pull changes made by other collaborators
- Work with branches

> **Git vs. GitHub:** Git is the version control software running on your computer. GitHub is an online service that hosts Git repositories and provides tools for collaboration.

---

## Install Git

You can install Git from the official [Git website](https://git-scm.com/downloads).

After installing Git, open a terminal and check that it was installed successfully:

```bash
git --version
```

You should see something similar to:

```text
git version 2.x.x
```

---

## Configure Git

Before working with repositories, it is a good idea to configure the name and email address that Git will associate with your commits.

### Configure Your Name

```bash
git config --global user.name "Your Name"
```

For example:

```bash
git config --global user.name "Jane Doe"
```

### Configure Your Email

Use an email address associated with your GitHub account:

```bash
git config --global user.email "your_email@example.com"
```

You can check your settings with:

```bash
git config --global user.name
git config --global user.email
```

These settings identify you as the author of commits. Your Git username is separate from your GitHub username.

*For more information, see the official GitHub documentation on configuring your Git username.*

---

## Connect Your Computer to GitHub

To push changes from your computer to GitHub, Git needs a way to authenticate your GitHub account. There are two common approaches:

1. SSH authentication
2. HTTPS authentication

This guide uses SSH, which allows you to authenticate using an SSH key stored on your computer.

### Create an SSH Key

An SSH key consists of two related files:

- **Private key:** Stored securely on your computer. Never share this file.
- **Public key:** Added to your GitHub account.

If you do not already have an SSH key, create one with:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

When prompted for a location, you can usually accept the default:

```text
~/.ssh/id_ed25519
```

You may also be asked to create a passphrase. Using a passphrase provides additional protection for your private key. After creating the key, you should have two files:

- `~/.ssh/id_ed25519`
- `~/.ssh/id_ed25519.pub`

The file ending in `.pub` is your public key.

> **Important:** Never share `id_ed25519`. Only your public key (`id_ed25519.pub`) should be added to GitHub.

*GitHub provides additional instructions for generating an SSH key and adding it to the SSH agent.*

### Add Your SSH Key to GitHub

First, display your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

You should see a long line beginning with something like:

```text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA...
```

Copy the entire line. Then:

1. Sign in to GitHub.
2. Open your GitHub account settings.
3. Select **SSH and GPG keys**.
4. Select **New SSH key**.
5. Give the key a descriptive title, such as:
   - Personal Laptop
   - Work Computer
   - MacBook
6. Paste your public key into the **Key** field.
7. Select **Add SSH key**.

*You can find the current instructions in GitHub's documentation for adding an SSH key to your GitHub account.*

### Test Your GitHub Connection

After adding your SSH key to GitHub, test the connection:

```bash
ssh -T git@github.com
```

The first time you connect, you may be asked whether you trust GitHub's host. Review the message and confirm if appropriate. A successful connection should produce a message indicating that you have authenticated successfully.

---

## Connect a Local Repository to GitHub

There are two common situations. 

### Option 1: Clone an Existing GitHub Repository

If a repository already exists on GitHub, you can clone it to your computer.

On GitHub:

1. Open the repository.
2. Select **Code**.
3. Select **SSH**.
4. Copy the repository address.

It will look something like:

```text
git@github.com:USERNAME/REPOSITORY.git
```

In your terminal, navigate to the folder where you want to store the repository:

```bash
cd ~/Documents
```

Then clone the repository:

```bash
git clone git@github.com:USERNAME/REPOSITORY.git
```

Git will create a new folder containing a local copy of the repository. For example:

```bash
git clone git@github.com:GeospatialCentroid/coding-support.git
```

Move into the repository:

```bash
cd coding-support
```

You can verify that Git knows where the remote repository is located with:

```bash
git remote -v
```

You should see something similar to:

```text
origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
origin  git@github.com:USERNAME/REPOSITORY.git (push)
```

*GitHub provides additional information in its guide to cloning a repository.*

---

## Understanding Local and Remote Repositories

When working with GitHub, it is useful to understand that you are working with two copies of the repository.

```text
Your Computer                         GitHub
┌─────────────────┐                  ┌─────────────────┐
│ Local Repository│                  │ Remote Repository│
│                 │                  │                 │
│ Edit files      │                  │                 │
│ Commit changes  │                  │                 │
└────────┬────────┘                  └────────▲────────┘
         │                                    │
         │             git push               │
         ├───────────────────────────────────►│
         │                                    │
         │             git pull               │
         │◄───────────────────────────────────┤
         │                                    │
         └────────────────────────────────────┘
```

The important commands are:

- `git pull` → Download changes from GitHub
- `git add` → Prepare local changes for a commit
- `git commit` → Record a snapshot of your changes
- `git push` → Upload your commits to GitHub

### Basic Git Workflow

A typical workflow looks like this:

1. `git pull`
2. Edit files
3. `git status`
4. `git add .`
5. `git commit -m "Describe your changes"`
6. `git push`

The workflow can be summarized as:

```text
GitHub
   │
   │ git pull
   ▼
Local Repository
   │
   │ Edit files
   ▼
Changed Files
   │
   │ git add
   ▼
Staging Area
   │
   │ git commit
   ▼
Local Commit
   │
   │ git push
   ▼
GitHub
```

Pulling changes before beginning work helps ensure that your local copy is up to date with the remote repository.

---

## Check Your Repository Status

Before and after making changes, it is useful to check the status of your repository:

```bash
git status
```

This can tell you:

- Which branch you are working on
- Which files have been modified
- Which files are new
- Which files are staged for a commit
- Whether your local branch is ahead of or behind the remote repository

---

## Pull Updates

Before beginning work, pull the latest changes from GitHub:

```bash
git pull
```

You can also specify the remote and branch:

```bash
git pull origin main
```

Here:
- `origin` is the name Git normally gives the remote repository.
- `main` is the branch you are pulling from.

> **Tip:** Get into the habit of pulling before beginning a new work session, especially when collaborating with other people.

---

## Make Changes Locally

After pulling the latest version, edit your files using your preferred editor. For example, you might open the repository in Visual Studio Code:

```bash
code .
```

Make your changes and save your files. You can then see what changed:

```bash
git status
```

### Stage Your Changes

Git uses a staging area to determine which changes should be included in your next commit. To stage all changed and newly created files:

```bash
git add .
```

You can then check the status again:

```bash
git status
```

Files listed under **Changes to be committed** are ready to be included in your next commit.

### Commit Your Changes

A commit creates a snapshot of your staged changes. Use:

```bash
git commit -m "Describe your changes"
```

For example:

```bash
git commit -m "Add introduction to geospatial science"
```

Good commit messages should briefly describe what changed.

**Good commit messages**
- Add introduction to geospatial science
- Fix broken navigation link
- Update Python installation instructions
- Add HPC tutorial

**Less useful commit messages**
- changes
- update
- stuff
- fixed things

> **Important:** `git commit -am "message"` only stages files that Git is already tracking. It does not automatically include new files. For beginners, `git add .` followed by `git commit -m "message"` is usually clearer.

### Push Your Changes to GitHub

Once you have committed your changes, send them to GitHub:

```bash
git push
```

Or explicitly specify the remote and branch:

```bash
git push origin main
```

Your local commits will now be available in the remote GitHub repository.

---

## Working With Branches

Branches allow you to work on changes without modifying the main branch directly. A common workflow is:

```text
main
 │
 ├── Create feature branch
 │
 ▼
feature/my-update
 │
 ├── Make changes
 ├── Commit changes
 └── Push branch
 │
 ▼
Pull Request
 │
 ▼
Review
 │
 ▼
Merge into main
```

Create a new branch:

```bash
git switch -c feature/my-update
```

Move between branches:

```bash
git switch main
```

See your current branch:

```bash
git branch
```

Push a new branch to GitHub:

```bash
git push -u origin feature/my-update
```

---

## Collaboration Workflow

When working with other people, it is generally better to use a branch rather than making changes directly to `main`. A typical collaboration workflow is:

```text
Create Branch
      ↓
Make Changes
      ↓
git add
      ↓
git commit
      ↓
git push
      ↓
Create Pull Request
      ↓
Review
      ↓
Merge
      ↓
Pull Updated main
```

A Pull Request allows collaborators to review your proposed changes before they are merged into the main branch.

---

## Understanding origin and main

You will frequently see commands such as:

```bash
git push origin main
```

These words have specific meanings:

- **origin:** `origin` is the default name Git gives to the remote repository when you clone a repository. You can see your remote repositories with:
  
  ```bash
  git remote -v
  ```

- **main:** `main` is the name commonly used for the primary branch of a repository. However, repositories can use different branch names. Always check which branch you are working on:

  ```bash
  git branch
  ```

---

## Common Workflow Example

Imagine you are working on a website hosted in a GitHub repository.

First, download the latest changes:
```bash
git pull
```

Edit your website files. Check what changed:
```bash
git status
```

Stage the changes:
```bash
git add .
```

Create a commit:
```bash
git commit -m "Update website introduction"
```

Send your changes to GitHub:
```bash
git push
```

The updated files are now available in the remote repository.

---

## Cheat Sheet

| Command | What it does |
|---------|--------------|
| `git --version` | Check that Git is installed |
| `git config --global user.name` | Configure your Git name |
| `git config --global user.email` | Configure your Git email |
| `git clone URL` | Copy a remote repository to your computer |
| `git remote -v` | View connected remote repositories |
| `git status` | See the current state of your repository |
| `git pull` | Download changes from the remote repository |
| `git add .` | Stage changes |
| `git commit -m "message"` | Create a snapshot of staged changes |
| `git push` | Upload local commits to GitHub |
| `git branch` | View branches |
| `git switch -c NAME` | Create and switch to a new branch |
| `git switch NAME` | Switch branches |

---

## Tips for Working With Git and GitHub

- **Pull** before you start working to get the latest changes.
- Check `git status` frequently to understand what Git is tracking.
- **Commit often** so you have a history of your work.
- Write **clear commit messages** that describe what changed.
- Use **branches** when working on new features or collaborating.
- **Push** your work regularly so your changes are backed up on GitHub.
- **Do not share** your private SSH key.
- **Do not commit** passwords, API keys, or other secrets to a repository.
- Check `.gitignore` to make sure temporary files, credentials, and other files that should not be tracked are excluded.
- Use **Pull Requests** when working on shared projects.

---

## The Big Picture

The most important concept to understand is that Git allows you to maintain a history of your work while GitHub provides a place to share and collaborate on that work.

```text
             GITHUB
        Remote Repository
              ▲
              │
          git push
              │
              │
        Local Repository
              │
       ┌──────┴──────┐
       │             │
   git commit     git pull
       │             │
       ▼             │
   Local Work ◄──────┘
       │
       ▼
   Edit Files
```

A typical workflow is:
**Pull → Edit → Status → Add → Commit → Push**

Once you are comfortable with this workflow, you can begin exploring more advanced Git features such as branches, pull requests, merge conflicts, tags, and collaborative workflows.
