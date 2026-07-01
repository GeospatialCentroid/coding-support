---
layout: single
sidebar:
  nav: r_sidebar
title: "Working With Data"
toc: true
toc_sticky: true
---

## Working With Data using R 

One of R's most powerful attributes is it's ability to work with data, ranging from cleaning
all the way through analysis. This is possible through R's has a diversity of libraries and tools
to efficiently work with datasets. 

 This guide will focus on 
how to move data into R and the basics on accessing data in a data set 

-------------------------------------------------------------------------------

## Reading Data into R 

In order to work with data in R, we need to first **Read** our data into R. 

This is the process of taking a file that we have in our **File System** or from an **Online URL**, and entering 
a command that allows R to read the file contents and store them in our workspace. 

### Commonly Installed Files 

|File Abbreviation| File Name| 
|-----------------------|-----------------|
|CSV|Comma-Separated Values|
|TSV| Tab-Separated Values|
|XLS|Excel Spreadsheet (old)|
|XLSX|Excel Spreadsheet (New)|
|gsheet|Google Sheet File|
|FWF|Fixed-Width File|
|JSON|Java Script Object Notation|

### Base R Data Reading

R provides simeple commands that revolve around ```read.``` These are useful for simple file types such as **CSV's**. However, we can access commands
that are much more robust through our **Library** 


Reading a CSV file from the file tree

```r

read.csv("enter/your/file/path/here.csv")

```
Reading a CSV from a URL 

```r

read.csv(url(enter your url link here.csv))

```

### Installing Packages

**Installing packages can Widen the Scope of Your Data Reading Capabilities**. 

|Package|Readable File Types|
|--------------------|-------|
|tidyVerse     |CSV's, TSV's, Text, XLSX, Google Sheets,Fixed Width Files| 
|readr         |CSV'S, TSV'S, Text, XLSX, Google Sheets, FWF|
|readxl        |XLX,XLSX| 

Installing the **Tidyverse Package** will be suitable for most file reading needs.

--------------------------------------------------------------------------------

## File Reading Procedures 

### Setting up your file directory

Make sure that your current working directory is set to your home directory, or the directory you want to work in. 

```r

> cd ~

#This will take you to the home directory in the console.

> cd "/Enter/Directory/Path/Here"

#This will take you to a specific working directory. 
```

**Download the Desired Files to Your Computer**. 

Make sure that you know where
your storing them in your computer so you can pull them later with ease. 

### Installing your package of choice 

Let's use **Tidyverse** as an example. We first need to install Tidyverse. 

```r
install.packages("tidyverse")
```

We know tidyverse has been installed when we run this command and are given a **long series of code**; 
this is our computer downloading all the packages and programs that tidyverse uses.

Next, we will pull this package from our **Library**.  

```r
library(tidyverse)
```

This will allow us to use **Commands** in the tidyverse package

### Reading in a file

For Tidyverse, we can read in a multitude of files like so 

```r
read_filetpe(This/is/the/path/to/your/file/file_name.filtype)
```

you will know the file has been successfully downloaded when it **Appears in Your 
Environment** in the top right panel, or no error signs are given. 

-------------------------------------------------------------------------------

## Navigating your Data set

This guide will provide you the baseline tools for **Accessing Rows, Columns, and
Elements** in your data set.

### Accessing Columns 

We can **Access Columns** in a data set by using the ```$``` command as well as our ```[]``` syntax.

This code will allow us to create a **Vector** of a **Dataframes Specific Column**.  

```r

desired_column <- dataframe$column

```

This code will allow us to return a dataframes column as a **Variable**

```r

desired_column_dS <- dataframe["column"]

```

To **Manipulate Column Names**, we can use a simple command. 

```r

names(dataframe)[names(dataframe) == "column"] <- "new column name"

```
We can also select **Multiple Columns**

```r

Selected_Columns <- dataframe[c("colname1","colname2")]

```

### Accessing Rows 

We can access rows through **Filtering** for certain **Values** rows have in a column

Filtering rows

```r

Filtered <- Dataframe(Dataframe$column = "Certain Value Within Columns Rows")

```

### Accessing elements in rows 

We can take this one step further, and access **Specific Elements** in  **matrices, vectors, lists, and datasets** 

**Vectors**

```r
# we will use an example vector

vector <- c(10,20,25,200,1000)

#pulling the value 10

pulled_value <- vector[1]

10

# we can do the same to access multiple values 

multilpe_values <- vector[c(1,5)]

10 , 1000

```

Note: If working with other coding languages. When pulling elements, the order may start with 0 instead of 1. An example is Javascript. To pull the first 
element from a JavaScript Vector, you would enter ```vector[0]```.

**Matrices**

Because Matrices operate similar to a **Two Dimensional Vector**, we can access components through simple commands

