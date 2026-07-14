---
layout: single
sidebar:
  nav: matlab_sidebar
title: "Working With Data" 
toc: true
toc_sticky: true
---

## Introduction

two of matlabs greatest strengths are **Analyzing Datasets** and **Visualizing Datasets**.

This guide will briefly look into how to **Read in Data**, some **Basic Statistical Methods of Analysis**, and how to make some basic **Visual Graphics.**

-------------------------------------------------------------------------------

## Reading in Data 

### Data Types 

There are several different data types that we can work with in matlab. 

- **Images**

- **Text** 

- **Text Files** 

- **Spreadsheet**

- **Scientific** 

- **Audio**

- **JSON**

While there are methods to read in all of these data types. We will focus specifically on **Comma Seperated Values (CSV's)**. These are one of the most common types of data you will use in your future. 


### Examples 

Lets look at how to **Read in Spreadsheet Data** from a CSV. 

Reading a csv file into matlab is fairly simple and can be done with the 
**readtable** command. 

```m

T = readtable('enter/filepath.here.csv');

```

Ensure that you know where your csv is stored and that you are calling the filepath correctly.

To learn more about file paths, check out [This](https://geospatialcentroid.github.io/coding-support/unix/) resource. We go over how file paths work and provide some learning resources! 

Lets look at another example. Lets read in an image file to matlab. 

```m

image = readImageSafely('put/filepath/here.jpg')

```
For incredibly large datasets in forms such as a csv. We can use the **Datastore** command. 


--------------------------------------------------------------------------------------


## Analyzing data


Matlab offers a broad suite of data analysis techniques. We will briefly go over 
how to use **Statistical** and **Regression** Descriptive commands 


### Statistical Commands

Statistical Commands are those that allow us to generate **Descriptive Information** about our dataset.

| Command | Function| 
|---|---------------|
| Mean | Calculates the average of a data set | 
| Median | Splits the data into a higher and lower section | 
| Mode | Calculates the most frequently occuring value | 
| range | Calculates the range of a dataset
| min/max | Calculates the maximum and minimum values in a dataset| 
| STD | Calculates how much the data deviates from the mean | 

The majority of these functions can be run with simple commands in Matlab

Lets look at an example where we calculate a few descriptives 

```m

dataset = [10,15,20,25,27,30] % This is how we can create an array in matlab 

% if we wanted to calculate the mean we could use this function

mean_dataset = mean(dataset)

```

This would provide us with the mean value for this dataset 

### Regression Commands

**Regression Statistics** involve determing the relationship between two variables
and creating a curve that best describes the relationship

We can use regression statistics through 

```m

% lets create a 2 column dataset in matlab 

dataset = [2,4,5,6;1,3,5,6]

% we can use the corr command to determine if a relationship between these variables exists

corr(x)

```

by using the **corr function** we will create a correlation coefficient value for every value 
in the dataset. Values that are closer to 1 or -1 signifiy a strong correlation. Those that
are closer to 0 signifiy a weaker correlation 

--------------------------------------------------------------------------------

## Visualizing Data 

Finally, lets look at how we can make some simple plots in matlab 

the **gscatter** command offers us a way to create our most basic visualiation; a relationship between 2 variables.

Lets take our dataset from earlier 

```m

% lets imagine that our x column is our first column, and our y column is our second. 
% We can use gs scatter to plot the relationship betwween these variables 

gscatter(x,y)

```
 This would give us a graph where the values 2,4,5,6 are along the x axix, with 1,3,5,6 on the y axis 



Lets pretend our data was seperated by the years **1998** and **2002**

We can group our data by those 2 years with gscatter

```ma

% We can do so by using the following program 

gscatter(x,y,year)

% this would color those points in the year 1998 one color, and those in 2002 another color

 ```
 
-------------------------------------------------------------------------------


## Next Steps 

This guide only scratches the surface of what matlab can do. We highly recommend looking into
our learning resources and CSU provided courses for matlab provided on the coding resources web page. 







