---
layout: single
title: "Web Development"
sidebar:
  nav: "javascript_sidebar"
toc: true
toc_sticky: true
---

This guide will go into the introductory concepts of working with websites and 
webpages in Java Script

Javascript is good at making websites more interactive through it's series 
of functions and data pulling abilities. 

### Prerequisites

In order to utilize Javascript for web development. It is important to have a strong foundation in 
**HTML** and **CSS**, if you would like to learn HTML basics, access our [guide here]()

### Launching Your Website

In order to begin your project you will want to create 3 files 

- **index.html** 

 This will provide structure for your website. Think of this like a blank canvas for 
 your website where you have all the information avaliable.
 
- **style.css**

  This will allow you to adjust the style of your website. this will determine how you modify your 
  website to change it's appearance and how the data is represented. 
  
- **script.js**

You will need to make these files talk to eachother. This can be done by 
**linking** your css and your javascript files to your html. 

in the <head> of your HTML. Use the follwing command to do so. 

```Javascript

<link rel="stylesheet" href="style.css"
<script defer src="script.js"></script>

```

These commands will allow you to add the **features** ofered by the style.css and the 
script.js to your html file. 

to **open** your website you can save changes made to all your files, and then
open your **index.html** in the browser. 

### Interacting With Your Website

This guide will focus on using the **Document Object Model**  (**DOM**). 

What is **DOM**? 

DOM allows you to interact with your HTML file through 

- Style **Modification** 
- Changing **Text and Content**
- Responding to **User Actions**

A series of **DOM** commands will allow you to manipulate your website. 

One of the first series of commands is the **Document** commands, these allow
you to interact with the contents of a web page

Lets look at some examples 


```JavaScript

// We can create a new document object 

new Document()

/* This command alone would let us create a new web page.
We can also get elements from a web page with this command*/

document.querySelector("p") // this would select a paragraph. 

document.querySelector("h1") // this would select our heading.

```

The document command can return any part of a webpage that you are looking for.

We can also create new elements within a document through the use of the **Element** 
command series 

```
// if we wanted to create a new paragraph we could use this code

let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";

```

-------------------------------------------------------------------------------

## Next Steps 

Web development using JavaScript Requires a strong foundation in java. We recommend
that you check out our provided resources to learn more about how to use JavaScript
and apply it to various applications. 


