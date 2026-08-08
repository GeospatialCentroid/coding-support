---
layout: single
sidebar:
  nav: excel_sidebar
title: Excel Fundamentals
toc: true
toc_sticky: true
---

## Installing Excel 

To either **Access Excel** on your browser or **Download** it. Click [here](https://www.microsoft.com/en-us/microsoft-365/excel?ocid=ORSEARCH_Bing&msockid=2a68803dd7c7641b346696e4d6066551)

The first step to **Accessing Excel** on your browser is to sign into your microsoft account. This 
can be provided by an **Institution or Organization**, where you can sign in with a work or school email.

If you are interested in **Downloading Excel**, you can click the link provided, and scroll down to the **Download the app** section, where it will prompt you with instructions
to download the proper installation files. 

--------------------------------------------------------------------------------

## Excel Basics 

### Sheets VS Workbooks

Before we start, a quick distinction should be made between **Sheets** and **Workbooks**.

In Excel, we work in a **Workbook**. This is what we assign a name to when creating the file. When we are working within a 
workbook we are manipulating a **Sheet**. There can be multiple different sheets in one workbook. 

### Data Types 

There are many different data types in Excel.

Understanding when to use what datatypes is important for ensuring you have **Clean Data**
that is compatible with scripts and can be **Transferred Among Softwares**. 

Having the right data can also keep your spreadsheet **Organized**

|Data Type|Appearance|Best Purpose| 
|----|---------|------------------|
|General|Hello|If you have no specific purpose|
|Number|6|Running computations and doing math| 
|Currency|$ 6.00 | Running functions requiring currency remainders|
|Date|1/1/2026|Working with Time Series Data|
|Accounting|$ 6.00|Running accounting-related math|
|Time|1/1/2026: 12:00 PM|Looking at changes in data over a span of time| 
|Percentage|83%|Performing Statistical or Scientific Work|
|Fraction|6 1/2| Working with data that needs to be semi-precise| 
|Scientific|6.00 E+00| Data with extremely large values, can help save memory| 
|Text|Basic Text|Logical Operators, classifying data by groups, and organizing columns and rows.|


### Headers 

Spreadsheet headers allow you to **Navigate Excel's Different Tools.**

- **Home**

  The Home section of the spreadsheet houses most of the **Stylistic and Formatting Features** for Your Spreadsheet. 
Some examples are the Text Size, Font, Conditional Formatting, Borders, and Highlighting Within Cells. 

- **Insert**

  The Insert section is one of the most widely used sections as it allows you to 
add **External Information** to your spreadsheet such as **Data** and **Images.** This section 
also allows you to **Visualize Data**. 

- **Share**

  The share section allows you to **Publish Your Data** and create shareable links. 

- **Page Layout** 

  The layout section allows you to modify **Large Scale** and **Aesthetic** features in a spreadsheet or in your whole workbook. 

- **Formulas**

  One of the most important Excel sections. This section allows you to 
insert **Functions, Formulas**, and **Run Calculations** in your workbook. 

- **Data**

  This section allows you to **Manipulate Your Data** in significant ways that can help clean up the organization
of it. **Base Level Analysis** can also be done in the data section. 

- **Review**

  You can review the **History** and **Back end Performance** of your workbooks with this. 

- **View**

  This section allows you to **Change how you View** the sheet. 

- **Automate**

  You are able to **Import Scripts** into your spreadsheet to improve efficiency. 

- **Help**

  Access **Tutorials**, and other **Resources** to improve your Excel skills. 

- **Draw**

  Create **Informal Annotations** in your spreadsheet. 


--------------------------------------------------------------------------------

## Common Excel Tools 
---------------------------------------

### Transferring Data Between Cells 

------------------------------------------

**Copying information** is possible through pressing **CTRL+C / CMD+C** in one cell, and 
**CTRL+V / CMD+V** in your target cell. You can copy and paste information from your current workbook, 
other workbooks, spreadsheets, and online sources. 

The **Small Green box** in the bottom right corner of the cell you're working in allows you to quickly copy 
a value from one cell and paste it to any amount of cells within the same row or column. 

This tool is also used to **Automate Tedious Processes** with functions. 
This is done when you provide at least 2 data points in adjacent cells as a reference. Excel is able
to determine a pattern and fill in blanks. 

An example would be if you entered **January**, and **February** into two cells. Excel could recognize this pattern and fill in the remaining months in the year. 

### Add and Remove content

With Excel you can **Add** or **Remove** columns and rows with the ```+``` and ```-``` symbols when you near the edge of a cell. 


You can also do so by **Right Clicking** on a Column or row, which will give you the option to remove or add
a row/column.
 

### Cell Formatting

We can format our cells in a variety of ways to best fit our data. 

The **Wrap Button** is located in our home header and looks like a blue snake.

Pressing this button will take any text in your cell and make it fit the cell width. 

```

--------------------------------------------------------
its the differ|ence| betwe|en a cell tha|t is long like this 
--------------|----|------|-------------|---------------                        
and a shorter |    |      |             |
              |    |      |             |
cell like this|    |      |             |
---------------------------------------------------------

```

We can also **Change the Width or Height** of columns and rows. This can be done by moving our cursor to the **Edge of a Cell** until we access the arrow tool. Then, we can click and drag to make our column or row any size we want.

### Merge

Right clicking over a series of cells will allow you to **Merge** the contents 
of those cells into one much larger cell. This is effective for concatenating information.


--------------------------------------------------------------------------------


## Working With Spreadsheet Data 

### Data Organization

Excel offers a variety of simple tools that allow you to **Organize**, and **Clean** 
data.


- **Ascending and Descending Functions**
  
  Excel's ascending and descending feature allows you to display your 
  data by **Columns Values.** It will sort select columns either from 
  **Maximum to Minimum values**, or from **Minimum to Maximum values**. 
  

- **Custom Sort**

  Custom sort is a powerful tool when working with spreadsheets that allows you 
  to **Organize** your spreadsheet by **Ascending** or **Descending** values and grouping by values **Multiple Different Columns**. This means you can sort by ascending values in one column while grouping your data by certain values in another column. 
  

- **Pivot Tables**

  Pivot tables are an effective way to **Filter Large Spreadsheets** to select for 
  data of interest. They allow you to create quick tables that show relationships between subsets of your full data. 

  **Filter**

  Within the **Data** header. The **Filter Command** allows you to create a **Dropdown** for selected columns. 

  This Dropdown allows you to **Select Certain Row Values** that you want displayed in your spreadsheet.
  
- **Data Validation**

  Excel's data validation tools allow you to **Predetermine** what
  **Data Types** are allowed in certain columns. You can use this to organize columns by  1 data type consistently or if you have values that need to have uniform syntax. 
  
  One especially benefical tool is **List Validation**. This tool allows you to **Create a List**
  of **Words and Values** that are allowed in a column, helping to make tedious data entry faster.
  
### Visualizing Data 

Excel offers a wide range of graphs and data visualization mediums to fit your needs.  

|Visualization Tool Name|Common Purpose|
|------------------------------|--
|Table|Visualizing grouped data|
|Line Graph| Depicting relationships between 2 variables|
|Column Graph|Comparing two different variables|
|Pie Chart|Showing variance in a groups responses| 
|Box Plot| Comparing statistical factors between variables| 
|Histogram| Showing the distribution of values in a spreadsheet|
|Conditional Formatting | Highlighting Differences in Cell Values|


### Analyzing Data 


We have various functions that help us **Automate** tedious tasks. These are grouped into different types of **Formulas**.


|Formula Type|Purpose|
|---|----------------|
|Financial|Computes values to provide financial information|
|Logical|Computes boolean values for a column of data to group and filter|
|Text|Allows you to maniuplate characters and strings| 
|Date & Time| Let's you pull values from date and time data types| 
|Look up & Reference|Provides functions to pull certain cell values and types| 
|Math|Let's you run mathematics operations| 

### Using Functions 

when we use functions in a cell, we will use the ```=``` sign and then our function.

Let's make a function that would sum a series of values within a spreadsheet.

First, we will assign our function 

```c++

=SUM()

```

Now that our function is assigned we can add the cells we would like to apply our function to.

```
=SUM(A1:C10)

```
Our colon symbol represents the values between A1 and C10, this means we want to 
calculate the sum of all values from A1 through C10.' 

Whichever cell we write our function in will hold the result of our function. 

Interestingly, we can also use our pattern recognizing tool from earlier to fill in functions within multiple cells. This is most effective when trying to apply a function across columns or rows that are within your selected cell. Let's look at an example. 

Let's create a function to sum the values of row A from Column 1 through 10 

```
=SUM(A1:A10)
```
if we add this function to cell **A11**, we can apply this function to all rows below A11. Applying this function to B11 would sum all the values from B1 through B10, C11 would apply to C1 through C11, and so on so forth. 

functions can be used to: **Compute Statistical Values** such as **Means, Medians, and Modes**, filter data into groups such as
a **Yes** and **No**, and compute conversions between **Kilometers and Miles**, or **Kilograms and Pounds**. 

There are many more functions and operations that you can perform in excel. We recommend that you check out our **CSU** and **Non CSU** resources to learn more!

--------------------------------------------------------------------------------------------------------------------------------------------

## Next Steps

Now that we have introduced some basic components of Excel. We will briefly 
outline **VBA Coding** and how we can use this to **Write Scripts**. 





  
  





