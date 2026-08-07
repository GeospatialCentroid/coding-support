---
layout: single
title: "JavaScript Document Object Model"
sidebar:
  nav: "web_development_sidebar"
toc: true
toc_sticky: true
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
