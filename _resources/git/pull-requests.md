---
layout: single
title: "Pull Requests"
author_profile: false
sidebar:
  nav: "git_sidebar"
toc: true
toc_sticky: true
---
## What is a Pull Request?

A **Pull Request (PR)** is a way to propose changes from one branch into another (typically into `main`). It allows others to review, discuss, and approve changes before they go live.

---
## GitHub Pull Requests: Roles, Steps, and What to Expect

This guide explains how to create and review a PR, and includes instruction for two common workflows:

### ✅ Workflow A: Direct Repository Access

Use this if:

* You are part of the repo
* You can create branches directly


### 🔁 Workflow B: Fork-Based

Use this if:

* You clicked an **edit link** (e.g., `/edit/...`)
* GitHub says: *“You need to fork this repository to propose changes”*

👉 This happens because you **don’t have write access** to the original repo

---


## Roles in a Pull Request

### **Contributor (Author) = “I made the change”**

You:

* Create or edit content
* Open the Pull Request
* Respond to feedback
* Update the PR until it is approved

👉 You are responsible for getting the PR **ready**, not necessarily merging it.

---

### **Reviewer (Maintainer / Teammate) = “I approve the change”**

You:

* Review the proposed changes
* Request fixes (if needed)
* Approve the PR
* Merge the PR into `main`

👉 You control when changes **go live**.


---

# Workflow A: Direct Pull Request (Same Repository)

## Contributor Steps (GitHub Website)

### 1. Edit or Create a File

* Navigate to a file → click **Edit**
* OR click **Add file**

---

### 2. Create a Branch

* Select **“Create a new branch for this commit”**
* Name it (e.g., `feature-update-docs`)

---

### 3. Commit Changes

* Add a message
* Click **Commit changes**

---

### 4. Open Pull Request

* Click **Compare & pull request**
* Confirm:

  * Base = `main`
  * Compare = your branch
* Add title + description
* Click **Create Pull Request**

---

### 5. PR is “In Progress” (Spinner)

You may see a spinner while:

* GitHub checks conflicts
* Automated checks run

This means:

* PR is still being validated
* It is **not ready to merge yet**

---

### 6. Update Based on Feedback
After the PR has been reviewed, you may need to:
* Edit files again
* Commit → PR updates automatically

---

# Workflow B: Fork + Pull Request (When Prompted to Fork)

## What is happening?

When you click an edit link:

* GitHub detects you **don’t have write access**
* It requires you to **fork the repository first**

A **fork** is your personal copy of the repo where you can safely make changes.

---

## Contributor Steps (Fork Workflow)

### 1. Fork the Repository

* Click **Fork** (top right)
* This creates:

  ```
  {your-username}/{forked-repo}
  ```

---

### 2. Edit File in Your Fork

After clicking an edit link:

* GitHub will:

  * Automatically fork (if not already)
  * Open the editor in your fork

Make your changes.

---

### 3. Commit to a New Branch

* Select **Create a new branch**
* Add commit message
* Click **Propose changes**

---

### 4. Open Pull Request to Original Repo

GitHub will guide you:

* Click **Create Pull Request**
* Ensure:

  * **Base repository** = original repo
  * **Head repository** = your fork
* Add title + description

This creates a PR **from your fork → original repo**

---

### 5. Pull Request is “In Progress” (Spinner)

Same as before:

* Spinner = checks running
* Wait for:

  * ✅ Green checks
  * 👀 Reviewer approval

---

### 6. Respond to Feedback

* Edit files in your fork
* Commit again
* PR updates automatically

---

## Reviewer Steps for PR

1. Open PR → review changes
2. Comment / request changes / approve
4. Click **Merge Pull Request**
5. (Optional) Delete branch

---

## Key Difference: Fork vs Direct

| Feature            | Direct PR    | Fork PR                      |
| ------------------ | ------------ | ---------------------------- |
| Where changes live | Same repo    | Your fork                    |
| Permissions needed | Write access | None                         |
| Common use         | Team repos   | Open source / external edits |

---

## Handling Merge Conflicts (Either Workflow)

If GitHub shows a conflict:

* Click **Resolve conflicts**
* Edit in browser
* Mark resolved
* Commit

---

## When Does the Change Go Live?

A change goes live **only after**:

1. PR is approved
2. All checks pass (**spinner stops**)
3. PR is merged into `main`

---

## Best Practices

* Keep PRs small
* Write clear descriptions
* Don’t merge while spinner is active
* Respond quickly to feedback
* Use forks when you don’t have access

---

## Summary

* Two workflows: **direct** and **fork-based**
* Forks are required when you don’t have write access
* **Contributor** = creates + updates PR
* **Reviewer** = approves + merges
* Spinner = PR still processing
* Changes go live only after merge

---
