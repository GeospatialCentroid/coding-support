---
layout: single
sidebar:
  nav: sql_sidebar
title: "Fundamentals"
toc: true
toc_sticky: true
---

## Accessing SQL 

One of the more common ways to access a select database through SQL is through te 
SQL Server Management Studio (SSMS).  A link for using SSMS is 
provided [Here](https://learn.microsoft.com/en-us/ssms/install/install)

SQLCMD is a command line alternative that will allow you to access databases. 
A link to installl and set up SQLCMD is provided [Here](https://www.techpluto.com/how-to-access-sql-server-database-without-management-studio/)

One thing ot note is that both of these softwares are used with microsoft. 
We will go over how to download softwares without access to microsoft 

for **non** microsoft softwares. We can use **Datagrip**. Datagrip is a 
service that is supported for Windows, MacOS, and Linux. 

You can access Datagrip [Here](https://www.jetbrains.com/datagrip/features/sqlserver/).

### Accessing servers within SQL 

Once we have downloaded a virtual SQL accessing tool. We need to have the proper credentials
by the database administrator or our institution. 

upon opening the software or terminal we are using. We need to enter 4 things to log into the database

` The Server Name 

` SQL login credentials 

This will consist of a username and password. To get the username and password you should communicate with the 
database provider and attempt to get this information from them. 

Upon logging into the server, we need to access the database we are interested in. 
We can do this with the **Transact-SQL** or the **T-SQL** commands. 

```SQL 

Transact-SQL [Database Name]   <--- #we put this in brackets because it will 
                                     allow us to enter numbers, spaces, and special 
                                     characters if needed. 
                                     
```

If you have made it this far, you are officially able to access your database and the data within. 
If you are not able to access a database, dont worry! This guide will provde substantial data management 
and analysis information that will prove to beneficial across coding softwares. 

--------------------------------------------------------------------------------

## Syntax 

SQL databases all have different syntax. Upon the basics of this guide, it is beneficial to 
consult a help guide within your database to learn more about the functions that are possible. 

For example, one differnce is that some databases will require a semicolon after every line in a command 
while some wont.

When writing functions in SQL. They commonly work on a line basis. This is, where every line has a
single command. We will see examples of this later 

In databases, there can be a series of different **tables** that exist. It is important to **Update** the 
table you want to work in before you begin to do any computations or run any commands

```SQL

UPDATE <Table Name> 

```

**Field Types** 

There are 4 large data types in SQL 

` **Numeric Types** 
  
  Numeric types conssit of integers, decimals, precision numbers, and Floating Points 
    
- **Text Fields** 

  in our Text Fields, there are fixed length character strings, variable length character strings, and Clobs; which 
  are large bodies of text. 
  
- **Date and Time Fields**

  These fields contain information days within the year and times. 
  
  - **Boolean Types**
  
  Boolean fields will have 1 of 2 field contents. Either TRUE or FALSE. 
  These fields serve as an effective method of selecting values of interest outside
  of using boolean or comparative operators. 

### Commands and Operators 
SQL is a command and operator based system, meaning that programs and all data analysis relies on using a set of commands
and operators
in conjunction to achieve your goals. We will look at the more common commands in this guide 

SQL **Command Structure** is based off a three part system. 

The **Select** Command comes first. In this section, we will choose the columns from a table that we are working in 

We then use the **From** command. This command will tell our system which table we want to select the column names from. 

Finally, we use the **WHERE** command to establish which operators we want to use on our selected columns. This is where the 
majority of our coding work is going to be. 


As mentioned earlier, we will use operators to work with our WHERE command 
The types of operators that SQL runs off of are **Logical and Boolean Operators**. 

|Operator Symbol | Function |
|-----------------------|---|
|= | Equal to|
| > | Greater than|
| < | Less Than|
|>= | Greater than or equal to|
|<=| Less than or equal to|
|<>| Not equal to| 

SQL also relies on **Boolean Operators**

|Boolean Symbol | Function| 
|----------------------|--|
|AND| A column meets two conditions|
|OR| A column meets one of multiple conditions|
|NOT| A column does not meet a condition|
|BETWEEN| Find values with a range|
|LIKE| Selecting numeric and character patterns|

One thing that can interfere with using commands in datasets **Null** or **N/A** values. These can be problematic as they 
can skew data, interfere with commands, and misrepresent data. Because of this, it's important to beaware 
of if your dataset has NULL values and where they are. THis can be done through 1 of 2 commands.

You can either use a **is null** command 

```SQL

SELECT Column_Name 
FROM Table_Name
Where Columm_Name IS NULL

```

---

Or, you can use the **is not null** command 

```SQL

Select column_Name
FROM Table_Name
Where column_Name IS NOT NULL

```

These commands are similar but provide different purposes. One will only identify NULL values for 
you to manipulate, while the other will find all values that are not NULL. They can serve entirely different purposes. 



--------------------------------------------------------------------------------

## Summmary

Overall, SQL is widely accessible to anybody who has the necessary information from the organization
or institution that operates the database of interest. Even if you can't access a database.
Understanding how SQL works will be largely applicable to use in GIS, data analysis, and complex programs in
all introductory coding languages. 

--------------------------------------------------------------------------------

## Next Steps 

Upon understanding the basics of how SQL works with operators and it's commands, 
the next step is to understand how we can work with data and tables in SQL 

