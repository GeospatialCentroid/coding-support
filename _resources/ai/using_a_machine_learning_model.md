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


**Data Cleaning** - Data must be cleaned to remove N/A values and null values before
feeding it to our model as these will skew our results whent our model makes predictions. 


**Training and Testing Data** - We will split our data into a training and testing 
category. Our machine learning model will use our training data (~80-90% of our data)
to go through it's learning process and make more and more accurate predictions. Then, 
once our model has been fine tuned to make accurate predictions, we can use our testing data
to generate predicted values. j


**Model Learning** - Models learn by taking test data and beginning to run predictions with them. As these predictions grow
more acurrate, they make more predictions that will follow the same path and then begin to break off into differnt prediction paths.
This process can be continued for hundreds to thousands of iterations. If we were to visualize this, it may look like the structure of 
roots or a tree. 

**Model Prediction** - After our model has run a specifiied number of iterations, it will be able to predict future numeric values based on the data we provided. 

One thing to note is that this process is heavily dependent on preset paramters and machine learning models that we use to make our predictions. We will take a look at these later. 


### Training Algorithms


There are subsets of training categories that can be used to make the best predictions with the data
you have. 


- **Classification Models** are best suited for binary data, consisting of yes or no, 0 or 1, true or false, and data of that nature. 


- **Regression Models** - are models best suited for numerical data that fits a curve or trend. 


- **Clustering Models** - are models that are best suited for data that should be clustered, such as state wide comparison data. 


Popular models such as [Decision Tree](https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/), [Random Forest](https://www.ibm.com/think/topics/random-forest), and [Tree Based Models](https://medium.com/@sanjanabansal1994/understanding-tree-based-models-a-comprehensive-guide-deb6c6d983d6) operate under one of these categories for the data they best support. click on one of these model types to learn more! 


There are various ways to **Improve Your Model**. Some popular methods consist of 


- **Ensuring your Data** is accurate, high quality, and that you have an ample amount for your model to learn from. 


- **Modifying Your Hyperparameter Tuners** will allow you to adjust tuners to optimize our models performance before we run it.  

  These parameters can change the rate at which our model learns, the number of new nodes or branches are made in our model, or
  how fast our model begins to move down certain root paths.
  
  You can learn more about hyperparameter tuning [Here](https://towardsdatascience.com/classification-of-neural-network-hyperparameters-c7991b6937c3/)
  
  
  Adjusting our Hyperparameters  allows us to generate the most accurate predictions with the lesat energy used. 
  

 **Model Tuning** is another important way to increase accuracy of our model by helping us find the best set of hyperparamters. 
  This can be done through multiple methods.
  
  
- **Grid Search**, which will search for the best hyperparamter combination for your specific model. 


- **Bayesian optimization** looks to maximize the effectiveness of a model function. 


- **Random Search** allows us to randomly search for options of the best hyperparamters. This can be used in accordance with the **Hyperband**. Which will stop
  Hyperparemters combinations that are performing poorly. 


-------------------------------------------------------------------------------------------------------------------------------------------


## Deep Learning 

It's beneficial to distinguish between machine learning and deep learning when talkin about AI predictive models. 

**Machine Laerning** makes predictions based on a small set of data. When it makes mistakes, it needs to be properly adjusted. 

**Deep Learning** takes in far more data. However, it is able to respond to mistakes and learn from them independently. 

### How Does it Work? 

**Deep Learning Learns From Data** in a similar way that humans do.

**It Works Closer to the Raw Data** such as **Images** **Raw Text** and **Videos**. 

**It has a Nueral Network Modeled After the Human Brain**, allowing for it to extract features, create classifications, recognize patterns, and make predicitons without human intervention. 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Summary 

Machine Learning and Deep Learning models are effective ways of emulating human pattern recognition and learning capabilities over large scale datasets. Their broad applications
allow us to use them in a wide variety of fields for a wide variety of tasks. 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Next Steps 

Now that we have provided a base overview of how Machine and Deep Learning works. We encourage you to check out our resource offerings to find resources that can help you practice building your own machine learning models, as well as growing more comfortable with the code and data skills to do so! 






