---
layout: single
sidebar:
  nav: excel_sidebar
title: 'Excel Fundamentals'
toc: true
toc_sticky: true
---

## Installing Excel 

### Is Excel open access?

One thing to note about using Excel is that if you are not with an institution
or organization that pays for it, then you will have to pay for a monthly or 
yearly access plan.

A paywall free software that can provide similar benefits is google sheets.
This course however primarily focuses on Excel operations which may be similar 
to google sheets but may have some differences 

### Accessing Excel 

The first step to accessing excel is to sign into your microsoft account. This 
can be provided by an instiution or organization as your school or work email 

### Downloading Excel 

Following [This](https://www.microsoft.com/en-us/microsoft-365/excel?ocid=ORSEARCH_Bing&msockid=2a68803dd7c7641b346696e4d6066551)
link to access microsoft 365's page. Here you can sign in, access excel online,
view payment plans for excel, and download it! 

If you only need to reach the download page, click [this link](https://www.microsoft.com/en-us/microsoft-365/excel?ocid=ORSEARCH_Bing&msockid=2a68803dd7c7641b346696e4d6066551#Download-the-app)

--------------------------------------------------------------------------------

## Excel Basics 

### Data Types 
Excel offers a wide array of data types that can be used in your spreadsheet.
Understanding when to use what datatypes is important for ensuring you have clean data
that can be effectively analyzed. 

|Data Type|Appearance|Best Purpose| 
|----|---------|------------------|
|General|Hello|If you have no specific purpose|
|Number|6|Running computations and doing math| 
|Currency|$ 6.00 | Running functions requiring currency remainders|
|Date|1/1/2026|Working with Time Series Data|
|Accounting|$ 6.00|Running accounting related math|
|Time|1/1/2026: 12:00Pm|Logging specific events or values at certain times| 
|Percentage|600%|Performing Statistical or Scientific Data work|
|Fraction|6 1/2| Larger scale math| 
|Scientific|6.00 E+00| Data with extremely large values| 
|Text|Basic Text|Logical Operators and adding annotations to a spreadsheet|

It's important to use the correct data types as your work gets more complex. 
Having the wrong data data type can limit what you can do with your spreadsheet
and may delay project tasks. 

### Headers 

At the top of your spreadsheet headers can help you navigate to differnet tools 

- **Home**

The Home section of the spreadsheet houses most of the cell stylistic and formatting information. 
Some examples are the text size, font, conditional formatting, borders, and highlighting within cells 

- **Insert**

The Insert section is one of the most widely used sections as it allows you to add 
external information to your spreadsheet such as CSV's, and images. This section 
also allows you to visualize data which is something we will touch on later 

- **Share**

The share section provides the resources to publish your data and create a link from it.

- **Page Layout** 

The layout section allows you to use more large scale and specific aesthetic features 

- **Formulas**

One of the most important excel sections, this allows you to insert functions, formulas,
and run calculations in your workbook 

- **Data**

This section allows you to manipulate your data in significant ways that an help clean up the organization
of it. Base level analysis is also possible with the data section. 

- **Review**

You can review the history and back end performance in this section. 

- **View**

This section allows you to change how you view the sheet 

- **Automate**

You are able to import scripts and automation functions into your spreadsheet to improve efficiency 

- **Help**

Access tutorials, and other resources to improve your excel skills 

- **Draw**

Create informal annotations in your spreadsheet 


--------------------------------------------------------------------------------

## Common Excel Tools 

### Transferring Data Between Cells 

**Copying information** is possible through pressing CTRL+C in one cell, and 
CTRL+V in your target cell. You can also copy and paste information from other workbooks, spreadsheets, and even URLS. 

The small green box in the bottom of the cell your working in allows you to also copy 
a value from one cell to a undetermined amount of cells within the same row or column. 
This tool also is also able to automate tedious processes with functions. 

![Image of Green Box Before]("......../excel/Images/Before_Green_Box_copy.png")


Before we used our copy feature


![Image of Green Box After]("./excel/Images/After_Green_Box_Copy.png")


This is our result! See how it effectively transferred our cell value


### Pattern Recognition Between Cells 

Excel has the unique ability to **Recognize Patterns** between cells and begin to automte processes 

This is done when you provide at least 2 data points in adjacent cells as a reference

![Image of green box]("......../excel/Images/Before_Green_Box_Translate.png")

When we highlight these two cells and drag down with the green box, we see that it will begin to fill in the pattern
it has recognized. 

![Image of green box outcome]("......../excel/Images/After_Green_Box_Translate.png")

### Add and Remove content

right clicking on a column or row will give you the option to remove the row/column
, or add a row/column to the left
or right of that column/row

### Wrap

The **wrap button** is located in our home header and looks like a blue snake.

Pressing this button will take any text in your cell and make it fit the cell width 

```excel

--------------------------------------------------------
its the differ|ence| betwe|en a cell that is long like this 
--------------|----|------|-----------------------------                        
and a shorter |    |      |
              |    |      |
cell like this|    |      |
---------------------------------------------------------
```

### Merge

Right clicking over a series of cells will allow you to **merge** the contents 
of those cells into one much larger cell

--------------------------------------------------------------------------------


## Working With Spreadsheet Data 

### Data Organization

Excel offers a variety of different tools that allow you to organize, and clean 
data.


- **Ascending and Descending Functions**
  
  Excel's ascending and descending feature allow you to display your 
  data by a select columns values. It will sort this column either by maximum to 
  minimum values, or minimum to maximum values 
  

-**Custom Sort**

  Custom sort is a powerful tool when working with spreadsheeets that allows you 
  to organize it by the value within multipe different columns. 
  
  ![Custom Sort Example](......./excel/Images/Custom_Sort_Example.png)
  
-**Pivot Tables**

  Pivot tables are an effective way to organize large spreadsheets to select for 
  data of interest, allowing for you to remove noise and unneeded columns to fit 
  one goal. 
  
-**Data Validation**

  Excels data validation tools allows you to predetermine what data types and what 
  values are allowed in certain columns. This is especially beneficial when you have columns
  that need to be grouped into 1 data type consistently or need values that have to be exactly uniform
  in a large data set
  
  the **List** validation tool is especially benefical. Using this allows you to create a list
  of words and values that are allowed in a column, helping to remove any inconsistencies
  between rows 
  
### Visualizing Data 

There are many tools that serve different purposes in excel for analyzing data.
While there are many ways to visualize data, these are some common ones. 

|Visualization Tool Name|Best for|
|------------------------------|--
|Table|Describing diverse data sets|
|Line Graph Graph| Depicting relationships between 2 variables|
|Column Graph|Comparing two different variables|
|Pie Chart|Showing groupings in a data set| 
|Box Plot| Showing the statistical relationships of variables| 
|Histogram| Showing the distribution of values in a spreadsheet|
|Conditional Formatting| Highlighting cell values across large gradients|

### Analyzing Data 

For analyzing data, there are various tools and functions that can make tedious 
or repetitive tasks automated. 

- **Formulas**

|Formula Type|Purpose|
|---|----------------|
|Financial|Computes values to provide financial information|
|Logical|Computes boolean values for a column of data|
|Text|Allows you to maniuplate characters and strings| 
|Date & Time| Lets you pull values from date and time data types| 
|Look up & Reference|Provides functions to pull certain cell values and types| 
|Math|Lets you run mathmatic computations| 

Formulas can be used in conjunction with **functions** which are a tool that allows you
to combine multiple formulas and apply them over parts of a column or multiple columns. 

----------------------------------------------------------------------------------------

## Next Steps

Now that we have introduced somwe basic components of excel. We will briefly 
outline vba coding and script writing. 





  
  





