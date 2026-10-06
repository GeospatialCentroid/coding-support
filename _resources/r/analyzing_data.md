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

### R Squared Values 

### Regressions and Residuals

### Power

## Common Statistical Tests 

### Correlation Test 

## Predicting Future Values 


