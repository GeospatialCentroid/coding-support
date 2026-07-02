---
layout: single
sidebar:
  nav: html_sidebar
title: "CSS Fundamentals"
toc: true
toc_sticky: true
---


## What is CSS? 

CSS is a programming language that allows us to modify the appearance of our web page


CSS, HTML, and Javascript all work together to help us meet our vision for our web page. 


- **HTML is the Structure** of our webpage, it allows us to set up our contents how we want 


- **JavaScript is the Interactive** component. It determines how users are able to interact with our webpage and can help incorporate data. 


- **CSS is the Aesthetic** component. It dictates how our website appears to the user. 


Having a strong understanding how of how CSS works allows us to make our website appear however 
we please. This guide will go through the fundamentals of CSS coding. 

----------------------------------------------------------------------------------


## Fundamentals


### Using CSS Internally and Externally


Because CSS is connected to the structure of our website. We can only truly use 
CSS once this structure is made. 


Once we use HTML to make our websites structure, we are able to connect our CSS 
code either **Within** the html file or **Externally** connected to the html file 


There are two ways that we can use CSS code, either  **Within the HTML** file through an **Inline** series, or through a **Code Block** through an extern .css file. 
of code 


using **Inline** CSS is quicker if we want to make individualized changes to an elements appearnce. 

If we wanted to add our code into the html line of code itself we could do that like so.

```css

<h1 style ="font: bold; text-align: center;" This will be bold and centered </h1> 

```

For broader changes and a further automated process, we can use a **Style Block**. 

This block is built upon using a ```<Style>``` command. 

```css

<style>

h1 { this is where we can add our commands
}

p {commands here}

</style>

```

Using a CSS Style block style requires **Connecting** our **CSS File**, and our **HTML File**.

```css

<!--- this is our html file head --->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- Link to external CSS file -->
    <link rel="stylesheet" href="CSS_FILE.css"> <! -- this is the line of code that will connect our css file --->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linking CSS Example</title>
</head>
</html>

```

CSS codes largest difference is the use of the {} brackets. These are used 
to speciify which element of our **HTML file** we want to **Style**


```css

<style>

h1 {We put our code here for the dominant heading}

h2 {We can put different code here for our first subheading}

</style>

<!-- Notice we don't need to add our <> brackets around our elements in the style block -->

```


### Common Aesthetic Commands

There are a series of common commands that we can use to determine the style of our page. 


|Command Name|Function|
|--------------|------|
| Color | sets the text color |
| font | Determines the Font Size and type | 
| text-align | aligns text | 
| background-color | sets the background color | 
| display | changes how elements are structured | 
| line-break | changes how line breaks are organizaed | 
| column | can organize your text into columns |


### Example

Lets create a line of code that **bold** our header, makes a **blue background**
color, and sets our **font size to 20** 

```css

<style>

h1 {

font font-weight: bold 


/* we can also provide a value like 500 that would determine the weight */
}

p {

font-size : 20px



}

body {
background-color: blue

}

```

### Classes

The biggest benefit that CSS offers is the ability to se **Classes**. These allow us to essentially create aesthetic scripts that can apply to various types of elements. This Process involves connecting our HTML element to a specific section of our CSS file like so. 

```css

<!-- This is our CSS file -->

.Example {
  color: blue;
  text-align: center;
  font-weight: bold; 
}

<!-- lets add this to our HTML file -->

<h1, class = "Example"> This is our awesome blue, bolded header! </h1>

```

Having this allows us to apply large segements of CSS code to an unliminted amount of elements 

If we want to have CSS code that is applied to a whole html script. We can do so using the ```*``` key. 

```css

* {
  <!-- everything in this will be applied to our entire HTML file -->
}

```

## Next Steps 


-------------------------------------------------------------------------------


There are a **Broad** array of stylistic options for your website. We encourage you to look into our
resources for learning more about the different commands and things you can do to bolster your websites appearance! 





