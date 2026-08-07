---
layout: single
title: "Web Development"
sidebar:
  nav: "web_development_sidebar"
toc: true
toc_sticky: true
---
This guide introduces the fundamentals of **web development** and how the different technologies used to build websites work together.

Web development is the process of creating websites and web applications that people can access through a web browser. A website might be a simple collection of informational pages, an interactive data visualization, or a full web application that allows users to work with data and other online services.

Most websites use three core technologies:

- **HTML** defines the structure and content of a webpage.
- **CSS** controls how the webpage looks and how it adapts to different screen sizes.
- **JavaScript** adds functionality, interactivity, and dynamic behavior.

Together, these technologies allow developers to create websites that work across a range of devices, from desktop computers to tablets and mobile phones.

---

# How Websites Work

When you visit a website, your web browser requests files from a web server and uses those files to construct the webpage you see.

A basic website commonly includes three types of files:

```text
Website
├── index.html
├── style.css
└── script.js
```

Each file has a different role.

## HTML: Structure and Content

**HTML (HyperText Markup Language)** provides the structure of a webpage.

HTML defines elements such as:

- Headings
- Paragraphs
- Links
- Images
- Lists
- Tables
- Forms

Think of HTML as the **skeleton or framework** of a webpage. It determines what content is on the page and how that content is organized.

---

## CSS: Appearance and Layout

**CSS (Cascading Style Sheets)** controls how a webpage looks and how its content is arranged.

CSS can be used to control:

- Colors
- Fonts
- Spacing
- Borders
- Images
- Page layouts
- Navigation menus
- Responsive designs

CSS also allows websites to adapt to different screen sizes. This is known as **responsive web design** and helps ensure that a website is usable on both desktop computers and mobile devices.

Think of CSS as the **design and presentation layer** of a webpage.

---

## JavaScript: Functionality and Interactivity

**JavaScript** adds functionality and interactivity to a webpage.

JavaScript can be used to:

- Respond to user actions
- Change webpage content
- Validate forms
- Work with data
- Create interactive maps and visualizations
- Communicate with web APIs
- Build more complex web applications

Think of JavaScript as the **behavior layer** of a webpage. It allows the page to respond to what users do and to work with information from other sources.

---

# Putting the Pieces Together

A simple website might contain an `index.html`, `style.css`, and `script.js` file.

### `index.html`

The HTML file provides the structure and content of the webpage.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Hello, World!</h1>
    <p>Welcome to my website.</p>

    <script src="script.js"></script>
</body>
</html>
```

### `style.css`

The CSS file controls the appearance of the webpage.

```css
body {
    font-family: Arial, sans-serif;
    margin: 40px;
}

h1 {
    color: steelblue;
}
```

### `script.js`

The JavaScript file can add functionality and interactivity.

```javascript
console.log("Hello from JavaScript!");
```

The three technologies work together:

```text
HTML
Structure and content
       ↓
CSS
Appearance and layout
       ↓
JavaScript
Functionality and interactivity
```

---

# Building for Different Devices

Websites can be viewed on many different devices and screen sizes. A website designed for web development should therefore consider how its content will appear on both **desktop and mobile devices**.

For example, a desktop website might have several columns of information, while the same content could be arranged into a single column on a phone.

CSS provides tools for creating these responsive layouts, while JavaScript can provide additional functionality that responds to the user's device or actions.

The goal is to create websites that are **usable, accessible, and functional regardless of the device being used**.

---

# Launching a Website Project

To get started with a basic website, create a project folder containing the following files:

```text
my-website/
├── index.html
├── style.css
└── script.js
```

The `index.html` file serves as the entry point for the website. It connects the CSS and JavaScript files so that the browser can load them together.

CSS is connected using the `<link>` element:

```html
<link rel="stylesheet" href="style.css">
```

JavaScript is connected using the `<script>` element:

```html
<script src="script.js"></script>
```

Once these files are connected, you can open `index.html` in a web browser to view your website.

As you become more comfortable with these fundamentals, you can begin adding additional tools and technologies to build more sophisticated websites and web applications.
