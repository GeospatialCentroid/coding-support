# CSU Coding Support Hub

A Jekyll-based resource hub for sharing coding learning materials at Colorado State University.

**Live site:** [geospatialcentroid.github.io/coding-support](https://geospatialcentroid.github.io/coding-support/)

---

## File Structure

```
coding-support/
│
├── _data/
│   ├── coding_resources.csv   
|   |-- csu_coding_courses.csv
│   ├── navigation.yml        
│   └── ui-text.yml            
│
├── _includes/
│   ├── resource-table.html   
|   |-- course_tree.html 
│   └── ...                   
│
├── _resources/                
│   ├── python.md            
│   ├── python/               
│   ├── r.md                 
│   ├── r/                   
│   ├── data-viz.md           
│   ├── data-viz/           
│   ├── git.md                
│   ├── git/                  
│   ├── support-policy.md      
│   ├── support-request.md   
│   └── support-15-min.md  
│
├── _sass/
│   └── _custom.scss           
│
├── assets/
│   └── images/
|   |__ font
|   |__ images
|   |__ js
|      |
|      |__ main.js
|      |__ course_tree.js               
│
├── .github/workflows/
│   └── jekyll.yml            
│
├── _config.yml          
├── index.html                
└── Gemfile                  
```


### File Contents 

|File Name| Purpose| 
|-------|-----------|
| coding_courses.csv | non CSU course based learning resources for tables |
| csu_coding_courses.csv | CSU course information for course trees | 
| navigation.yml | allows you to add markdowns to coding resource page |
| index.html | Used for creating new coding cards & connecting to css code | 
| resource-table.html | html file for targetting coding resource script | 
| course_tree.html | contains code for targetting course_tree script and course information popup features | 
| custom.scss | contains all css code for webpage | 
| resources/ | holds all resource markdown documents and intro markdown documents |


---

## How Resource Tables Work

Resource tables on each topic page are driven automatically by `_data/coding_resources.csv`. You do not need to edit any page files to add or update resources just update the CSV.

### CSV Column Reference

| Column | Description |
|--------|-------------|
| `Topic` | The page the resource belongs to (e.g. `Python`, `R`, `Bash`) |
| `Category` | The section/table heading (e.g. `Video Courses / Structured Learning Paths`) |
| `Level` | Skill level (e.g. `Beginner`, `Intermediate`, `Advanced`) |
| `Resource` | Display name of the resource |
| `Author / Provider` | Who made it |
| `Best for (goal)` | One-line description of what it's useful for |
| `URL Link` | The clickable URL |
| `Use in Website Y/M` | Set to `Y` to show on the site, `M` to hide |

**To add a new resource:** add a row with the correct `Topic`, set `Use in Website Y/M` to `Y`.

**To hide a resource:** change `Use in Website Y/M` from `Y` to `M`.

**To add a new category:** just use a new value in the `Category` column — the section heading and table will appear automatically on the next build. No code changes needed.

---

## Adding a New Topic Page

If a new topic needs its own page (e.g. Bash, SQL, AI), follow these steps:

### 1. Make sure the CSV has entries for that topic

Check that `_data/coding_resources.csv` has rows with the correct `Topic` value and `Use in Website Y/M` set to `Y`. The `Topic` value is case-sensitive and must match exactly what you use in step 2.

### 2. Create the page file

Create a new file in `_resources/`, e.g. `_resources/bash.md`:

```markdown
---
title: Bash
layout: single
sidebar:
  nav: "bash_sidebar"
toc: true
toc_sticky: true
---

Welcome to **Bash**... (add your intro content here)


### Formatting Headers 

There are some tools that you can use when creating markdown documents. 

when we want to create headings we will use the ```#``` character. Commonly, the markdowns will either have **2** or **3** poundsigns to signifiy 
the level of subheading. 

To add emphasis to works in bold, use ``` ** ``` before and after the worlds of choice. For italics you can use a single asterisks. 

to create a note for readers in your guide. Use ```>Note``` at the start of a line. 

Here is an example of how to create a code block 

``` python

' This is a code block, we use ``` at the beginning and end of our code block'
' and specify the coding language that we want to use'

```
>Note: Be sure to avoid overfilling your code blocks horizontallly as this will lead to your md page not rendering properly on the website. 
---

## Resources for Learning Bash

for adding a **Resource Table** you will add this code below 

{% include resource-table.html topic="Bash" %}

for creating a **Course Tree**, use this code 

{& inlude course_tree.html topic="Bash" %}


```

> ⚠️ The `topic=` value must exactly match the `Topic` column in the CSV — including capitalization.

### 3. Add sidebar navigation

Open `_data/navigation.yml` and add a sidebar entry for the new topic following the same pattern as the existing ones (e.g. `python_sidebar`, `r_sidebar`).

to ensure that the sidebar path works. Make sure you are adding sidebar md documents into a properly named file in the resources column. 

### 4. Add a homepage card (optional)

If the topic should appear as a card on the homepage, edit `index.html` following the same pattern as the existing topic cards. Add a matching card image to `assets/images/`.

```bash
  - image_path: /assets/images/python-card.png
    alt: "Python"
    title: "Python"
    excerpt: "Learn to Code in Python"
    url: "/python/"
    btn_label: "Python"
```

---

## Site Pages

| Page | URL |
|------|-----|
| Home | https://geospatialcentroid.github.io/coding-support/ |
| Python | https://geospatialcentroid.github.io/coding-support/python/ |
| R | https://geospatialcentroid.github.io/coding-support/r/ |
| Data Visualization | https://geospatialcentroid.github.io/coding-support/data-viz/ |
| Git & GitHub | https://geospatialcentroid.github.io/coding-support/git/ |

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


## Pushing changes to the website

We do NOT want to be pushing changes we are making to the website directly. Instead, we should be using the **dev** branch. Here is the proper workflow for making changes that will not impact the website immediately 

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
Content and feature development supported by OpenAI (2026). ChatGPT [Large language model]. https://chat.openai.com/chat