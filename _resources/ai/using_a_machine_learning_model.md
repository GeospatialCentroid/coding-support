---
layout: single
sidebar:
  nav: ai_sidebar
title: Using a Machine Learning Model 
toc: true
toc_sticky: true
---

Machine Learning Models follow a fairly simple process. It is important to have
a strong coding foundation however to make the process more efficient and make your 
predictions more accurate. 

### The Machine Learning Model Workflow


1. **Data Cleaning** - Data must be cleaned to remove N/A values and null values before
feeding it to our model as these will skew our results whent our model makes predictions. 


2. **Training and Testing Data** - We will split our data into a training and testing 
category. Our machine learning model will use our training data (~80-90% of our data)
to go through it's learning process and make more and more accurate predictions. Then, 
once our model has been fine tuned to make accurate predictions, we can use our testing data
to generate predicted values. j


3. **Model Learning** Models learn by taking test data and beginning to run predictions with them. As these predictions grow
more acurrate, they make more predictions that will follow the same path and then begin to break off into differnt prediction paths.
This process can be continued for hundreds to thousands of iterations. If we were to visualize this, it may look like the structure of 
roots or a tree. 


###**Training Algorithms**


There are subsets of training categories that can be used to make the best predictions with the data
you have. 


- **Classification Models** are best suited for binary data, consisting of yes or no, 0 or 1, true or false, and data of that nature. 


- **Regression Models** - are models best suited for numerical data that fits a curve or trend. 


- **Clustering Models** - are models that are best suited for data that shoudl be clustered, such as state wide comparison data. 


Popular models such as decision_tree, random forest, and tree based models operate under one of these categories 
for the data they best support. 


There are various ways to **Improve Your Model**. Some popular methods consist of 


- **Ensuring your Data** is accurate, high quality, and that you have an ample amount for your model to learn from. 


- **Modifying our Hyperparameter Tuners** - well allow us to adjust tuners to optimize our models performance before we run it.  


  These parameters can change the rate at which our model learns, the number of new nodes or branches are made in our model, or
  how fast our model begins to move down certain root paths. You can learn more about hyperparameter tuning [Here](https://towardsdatascience.com/classification-of-neural-network-hyperparameters-c7991b6937c3/)
  
  
  Adjusting our Hyperparameters  allows us to generate the most accurate predictions with the lesat energy used. 
  
  
- **Tuning our Model**is important for increasing accuracy of our model by helping us find the best set of hyperparamters. 
  This can be done through multiple methods 
  
  
- **A quicker method is through a grid search** which will search for the best hyperparamter combination. 


- **Bayesian optimization** looks to maximize the effectiveness of a model function. 


- **Random Search** allows us to randomly search for options of the best hyperparamters. This can be used in accordance with the **Hyperband**. Which will stop
  Hyperparemters combinations that are performing poorly. 

  

