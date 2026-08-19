---

layout: single
title: "Fundamentals"
sidebar:
  nav: "geospatial_sidebar"
toc: true
toc_sticky: true
---



## Fundamentals

-------------------

It's important to understand the most basic of GIS concepts before you dive into complex GIS software and begin using it for your career. We will focus on providing basic GIS concepts in this section 

-------------------

## Geospatial Data 

**Geospatial data** is information that includes a location or geographic reference.

For example, a traditional dataset might contain information about a group of trees:

| Species | Height | Age |
| --- | ---: | ---: |
| Ponderosa Pine | 18 m | 42 years |
| Aspen | 12 m | 35 years |
| Douglas Fir | 25 m | 67 years |

A geospatial dataset could include the same information along with the **location of each tree**:

| Species | Height | Age | Latitude | Longitude |
| --- | ---: | ---: | ---: | ---: |
| Ponderosa Pine | 18 m | 42 years | 40.58 | -105.08 |
| Aspen | 12 m | 35 years | 40.59 | -105.07 |
| Douglas Fir | 25 m | 67 years | 40.57 | -105.09 |

Adding geographic information allows us to ask additional questions, such as:

> **Are older trees concentrated in particular areas?**

This ability to connect data to location is one of the fundamental strengths of geospatial analysis. It allows us to draw relationships to 
other variables to recognizes patterns and make decisions. 

## Vector VS Raster 

A clear distinction must be made when working with geospatial data between **Vector** data and **Raster** data. 

### Vector Data

Vector data is data that is always in the form of a **Point**, **Line**, or **Polygon**. Polygons in the case of vector data just symbolize any multi-dimensional shape, such as a circle or square. 

Vector data commonly is used for **Discrete** data. Because a point, line, or polygon can only have 1 specific value. It is especially good for **Comparison**, **Navigation**, and **Computations**.

Vector data is not as suited for looking at continous data. 


### Raster Data

If we want to look at continous data that changes over very small distances we want to use **Raster** data. Raster data is a form of data that comes in connected squares. These squares can all hold different values, allowing us to visualize trends and compare one location to another. 

## File Types 

## Location Comparison & Workflows 

### Union

### Intersect 

### Buffers

### In and not in

## Next Steps

Now that we have looked at some of the basic GIS concepts, lets take a look at some of the broad applications of GIS. 

