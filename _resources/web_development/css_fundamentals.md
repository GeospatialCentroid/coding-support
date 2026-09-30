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

```html 
<h1 style="font-weight: bold; text-align: center;">
  This heading is bold and centered
</h1>
```

<h1 style="font-weight: bold; text-align: center;">
  This heading is bold and centered
</h1>


#### 2. Internal CSS (style block)

Defined inside a `<style>` tag in the HTML `<head>`:

```html
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

```html
<link rel="stylesheet" href="styles.css">
```

This is the most scalable approach for larger projects.

---

### CSS Syntax

CSS uses **selectors** and **declarations**:

```css
selector {
  property: value;
}
```

Example:

```css
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

```css
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

If you don't want all of your headers looking the exact same, or would like to create specific stylings for parts of your website, you can use **Classes** which allow you to create custom style choices. 

### CSS File

```css
.highlight {
  color: blue;
  text-align: center;
  font-weight: bold;
}
```

### HTML Usage

``` html
<h1 class="highlight">This is a styled heading</h1>
```
This wuld give us a blue heading that is bolded, located in the center. 


---

### Universal Selector

For some general features of our website, such as setting our font class, background colors, and default size of our webpage. 
The universal selector (`*`) applies styles to all elements:

```css
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



