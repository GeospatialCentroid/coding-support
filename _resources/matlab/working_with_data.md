---
layout: single
sidebar:
  nav: matlab_sidebar
title: "Working with Data" 
toc: true
toc_sticky: true
---

## Introduction

two of matlabs greatest strengths are **Analyzing Datasets** and **Visualizing Datasets**

This guide will breifly look into how to read in data, some basic statistical methods of analysis, and 
how to make some basic visual graphics. 

-------------------------------------------------------------------------------

## Reading in Data 

There are several different data types that we can work with in matlab. 

- **Images**

- **Text** 

- **Text Files** 

- **Spreadsheet**

- **Scientific** 

- **Audio**

- **JSON**


Lets look at how to read in spreadsheet data from a CSV. 

Reading a csv file into matlab is fairly simple and can be done with the 
**readtable** command. 

```matlab

T = readtable('enter/filepath.here.csv');

```

Ensure that you know where your csv is stored and that you are calling the filepath correctly.

Check out [This]() resource. 

Lets look at another example. Lets read in an image file to matlab. 

```matlab

image = readImageSafely('put/filepath/here.jpg')

```
For incredibly large datasets in forms such as a csv. We can use the **datastore** command. 


## Analyzing data

Matlab offers a broad suite of data analysis techniques. We will briefly go over 
how to use **Statistical** and **Regression** Descriptive commands 

**Statistical commands** are those that allow us to generate static information about our 
dataset 

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

```matlab

dataset = [10,15,20,25,27,30] % This is how we can create an array in matlab 

% if we wanted to calculate the mean we could use this function

mean_dataset = mean(dataset)

% This would provide us with the mean value for this dataset 
```

**Regression Statistics** involve determing the relationship between two variables
and creating a curve that best describes the relationship

We can use regression statistics through 

```matlab

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

the **gscatter** command offers us a way to visualize a relationship between 2 variables

Lets take our dataset from earlier 

```matlab

% lets imagine that our x column is our first column, and our y column is our second. 
% We can use gs scatter to plot the relationship betwween these variables 

gscatter(x,y)

% This would give us a graph where the values 2,4,5,6 are along the x axix, with 1,3,5,6 on the y axis 

```

Now, lets say that our data was grouped into 2 categories cuttnig it in half along the horizontal plane. 

Lets pretend our data was seperated by the years **1998** and **2002**

We can group our data by those 2 years with gscatter

```matlab

% We can do so by using the following program 

gscatter(x,y,year)

% this would color those points in the year 1998 one color, and those in 2002 another color

 ```
 
-------------------------------------------------------------------------------


## Next Steps 

This guide only scratches the surface of what matlab can do. We highly recommend looking into 
our learning resources and CSU provided courses for matlab provided on the coding resources web page. 







