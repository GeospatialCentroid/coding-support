---
title: "Setting up a Virtual Environment"
layout: single
permalink: /python/virtual-environment
sidebar:
  nav: "python_sidebar"
toc: true
toc_sticky: true
---
# Working With and Sharing Virtual Environments (pip and Conda)

This guide explains how to create, manage, and share Python virtual environments using both **pip/venv** and **conda**. Virtual environments allow you to isolate project dependencies so different projects can use different package versions without conflict.

---

# Why Use Virtual Environments?

Virtual environments help you:

- Avoid dependency conflicts between projects
- Reproduce environments on other machines
- Share projects with collaborators
- Keep your system Python installation clean

---

# Option 1: Using pip and venv

The **venv** module is included with Python 3 and works with **pip**.

## 1. Create a Virtual Environment

Navigate to your project folder and run:

```bash
python -m venv .venv

```
This creates a folder named .venv containing the environment.

2\. Activate the Environment
----------------------------

### Mac / Linux

```bash
source .venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Once activated, your terminal prompt will show the environment name.

3\. Install Packages
--------------------

```bash
pip install pandas matplotlib jupyter
```

4\. Save Dependencies
---------------------

To share your environment, export installed packages:

```bash
pip freeze > requirements.txt 
```   


5\. Recreate the Environment
----------------------------

Someone else can recreate the same environment:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt  
```

6\. Deactivate Environment
--------------------------

```bash
deactivate
```

Option 2: Using Conda
=====================

Conda environments are commonly used for **data science**, **scientific computing**, and **cross-language dependencies**.

Conda can be installed via:

*   **Anaconda**
*   **Miniconda**
*   **Miniforge** (conda-forge based)
    

Creating a Conda Environment
============================

```bash
conda create -n myenv python=3.11 
```

Activate it:

```bash
conda activate myenv
```

Installing Packages
===================

Using default conda channels:

```bash
conda install numpy pandas matplotlib
```

Using **conda-forge**:

```bash
conda install -c conda-forge geopandas
```

Listing Environments
====================

```bash  
conda env list 
```

Exporting an Environment
========================

To share your environment with others:

```bash
conda env export > environment.yml
```

Recreating the Environment
==========================

```bash
conda env create -f environment.yml 
```

Activate it:

```bash
conda activate myenv
```

Updating the Environment
========================

```bash
conda env update -f environment.yml --prune
```

Removing an Environment
=======================

```bash
conda remove --name myenv --all
```

Best Practices
==============

1\. Keep environments project-specific
--------------------------------------

Example project layout:

```bash
my_project/
.venv/
src/
data/
requirements.txt 
```

2\. Always share dependency files
---------------------------------

For pip:

```bash
requirements.txt 
```

For conda:

```bash 
environment.yml
```

Conda environments usually live outside the project folder.

pip vs Conda
============

| Feature                         | pip + venv              | Conda                   |
| ------------------------------- | ----------------------- | ----------------------- |
| Included with Python            | Yes                     | No                      |
| Handles non-Python dependencies | No                      | Yes                     |
| Environment file                | requirements.txt        | environment.yml         |
| Common in                       | General Python projects | Data science / research |



Example Workflows
================

pip workflow
------------

```bash
python -m venv .venv
source .venv/bin/activate
pip install pandas jupyter matplotlib
pip freeze > requirements.txt   
 ```

conda workflow
--------------

```bash
conda create -n analysis python=3.11
conda activate analysis
conda install pandas jupyter matplotlib
conda env export > environment.yml
```

Additional Resources
====================

*   [https://docs.python.org/3/library/venv.html](https://docs.python.org/3/library/venv.html)
*   [https://pip.pypa.io](https://pip.pypa.io)
*   [https://docs.conda.io](https://docs.conda.io)
*   [https://conda-forge.org](https://conda-forge.org)