---
layout: single
sidebar:
  nav: sql_sidebar
title: "Working With Tables"
toc: true
toc_sticky: true
---

## Introduction

Because SQL is made to work with tabular data, there is an extensive supply of table modifications and options to accomdate any data.

 This guide will go over some of the introductory material
for SQL table manipulation. 

-------------------------------------------------------------------------------

## Working With Tables

### Table Arrangement & Analysis

We can alter the arrangment of the contents in our table through a set of commands
that will allow us to group the values, and sort it based on increasing and decreasing values 

The **ASC** and **DESC** Command

This command will allow us to organize our table by a column based on the values starting from the lowest
and increasing to the highest value. This and the DESC command will use the **ORDER BY** feature. 

NOTE: if we want to select all columns from a table, we can use the ```*``` key. 

```sql

SELECT *

FROM Table_Name

ORDER BY column_name ASC

```

The **DESC** command will serve the same function as the ASC function but the **Opposite**

```sql

SELECT *

FROM Table_Name

ORDER BY Column_name DESC

<--- This command will provide a table that is in the opposite order as the ASC command

```

 We can go one step further, and organize our table by multiple **different** columns 

```SQL

SELECT * 

FROM Table_Name

ORDER BY Column_one ASC, Column_two DESC

```

If we want to organize our table by something more specific, such as values within a column. The  **GROUP BY** comman will allow us to do so.

```sql

SELECT Column_Type Optional Function(row Value) as (new row name)

FROM Table_Name

GROUP BY row Value 

```
NOTE: When working with variables in SQL and any coding language, best practice is to leave no blank space between characters. 

A revised variable from the **row Value** variable above would be **row_value**. This will allow you to reduce your risk of **Syntax Errors** when coding. 

The group by command itself does not serve many purposes. However, combing it with SQL's
**Aggregate Functions** Makes it a powerful tool for analysis. 

Common Aggregate Functions allow us to conduct base level statistical analysis on a set of numeric values 

|Function Name| Function Purpose|
|MIN| Selects the Minimum value|
|MAX| Selects the Maximum Value|
|AVG| Calculates the Average in a set of numbers| 
|SUM| Calculates the combined value of a set of numbers| 

When we use an aggregate function with the GROUP BY order command. It can provide valuable insights on 
our data. Here is an example

```sql

<---We  can calculate the population of every country with the proper database

SELECT Country SUM(population) as (country_population) 

<!---This command tells us that we want to select the Country columnn and compute calculations on the population Column and create a new column in our table entitled Country Population

FROM World_Population 

<!--- We are pulling this fake data from our fake table named World_Population

GROUP BY Country SUM(Population)

<!---This allows us to not only compute the sum population, but ensure that our calculation is computing per country instead of for our whole table. 

```

### Table Manipulation

in SQL, we are also able to manipulate the contents of tables to best suit our purposes

Some of the more baseline operations are **Creating** and **Deleting** tables. 

to **Create a Table**, we can either operate from a brand new blank table. Or, we can 
create a new table with data from another table. 

```sql

<---Creating a brand new table 

CREATE TABLE table_name(
Column_name1 data_type [Optional Constraint],
Column_name2 dtaa_type2[Optional Constraint],
);
```
Let's look at how we can use a pre existing table to create a new table with select data

```sql


CREATE TABLE table_copy AS (

SELECT Column_Names  

FROM table_original

<--- We can insert WHERE commands to filter for specific values 

WHERE Column_name_2 = value_of_interest
)

```

While it's fairly simple to create a new table. **Deleting** a table is far simpler, and far more permanent. 

So be careful...

To delete a table, we will use the DROP command

```sql

DROP table_name

```


Best practices are to use this function as a last resort, and to keep backups of valuable tabular data in case you accidentally delete a table. 

If we want to combine multiple tables into one. We can totally do that!

**Joining Tables** is a process in SQL where you can take two tables, and join them by a similar, matching column. 

One example would be joining two tables by a lat,long column, where matching values will mean they are the same location; and by that logic it means the data avaliable in both tables will be for the same place.

Another example would be names of students in a class, or student ID numbers. if we have two tables with a Student ID column in two different tables for the same school during the same time period. This means joining the tables would allow us to access two **Different Tables** worth of information for the **Same Students**. 

One thing to note is that the data provided to you from a join depends on the **Type of Join**. 

There are **Four** tyeps of table joins 

- **Full Join**
  
  This join will combine all values between two tables, matching values that align with eachother and leaving N/A / NULL values for those that don't match between tables. This join is good for not losing any data. However, it will also keep all data that doesn't match meaning it will leave a heafty amount of missing values that can take some work to remove in future analysis. 
  
- **Inner Join**

  This join operates similar to a Full Join with the largest difference being that it will only take in values 
  that match beteween both tables. This is good for reducing NA Values, but it can risk losing a lot of valauble data between tables. 
  
- **Left and Right Joins**
  
  These types of joins will prserve all values in one of the two tables and 
  only combine values from the other table that match. This is a good table if you know 
  that one table has more valuable information that you need and one table has some optional information. These can also leave a lot of missing values. 

Now that we have talked about full scale table manipulation, let's look at some ways we can **Manipulate Values** within tables. 

In a table, we have the option to **Add**, **Modify**, and **Remove** Table values. 

The **Insert Into** command provides you the ability to import data from one table into another table 

```sql

INSERT INTO Table_to_insert (Column_names)
 
SELECT(Column_names) 

--- make sure these column names match our column names in the first row

From Table_pulled_from

---here, we have the option to use where commands if we need to select specific values. 

```

Once again, as easy as we can add new information, we can very delete information much easier. 

You know the deal... 

```sql

DELETE FROM Column Name

FROM Table_name #the FROM command may not be needed. 

WHERE data_we_want_to_delete

```

Table, Column, and Element Modification are primarily ran through the **Update** and the 
**Alter**Commands

For Table and Column alterations, we can use the **Alter** command.

Adding a column

```sql


ALTER Table_Name

ADD column_name Data_type;

```

Deleting a column

```sql

ALTER Table_Name

Drop COLUMN Column Column_name;

```

Renaming a column 

```sql

ALTER Table_Name

RENAME COLUMN old_name TO new_name

```

Back to Tables! 


Renaming a TABLE

```sql 

ALTER Table_Name

RENAME TO New_table_name

```

Finally, we can alter elements within a table using the **Update** Command.

Updating a table called **Table_Name**

```sql

SET Numeric_Value = changed
    Char_value = "changed"
    
Where identifying_column = row_value

--- Cell modifications are one way that we can combat missing values 
--- lets pretend we want our missing numeric values in a column to equal 0 

UPDATE Table_Name 

SET Numeric_Value = 0 

WHERE Numeric_column = null

```

--------------------------------------------------------------------------------

## Summary

Overall, SQL provides any opportunities for complex data analysis For learning more about 
SQL and it's broad applications, we recommend that you consult our resource guide which has
resources tailored for everybody no matter their level of understanding. 






