---
layout: single
sidebar:
  nav: r_sidebar
title: "Analyzing Data" 
toc: true
toc_sticky: true
---

## Introduction

While Visualizations allow us to identify trends in data, we can't make any conclusive statements about these relationships without proper **Data Analysis**. RStudio offers a suite of commands through one of their more popular packages which allow us to gain quick statistical descriptions for our data. In this guide, we will look at some introductory methods for working with analysis ready data. 

## Analysis Package 

While r provides some base level resources for data analysis. The **rstatix** package is the most user friendly method of analzying data in r. The process for using this package is the same for all other packages that we have used before. 

```r
install.packages("rstatix")
library(rstatix)
```

## Statistical Concepts for R 

Before we begin computing functions and looking at statistical relationships. Let's briefly go over some important statistical concepts 

### Data Distribution

Data Distribution focuses on the amount of data that is in each range of a dataset. There are three main types of distribution for data. 
These types of distribution are **Equal**, **Left Skewed**, and **Right Skewed**

**Equal Distribution** is data that is almost shaped like a bell. This essentially means that the majority of the data is within the middle of the range, with data that is significantly less then or greater then our **mean** beeing in lower quantities. Equally distributed data is the most fit for analysis because of concepts pertaining to probability that we will not cover in this guide. 

 !["equal distribution image"]({{site.baseur}}/r/images/Equal_Distribution.png?raw=true)

 **Skewed Data** is data where the majority is located near the maximum or minimum of our total range. This type of data results in a large clump of data located on the left or the right side of the graph, with a tail off as the values increase or decrease. 

 !["equal distribution image"]({{site.baseur}}/r/images/Left__Skew.png?raw=true)

 our **Left Skewed** data is data where the majority of values are in the higher range values. 

 !["equal distribution image"]({{site.baseur}}/r/images/Right_Skew.png?raw=true)

 Conversely, our **Right Skewed** data is data where the majority of values are in the lower range values 

This information will be important when we begin looking at **Correlation** between our variables and try to determine if relationships are present. We will learn more about how to deal with skewed data in later sections. 

### P-Values

P values are how we determine if we can reject our null hypothesis or can't reject it. As a quick review, our null hypothesis in this context essentially means that there is no relationship between two variables. if we rejct our null hypothesis, it usually means that there is some relationship between our variables unless **Confounds** are present. 

When looking at p values, if the value is less then 0.05, this means that we have enough confidence in our data to reject our null hypothesis and imples statisitcal significance. If the values is greater then 0.05. Then this means that we do not have enough confidence or don't have data that shows a statistically significant relationship. Therefore, we fail to reject our null hypothesis. 

### R Squared Values 

Our R Squared values are an indicator of the **Strength** of the relationship between our two variables. In some cases, while we may have a low p value that allows us to reject our null hypothesis. We might still have a very weak relationship between our two variables. 

R Squared values will always between 1 and -1. 

|R Squared Value | Meaning |
|----------------|---------|
|1 | There is a perfect positive relationship between our variables | 
|0 | There is no relationship between our variables | 
| -1 | There is a perfect negative relationship between our variables | 

Typically, values that are anywhere from **0.7 to 1**, and **-0.7 to -1.**

### Linear Regression

We will briefly look at linear regressions. Linear regression are essentially a way to create a graph out of data and determine if there is a relationship between two variables. In our [Visualizing Data](https://codingsupport.colostate.edu/r/visualizing_data/)

### Residuals

### Power

## Common Statistical Tests 

### Categorical vs Continuous 

### Correlation Test 

## Predicting Future Values 


