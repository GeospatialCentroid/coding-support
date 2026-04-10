---
title: Geospatial Data Analysis in Python
layout: single
toc: true
toc_sticky: true
permalink: python/geospatial_data_analysis/
sidebar:
  nav: "python_sidebar"
---

Geospatial data analysis involves working with **location-based data** such as coordinates, maps, and spatial features.

Python provides powerful libraries for geospatial analysis, allowing you to:

* Map locations
* Analyze spatial relationships
* Work with geographic datasets
* Visualize geographic patterns

Common applications include:

* Environmental science
* Urban planning
* Transportation analysis
* Wildlife tracking
* Satellite imagery analysis

---

# Key Geospatial Concepts

Understanding a few basic concepts helps when working with geographic data.

## Coordinates

Locations on Earth are often represented using:

* **Latitude** – north/south position
* **Longitude** – east/west position

Example coordinate:

```
40.5853, -105.0844
```

This represents a location in Fort Collins, Colorado.

---

## Vector Data

Vector data represents geographic features using geometry.

Common geometry types include:

| Type    | Description                  |
| ------- | ---------------------------- |
| Point   | Single coordinate location   |
| Line    | Path between multiple points |
| Polygon | Area defined by boundaries   |

Examples:

* Cities → Points
* Roads → Lines
* State boundaries → Polygons

---

## Raster Data

Raster data represents geographic information as **grids of cells (pixels)**.

Examples:

* Satellite imagery
* Elevation maps
* Temperature surfaces

---

# Common Geospatial File Formats

| Format               | Description                 |
| -------------------- | --------------------------- |
| Shapefile (.shp)     | Traditional GIS format      |
| GeoJSON              | Web-friendly spatial format |
| GeoPackage (.gpkg)   | Modern spatial database     |
| CSV with coordinates | Tabular spatial data        |

GeoPandas can read most of these formats.
---

# Installing Geospatial Libraries

Install common Python geospatial libraries:

```bash
pip install geopandas shapely matplotlib folium
```

These libraries provide tools for working with spatial data.

---

# Importing Libraries

```python
import geopandas as gpd
import pandas as pd
import matplotlib.pyplot as plt
```

GeoPandas extends pandas to support **spatial data structures**.

---

# Loading Geospatial Data

GeoPandas can read many geospatial formats including:

* Shapefiles
* GeoJSON
* GeoPackage

Example:

```python
states = gpd.read_file("us_states.shp")
```

View the data:

```python
states.head()
```

---

# Understanding GeoDataFrames

GeoPandas stores spatial data in a **GeoDataFrame**.

A GeoDataFrame is similar to a pandas DataFrame but includes a **geometry column**.

Example structure:

| state    | population | geometry |
| -------- | ---------- | -------- |
| Colorado | 5.8M       | Polygon  |

---

# Plotting Geographic Data

Basic map visualization:

```python
states.plot()
plt.show()
```

This generates a simple map showing the shapes of each state.

---

# Creating Maps with Color

You can visualize variables using color scales.

Example:

```python
states.plot(column="population", legend=True)
plt.show()
```

This creates a **choropleth map** where colors represent population values.

---

# Working with Point Data

Example dataset containing coordinates:

```python
data = pd.DataFrame({
    "city": ["Denver", "Boulder", "Fort Collins"],
    "lat": [39.7392, 40.0150, 40.5853],
    "lon": [-104.9903, -105.2705, -105.0844]
})
```

Convert to a GeoDataFrame:

```python
gdf = gpd.GeoDataFrame(
    data,
    geometry=gpd.points_from_xy(data.lon, data.lat)
)
```

Plot the points:

```python
gdf.plot()
plt.show()
```

---

# Coordinate Reference Systems (CRS)

Spatial data must use a **coordinate reference system**.

Common CRS examples:

| CRS   | Description                       |
| ----- | --------------------------------- |
| WGS84 | Global GPS coordinates            |
| UTM   | Local projected coordinate system |

Check CRS:

```python
gdf.crs
```

Set CRS:

```python
gdf.set_crs(epsg=4326)
```

Reproject data:

```python
gdf = gdf.to_crs(epsg=3857)
```

---

# Spatial Joins

Spatial joins combine datasets based on geographic relationships.

Example:

* Assign cities to states
* Match observations to regions

```python
joined = gpd.sjoin(cities, states)
```

This links each city to the state polygon it falls within.

---

# Spatial Filtering

Select features within a geographic area.

Example:

```python
denver_area = states[states["name"] == "Colorado"]
```

Find points within a region:

```python
points_in_state = gpd.sjoin(points, states)
```

---

# Distance Calculations

Calculate distances between locations.

Example:

```python
gdf.distance(other_geometry)
```

This can help answer questions such as:

* How far are two cities apart?
* Which observation is closest to a location?

---

# Interactive Maps with Folium

The **folium** library allows you to create interactive web maps.

Example:

```python
import folium

map = folium.Map(location=[40.58, -105.08], zoom_start=10)

folium.Marker(
    location=[40.5853, -105.0844],
    popup="Fort Collins"
).add_to(map)

map
```

This generates an interactive map you can zoom and pan.

---

# Example Geospatial Workflow

A typical geospatial analysis workflow:

```python
import geopandas as gpd
import matplotlib.pyplot as plt

# load data
states = gpd.read_file("us_states.shp")

# explore data
print(states.head())

# plot map
states.plot()

plt.title("US States")
plt.show()
```


---


# Summary

Python provides powerful tools for geospatial data analysis.

Key capabilities include:

* Loading spatial datasets
* Mapping geographic features
* Performing spatial joins
* Calculating distances
* Creating interactive maps

Libraries such as **GeoPandas**, **Shapely**, and **Folium** make spatial analysis accessible using familiar Python data structures.

---

# Next Steps

After learning the basics of geospatial analysis, explore:

* Spatial statistics
* Raster analysis
* Satellite imagery processing
* Network analysis
* Advanced mapping with interactive dashboards

These tools allow Python to support **advanced geographic and spatial research workflows**.
