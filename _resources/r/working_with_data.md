---
layout: single
sidebar:
  nav: r_sidebar
title: "Working With Data" 
toc: true
toc_sticky: true
---



## Working With Data

Knowing the fundamentals of how to work with data in RStudio is essential for making anything meaningful with it or doing any research. 
In this guide, we will go over the base level R methods for working with data. Than. We will look at how to use the **dplyr** package. 

------------------------------------------------------------

## Navigating your Data set

-------------------------------------------------------------

Let's begin by looking at how to access **Columns**, **Rows**, and **Elements** in your data. This can either be done through **Indexing** commands, or through **Filtering by Name**

## Accessing Columns via Indexing

-----------------------------------------------------------

We can index data from our dataset using the ```[]``` character. 

This code will allow us to create a **Vectors's** and **Matrices** that are subsets of our full dataset.  

### Accessing elements in rows 

Using indexing allows us to pick out specific values within vectors and matrices using **Numbers**. Let's start out with our most simple data type, the vector. 

**Vectors**

Let's use a simple example vector to show what is returned from differnet commands. 

```r
vector <- c(10,20,25,200,1000)
```

Using our ```[]``` character, we can pull 1, multiple, or series of values from our vector. 

-----------------------------------------

Pulling 1 value 

```r

pulled_value <- vector[1]

print(pulled_value)
```

```r
[10]
```
If we want to pull multiple values, we can use the **Concatenate** function. This allows us to select multiple value from a vector / matrix and is represented with ```c()```. 

```r
multiple_values <- vector[c(1,5)]

#here, we are telling our computer we want our variable multiple_values to return the first and fifth elements
```
```r

[10][1000]

```
Finally, if we want to pull a series of values, we can use the ```:``` character, essnetially telling our computer we want every value in a certain range 

```r
series_values <- vector[1:3]

print(series_values)
```
```r

[10][20][25]

```

>NOTE: If working with other coding languages. When pulling elements, the order may start with 0 instead of 1. An example is Javascript. To pull the first element from a JavaScript Vector, you would enter ```vector[0]```.

**Matrices**

Because Matrices operate similar to a **Two Dimensional Vector**, we can access components through similar commands. The only difference is now we will have to index both the **Row** and the **Column**. 

Let's create an example matrix 

```r
 
example_matrix <- matrix(1:25, nrow = 5, ncol = 5) # this is a 5 by 5 matrix 

```

```r
[1] [2] [3] [4] [5]
[6] [7] [8] [9] [10]
[11][12][13][14][15]
[16][17][18][19][20]
[21][22][23][24][25]

```

As mentioned earlier, to access specific elements we will simply incorporate our **Column** value and **Row** value that we wish to isolate

```r
print(example_matrix[1,2])
```

Here, we called row 1, column 2. 


```r
[2]
```

If we want an entire row or column of values, we can do so by leaving either the column or row value **blank** 

Lets get every value from row 1 

```r
print(example_matrix[1, ])

```r
[1][2][3][4][5]
```

Now let's do every column 

```r
print(example_matrix[,1 ])
```
```r
[1][6][11]16[21]
```

We can even use our ```:``` command to print a series of values from one row or column to get some interesting outputs.

```r
print(example_matrix(1:3,4))
```
```r
[4][9][14]
```
Finally, we can use our concatenate function to print out multiple values in differnt rows and columns. 

Let's have our computer print out the values that are located in the **3rd** and **5th** rows, and the **2nd** and **4th** columns. 

```r
print(example_matrix[c(3,5),c(2,4)])
```

```r
[12][14]
[22][24]
```

---------------------------------------------------------------------------

### Lists


Let's look at how we can modify the elements within a list. Lists are very similar to vectors. The main difference is that they can hold any values in them. They can also operate similar to a matrix as well. Let's take a look! 

```r
example_list <- list(1,2,TRUE,"Hello")
```
Let's look at one example of pulling our boolean value from our list

```r
print(example_list[3])
```

```r
TRUE
```

One of the more interesting functions of our lists is our matrix esque lists we mentioned earlier. 

```r
nested_list <- list(
age <- c(1,5,13,18)
name <- c("Julie","Richard","Will","Grant")
Status <- c("Baby","Toddler","Teenager"."Adult")
)
``` 
If we want to only know the age column we can do an operation such as this 


```r
example_list[[1]]
````

```r
[1][5][13][18]
```


If we want to know the age and their status we can expand on our operation 

```r
example_list[c(1,3)]
```
```r
[1][5][13][18]
["Baby"]["Toddler"]["Teenager"]["Adult"]
```

### Datasets

Datasets are similar to lists, only they commonly will contain far more information and can be organized in several different file formats.

Let's create a dataset example

```r


data_set_example <- data.frame(
age <- c(1,5,13,18)
name <- c("Julie","Richard","Will","Grant")
Status <- c("Baby","Toddler","Teenager"."Adult")
)

```
>Note: This method of creating a dataset will give you werid header values, we can fix this using a rename command that we will look at later

