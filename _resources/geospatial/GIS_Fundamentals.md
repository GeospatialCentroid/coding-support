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

**Geospatial data** is essentially data that incorporates a location or geographic reference.

A traditional dataset might contain information about a group of trees:

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

> **What trees are most common in certain regions?**

This ability to connect data to location is one of the fundamental strengths of geospatial analysis. It allows us to draw relationships to other variables to recognizes patterns and make decisions. 

Geospatial visualizations are also one of the most effective ways at sharing scientific topics to the general public and highlighting important relationships. Look at any political affiliation map! 

One of the benefits of geospatial data is that there is no one software or one way to use it. There are a multitude of methods for accessing it. 

## Ways to use GIS 

Primary GIS softwares are **Open Source** and **Privatized**. 

**Open Source** softwares are free tools for processing geospatial data. They are avaliable to download online and don't have paywalls like others. 

**Examples**

- QGIS 
- GRASS GIS
- Whitebox
- GAT 
- GeoServer
- SAGA GIS 

Open Source Softwares allow you to conduct basic GIS work. The only downside is that open source softwares may not always offer the same level of detailed analysis that a privatized version can. However, it's best to learn how to use open source software if you are planning on working on independent research / projects, working with non profits, or don't use GIS enough to justify purchasing a service. 

**Privatized Software** are GIS applications that offer indepth analysis capabilities, easily interactable GUI's, and are leaders in the GIS field. They are best for if you want to work with a company on GIS work, are conducting research with university, or are pusuing GIS as a career. The only downside is that these services are often expensive if an organization is not paying on your behalf. The two most popular GIS softwares are **ArcGIS** and **ENVI**. 


## Vector VS Raster 

When working with geospatial data, knowing what type of data you are working with is imperative. Therefore, a clear distinction must be made when working with geospatial data between **Vector** data and **Raster** data. These graphics are the two ways that data is represented in GIS and fulfill different purposes. 

### Vector Data

Vector data is data that is always in the form of a **Point**, **Line**, or **Polygon**. Polygons in the case of vector data just symbolize any multi-dimensional shape, such as a circle or square. 

Vector data commonly is used for **Discrete** data. Because a point, line, or polygon can only have 1 specific value. It is especially good for **Comparison**, **Navigation**, and **Computations**. It also is useful for establishing **Regions of Interest (ROIS)** for research projects

Vector data is not as suited for looking at continous data alone. However, using it with raster data is. 


### Raster Data

If we want to look at continous data that changes over very small distances we want to use **Raster** data. Raster data is a form of data that comes in a grid of squares that each represent a certain value based on a real life surface area. Raster data is best for displaying real world variables such as **Elevation** and **Surface Reflectance**. 

We will go more indepth on the uses and applications of vector and raster data. 

## Next Steps

After looking at some of the basic GIS concepts, checkout 
the [Geospatial Centroid's Resource page](https://gis.colostate.edu/resources/) to continue learning GIS.