```r

# we will create an example matrix
 
example_matrix <- matrix(1:25, nrow = 5, ncol = 5) # this is a 5 by 5 matrix 

# This is how we want to pull a specific row from the matrix 

row_matrix <- example_matrix(2, ) 

``` 

This will print all the values of row 2

``` r
[6,7,8,9,10]

```

We can also pull specific row and column values

```r 

Specific_matrix <- example_matrix(2,4) # 2nd row, 4th column

```

```r

[9]

```

We can access **Multiple Values** as well. 

```r

Specific_Rows_and_Columns <- example_matrix[c(1,2),C(4,5)]

```

```r
[2][20]
```

We can also modify values 

```r
example_matrix[1,1] <- 100

# Let's pull the top row now

New_Row <- example_matrix[1][1]

print(New_Row)

```

```r

[100,2,3,4,5]

```

### Lists


Let's look at how we can modify the elements within a list 

```
example_list <- list(
age <- c(1,5,13,18)
name <- c("Julie","Richard","Will","Grant")
Status <- c("Baby","Toddler","Teenager"."Adult")
)
``` 
If we want to only know the age column we can do an operation such as this 


```r
example_list[[1]]
````

If we want to know the age and their status we can expand on our operation 

```r
example_list[[1]][3]
```

Finally, we can access specific elements within our list

```r
example_list$name[2] 
```

**Datasets** 

Datasets are similar to lists, only they commonly will contain far more information and can be organized in several different file formats.

Let's create a dataset example

```r


data_set_example <- df(
age <- c(1,5,13,18)
name <- c("Julie","Richard","Will","Grant")
Status <- c("Baby","Toddler","Teenager"."Adult")
))

# let's pull the name Julie from our dataset

dataset_element <- dataset_example[2,1]

```
We can run similar commands to access rows and columns 

``` Row Access

dataset_row <- dataset_example[2,]

```

### Applications of Navigating Datasets

Being able to navigate through your dataframe,vector,list,or matrix quickly
will allow you to **clean your data** efficiently and provide a strong foundation
for future work. 

--------------------------------------------------------------------------------

## Using Dplyr

We will briefly touch on Dplyr and it's use in R. Dplyr is a package that provides
a multitude of functions that will make tedious cleaning procedures in base R 
**Simpler and Quicker** 

### Accessing Dplyr

Accessing Dplyr will require following the same procedure that was followed earlier 
for accessing Tidyverse

```r

install.packages("dplyr")
library(dplyr)

```

### Common Dplyr commands 

**Filter**

Filter allows you to select for only certain values in a column that match a desired 
value 

```r

Example_dataframe %>% 
filter(column name == "certain value")

```

This filter will provide only certain values from one column

other comparative operators can be used with this command such as **>, <, ==, >=, and <=** to 
select for values that are exceeding, equal, or are less then a certain  value.  


**Select**

Select is a streamlined command that allows you to select certain columns from your dataset

```r

Selected_DF <- Dataframe |>
select("This Column", "This other column", "Ooh maybe this one!")

```

**Mutate**

This is a similar command to the one we did earlier, where we were able to change the value of a column
The difference is that we are able to apply a function or changes to a column, which will create a new column with
those changes applied 

```r

Mutated_DF <- Dataframe %>%
mutate(
new_column <- existing_column * 2 %>%
# we can also mutate a singular column
existing_column <- existing_column * 2 
)
```

**Rename**

This command allows us to rename a column to something cleaner

```r

Dataframe |>
new_name <- old_name

```

--------------------------------------------------------------------------------

## Applying What we Have Learned 

We can apply what we have learned to compute introductory data cleaning. 

Prompt: For an introductory R class you have been assigned to create 2 new 
datasets from an existing dataset

**Dataset 1** 

We want our raw dataset to only contain the first 2 columns, and the first 2 rows 

**Dataset 2** 

We want to only include rows that have an age greater then 20 

### Practice Code

```r

raw_data <- df(
name_column <- c("Darnold","Matilda","Juan","Louise","Aaron","Elena")
age_column <- c(10,20,17,14,32,21)
school <- c("elementary","college","highschool","junior","postgrad","college")
grade <- c(4,N/A,11,8,N/A,N/A)
)

#First we will declare our first dataset
Dataset_1 <- raw_data(1:2, 1:2) |> 
Dataset_2 <- raw_data(raw_data$age_column > 20)
             
```

With only 2 lines of code, we organize our data in substantail ways 

### Best Practices 


- **Use Clear Naming Conventions** when you are naming datatypes

- **Never Change the Raw Data**, it's best to create a clean data copy of your raw
data that you have manipulated 

- **Document Your work** so that you can come back to it later and understand 
what you have changed


### Summary 

This guide goes over the basics of accessing data files and beginning to learn 
to navigate them.

We recommend accessing the resources in the resource hub to 
learn more about using R to prepare you for future classwork and jobs that will 
require it! 