let's pull the name Julie from our dataset

```r
print(dataset_example[1,2])
```
```r
["Julie"]
````

This is one reason why we prefer to use datasets, they operate like a mix of a nested list and a matrix! 

We can run similar commands to access entire rows and columns 

```r
dataset_row <- dataset_example[,2]
```
```r
["Julie"]["Richard"]["Will"]["Grant"]
```

### Applications of Navigating Datasets

Being able to navigate through your data quickly
will allow you to efficiently **Clean Your Data**, creating a strong foundation for your future work. 

--------------------------------------------------------------------------

## Filtering Data With Names  

In some cases, we will want to filter our data based on the **Names** of columns and rows within our dataframe. 
This is mostly applicable when we have large datasets where it may be difficult or impossible to know what number specifc rows and columns are within. Data with repeat values is also a great example of when we would want to use names for filtering. 

The two most common ways that we will filter data in base r with names is with the ```$``` character and the ```[]``` character. 
The Base r function for this is to select your dataframe and then specify the column name your interested in. 


```r

desired_column <- dataframe$column

```

Similarily 

```r

desired_column <- dataframe["column"]

```
this method can be beneficial if you want to select **Multiple** columns from a dataframe 

```r
desired_columns <- dataframe[c("column_1","column_2","column_3")]
```

Another benefit is that 
we can **Manipulate** Column headers. One example is changing the name of a column. This is done by using the **names** command, which returns our column name as a character vector which allows us to rename it.   

```r

names(dataframe)[names(dataframe) == "past column name"] <- "new column name"

```

This is beneficial for situations like earlier, where the data we create may have weird names. If we are working
with data from online, the names may not be suitable for r as well which justifies a name chanee too. 

Finally, we can access specific elements within a column to filter by column and row. This is particularly effective when cleaning large
datasets. 

```r

Filtered <- Dataframe(Dataframe$column = "Certain word Within Columns Rows")

```

Now that we have shown you the base r methodology for working with data. We will look at how these processes can be simplified and made
easier using **dplyr**.

--------------------------------------------------------------------------------

## Using Dplyr

We will briefly touch on Dplyr and it's use in R. Dplyr is a package that provides
a multitude of functions that will make tedious cleaning procedures in base R 
**Simpler and Quicker** 

### Accessing Dplyr

Accessing Dplyr will require following the same procedure that was followed earlier 
for accessing Tidyverse.

```r

install.packages("dplyr")
library(dplyr)

```

### Common Dplyr commands 

-------------------------------------

**Filter**

Filter allows you to select for only certain values in a column that match a desired 
value 

```r

filter(data = example_data, column_name == "certain value")

```

This filter will provide only certain values from one column

other comparative operators can be used with this command such as ```>```, ```<```, ```==```, ```>=```, and ```<=``` to 
select for values that are exceeding, equal, or are less then a certain  value.  

We can also use the ```*``` symbol to indicate wildcards. This essentially means that in a string you have, if you replace a specific character with a wildcard r with filter data for strings that have the non wildcard letters. Here is an example. 

```r

filter(data = example_data, column_name == "a*y")

```

This command would return words like **any**, **army**, and **ally**. This is because these words start with a and end with y. 


**Select**

Select is a streamlined command that allows you to select columns from your dataset

```r


select(data = DataFrame, "This Column", "This other column", "Ooh maybe this one!")

```
---------

**Group_by and Summarise** 

The ```group_by``` and ```summarise``` functions are used in tandem frequently. 

The group_by function allows you to **Group Your Data** by a certain column. An example would be if you have a dataset containing information for every state, using the group_by function would allow you to organize your data by state.

group_by serves as a precursor for using the **Summaarise** function, and the **Mutate** function which we will talk about later 

using the summarise function allows you to compute descriptive data from your dataset. An example with the group_by function would be grouping by state, and then computing the population with the summarise function giving you population per state. Without using the group_by function, we would be left with the total population for the dataset. 

**Mutate**

Using the mutate command allows you to isolate specific columns within your dataset and apply functions to them. This will result in a new column being created with the results of the function you applied. 

```r

Mutated_DF <- Dataframe %>%
mutate(
new_column = existing_column * 2 )
```
As you can see, this data would be especially benefiical for converting data between different unit types. 


 we can also mutate a column without creating a new one 

```r
mutate(
existing_column <- existing_column * 2 
)
```

**Rename**

Th

```r

Dataframe |>
clean_name <- old_namethattellsus_informationaboutthe_populationof...

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

With only 2 lines of code, we can make large changes to a dataset!

### Best Practices 


- **Use Clear Naming Conventions** when you are naming data types

- **Never Change the Raw Data**, it's best to create a clean data copy of your raw
data that you have manipulated. 

- **Document Your work** so that you can come back to it later and understand 
what you have changed


### Summary 

This guide goes over the basics of accessing data files and beginning to learn 
to navigate them.

We recommend accessing the resources in the resource hub to 
learn more about using R to prepare you for future classwork and jobs that will 
require it! 