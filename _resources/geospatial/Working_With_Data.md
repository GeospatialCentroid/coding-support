---
layout: single
title: "Working With Data"
sidebar:
  nav: "geospatial_sidebar"
toc: true
toc_sticky: true
---

## Introduction 

GIS is centered around using different types of data to fulfill your purposes. In this section, we will go over the most common file types that data can come in, and how to use it within common GIS softwares such as **ArcGIS**. 

> NOTE: Some materials within this guide may differ depending on the type of software you use. We encourage you to familarize yourself with any software you are using as well as using information from this guide. 

### File Management

A large part of working with data in GIS is having a strong familarity with how your file system works. If you are unfamiliar, we recommend that you check out our [Unix Fundamentals](https://codingsupport.colostate.edu/unix/working_with_files/). 


## Adding Files to a Project 

Any project that we work with using a GIS software will usually have a project tab in the top header that allows you to open a **Project**. This is where you will have different maps, layers, and processes stored that you can have saved into your project at anytime. 

To add files to your project. There will typically be an option that allows you to open a folder or file within the projects tab or within an insert tab such as the case for ArcGIS. From here, knowing where your files are located is essential, as you will want to select the files that you want to add to your project here. 

Some softwares such as ArcGIS Pro will allow you to connect a folder from your computer to their system in your projects pane, allowing you to pull any layer files that you have in that folder into your project. 

## Geoprocessing 

Geoprocessing is one of the most important components of working with geospatial data. Similar to when we clean data in other coding languages, geoprocessing allows us to get our data into a format that allows us to conduct analysis and create valuable insights. 

In this section, we will look at some of the common georeferencing tools and what they do. 

### Clip

 Our data never comes with boundaries that are exactly what we want. An example is when we want to look at geospatial relationships in Colorado, but we have data for the entire United States. GIS terminology calls Colorado our **Region of Interest**, and our goal is to turn our full United States dataset into data for our region of interest only!

 This is where the **Clip** processor comes in handy. Essentially, clip is a cookie cutter. We start out with our large nationwide data and we are taking a Colorado shaped cookie cutter and cutting out the shape. This provides us with a new layer that only has data within our **Region of Interest** which in this case is Colorado. 

 When we do clip (or cut cookies) we are left with two things. Our first is the newly cut shape that our mold creates. The other is everything that is left. Essnetially, our clip command is capable of not only providing a smaller ROI for a specific state, but it can also be used to exclude specific regions as well.

 Using the clip command is beneficial for saving computer storage and making future processing easier, especially for less powerful computers. Smaller areas for analysis have less numbers and computations to run, resulting in proceses taking a shorter time and not putting as much stress on your computer. 


!["clip"]({{site.baseurl}}/geospatial/images/clip_image.png?raw=true)


### Spatial Join 

### Union 

### Intersect 

### Near 

### Buffer 

### Summarize 

### Digitization 

## Analysis 

### SQL Filtering 

### Tools 

## Model Building 



