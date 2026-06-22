---
layout: single
sidebar:
  nav: html_sidebar
title: "CSS Fundamentasl"
toc: true
toc_sticky: true
---


## What is CSS? 

CSS is a programming language that allows us to modify the appearance of our web page


CSS, HTML, and Javascript all work together to help us meet our vision for our web page. 


- **HTML is the Structure** of our webpage, it allows us to set up our contents how we want 


- **JavaScript is the interactive** component. It determines how users are able to interact with our webpage


- **CSS is the aesthetic** component. It dictates how our website appears to the user. 


Having a strong understanding how of how CSS works allows us to make our website appear however 
we please. This guide will go through the fundamentals of CSS coding. 

----------------------------------------------------------------------------------


## Fundamentals


### Using CSS


Because CSS is connected to the structure of our website. We can only truly use 
CSS once this structure is made. 


Once we use HTML to make our websites structure, we are able to connect our CSS 
code either **Within** the html file or **Externally** connected to the html file 


We can connect our CSS code **Within the HTML** file through a **Style Block** or an **Inline** series 
of code 

Here is an example of using a **style Block**

```css

<style>

h1 { this is where we can add our commands
}

p {commands here}

</style>

```

If we wanted to add our code into the html line of code itself we could do that like so

```css

<h1> <style> this is where we add our styling code </style> 
this is where we add our html contnets </h1>

Connecting our CSS code **Externally** requires adding code to our html head block 

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


### Syntax and Commands

CSS Syntax is similar to the syntax of HTML files 


When we want to state that a code block is for css code we can use the **Style command**


```css

<Style>

We put our code here

</Style>

/* here is a CSS comment!*/

```


CSS codes largest difference is the use of the {} brackets. These are used 
to speciify which element of our **HTML file** we want to **Style**

```

<style>

h1 {We put our code here for the dominant heading}

h2 {We can put different code here for our first subheading}

</style>

<!-- Notice we don't need to add our <> brackets around our elements in the style block -->

```

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

## Next Steps 


-------------------------------------------------------------------------------


There are a **Broad** array of stylistic options for your website. We encourage you to look into our
resources for learning more about the different commands and things you can do to bolster your websites appearance! 





