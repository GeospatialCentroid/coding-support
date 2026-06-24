---
layout: single
sidebar:
  nav: excel_sidebar
title: Using VBA Code
toc: true
toc_sticky: true
---


VBA code is a powerful tool in excel that allows you to **Automate Complex Multi-Step taks**. You can also use VBA code to manipulate your spreadsheets to collaborate with online services and other software. 

--------------------------------------------------------------------------------

## VBA Fundamentals 

Before we use VBA Coding in Excel, lets go over some of the fundamentals. 

### Syntax

Generally, VBA code is **Case Insensitive**. This means that commands with capitals or 
no capitals won't cause any problems.

When we want to run commands we need to specifiy a **Sub** function. Lets look at printing a print command. 

**Output Commands**

Printing commands in VBA code require calling the console with the function ``Debug.Print```.

```python

Sub ShowMessage()
Debug.Print "Enter your text here"
End Sub

'We can write a comment like so, if we ran this command it would return: Enter your text here.' 

```
When we use print commands, we can easily **Incorporate Variables**, as well as combine strings. 

In order to compare variables we will use the ```&``` operator.

```python

Debug.print "The value is" & num_variable

```
Let's take a look at using two different applications of **concatenation**, which is a way that we can combine multiple string statements into one. 

```python
sub concat()

Dim var_one As String = "I love " 

'Notice we added a space after the word love

Dim var_two As String = "Coding!

Debug.print var_one + var_two

'This would return: I love Coding!'

end Sub

```


## Variables

A **Variable** is a keyword that we can assign values, and commands to. 

To Assign a **Variable** we need to follow two steps. 

First, we want to assign the **Data Type** 

then, we want to assigne our **Value**


### Data types

There are a few **Data Types** that we can assign our variables too. 

|Name|Stores|
|--------|--|
|Variant|Anything|
|Sample|Text|
|Byte|Small numeric values|
|Integer|Small Numeric Values|
|Long|Extremely large numeric values|
|Single|smaller decimal holding numeric values|
|Double|Larger decimal holding numeric values|
|Boolean|TRUE FALSE statements|
|String|series of words|

Once we have decided what data type our variable should be. We can **Assign our Data Type** through the ```Dim``` command.

```python

Dim Variable_Name as String 

'This tells the computer that our variable is a string'

'Lets assign a variable as type variant'

Dim Variant_Variable as Variant

```

### Assigning a Variable a Value

To assign our variable a value, we simply need to use the **=** operator. 

```python

'Lets use Variable_Name from earlier' 

Variable_Name = "This is a string we can assign"

'We can also use a quicker variable assignment method' 

Dim New_Variable as Integer = 100

```

Variables become especially beneficial when we implement **Operators** and **Conditional Statements** to create programs 

### Operators & Conditional Statements

Operators can be used in VBA code to **Differentiate** between cells and **Select Desired Cell Values**.


In VB, there are **Conditional Operators**, **Arithmetic Operators**, and **Logical Operators**.

--------------------------------------------------------------------------------------------------------------------------------

**Conditional Operators** 

|Operator Name|Meaning|
|-----|------------|--|
|>| Greater than |
|< | Less than |
|== | Equal to|
|<>| Not equal to|
|<= | Less than or equal to|
|>= | Greater than or equal to|



**Arithmetic Operators**

|Operator Name| Meaning| 
|+| Addition| 
|-| Subtraction|
|*| Multiplication|
|/| Division|
|Mod| Modulo|

Here is an example of us using an arithmetic operator 

```python

Sub Math_Function()

dim math_variable as Integer = 12 

dim x as Integer 

x = math_variable * 3 

Debug.print x

end Sub

```

**Logical Operators**

|Symbol|Function|
|------|--------|
|And| more then 1 condition must be met|
|Or| at least one of multiple conditions must be met| 
|Xor| only one condition of multiple can be met|
|Not| 1 condition must not be met|

If we want to evaluate that two conditions are true we can use the **And** operator 

```python 

sub test()

dim x as integer = 20 

din y as integer

y = x > 10 and x < 30

Debug.print y

'Because both conditions are true, this would print the value true.'
```

### Conditional Statments

Conditional Statements allow us to control the flow of our program and remove errors before they can get in the way. We will look at **If Statments** and **Cases**

When we use **If Statements**, we will commonly have a **variable**, and a **condition**. If our variable meets this condition, one command will execute. If not, 
another command will execute. Here is an example.  


```python


sub large_number()

dim test as integer

test = 94

If test >= 80 Then
  Debug.print "This value is a large number"
Else
  Debug.print "This value is not a large number
End If

' this would return: this value is a large number'

test = 65 

If test >=- 80 Then
  Debug.print "This Value is a large number"
Elseif  test > 30 Then
  Debug.print "This value is a moderately sized number"
Else 
  Debug.print "This value is a small number

End If 

End Sub

