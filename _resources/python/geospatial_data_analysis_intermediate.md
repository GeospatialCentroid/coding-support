---
title: Intermediate Geospatial Analysis in Python
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "python_sidebar"
---

After learning the basics of geospatial analysis, Python can be used for more sophisticated spatial workflows including:

* Spatial joins and overlays
* Buffer and proximity analysis
* Raster analysis
* Spatial indexing
* Network analysis
* Large-scale geospatial processing

This guide introduces intermediate techniques using Python geospatial libraries.

---

# Core Libraries for Advanced Geospatial Analysis

The following libraries are commonly used together:

| Library   | Purpose                           |
| --------- | --------------------------------- |
| geopandas | Vector spatial analysis           |
| shapely   | Geometry operations               |
| rasterio  | Raster data processing            |
| pyproj    | Coordinate system transformations |
| rtree     | Spatial indexing                  |
| osmnx     | Road network analysis             |

Install them using pip:

```bash
pip install geopandas shapely rasterio pyproj rtree osmnx
```

Import libraries:

```python
import geopandas as gpd
import pandas as pd
import shapely
import rasterio
```

---

# Spatial Joins

Spatial joins combine datasets based on geographic relationships.

Example use cases:

* Assign points to polygons
* Identify observations within boundaries
* Link environmental data to regions

Example:

```python
cities = gpd.read_file("cities.shp")
states = gpd.read_file("states.shp")

joined = gpd.sjoin(cities, states, how="left", predicate="within")
```

This attaches the state information to each city based on location.

---

# Spatial Overlay Operations

Overlay operations combine polygon layers.

Common overlay operations include:

| Operation    | Description                     |
| ------------ | ------------------------------- |
| intersection | shared area between features    |
| union        | combined geometry               |
| difference   | subtract one layer from another |

Example:

```python
protected = gpd.read_file("protected_areas.shp")
development = gpd.read_file("development_zones.shp")

overlap = gpd.overlay(protected, development, how="intersection")
```

This finds areas where development overlaps protected land.

---

# Buffer Analysis

Buffers create zones around geographic features.

Example applications:

* Identify features within a certain distance
* Analyze accessibility
* Environmental impact analysis

Example:

```python
roads = gpd.read_file("roads.shp")

roads_buffer = roads.buffer(1000)
```

This creates a **1 km buffer zone around roads**.

Plot the result:

```python
roads_buffer.plot()
```

---

# Distance Analysis

Distance calculations help answer spatial questions such as:

* What is the nearest facility?
* How far are locations from a feature?

Example:

```python
cities["distance_to_center"] = cities.distance(center_point)
```

Finding nearest features:

```python
nearest = gpd.sjoin_nearest(cities, hospitals)
```

---

# Spatial Indexing

Large geospatial datasets can be slow to process. Spatial indexing improves performance.

GeoPandas can automatically build spatial indexes.

Example:

```python
cities.sindex
```

Spatial indexes speed up operations like:

* spatial joins
* intersection checks
* nearest neighbor searches

---

# Working with Raster Data

Raster data represents spatial information as a **grid of pixels**.

Common raster datasets include:

* satellite imagery
* elevation models
* climate surfaces
* land cover maps

Load a raster file:

```python
import rasterio

dataset = rasterio.open("elevation.tif")

print(dataset.read(1))
```

---

# Raster Visualization

Display raster data using matplotlib:

```python
import matplotlib.pyplot as plt

data = dataset.read(1)

plt.imshow(data)
plt.colorbar()
plt.title("Elevation Map")

plt.show()
```

---

# Raster Masking

Mask raster data using vector boundaries.

Example:

```python
from rasterio.mask import mask

boundary = gpd.read_file("study_area.shp")

masked, transform = mask(dataset, boundary.geometry, crop=True)
```

This extracts raster data within a defined study area.

---

# Reprojecting Raster Data

Raster datasets must use compatible coordinate systems.

Example:

```python
from rasterio.warp import calculate_default_transform
```

Raster reprojection ensures spatial alignment with vector layers.

---

# Network Analysis

Network analysis studies connections between locations.

Example applications:

* transportation routing
* delivery optimization
* accessibility analysis

Using OSMnx to analyze road networks:

```python
import osmnx as ox

graph = ox.graph_from_place("Fort Collins, Colorado, USA", network_type="drive")
```

Visualize the network:

```python
ox.plot_graph(graph)
```

---

# Shortest Path Analysis

Find the shortest route between locations.

```python
import networkx as nx

orig = list(graph.nodes)[0]
dest = list(graph.nodes)[100]

route = nx.shortest_path(graph, orig, dest, weight="length")
```

Plot the route:

```python
ox.plot_graph_route(graph, route)
```

---

# Large Geospatial Datasets

When working with very large datasets:

* Use spatial indexes
* Filter data early
* Use chunked processing
* Use GeoParquet or GeoPackage formats

Example:

```python
data = gpd.read_file("large_dataset.gpkg")
```

These formats improve performance compared to shapefiles.

---

# Example Advanced Workflow

A typical advanced geospatial workflow might include:

```python
import geopandas as gpd

# load datasets
cities = gpd.read_file("cities.shp")
states = gpd.read_file("states.shp")

# spatial join
cities_states = gpd.sjoin(cities, states)

# buffer analysis
cities_buffer = cities.buffer(5000)

# overlay analysis
urban_overlap = gpd.overlay(cities_buffer, states, how="intersection")

# save results
urban_overlap.to_file("analysis_results.shp")
```

---

# Performance Tips

To improve performance in geospatial workflows:

* Convert data to **projected coordinate systems**
* Use **spatial indexes**
* Avoid repeated geometry operations
* Use efficient formats such as **GeoPackage**

These practices significantly improve processing speed.

---

# Summary

Intermediate and advanced geospatial analysis in Python enables powerful spatial workflows.

Key techniques include:

* Spatial joins and overlays
* Buffer and distance analysis
* Raster data processing
* Network analysis
* Performance optimization

These tools allow researchers and analysts to perform complex spatial analysis entirely within Python.

---

# Next Steps

To further expand your geospatial skills, explore:

* Spatial statistics
* Machine learning with spatial data
* Satellite imagery processing
* Spatial clustering
* Web mapping applications

Combining these tools enables advanced geospatial research and real-world geographic applications.
