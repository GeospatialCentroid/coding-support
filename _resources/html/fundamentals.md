---
layout: single
title: "Fundamentals"
sidebar:
  nav: "html_sidebar"
toc: true
toc_sticky: true
---

## Introduction

This guide will cover how to access HTML coding services, and the fundamental syntax
and applications for building a webpage. We will also cover how building a webpage differs from an 
entire website. 

--------------------------------------------------------------------------------

###Accessing HTML Services 

HTML can be accessed through a **Diversity** of different locations and softwares. 
This is because HTML is written into .html files such as 

- **Notepads**

- **TextEdit**

This allows for you to write HTML code without needing to download external 
softwares or **Integrated Development Environment**

With this in mind, using an **IDE** will allow you a few benefits such as:

1. **Syntax Highlighting**
   
   Identify missing code portions as well as erros in your code, allowing you to
   make amendments while writing the code. 

2. **Git Collaboration** 

   GIt is a software that allows for collaboration between computers working on 
   1 project. More information on using git can be found 
   [Here](https://geospatialcentroid.github.io/coding-support/git/)

3. **Build Tools**
   IDES allow you to run and test code within the environment so you do not need
   to swtich tools to do so. 

A few IDE's that work well with HTML coding consist of [**VS Code**](https://code.visualstudio.com/download?_exp_download=fb315fc982), 
[**Webstorm**](https://www.jetbrains.com/webstorm/promo/), 
and [**Brackets**](https://brackets.io/). 

You can click on any of these to download them to your computer! 

If you would like to us an online software, you can use HTML coding platforms 
provided by [**CodePen**](https://codepen.io/)
, [**W3 Schools**](https://www.w3schools.com/tryit/tryit.asp?filename=tryhtml_default)
, and [**JSFiddle**](https://jsfiddle.net/)

--------------------------------------------------------------------------------

## Webpages vs Websites

When we are navigating a **Website**. We are accessing an entire display of information and 
services that is in the form of **Webpages**.  Websites operate similarily to a file system.Where our webpages are
differnet files in our directory. Lets look at an exampl.e 


When you click [This](https://geospatialcentroid.github.io/coding-support/) link, 
you will be taken to the homepage for the Coding Support Hub. the two components we want to focus on are 
our **geospatialcentroid.github.io** directory, and our **coding-support directory**


The **geospatialcentroid.github.io** is our first directory. This is the area where we 
store our repository code that tells our website how to behave. 


The **/coding_support directory/** is the first webpage on our website and the first step
down our file path


If we were to click on a link in our support hub such as the Python link. Our https link would change
to include a **/python/** component. This is because we are navigating down our file path from our root 
into where our python information is stored.


If we go into our python folder and click the Installing Python side tab. We will expand our HTTPS link
to include **/installing/**. This means that in our github folder, there is a link in our Python folder that takes us 
to our fundamentals webpage.

--------------------------------------------------------------------------------

## Syntax

Before we start talking about coding structure and commands. It's important to establish how commands are structured 

When we write commands, we will begin and end our command with <command name> and </command name>. 

Here is an example if we wanted to write a paragraph style text

```HTML

<p> we are writing our paragraph here and we will end it now </p>

```

We start off any HTML file with our Header. It will contain our **tags**, which 
determine how our webpage and our content is represented. This will not be shown 
when we run our code. 

There are 3 tags that commonly go into our Introductory code block.

something to note is that commonly any commands that we will use in HTML are surrounded
with the <> symbols


**!DOCTYPE**

  This code will tell our browser that we will be using HTML.
  
  Here is an example of setting this code up
  
```html 
  
<!DOCTYPE html>
  
```
**Head** 

The head will be where we enter our metadata which is provided below. 

  - **Element**
  
  The element and the Charset are similar, as they both will establish the languae of 
  the webpage 

  - **Title**
   
   The title provides the main display for our webpage. This will be the largest
   and introductory text so the reader knows what information is avaliable. 
   
  - **Charset**

  The Charset is short for our character set. It determines what language our website will be in 
  
  - **Link**

  The link section is where we will add stylistic choices to our webpage. 
  
**Body**

  The body is where we will write our code outside of the header. It will be the code
  that is visible to the audience. This code is not written within the head
  
If we were to make an example of a webpage code block. It would look something like this

```html

<!DOCTYPE>
<html lang = "en">
<head>
  <meta charset="UTF-*">
  <title>Example Web Page</title>
</head>
<body>
  We will add page contents here 
</body>
</html>

```
### Element Basics

  **Paragraphs**
  
  Most of our text content will be held within paragraphs. These are notated with 
  the variable p.
  
```html
  
  <p> this is example text 
  this text can span multiple lines as 
  long as it is within our p contraint.
  Lets end it here </p>
  
```

  we can modify the contents of our paragraphs by using commands such as the **Strong**
  command which can bold words and phrases, as well as the **abbr** command, which caan we used to create abbreviations.
  Another important element is the **br** command, which allows us to add breaks in our paragraph. 
  
  Lets look at an example that utilizes all of these. 
  
```html

  <p> We are beginning our paragraph here and I really want to emphasize 
  <strong> this </strong> word. However, I want that word to be in a 2 character format
  <br>
  
  </br>
  
  So I am going to do that right now in this section. 
  <strong> <abbr> title = "this" >TI< </abbr> </strong>
  </p>
```
we can also bold words with the em command. 

**Element Modification** 


There are other ways that we can modify are text. some examples are creating **superscripts**, **subscripts**, and 

**coding** blocks. 

Lets make some superscripts and subscripts 

to create a subscript, we will use the **sub** command

``` html

the chemical formula for oxygen is O<sub>2</sub>

```

we can follow a similar process using the **sup** command 

``` html

to square the value x we can type out x<sup>2</sup>. 

```

lets get meta. Let's make a code block within a code block

```html 

if we wanted to make a code block in html it would look like this

<code> "Lets use an example of a print command"
        
        print("Hello World")
        
        "When we add quotations we make comments the output would look like"
        
        Hello World
</code>

```

--------------------------------------------------------------------------------

## Content Structuring 

There are a few terms that are beneficial to understand to better structure your 
webpage 

- **Header**

  Headers are where we can break up long blocks of text within sections by information categories 
  
  main headers are notated by **h1**. subheadings are created within headers
  by using larger numeric values such as h2 and h3
  
  we can also add **Footers** to our content by adding a footer command 
  to the end of a content block
  
- **Section**

  A Section is where we can break up or information into seperate code blocks. 
  It allows for further organization with headers. 
  
  the code for a section follows our <> </> rule
  
```html
  
  <h1> Different Examples </h1>
  
  <section>
  
  <h2> Example One </h2>
  
  <p> this is where we can store information within a subheader of a large section. 
  </p>
  
  </section>
  
```

One piece of content that should go outside of sections and headings is **article**.
This infromation is primarily used for pieces of information that are useful on their own. 

` **Main**

  This is the location for the main information within a section. 
  
```html
  
  <main>
  
    <p> we are adding information to this section because we are organized </p>
    
    <p> if we want to add another paragraph of information here we can do so</p>
    
  </main>  <!-- This is a comment! Notice how we begin and end our main command so
                the computer knows when to stop using it! ->
  
```
  
- **Listing**

If we want to  make lists within our page, we can do so by using the **li**, **os**, and **us**
commands which stand for **list items**, **ordered lists**, and **unordered lists** respectively.

Note: The different between an ordered list and an unordered list is that ordered lists commonly
will use **letters and numbers**, while unordered lists will use **bullet points*. 

  If we want to use our list items, we can do so as so by adding them into an **ordered list** 
  
```html
  
  <p> here is a list of example words </p>
     
     <ul>
        <li> CSU
        <li> CU
        <li> UNC
     </ul>
     
     <!-- we can make a nest list as well --->
     
     <ol>
        <li> CSU
            <ol>
              <li> Fort collins, Colorado
            </ol>
        <li> CU
            <ol>
              <li> Boulder, Colorado 
            </ol>
        <li> UNC
            <ol>
              <li> Greeley, Colorado
            </ol>
     </ol>
```
        
- **Nav**

  A navigation window allows you to add multiple different webpage links within your
  websiteto a list on your webpage. This can be done through using the **href** command 
  
  lets go through our **href** command first. Our href command relies on using **hyperlinks**. These 
  let you link a webpage or website through a single word or phrase. We will use the *a* as an anchor element to 
  create our hyperlink using href. 
  
``` HTML
  
  <a href = "link provided here">name for your embeded link here</a>
  
```
if we want to use this in conjunction with the **nav** command, we can do so like this. 

``` HTML 

<nav>
  <ul>
    <li> <a href = "link">Name</a>
    <li> <a href = "second/link/here">Name Here</a>
  </ul>
</nav>

```
--------------------------------------------------------------------------------

## Adding Images and Videos 

We can add images and videos to our webpage as well. This can be done through 
the **img** command and the **video** command

for our **img** command. we will use this in conjunction with the **src** and **alt** 
commands. 

```HTMl
<img> 
  src = "file path / url to our image"
  width = "value"
  height = "value"
  alt = "an alternate image name in case our image doesn't show up"
</img>
```

we can follow a similar process with the **img** command. 

```HTML
<video controls width="value"" height ="value" autoplay> <!-- These commands will 
                                                              will set a size and autoplay the video 
                                                              when it ends -->
 <source src = "enter your video link or path"/>
 <p> this is alternative text if our video doesn't work, such as adding antoher
 link to the video usign href </p>
</video>

```
--------------------------------------------------------------------------------

## Summary

### Best Practices

- always start and end your commands with <> </> 

- Create an outline before you begin building your webpage

- Test run your code frequently to insure you haven't missed anything and it looks
  how you want it to look. 
  
### Next Steps 

Explore our coding resources for HTML to learn more about what you can do with it. 
You can also begin exploring new coding languages that have website building capabilities such 
as javascript to build upon your HTML coding experience. 











.