---
layout: single
sidebar:
  nav: hpc_sidebar
title: "HPC" 
toc: true
toc_sticky: true
---

## What is HPC?

**High-Performance Computing (HPC)** refers to the use of powerful computing systems to solve computationally intensive problems more quickly or at a larger scale than would typically be possible on a personal computer.

HPC systems are made up of **computing nodes**—individual computers that can work together to perform calculations. Depending on the problem, a program may run on a single node or be distributed across many nodes, allowing multiple calculations to be performed simultaneously.

HPC environments are commonly accessed through the **command line**, although graphical interfaces, web portals, notebooks, and other tools may also be available. Users typically submit computational jobs to a **job scheduler**, which allocates computing resources such as CPUs, GPUs, memory, and processing time.

HPC is particularly useful for **large-scale or computationally intensive tasks** that would take too long to run on a personal computer or require more memory or processing power than a personal system can provide.

> **HPC is not a programming language or introductory coding tool.** Using an HPC system typically requires some familiarity with programming, the command line, file management, and the process of submitting and managing computational jobs.

---

## What can HPC do?

HPC can be used for a wide range of scientific, engineering, and data-intensive applications. It is especially useful when a problem involves **large datasets, complex calculations, or simulations that require substantial computing resources**.

For example, researchers can use HPC to run **scientific simulations** that model processes that would be difficult or impossible to study directly. These might include:

* **Biological systems:** Simulating molecular interactions, protein structures, cellular processes, and other biological systems.
* **Chemistry and drug discovery:** Modeling chemical reactions and screening large numbers of potential compounds.
* **Climate and environmental science:** Simulating Earth's climate, weather patterns, ocean systems, and other environmental processes.
* **Fluid dynamics:** Modeling the movement of air, water, and other fluids in systems such as aircraft, engines, rivers, and oceans.
* **Engineering:** Testing designs and simulating physical systems before building physical prototypes.
* **Data analysis and machine learning:** Processing very large datasets or training computationally intensive models.

HPC can also make it practical to run **many calculations at the same time**. For example, instead of testing one model or set of parameters at a time, researchers may be able to run hundreds or thousands of independent calculations in parallel.

Ultimately, HPC is a tool for **scaling computation**. The problems it can address depend on the available hardware, software, and computational methods, as well as the researcher's ability to design a problem that can take advantage of those resources.

-------------------------------------------------------------------------------


### Resources for Learning about HPC
In addition to these guides, there are many CSU courses and free resources available for learning about HPC. 

{% include course_tree.html topic="HPC" %}

Here are some of the free resources available organized by category.
{% include resource-table.html topic="HPC" %}