'Because this value meets the second conditional, it would return: This value is a moderately sized number

```

**Case** is similar to switch in other coding languages, it can be used to differentiate
between differnet values in cells. 

```python

Select Case <Variable Name>
  Case 1
  Case 2
  Case Else
End Case

'if we were to assign a variable name to our case' the cases below would 
represent a response for that variable'


Sub college()

Dim Age as integer 

Age = 15 

Select Case Age 
  Case Is <=17
    Debug.print "You are a teenager, probably not in college"
  Case Is >18
    Debug.print "You could be in college"
  Case Else
    Debug.print "How is this possible?"
End Case 

End Sub

'in a real situation, we would want our case to sort out values that would not make sense. Which would mean we would usually put our Else statement at the top and have it skip these values' 


```

### Loops

**While Loops** and **For Loops** are both effective ways of **Cycling** through a series of values to **implement** a command or script onto them.



```python
'lets use our age variable from earlier' 

sub graduation()

Dim age as integer = 14

While age <  24
  If not age = 23 Then
    Debug.print "You can't be done with college! Your only" & age & "!"
  Else
    Debug.print "congrats on finishing college!"

  age ++ 'this will increment our age variable by 1' 
    Exit While 
  End If
End While
End Sub

' for the first 8 iterations, the program will print our first command, then. Because we add 1 year of age after every loop. At the 9th our age will equal 23 and our else command will execute'
```
When using While loops, be careful to set an incrementing condition for your variable which can be done with the += or the ++ symbols. If we don't, then our loop will never end. Taking up a large sum of memory and possibly damaging our system. 

If we want to set a range of values we want our variable to go through, we can use a **for loop**

```python

Sub shocked()

Dim age as integer 

'we will not assign our age until our for loop' 

for age = 1-22
  Debug.print "I can't believe you are " & age & " year's old!"
  Next

End Sub
```

--------------------------------------------------------------------------------

## Working with VBA in Excel

### Accessing VBA in Excel. 

In order to access VBA, we need to follow a few quick steps 

- Press **Alt + F11**

- Insert -> **Module**

- Run Sample code using **F5** 

Next, before we run any code we will want to assin the worksheet we are using 

```Set ws = Thisworkbok.Sheets("Desired Sheet")```

From here, we can manipulate values in this worksheet. 

### Selecting series of cells

There are multiple different ways that we can select a series of cells that 
will make our coding experience more efficent. 

We can Select cells using the ```Range``` command. Either selecting single, or multiple cells 

Lets use our **ws** as our example. 

**Selecting an Invidual Cell**


```python

ws.Range("A1").Select

```


**Selecting a Range**



```python

ws.Range("A1:A100").Select

```


We can also select rows and columns by using the **.rows** and **.columns** commands. we can do so in two different ways. 

For our **Row Selecting** commands, we can use ```.Rows``` or ```.Rows.Items```

```python

'Method 1'

ws.Rows(1:3).Select

'This method will select multiple rows.'

ws.Rows.Item(1).Select

'These will both effectively select one set row.'

```
We can **Select Columns** with an identical process.

**Selecting set columns**

```python

'There are different ways that we can select columns in excel' 

ws.Columns("A").Select
ws.Columns(1).Select

ws.Columns.Item("1").Select
ws.Columns.item(1).Select

'All of these options will select Column A' 

```

### Mutating cells 

the most basic command we will look at is cells. We can do that like so 

```python

Sub NameChange()
Application.ws.Range("A1").Select
    Application.Selection.Value = "Hello World"
'This will make our A1 cell contain the string "Hellow World"
 
End Sub

```

**Assigning Variables to Cels**

```python

Sub variablecell()

Dim MyString As String

MyString = "Hello Reader"
Application.ActiveSheet.Range("A1").Select
    Application.Selection.Value = MyString
```

**Selecting a Range of Cells**

```python

Application.ActiveSheet.Range("A1:C10").Select
  Application.Selection.Value = "Hello Cells!"

```

## Macros in Excel

Macros are sets of VBA code that you can apply to your workbook in Excel.

- **You can record tasks** that will turn into writable code


### Recording a Macro

- **Access the developer tab** in the code group and click **Record Macro**

- **Provide a name for your macro** and where you would like it stored

- **Click Ok**, begin performing the actions that you want to record for the macro

- **Use a Macro by pressing the macro button**, select your named macro and select run

**Best Practices**

- Make sure that you have a **Simple yet Descriptive** name for your macros 

- Before Running a macro, **Save** your workbook so if you need to back you
  can exit out of excel 
  
- **Test** your macro code before you apply it to your main workbook; you can't go back 
  once you run your Macro
  
- **Save** your macro in a location that you will be able to find it. 

--------------------------------------------------------------------------------

## Next Steps 

This guide provided some of the basic components of using excel and VB coding. Check out our **CSU Courses** and **Non-CSU Course Resources**
to learn more! 


