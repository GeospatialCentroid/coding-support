---
layout: single
title: "Working With Data"
sidebar:
  nav: "geospatial_sidebar"
toc: true
toc_sticky: true
---

## Introduction

GIS is centered around using different types of data to answer questions. In this section, we will go over the most common file types data can come in and how to use them within common GIS software such as **ArcGIS**.

> NOTE: Some materials within this guide may differ depending on the type of software you use. We encourage you to familiarize yourself with any software you are using, as well as with the information in this guide.

### File Management

A large part of working with data in GIS is having a strong familiarity with how your file system works. If you are unfamiliar, we recommend that you check out our [Unix Fundamentals](https://codingsupport.colostate.edu/unix/working_with_files/).

## Adding Files to a Project

Any project that we work with using GIS software will usually have a **Project** tab in the top header that allows you to open a project. This is where you will have different maps, layers, and processes stored.

To add files to your project, there will typically be an option that allows you to open a folder or file within the Projects tab or within an Insert tab, such as in ArcGIS. From here, knowing where your files are located is essential, as you will want to select the files you want to add to your project.

Some software, such as ArcGIS Pro, will allow you to connect a folder from your computer to their system in your Projects pane, allowing you to pull any layer files that you have in that folder into your project.

## Geoprocessing

Geoprocessing is one of the most important components of working with geospatial data. Similar to when we clean data in other coding languages, geoprocessing allows us to get our data into a format that allows us to conduct analysis and create valuable insights. We are essentially trying to get all the information that we care about so we can run computations to make informed decisions about a problem.

Commonly, with vector data, we may be more interested in looking at the spatial relationships between multiple feature layers and may have less need to focus on the values associated with them. Geoprocessing can be a very useful tool for looking at these spatial relationships.

In this section, we will look at some of the common geoprocessing tools and what they do.

### Digitization

Typically, when making maps, we will want to create our own features based on the question we are trying to solve. In this case, **Digitization** will be especially handy!

Software such as ArcGIS offers different types of **Construction Tools** that allow you to create points, lines, and various polygon shapes to add as **Feature Classes** within your map. Digitization is very useful when georeferencing, making maps more accurate, or creating features you need that are not available online or are paywalled.

Digitization is also extremely beneficial for transferring physical information such as paper maps into a digital form for sharing and future use.

For more information on digitizing in ArcGIS, click [Here!](https://storymaps.arcgis.com/stories/6565021b9a20487cb8e73458f1e4be83)

For information on digitizing in QGIS, click [Here!](https://www.qgistutorials.com/en/docs/3/digitizing_basics.html)

### Clip

Our data never comes with boundaries that are exactly what we want. For example, when we want to look at geospatial relationships in Colorado, but we have data for the entire United States, GIS terminology calls Colorado our **Region of Interest**. Our goal is to turn our full United States dataset into data for our region of interest only.

This is where the **Clip** processor comes in handy. Essentially, Clip is a cookie cutter. We start with our large nationwide data and take a Colorado-shaped cookie cutter, cutting out the shape. This provides us with a new layer that only has data within our **Region of Interest**, which in this case is Colorado.

When we do a clip (or cut cookies), we are left with two things. Our first is the newly cut shape that our mold creates. The other is everything that is left. Our clip command is capable of not only providing a smaller ROI for a specific state, but it can also be used to exclude specific regions as well.

Using the clip command is beneficial for saving computer storage and making future processing easier, especially for less powerful computers. Smaller areas for analysis have fewer numbers and computations to run, resulting in processing taking less time and not putting as much stress on your computer.


!["clip"]({{site.baseurl}}/geospatial/images/clip_image.png?raw=true)

[Link](https://th.bing.com/th/id/OIP.OxccwDu7fsK0C0ZcBNon7gHaC5?w=303&h=137&c=7&r=0&o=7&pid=1.7&rm=3)


### Union

Unions are an effective way to turn two feature layers into one. No matter the location, when unionizing two layers, any areas that are shared will be merged into one, and the feature layer will expand to incorporate any areas that are not shared between the two features.

Unions are incredibly useful for making analysis quicker and easier. By combining layers, you can reduce the number of commands run over an area, simplifying your data and saving time.

!["clip"]({{site.baseurl}}/geospatial/images/union_example.png?raw=true)

[Link](https://doc.esri.com/en/arcgis-pro/latest/tool-reference/analysis/union.html?tabs=dialog)

### Near

The near tool is great for calculating the closest feature to a selected feature of choice. Near is also great for calculating proximity information related to a feature layer.

With the near command, we typically have an **Input Feature** and a **Near Feature**. The input feature is the feature of interest—the feature we want to know which other feature is closest to.

Our near feature can be one or multiple features that we are interested in finding the closest point to. With near features, we are not only restricted to multipoint data; we can also have various different near features that we want to calculate proximity information for.

With our near tool, we can also access extra parameters to bolster the proximity information we gain.

- **Search Radius** - specifies the radius we want to look for our nearest feature
- **Location** - specifies the x and y coordinates of the nearest feature
- **Field Names** - determines if field attributes of the nearest feature will be added

There are various other examples and applications of the near tool [here](https://doc.esri.com/en/arcgis-pro/latest/tool-reference/analysis/near.html?tabs=dialog)

!["clip"]({{site.baseurl}}/geospatial/images/near_example.png?raw=true)

[Link](https://doc.esri.com/en/arcgis-pro/latest/tool-reference/analysis/near.html?tabs=dialog)


### Buffer

Buffer is a beneficial tool for merging multiple features into one, as well as creating boundaries around your features.

With the buffer tool, you can select specific features and create a **Buffer Distance**. This is essentially a boundary that surrounds your features of choice and extends a specific distance around your object.

Buffer can also be used to merge features into one larger feature. When you create your buffer and features intersect, you can use a **Dissolve Line Buffer** option to merge them. You can also choose to keep them as unique features.

!["buffer"]({{site.baseurl}}/geospatial/images/buffer_example.png?raw=true) 

[Link](https://www.bing.com/th/id/OIP.f3SJUG4O5hkiHs5YJu-acAHaEZ?w=192&h=150&c=8&rs=1&qlt=70&o=6&pid=3.1&rm=2)

Buffers, and the other geoprocessing steps, may not seem especially useful as of now. However, with the combined use of these with **Spatial Join** tools and analysis tools, they can become very powerful methods of accessing information.

## Spatial Join

Spatial joins are how we can combine multiple feature layers into one, providing us with a smaller feature that only has the information we are interested in. It is similar to a clip in some ways, but instead of trying to obtain a Region of Interest, we are typically trying to filter data for specific relationships between layers.

When we do spatial joins, we have two features of interest: our **Target Feature** and our **Join Feature**. Our target feature is the feature we are interested in preserving and finding spatial relationships based on. The join feature is conditional: only features that have the spatial relationship we want with our target feature are preserved. This is similar to a dependent and independent variable. Our target feature is the independent variable, and the join feature is the dependent variable.

When we do spatial joins, we can choose between four tests that we want to evaluate:

- **Intersect**
- **Contains**
- **Within**
- **Closest**

We will take a look at what these four entail.



### Intersect

Intersects focus on 2 features that share the same location geographically on the map in some capacity. There are various examples; however, think of intersecting like two lines on a graph. If they make contact, they are intersecting. If you are familiar with SQL or boolean logic, then it is the same as defining a logical condition with the **AND** classifier.

!["intersect example"]({{site.baseurl}}/geospatial/images/intersect_example.png?raw=true)

[Link](https://th.bing.com/th/id/OIP.WU-ybvI4x4gPnieVdRQbXAHaFj?w=211&h=180&c=7&r=0&o=7&pid=1.7&rm=3)

Intersecting logic can look different for different types of vector formats. Points will usually be 1:1, while polygons can be 1:infinite because of how the data is formatted. We will look at the qualifying criteria for intersect commands based on the function type.

**Points**

|Relationship|Determinant|
|-----|-----|
|Points - Points| Two points are in the same location |
|Point - Line| A line rests on the point of interest at some location |
|Point - Polygon| A polygon is laying over our point at some location |

**Lines**

|Relationship|Determinant|
|-----|-----|
|Line - Line| Somewhere on two lines' paths they share the same location |
|Line - Point| A point lies on a specific line's path |
|Line - Polygon| A part of a polygon lies on top of a line |

**Polygons**

|Relationship|Determinant|
|-----|-----|
|Polygon - Polygon| Areas where two polygons share the same locations |
|Polygon - Line| Areas where a line is within a polygon |
|Polygon - Point| Points that are within a polygon |

### Contains

Our contains command is similar to our intersect command. The primary difference here is that our contains command only includes features that are completely within another feature. An example is where, with our intersect command, parts of a line would get cut off if they were outside of a polygon. With our contains command, they won't be included unless they are completely within the polygon.

!["intersect example"]({{site.baseurl}}/geospatial/images/Contains_Example.png?raw=true)

[link](https://www.bing.com/th/id/OIP.IGdLQIugUrKmg3YHE5A5oQHaEf?w=192&h=150&c=8&rs=1&qlt=70&o=6&pid=3.1&rm=2)

Contains are useful for identifying all features within a defined area, proving beneficial for looking at ecosystem composition and other applications.

A command that is similar is the **Within** command. This command is beneficial for some relationships that contains commands cannot be used for, such as:

- Point to Line
- Point to Polygon
- Line to Polygon

This is because the within command operates similarly to the contains command but with different parameters. With the within command, you can look at the relationship between one feature and another. For example, a point being within a polygon is possible, and a point containing a polygon is not.

### Closest

Finally, the closest command looks for the nearest feature within a search radius. We are essentially taking one feature (the join feature) and matching it to the nearest target feature within a search radius.

For more information on the different types of spatial joins, check out ESRI's learning resources [here](https://doc.esri.com/en/arcgis-pro/latest/tool-reference/analysis/spatial-joins-by-feature-type.html)

## Analysis

Now that we have established our most common methods of shaping our data for use, we will look at conducting actual analysis. This is the process of taking data that we already have and computing statistics of various kinds to make real-world insights about an area. In this guide, we will briefly touch on the easiest way to compute statistics, as well as how to create your own workflows to compute analysis faster for diverse datasets.

### Summarize

The summarize tool is a powerful way of calculating statistics for raster data that is connected to vector layers.

When you have raster data and vector data, you can use the **Summarize** tool to essentially break raster data into respective vector categories within another feature layer. For example, if you have a national raster elevation layer and you want to calculate the average elevation per state, and if you have a vector layer that breaks the United States into states, you can use Summarize to calculate this average. Something like this would allow you to determine which state has the most population above sea level, or it could help you infer where water will flow.

If you want this data in a tabular format, you can also use the **Zonal Statistics as Table** command.

### Select by Attribute & Field Calculations

If you have conducted your pre-processing for vector or raster feature layers and you still find yourself needing to calculate statistics, you can also use the **Select by Attribute** tool or the **Field Calculations**.

Select-by-attribute tools rely on boolean logic. With these, you can essentially organize data within an attribute table in a feature layer by values of certain columns. For example, if you have a set of polygons in a feature layer, you can organize them by population or remove certain polygons with population values that are too large, too small, or that match certain values.

These booleans can be combined to access specific data.

|Boolean Name|Statement|
|--------------|-----------|
| AND | More than one condition is true |
| OR | At least one condition of multiple is true |
| NOT | A condition is not true |

Field calculations are similar to select-by-attribute tools, with the biggest difference being that they actually run computations with values within your attribute table. To use calculate fields, all you need to do is specify the category you want to do math with and specify the expressions you want to apply to your data.

### Model Building

For processing that requires a chain of the steps mentioned earlier, you can use **ModelBuilder**. ModelBuilder essentially allows you to combine the processing steps we have looked at earlier into a multistep workflow. This allows you to visualize your entire workflow to reduce redundancies, easily communicate with stakeholders, make models that can be used across datasets, and easily share your work with others.

ModelBuilders have 3 components that are organized by colors.

- **Blue** is used to specify initial data
- **Yellow** is used to specify commands and tools used
- **Green** is the result of a tool being used

ModelBuilder allows you to create models that are simple for quick processes.

!["simple_model"]({{site.baseurl}}/geospatial/images/small_modelbuilder.png?raw=true)

[link](https://gisgeography.com/wp-content/uploads/2018/02/ModelBuilder-Feature-678x363.png)

You can also make very complex models.

!["intersect example"]({{site.baseurl}}/geospatial/images/large_modelbuilder.png?raw=true)

[link](https://2.bp.blogspot.com/-CdqHY3Mzq_s/V2m6LnrlvdI/AAAAAAAAAFU/aVVj9rUEpggom6WLpdv4ph6Yoh5HAJTTQCLcB/s1600/ccm_pgdb.png)

## Next Steps

ArcGIS and QGIS offer an extensive array of tools that you can use for processing and analyzing any set of data. We recommend that you check out the [ArcGIS](https://doc.esri.com/en/arcgis-pro/latest/tool-reference/analysis/an-overview-of-the-analysis-toolbox.html) and [QGIS](https://docs.qgis.org/3.44/en/docs/user_manual/processing/toolbox.html) software documentation online.


