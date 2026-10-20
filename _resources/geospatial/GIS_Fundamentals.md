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

When working with geospatial data, knowing what type of data you are working with is imperative. Therefore, a clear distinction must be made when working with geospatial data between **Vector** data and **Raster** data. These are the two ways that data is represented in GIS. Both are beneficial for fulfilling different purposes. 


!["vector raster comparison"]({{site.baseur}}/geospatial/images/vector_vs_raster.png?raw=true)

### Vector Data

Vector data is data that is always in the form of a **Point**, **Line**, or **Polygon**. Polygons in the case of vector data just symbolize any multi-dimensional shape, such as a circle or square. 

Vector data commonly is used for **Discrete** data. Because a point, line, or polygon can only have 1 specific value. It is especially good for **Comparison**, **Navigation**, and **Computations**. It also is useful for establishing **Regions of Interest (ROIS)** for research projects

Vector data is not as suited for looking at continous data alone. However, using it with raster data is. 


### Raster Data

If we want to look at continous data that changes over very small distances we want to use **Raster** data. Raster data is a form of data that comes in a grid of squares that each represent a certain value based on a real life surface area. Raster data is best for displaying real world variables such as **Elevation** and **Surface Reflectance**. 

We will go more indepth on the uses and applications of vector and raster data later 

## Layers 

Layers make up the whole of any geospatial visualization. Layers are each a different group of features that appear in a map that you are making. Here is an example in a mountainous map. 

- **Layer 1**: Different types of vegetation. 
- **Layer 2**: Watershed layer that is able map out the entire flow of rivers within your region of interest. 
- **Layer 3**: Road layer that shows all the roads that are present in your map. 

With these three layers alone, you can make informative observations. One example is looking at the difference in predominant vegetation next to rivers and roads vs far away from rivers and roads. You can also compare the contour of the river to the road. 

As you add more layers, you will be able to draw more conclusions to make decisions. Some examples are if you have a wildfire layer; you can look at the occurence of wildfires and their proximity to roads. Or if you have a water quality layer you can look at the proximity to roads and forests and the differences in water quality. 

The applications of GIS layers are endless, we will go more in depth in a later section on how to build workflows in common GIS software that allow you to analyze spatial data for any purpose. 

## Coordinate Systems & Projctions 

If you try to take an orange peel and completely flatten it into a circle, what happens? Most likely, you aren't able to. You will have to cut the orange in some way and rearrange the shape of it to do so. 

Similarly, if you tried to flatten the earth into a 2 dimensional circle would you be succesful? Probably not. Because it is eesentially impossible to do so, we have to find a way to represent map data in a 2 dimensional plane. This is where **Coordinate Systems** and **Projections** come in handy! 

Coordinate systems and projections essentially flatten one small area on the global map, allowing for our latitude and longtitude values to be as accurate as possible in that area. We essentially take the oragne problem from earlier and simplify it; we take one small part of our orange peel and flatten it completely. Doing so effectively gives us a 2 dimensional map for what was once a 3 dimensional shape! 

However, coordinate systems are far from perfect. Because we completely flatten one specific area, as we get farther from that area our map will become more and more **Distorted**. Distortions are where the size of objects on our map are not accurate to their true  size. Usualy, as we get farther from the origin of our coordinate system, our distortion will become stronger. This makes our data look larger, longer, or more curved then it actually is, and values farther from our origin are less accurate. Because of this, coordinate systems usually have a defind region that they serve best. 

|Coordinate System| Best Purpose| 
|-------------------|-----------|
| WGS84 | World Geodetic System | 
| NAD83 | North American Datum | 


|Projected Coordinate System | Best Purpose| 
|----------------------------|-------------|
| Web Mercator | Simple Math Calculations | 
| State Plane | Specific US States and Regions | 
| UTM | Specific Areas of the Earth | 


Some **Projections** are also made for maintaining certain properties of maps 

|Projection Category | Function | Examples | 
|----------------|-------|-------------------|
| Conformal | Preserves angles and local shapes | Mercator, Lambert Conformal Conic, Transverse Mercator| 
| Equal-Area | preserves area relationships | Albers Equal Area, Lambert Azimuthal Equal Area | 
| Equidistant | Preserves distances from specific points | Azimuthal Equidistant, Equidistant Conic | 

Overall, when working with geospatial data you will want to be mindful of where the data you are working with is located and making sure that your coordinate system is best suited for that area. If not, you will want to **reproject** your coordinate system to best fit that region. 

## Types of Files 

Vector Files and Raster files can have various different file types that serve different purposes. Understanding the most common types will allow you to better understand how to work with the data that you have at your disposal. 


**Vector Files**

|File Name| Format | Purpose| 
|-----------|-----|---------|
| Shapefile| .SHP | Describes the shape, positioning, and data associated with a vector layer |
| GeoJSON| JSON| Encoding geographic vector data structures. Best for online mapping applications | 
| Geography Markup Language | GML | storing geoegraphic features as text for use in text editors | 
| Keyhole Markup Language | KML | Storing vector data in gooogle Earth format | 
|OpenStreetMap | OSM | Using data from community science based projects | 

The most common file type that you will work with in mapping softwares for vectors is shapefiles, JSONS, and KML files. 

**Raster Files** 

|File Name| Format | Purpose| 
|-----------|-----|---------|
|ERDAS Imagine | IMG | Storing single and multi band satellite data | 
|GeoTIFF | tif | storing remote sensing data | 
| IDRISI Raster | RST | Storing numeric grid cell values as integers, real numbers, and bytes | 
| ENVI RAW Raster | BIL | Storing single and multi band satellite data | 


## Next Steps




