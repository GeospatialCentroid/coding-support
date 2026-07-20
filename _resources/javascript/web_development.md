---
layout: single
title: "Web Development"
sidebar:
  nav: "javascript_sidebar"
toc: true
toc_sticky: true
---

This guide will go into the introductory concepts of working with websites and 
webpages in Java Script.

Javascript is good at making websites more interactive through it's series 
of functions and data pulling abilities. 

## Prerequisites

In order to utilize Javascript for web development. It is important to have a strong foundation in 
**HTML** and **CSS**, if you would like to learn HTML basics, access our guide [here](https://geospatialcentroid.github.io/coding-support/html/)


## Launching Your Website

In order to begin your project you will want to create 3 files 

- **index.html** 

 This will provide structure for your website. Think of this like a blank canvas for 
 your website, where you can build the **Skeleton** of how you want it to be organized.
 
- **style.css**

  This will allow you to adjust the style of your website. This provides you a broad range of options for how your website information appears. 
  
- **script.js**

  This file allows you to write **Javascript** code that you can add to your webpage, automating functions and creating more interactive options. 

You will need to make these files talk to eachother. This can be done by 
**Linking** your css and your javascript files to your html.  


In the <head> of your HTML. Using the **link** command and the **href** command allow you 
to connect your files. 

```html

<link rel="stylesheet" href="style.css"
<script src="script.js"></script>

```



to **open** your website you can save changes made to all your files, and then
open your **index.html** in the browser. 


## Adding Code to Your Website. 

This guide will focus on using the **Document Object Model** (DOM).

What is **DOM**? 

DOM allows you to interact with your HTML file through 

- **Style Modification** 
- **Changing Text and Content**
- **Responding to User Actions**

A series of **DOM** commands will allow you to manipulate your website. 

One of the first series of commands is the **Document** commands, these allow
you to interact with the contents of a web page.

Lets look at some examples.


```javascript

// We can create a new document object 

new Document()

```
This command alone would let us create a new web page!

We can also get elements from a web page with this command

```javascript
document.querySelector("p") // this would select a paragraph. 

document.querySelector("h1") // this would select our heading.

```

The document command can return any part of a webpage that you are looking for.

We can also create new elements within a document through the use of the **Element** 
command series.

``` javascript
// if we wanted to create a new paragraph we could use this code

let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";

```

-------------------------------------------------------------------------------

## Next Steps 

Web development using JavaScript Requires a strong foundation in java. We recommend
that you check out our provided resources to learn more about how to use JavaScript
and apply it's diverse applications.


