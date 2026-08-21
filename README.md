# CSU Coding Support Hub

## Overview

This repository contains a Jekyll-based website for sharing technology and coding-related resources at Colorado State University. The site is designed to provide a centralized, easy-to-navigate collection of materials that support learning, research, and skill development across the CSU community.

## Design Principles

Ease of maintenance has been a primary consideration in the development of this site. The structure emphasizes simplicity, consistency, and minimal technical overhead, allowing contributors to update content quickly and efficiently.

Key design choices include:

- Single content directory: All resource pages are stored in the `_resources` folder, reducing complexity and making content easy to locate.
- Markdown-based pages: Content is written in Markdown, enabling straightforward editing with minimal formatting requirements.
- Data-driven content: Two supporting CSV files—`coding_resources.csv` and `csu_coding_courses.csv`—are used to dynamically populate sections of the site. These datasets are filtered by topic to ensure that only relevant information appears on each page.

**Live site:** [https://codingsupport.colostate.edu/](https://codingsupport.colostate.edu/)

---

## File Structure

Here are the pertinent files which power this resource hub:

```
coding-support/
│
├── _data/
│   ├── coding_resources.csv (learning resources tables)  
|   ├── csu_coding_courses.csv (CSU course table) 
│   ├── navigation.yml  (site navigation)    
│   └── ...           
│
├── _includes/
│   ├── resource-table.html (table widget - used with {% include resource-table.html topic="AI" %})  
|   ├── course_tree.html (tree widget - used with {% include course_tree.html topic="Python" %})  
│   ├── footer/custom.html (custom footer)
│   ├── chatbot.html (chatbot widget)
|   └── ...                   
│
├── _resources/ (all web pages live here, folders used to group child pages)               
│   ├── python.md            
│   ├── python/               
│   ├── r.md                 
│   ├── r/                   
│   ├── data-viz.md           
│   ├── data-viz/           
│   ├── git.md                
│   ├── git/   
    ├── ...          
│   ├── support-policy.md      
│   ├── support-request.md   
│   └── support-15-min.md  
│
├── _sass/
│   └── _custom.scss  (style sheet adjustments)          
│
├── assets/
│   └── images/ (graphics used in website)  
|   └── ...
|   └── js
|      │
|      ├── main.js
|      └── course_tree.js (JavaScript for tree widget)              
│
├── .github/workflows/
│   └── jekyll.yml   (GitHub action to compile static website when main branch is pushed)          
│
├── _config.yml  (global settings)         
├── index.html   (splash page)              
└── ...                  
```


---

## How Resource Tables Work

Resource tables on each topic page are driven automatically by `_data/coding_resources.csv`. You do not need to edit any page files to add or update resources just update the CSV.

### Resource Tables CSV Column Reference

| Column | Description |
|--------|-------------|
| `Topic` | The page the resource belongs to (e.g. `Python`, `R`, `Bash`). Use commas to separate multiple topics |
| `Category` | The section/table heading (e.g. `Video Courses / Structured Learning Paths`). Use existing categories for consistency |
| `Level` | Skill level (e.g. `Beginner`, `Intermediate`, `Advanced`) |
| `Resource` | Display name of the resource |
| `Author / Provider` | Who made it |
| `Best for (goal)` | One-line description of what it's useful for |
| `URL Link` | The clickable URL |
| `Use in Website Y/M` | Set to `Y` to show on the site, `M` (for maybe) to hide |

**To add a new resource:** add a row with the correct `Topic`, set `Use in Website Y/M` to `Y`.

**To hide a resource:** change `Use in Website Y/M` from `Y` to `M`.

**To add a new category:** just use a new value in the `Category` column — the section heading and table will appear automatically on the next build. No code changes needed.

---

## Adding a New Topic Page

If a new topic needs its own page (e.g. Bash, SQL, AI), follow these steps:

### 1. Make sure the CSV has entries for that topic

Check that `_data/coding_resources.csv` has rows with the correct `Topic` value and `Use in Website Y/M` set to `Y`. The `Topic` value is case-sensitive and must match exactly what you use in Step 2.

### 2. Create the page file

Create a new file in `_resources/` (e.g. `_resources/bash.md`) with front matter:

```markdown
---
title: Bash
layout: single
sidebar:
  nav: "bash_sidebar"
toc: true
toc_sticky: true
---

Welcome to ... (add your intro content here)
```


### Formatting Headers 

There are some tools that you can use when creating markdown documents. 

when we want to create headings we will use the ```#``` character. Commonly, the markdowns will either have **2** or **3** poundsigns to signifiy the level of subheading. 

Note: The front matter 'title' will be injected into the page with heading 1, so all page headers should use 2 or more pound signs (e.g ##).

To add emphasis to works in bold, use ``` ** ``` before and after the worlds of choice. For italics you can use a single asterisks. 

to create a note for readers in your guide. Use ```>Note``` at the start of a line. 

Here is an example of how to create a code block 

``` python

' This is a code block, we use ``` at the beginning and end of our code block'
' and specify the coding language that we want to use'

```

>Note: Be sure to avoid overfilling your code blocks horizontallly as this will lead to your markdown page not rendering properly on the website. 

---

### Course Tree and Resources table widget injections

For creating a **Course Tree**, use: 

```{% inlude course_tree.html topic="Bash" %}```

For adding a **Resource Table** use 

```{% include resource-table.html topic="Bash" %}```




> ⚠️ The `topic=` value must exactly match the `Topic` column in the CSV — including capitalization.

### 3. Add sidebar navigation

Open `_data/navigation.yml` and add a sidebar entry for the new topic following the same pattern as the existing ones (e.g. `python_sidebar`, `r_sidebar`), and add an approatiate title and url.

### 4. Add a homepage card (optional)

If the topic should appear as a card on the homepage, edit `index.html` following the same pattern as the existing topic cards. Add a matching card image to `assets/images/`.

An example homepage card entry looks like:

```bash
  - image_path: /assets/images/python-card.png
    alt: "Python"
    title: "Python"
    excerpt: "Learn to Code in Python"
    url: "/python/"
    btn_label: "Python"
```
---
## 🔍 Search Functionality

The website uses Algolia to power its search feature. This third-party service indexes all site content to deliver fast and relevant search results.

Content is pushed to Algolia via the command line, where it is indexed and made searchable.

### 🔄 Updating the Search Index

Whenever new content is added or existing content is updated, you’ll need to re-index the site. Run the following command:
```bash
ALGOLIA_INDEX_NAME='coding-support' ALGOLIA_API_KEY={API_KEY} bundle exec jekyll algolia
```
>Note: Replace {API_KEY} with your actual Algolia API key.
---

## Local Development

Local Development allows you to view changes you are making to the markdown files or any component of the website before you push them to github. You can launch a local host server with this code below: 

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve
```

Then open [http://localhost:4000/coding-support/](http://localhost:4000/coding-support/)

> **Note:** Requires Ruby. On Windows, use RubyInstaller with DevKit (Ruby 3.x recommended). See [Jekyll on Windows](https://jekyllrb.com/docs/installation/windows/) for setup instructions.


## Pushing Changes to the Website

We do **NOT** want to be pushing changes we are making to the website directly. Instead, we should be using the **dev** branch. Here is the proper workflow for making changes that will not impact the website immediately 

```bash

git pull 

git checkout dev 

"make changes here" 

git add "this is where you changes files will go, you can also use git add . to select all changes" 

git commit -am "put your commit message here saying what you did" 

git push 

```


---

## Built With

- [Jekyll](https://jekyllrb.com/) — static site generator
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) — Jekyll theme
- [GitHub Pages](https://pages.github.com/) — hosting
- [GitHub Actions](https://github.com/features/actions) — automated build and deploy

## Credits and Acknowledgments

**Special thanks to:**

* **Andrew Zimbelman (Centroid Intern)** — Content development and feature implementation
* **Riley Nelson (Centroid Intern)** — Development of the resource table

**AI-assisted support:**

Portions of content development and feature design were supported by large language models, including:

* OpenAI (2026). *ChatGPT* [Large language model]. https://chat.openai.com
* Google (2026). *Gemini* [Large language model]. https://gemini.google.com

These tools were used to assist with drafting, structuring, and refining content.
