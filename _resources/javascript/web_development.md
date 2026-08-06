---
layout: single
title: "Web Development"
sidebar:
  nav: "javascript_sidebar"
toc: true
toc_sticky: true
---
---

This guide introduces the fundamentals of using JavaScript to work with websites and web pages.

JavaScript adds interactivity and functionality to websites by allowing developers to respond to user actions, modify page content, and work with data from different sources.

---

# Prerequisites

To use JavaScript for web development, it is important to have a basic understanding of **HTML** and **CSS**.

HTML provides the structure of a webpage, CSS controls the appearance and style, and JavaScript adds behavior and interactivity.

For an introduction to HTML basics, see the [HTML guide](/coding-support/html/).

---

# Launching a Website Project

A basic website project typically contains three main files:

## index.html

The `index.html` file provides the structure of the webpage. It acts as the foundation of the website by defining elements such as headings, paragraphs, images, and other content.

Think of HTML as the framework or skeleton of a webpage.

---

## style.css

The `style.css` file controls the appearance of the webpage. CSS can be used to adjust colors, fonts, spacing, layouts, and other visual elements.

Think of CSS as the design layer that controls how the website looks.

---

## script.js

The `script.js` file contains JavaScript code that adds functionality and interactivity to the webpage.

JavaScript can be used to automate actions, respond to user input, update content, and create dynamic experiences.

---

## Connecting Files Together

For these files to work together, the CSS and JavaScript files must be linked to the HTML document.

The CSS file is connected using the `<link>` element, and the JavaScript file is connected using the `<script>` element.

These references are typically added within the HTML document:

```html
<link rel="stylesheet" href="style.css">

<script src="script.js"></script>
```

After saving changes to each file, the website can be opened by selecting the `index.html` file and viewing it in a web browser.

---

# Adding JavaScript to a Website

This guide focuses on using the **Document Object Model (DOM)** to interact with webpage content.

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface that represents an HTML document as a collection of objects that JavaScript can access and modify.

Using the DOM, JavaScript can:

* Modify webpage styles
* Change text and content
* Add or remove elements
* Respond to user actions

DOM methods allow JavaScript to interact directly with elements displayed on a webpage.

---

# Selecting Elements

The `document` object provides methods for finding and interacting with webpage elements.

For example:

```javascript
document.querySelector("p")
```

This selects the first paragraph (`<p>`) element on the page.

```javascript
document.querySelector("h1")
```

This selects the first heading (`<h1>`) element on the page.

The `querySelector()` method can be used to find elements using HTML tags, classes, or IDs.

Example:

```javascript
document.querySelector(".button")
```

This selects an element with the class name `button`.

---

# Creating New Elements

JavaScript can also create new elements and add them to a webpage.

The `createElement()` method creates a new HTML element:

```javascript
let newElement = document.createElement("p");

newElement.textContent = "This is a new paragraph";
```

This creates a new paragraph element and adds text content to it.

To display the new element on a webpage, it must be added to an existing element:

```javascript
document.body.appendChild(newElement);
```

This adds the new paragraph to the webpage body.

---

# Next Steps

JavaScript provides powerful tools for creating interactive and dynamic websites. After learning these foundational concepts, the next steps include exploring events, user interactions, data handling, and JavaScript libraries that expand what can be built for the web.
