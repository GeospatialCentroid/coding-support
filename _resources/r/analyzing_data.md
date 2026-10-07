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

We will briefly look at linear regressions. Linear regression are essentially a way to create a graph out of data and determine if there is a relationship between two variables. In our [Visualizing Data](https://codingsupport.colostate.edu/r/visualizing_data/), you can see a graph that has a linear line moving through a series of plotted points. This type of graph is the visualizaiton of our linear regression. When we run a linear regression, we are creating a **Slope** that tells us the significance of our relationship and determines if there is a relationship. 

**Residuals** are an essential part to creating a linear regression. They calculate the average distance of points from the line of best fit to determine varaibility in the data. 

### Power

When we do analysis of data. The sample size  can have a significant impact. Smaller sample sizes will tend to have **More** variability within them. While large sample sizes tend to have **Less**. When we look at our results. A larger sample size will most likely be more representive of our true population as well. In RStudio, **Power** is a way to alter our sample size to measure changes in our p value and results. To create sample sizes, we can use the ```slice_sample``` comamand in RStudio.

## Categorical and Continuous Tests

Similar to how we can't create the same graphs with continuous and catogorical data. We also can't compute all of the same statistical tests with categorical and continous data. Each type of data has different methods of determining a relationship. Such as looking at correlation between variables and determining relationships. We will now go over a simple workflow for dealing with both categorical and continuous data. 

## Categorical Variables 

### Correlation Tests 

Before we begin throwing statistical tests for random variables at our computer. We first want to identify variables where they may be a relationship present. We can do this with various different correlation tests, some that can be used for categorical variables, and some that will be used for continuous variables. 

for our **Categorical** datasets, we are commonly looking at changes in variables based on a certain group of paramters, some examples might be states, forest types, or gender. This type of data will typically rely on the chi square test. This test determines if two variables are independent from one another, with the null hypothesis stating that they are. 

When we have p values that are less then 0.05 we are able to reject our null hypothesis, telling us that variables may be dependent on eachother and therefore they may also have a relationship. Let's look at an example of this. 

```r
data(analysis_data)

chisq_test(analysis_data$variable_one, analysis_data$variable_two) |>
summary()
```
by using the **Summary Command**. We are provided with statistics about our command results. Here, we can see if our p value allows to reject our null hypothesis, or if we fail to reject our null hypothesis. 


For Categorical data, if we have determined that a relationship may be present between our variables. We will either want to use a **t-test**, or an **Anova** test. This is completely dependent on the circumstances. 


### Univariate Data

**T-Tests** are best suited for looking at the relationship between 2 variables and no more. 

>NOTE: When we are using commands that examine a relationship. We will find ourselves using the ```~``` command frequently. The common format will be ```dependent variable ~ independent variable``` 

```r

analysis_data |>
t_test(variable_1 ~ variable_2. var.equal = TRUE)

```
something that we haven't talked about is our ```var.equal``` command. This command essentially just tells our command if our data is equally distributed or not so that this can be accounted for to get the most accurate results. Commonly, to test this variance we will us another test called the **levene_test** for 2 variable data. The levene test takes our data and  tests it with the null hypothesis being that the distribution is normal . 

```r

analysis_data |>
  levene_test(variable_1) 
  summary()
```

Simlar to before, upon conducting this test we can use our ```summary``` function to deermine if we will reject our null hypothesis or not. 

> Note: Typically, data with 5000 elements will not be able to run by the levene test. This is because we can assume this data has equal variance due to it's size. 

If we have data with equal variance (distribution) we will say ```var.equal = TRUE```. We will say false when the case is the opposite. 

Upon completing this process, we will know if there is a relationship between two variables of interset in our data. We can follow a similar process when we want to explore relationships between more then 2 variables as well. 


### Multivariate Data 

for **Multivariate** categorical analysis. We will use an **Anova Test**, this allows us to test the relationships between a dependent variable, and multiple dependent variables. This comes in handy when we have data with more then two categorical values. Such as data with 4 or 5 tree cover types. 

We will want to follow the same workflow, first; we identify if correlation is present with our chisq test. After this, we will want to determine if our data is equally distributed or not. the only difference here is the command we will use, which in this case is the **Shapiro Test** 

Something to note here is that because we have multiple variables were looking at, we will want to conduct our test grouping by the same variables were interested in. 

```r

analysis_data |> 
  group_by(variable_2) |> 
  shapiro_test(variable_1)
```

Now, our next steps depend on if our data is equally distributed or not. 

|Command Name | Data Distribution | Function| 
|------------|----------------------|
|kruskal_test| uneven distribution | testing for a relationship | 
|anova_test | even distribution | testing for a relationship | 
|dunn_test | uneven distribution | identifying specific variables with a relationship | 
|turkey_hsd | even distriubtion | identifing specific variables with a relationship | 

The commands structure are the same for both types of distribution. Here, we will assume that our data falls under an evenly distributd dataset. 

```r

analysis_data |> 
  anova_test(variable_1 ~ varaible_2)

```
Here, we will be provided with a tibble that outlines if there is a relationship in our data. In the case that there is, we can now use the ```turkey_hsd``` command to find this relationship. 

```r

analysis_data |>
  turkey_hsd(variable_1 ~ variable_2)

```

At this point, you will be encountered with a tibble of all the different cateogires in your variable 2, allowing for you to find those that have a strong relationship with your dependent variable. 

This is a brief introduction into categorical variables, we will now take a look at how similar processes  can be done with **Continuous Variables** 


## Continuous Variables 

We will want to use a similar workflow as with our categorical variables. 

- Identify correlation in our Data 
- Determine data distribution 
- Run our statistical tests
- Interpret our results 

The only difference in our workflow is the way we will go about it. 

### Identify Correlation

One way that we will identify correlation in continuous data is by **Visualizing our Data**. Upon doing this, we can usually see if variables trend upwards or downwards together. We want to do this before we run any tests because we will also need to determine our datas distribution before we run any tests as well. Doing this allows us to see if the majority of data is centralized around any specific area which could inform us if there is possible unequal distribution. 

Of course, we will want to run a test to determine this no matter what. In this case, we can use the same **Shapiro Test** that we ran earlier, following the same logic with our results. 

Upon determining our data distribution we can use our ```cor_test``` from the rstatix package. This test will tel us the strength of the relationship between our variables. As a reminder, any strength that ranges from 0.7 - 1, either positive or negative is strong correlation. 

```r

cor_test(analysis_data
         vars = c(variable_1, variable-2),
         method = "pearson" #this informs our distribution
         )
  
```

We have two types of methods we can use regarding our datas distribution. 

` **Pearson** is best for data that is parametric (normally distributed)
- **Spearman** is best for non equal distribution (non-parametric)

Upon running our ```cor_test```. We will be given a value for **cor**. This value is our indicator of if our relationship is strong. If it is, we should go into conducting a **Linear Regression** to determine if there is a relationship between our variables. 


### Continuous Variable Analysis 


to run our linear regression, we will use a similar styled equation as with our statistical tests from earlier 

```r


analysis_model <-  lm(variable_1 ~ variable_2, data = analysis_data)

summary(analysis_model)
```


When we use the summary command on our newly created model. We will be provided a set of information that looks like this. 

!["equal distribution image"]({{site.baseur}}/r/images/Regression_Results.png?raw=true)

-------------------------------------------------------








To determine if a relationship is present in this data, we will look at either the **Pr** column, or the **p-value** below. If we are able to reject our null hypothesis, this is a sign that there is a relationship between our variables. 

The strength of our relationship is determined by our **R-squared** value. The same strength rule applies as with our correlation values. As you can see, we have a low R-Squared value, implying the strength is also low.

This process is similar for any multivariate continuous variables that we want to analyze. The main thing to account for is that we will also want to determine if there are any **Confounds** which are indepenent variables that have a relationship with eachother that make it appear like our dependent varaible is dependent upon our independents. 

```r

analysis_data |> 
select(variable_1, variable_2, variable_3) |>
  cor()

```

Here is a quick example of running multivariate linear regression. 

```r

lm(variable_1 ~ variable_2 + variable_3, data = analysis_data)

```


## Predicting Future Values 


