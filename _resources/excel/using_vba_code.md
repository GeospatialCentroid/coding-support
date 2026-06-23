---
title: 'Using VBA Code'
layout: single
sidebar:
  nav: excel_sidebar
toc: true
toc_sticky: true
---

VBA code is a powerful tool in excel that allows you to automate full formula and function
based processes, as well as manipulate your spreadsheets to collaborate with online 
services and other software. 

--------------------------------------------------------------------------------

## VBA Fundamentals 

Before we use VBA Coding in Excel, lets go over some of the fundamentals. 

### Syntax

Generally, VBA code is *Case Insensitive*. This means that commands with capitals or 
no capitals won't cause any problems  

*Printing* commands in VBA code require calling the console 

```r
Console.WriteLine("Enter your text here")
```

Establishing **Data Types** for objects

```VB
Dim ExampleObject as Object

'This is a comment, we have set our Exampleobject as a data type'
'lets set our ExampleObject to be a type string now'

Dim ExampleObject as String = "This is a string that it can be equal to"

'We can also leave our variable assignment blank for now as we did earlier with our 
object type' 

'if we want our object to be type variant (meaning it can hold any type of data)
we can d othat like so'

Dim ExampleObject as Variant
```
### Data Types in VBA

|Name|Stores|
|--------|--|
|Object|Worksheet,Classes|
|Variant|Anything|
|Sample|Text|
|Byte|Small numeric values|
|Integer|Small Numeric Values|
|Long|Extremely large numeric values|
|Single|smaller decimal holding numeric values|
|Double|Larger decimal holding numeric values|
|Boolean|TRUE FALSE statements|
|String|series of words|


**Assigning an object variable assignment**

To assign an an object variable an object, we can use the set command 

```VB

set ExampleObject = SetObject  'When you have already created an object you can assign it to an object variable' 
```

### Operators & Conditional Statements

Operators can be used in VBA code to **Differentiate** between cells and clean data 

They are frequenty used in conjunction with **Conditional Statements** 

|Operator Name|Meaning|
|-----|------------|--|
|>| Greater than |
|< | Less than |
|= | Equal to|
|<>| Not equal to|
|<= | Less than or equal to|
|>= | Greater than or equal to|

**Conditional Statements** are used to control the flow of code. They help 
remove unusable values, and filter data for information we need. 

```vb 

If <Value of interest> >= 80
  Console.WriteLine("This value is a large number")
End If

#We can also incorporate an alternative statement 

If <Value of interest> >=- 80
  Console.WriteLine("This Value is a large number")
Else
  Console.WriteLine("This is a smaller number")
End If 
```

**Case** is similar to switch in other coding languages, it can be used to differentiate
between differnet values in cells. 

```vb

Select Case <Variable Name>
  Case 1
  Case 2
  Case Else
End Case

'if we were to assign a variable name to our case' the cases below would 
represent a response for that variable'

Select Case Age 
  Case Is <=17
  Console.WriteLine("You are not in college yet")
  Case Is >18
  Console.WriteLine("you could be in college")
  Case Else
  Console.WriteLine(*"How is this possible?")
End Case 



```

**While Loops** are another effective way at controlling program flow

```r

While age <  22
  If not age = 23
  Console.WriteLine("You can't be done with college! Your only" {age} "!")
  
'Notice we added a variable to our string!' 

  age += 1 
  Else
    Exit While 
  Exit If
End While

```

If we want to set a range of values we want our variable to go through, we can use a **for loop**

```r
for age = 1-22
  console.writeline("I can't believe you are {age} year's old!")
  Next
```

This is largely beneficial when you begin to automate functions in Excel with VBA!

--------------------------------------------------------------------------------

## Working with Spreadsheets in Excel

### Accessing VBA in Excel. 

In order to access VBA, we need to follow a few quick steps 

- Press **Alt + F11**

- Insert -> **Module**

- Run Sample code using **F5** 


### Selecting series of cells

There are multiple different ways that we can select a series of cells that 
will make our coding experience more efficent. 

**Single Cell** 

```Vb

- Range("A1").Select

```
**Selecting a Range**

```vb

- Range("A1:A100").Select

```

**Select a range with cells**

```vb

- Range(Cells(2,1), Cells(10,4)).Select 'This code would select A2 through D10

```
We can also select rows and columns by using the .rows and .columns commands



**Selecting a set Row**

```VB

'There are different ways we can do this'

"Method 1"

Active.Worksheet.Rows(1)

'This method will select row one 

Active.Worksheet.Rows.Item(1)

'This will do the same, we can combine these with commands such as .delete, which 
would effectively delete both rows'

```
--------------------------------------------------------------------------------

**Selecting set columns**

```VB

'There are different ways that we can select columns in excel' 

Active.Worksheet.Columns("A")
Active.Worksheet.Columns("1")
Active.Worksheet.Columns.Item("1")
Active.Worksheet.Columns>item("A")

'All of these options will select Column A' 

```

### Mutating cells 

the most basic command will be mutating cells. We can do that like so 

```VB
Application.ActiveSheet.Range("A1").Select
    Application.Selection.Value = "Hello World"
'This will make our A1 cell contain the string "Hellow World"
'We can also manipulate the contents of a cell, such as the border type' 

Application.ActiveSheet.Range("A1").Borders.Linestyle = xlDouble

'We can also assign variables to cells!'

Dim MyString As String
MyString = "Hello Reader"
Application.ActiveSheet.Range("A1").Select
    Application.Selection.Value = MyString
    
'Finally, if we want to make changes to a variety of cells. we can select a range 

Application.ActiveSheet.Range("A1:C10").Select
  Application.Selection.Value = "Hello Cells!"
```

### Macros in EXcel

Macros are sets of VBA code that you can apply to your workbook in Excel.Besides writing 
out a script of VBA Code, another way that you can create code is by recording a series of tasks that you 
perform with your code. This can be done with macros. Macros 

**Process for Recording a Macro**

- Access the developer tab in the code group and click **Record Macro**

- Fill out a name for your macro and where you would like it stored

- Click Ok, begin performing the actions that you want to record for the macro

- To use the macro, press the macros button, select your named macro and select run

**Best Practices**

- Make sure that you have a *Simple yet Descriptive** name for your macros 

- Before Running a macro, **Save** your workbook so if you need to back you
  can exit out of excel 
  
- **Test** your macro code before you apply it to your main workbook; you can't go back 
  once you run your Macro
  
- **Save** your macro in a location that you will be able to find it. 

--------------------------------------------------------------------------------

## Next Steps 

The next steps in learning excel is to access our provided learning resources
from CSU sources, as well as non CSU sources. This will allow you to go more in-
depth into the learning materials and strengthen your understanding of the content 


