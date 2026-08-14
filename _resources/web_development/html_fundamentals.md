---
layout: single
title: "HTML Fundamentals"
sidebar:
  nav: "web_development_sidebar"
toc: true
toc_sticky: true
---

## Introduction

This guide introduces the fundamentals of **HTML** and how it is used to build webpages. It also highlights how **CSS (Cascading Style Sheets)** can be used alongside HTML to control the visual appearance of your site.

---

## Accessing HTML Services

HTML is highly accessible and can be written using a variety of tools, including:

* Basic text editors (e.g., Notepad, TextEdit)
* Online editors (e.g., CodePen, JSFiddle, W3Schools Try-It Editor)
* Integrated Development Environments (IDEs)

While you *can* write HTML in simple editors, using an IDE offers several advantages:

* **Syntax highlighting** to catch errors early
* **Built-in tools** to run and test code
* **Version control integration** (e.g., Git) for collaboration

Popular IDEs for HTML development include:

* Visual Studio Code
* WebStorm
* Brackets

---

## Webpages vs. Websites

A **website** is a collection of related **webpages**.

* A **website** contains multiple pages, resources, and functionality
* A **webpage** is a single document within that site

Websites are organized using a **file structure (directories)**. As you navigate a site, the URL changes to reflect your position within that structure.

---

## HTML Syntax Basics

HTML uses **tags** to define elements. Most tags have:

* An **opening tag**: `<tag>`
* A **closing tag**: `</tag>`

Example:

```html
<p>This is a paragraph.</p>
```

---

## Basic HTML Structure

Every HTML document follows a standard structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example Web Page</title>
</head>
<body>
  Page content goes here
</body>
</html>
```

### Key Components

* `<!DOCTYPE html>` → Declares the document type
* `<head>` → Contains metadata (not displayed on the page)
* `<body>` → Contains visible content

---

## Common HTML Elements

### Paragraphs and Text

```html
<p>This is a paragraph.</p>
```

You can enhance text using:

* `<strong>` → Bold/important text
* `<em>` → Emphasized text
* `<br>` → Line break
* `<abbr>` → Abbreviations

---

### Superscripts and Subscripts

```html
O<sub>2</sub>        <!-- Subscript -->
x<sup>2</sup>       <!-- Superscript -->
```

---

### Code Blocks

```html
<code>
print("Hello, world!")
</code>
```

---

## Structuring Content

HTML provides semantic elements to organize your webpage:

### Headings

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Subheading</h3>
```

### Sections and Main Content

```html
<section>
  <h2>Section Title</h2>
  <p>Content goes here</p>
</section>

<main>
  <p>Main content of the page</p>
</main>
```

### Lists

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

---

## Navigation and Links

Links are created using the anchor (`<a>`) tag:

```html
<a href="https://example.com">Visit Example</a>
```

You can group links into navigation menus:

```html
<nav>
  <ul>
    <li><a href="page1.html">Page One</a></li>
    <li><a href="page2.html">Page Two</a></li>
  </ul>
</nav>
```

---

## Adding Images and Videos

### Images

```html
<img src="image.jpg" alt="Description of image" width="300">
```

* `src` → Image source
* `alt` → Alternative text for accessibility

### Videos

```html
<video controls width="400">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

---

## Best Practices

* Always properly open and close tags
* Organize your content with clear structure
* Test your code frequently in a browser
* Plan your layout before building your page

---

## Next Steps

Now that you understand the basics of HTML, consider learning:

* **CSS** to style and design your webpages
* **JavaScript** to add interactivity
* More advanced HTML elements and accessibility practices

Building a strong foundation in HTML will make it much easier to learn modern web development tools and frameworks.
