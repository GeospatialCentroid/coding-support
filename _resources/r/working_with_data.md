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

## Navigating your Data set

Let's begin by looking at how to access **Columns**, **Rows**, and **Elements** in your data.

### Accessing Columns 

We can access columns in a data set by using the ```$``` command as well as our ```[]``` syntax.

This code will allow us to create a **Vector** of a specific column within our **DataFrame**  

```r

desired_column <- dataframe$column

```

Similarily 

```r

desired_column <- dataframe["column"]

```

We can **Manipulate** Column headers. One example is changing the name of a column. This is done by using the **names** command, which returns our column name as a character vector which allows us to rename it.   

```r

names(dataframe)[names(dataframe) == "past column name"] <- "new column name"

```
We can also select **Multiple Columns**

```r

Selected_Columns <- dataframe[c("colname1","colname2")]

```

### Accessing Rows 

We can access rows through **Filtering** for certain **Values** rows have in a column

Filtering rows

```r

Filtered <- Dataframe(Dataframe$column = "Certain word Within Columns Rows")

```

### Accessing elements in rows 

let's take this one step further and access **Specific Elements**!

**Vectors**

we will use an example vector 

```r
vector <- c(10,20,25,200,1000)
```

First, we can pull one specific value 

```r

pulled_value <- vector[1]
```

```r
[10]
```
we can do the same to access multiple values 

```bash
multiple_values <- vector[c(1,5)]
```
```r

[10],[1000]

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

Specific_Rows_and_Columns <- example_matrix[c(1,2), c(4,5)]

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
)

```

let's pull the name Julie from our dataset

```r
dataset_element <- dataset_example[2,1]
```


We can run similar commands to access entire rows and columns 

```r
dataset_row <- dataset_example[2,]
```

### Applications of Navigating Datasets

Being able to navigate through your data quickly
will allow you to efficiently **Clean Your Data**, creating a strong foundation for your future work. 

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

Example_dataframe %>% 
filter(column name == "certain value")

```

This filter will provide only certain values from one column

other comparative operators can be used with this command such as ```>```, ```<```, ```==```, ```>=```, and ```<=``` to 
select for values that are exceeding, equal, or are less then a certain  value.  


**Select**

Select is a streamlined command that allows you to select columns from your dataset

```r

Selected_DF <- Dataframe |>
select("This Column", "This other column", "Ooh maybe this one!")

```

**Mutate**

This is a similar command to the one we did earlier, where we were able to change the value of a column.
The difference is that we are able to apply a function or changes to a column, which will create a new column with
those changes applied 

```r

Mutated_DF <- Dataframe %>%
mutate(
new_column <- existing_column * 2 )
```

 we can also mutate a column without creating a new one 

```r
mutate(
existing_column <- existing_column * 2 
)
```

**Rename**

This command allows us to rename a column to something cleaner and maybe more concise

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