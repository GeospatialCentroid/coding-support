---
layout: single
sidebar:
  nav: web_development_sidebar
title: "CSS Fundamentals"
toc: true
toc_sticky: true
---

## What is CSS?

**CSS** (*Cascading Style Sheets*) is a stylesheet language used to control the **appearance and layout** of a webpage.

CSS works alongside HTML and JavaScript:

* **HTML** → Structure (what content is on the page)
* **CSS** → Style (how the page looks)
* **JavaScript** → Behavior (how the page interacts with users)

With CSS, you can control colors, fonts, spacing, layout, and overall design. A strong understanding of CSS allows you to create visually engaging and user-friendly websites.

---

## Fundamentals

### Ways to Use CSS

CSS can be applied to HTML in three main ways:

#### 1. Inline CSS (within an element)

Used for quick, one-off styling:

```html id="r7k2pl"
<h1 style="font-weight: bold; text-align: center;">
  This heading is bold and centered
</h1>
```

#### 2. Internal CSS (style block)

Defined inside a `<style>` tag in the HTML `<head>`:

```html id="xk8l2s"
<style>
h1 {
  font-weight: bold;
}

p {
  font-size: 16px;
}
</style>
```

#### 3. External CSS (recommended)

Stored in a separate `.css` file and linked to your HTML:

```html id="3p9q1v"
<link rel="stylesheet" href="styles.css">
```

This is the most scalable approach for larger projects.

---

### CSS Syntax

CSS uses **selectors** and **declarations**:

```css id="2k0mza"
selector {
  property: value;
}
```

Example:

```css id="y9c3dq"
h1 {
  color: blue;
  text-align: center;
}
```

* The **selector** (`h1`) targets HTML elements
* The **properties** (`color`, `text-align`) define styles
* The `{}` brackets group styling rules

---

## Common Styling Properties

| Property             | Description              |
| -------------------- | ------------------------ |
| `color`              | Sets text color          |
| `font-size`          | Controls text size       |
| `font-family`        | Changes font type        |
| `text-align`         | Aligns text              |
| `background-color`   | Sets background color    |
| `display`            | Controls layout behavior |
| `margin` / `padding` | Controls spacing         |

---

## Example

```css id="8w2pks"
body {
  background-color: blue;
}

h1 {
  font-weight: 500;
}

p {
  font-size: 20px;
}
```

This example:

* Sets a blue background
* Styles headings with a specific weight
* Adjusts paragraph text size

---

## Classes

CSS **classes** allow you to reuse styles across multiple elements.

### CSS File

```css id="k2m8vx"
.highlight {
  color: blue;
  text-align: center;
  font-weight: bold;
}
```

### HTML Usage

```html id="p0z2nl"
<h1 class="highlight">This is a styled heading</h1>
```

Classes make it easy to apply consistent styling across your site.

---

### Universal Selector

The universal selector (`*`) applies styles to all elements:

```css id="4v9kqe"
* {
  margin: 0;
  padding: 0;
}
```

---

## Best Practices

* Use **external CSS** for larger projects
* Keep styles organized and consistent
* Avoid excessive inline styling
* Test your design across different screen sizes
* Use meaningful class names

---

## Next Steps

CSS offers a wide range of styling capabilities. To continue learning, explore:

* Layout systems like **Flexbox** and **Grid**
* Responsive design for mobile devices
* Advanced styling and animations

Building strong CSS skills will help you create polished, professional, and accessible web experiences.



