---
title: Geospatial Machine Learning in Python
layout: single
permalink: python/geospatial_machine_learning/
toc: true
toc_sticky: true
sidebar:
  nav: "python_sidebar"
---

Geospatial machine learning combines **spatial data analysis** with **predictive modeling**. By incorporating geographic features such as coordinates, distances, and environmental variables, machine learning models can uncover spatial patterns and make predictions about geographic phenomena.

Applications include:

* Species distribution modeling
* Land cover classification
* Climate prediction
* Urban growth modeling
* Environmental risk analysis

This guide introduces workflows for building spatial machine learning models using Python.

---

# Key Libraries

Common Python libraries used for geospatial machine learning:

| Library      | Purpose                          |
| ------------ | -------------------------------- |
| geopandas    | Vector spatial data              |
| rasterio     | Raster data processing           |
| numpy        | Numerical operations             |
| pandas       | Tabular data manipulation        |
| scikit-learn | Machine learning models          |
| xarray       | Multidimensional geospatial data |

Install required packages:

```bash
pip install geopandas rasterio scikit-learn xarray numpy pandas
```

Import libraries:

```python
import geopandas as gpd
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
```

---

# Spatial Features in Machine Learning

Spatial models often use features such as:

* Latitude and longitude
* Distance to features
* Elevation
* Climate variables
* Land cover classifications

Example dataset:

| latitude | longitude | elevation | temperature | species_presence |
| -------- | --------- | --------- | ----------- | ---------------- |
| 40.58    | -105.08   | 1500      | 12.4        | 1                |

---

# Preparing Spatial Data

Load spatial dataset:

```python
gdf = gpd.read_file("species_observations.shp")
```

Extract coordinates:

```python
gdf["lon"] = gdf.geometry.x
gdf["lat"] = gdf.geometry.y
```

Convert to machine learning table:

```python
df = pd.DataFrame(gdf.drop(columns="geometry"))
```

---

# Feature Engineering

Create spatial features to improve model performance.

Example: distance to nearest river.

```python
gdf["distance_to_river"] = gdf.geometry.distance(river_geometry)
```

Example: spatial clustering features.

```python
from sklearn.cluster import KMeans

coords = df[["lat","lon"]]
kmeans = KMeans(n_clusters=5)
df["region_cluster"] = kmeans.fit_predict(coords)
```

---

# Splitting Data

Split dataset into training and testing sets:

```python
X = df[["lat","lon","elevation","temperature"]]
y = df["species_presence"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

---

# Training a Model

Train a Random Forest classifier:

```python
model = RandomForestClassifier(n_estimators=200)

model.fit(X_train, y_train)
```

Make predictions:

```python
predictions = model.predict(X_test)
```

---

# Evaluating Model Performance

Measure accuracy:

```python
from sklearn.metrics import accuracy_score

accuracy = accuracy_score(y_test, predictions)
print(accuracy)
```

Other useful metrics include:

* Precision
* Recall
* F1-score
* ROC-AUC

---

# Spatial Prediction

Use trained models to predict across geographic space.

Example workflow:

1. Generate prediction grid
2. Calculate spatial features
3. Apply trained model

Example:

```python
prediction_grid["predicted_presence"] = model.predict(grid_features)
```

These predictions can be visualized as maps.

---

# Mapping Machine Learning Results

Convert predictions to a GeoDataFrame:

```python
results = gpd.GeoDataFrame(prediction_grid, geometry="geometry")
```

Plot prediction map:

```python
results.plot(column="predicted_presence", legend=True)
```

---

# Spatial Cross Validation

Standard machine learning validation may produce biased results because nearby observations are similar.

Spatial cross-validation splits data by **geographic region** instead of random sampling.

Example strategy:

* Divide study area into spatial blocks
* Train model on some regions
* Test on withheld regions

This produces more realistic accuracy estimates.

---

# Working with Raster Features

Machine learning models often use raster datasets such as:

* Elevation
* Land cover
* Climate variables
* Satellite imagery

Extract raster values at observation locations:

```python
import rasterio

with rasterio.open("elevation.tif") as src:
    gdf["elevation"] = [
        x[0] for x in src.sample(
            [(geom.x, geom.y) for geom in gdf.geometry]
        )
    ]
```

---

# Example Workflow

A simplified spatial ML workflow:

```python
import geopandas as gpd
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

data = gpd.read_file("observations.shp")

data["lon"] = data.geometry.x
data["lat"] = data.geometry.y

X = data[["lat","lon","elevation"]]
y = data["target"]

model = RandomForestClassifier()
model.fit(X,y)
```

---

# Summary

Geospatial machine learning combines:

* Geographic data
* Environmental variables
* Machine learning models

These approaches allow researchers to:

* Predict environmental phenomena
* Model spatial processes
* Analyze geographic patterns

Python provides a flexible ecosystem for building advanced geospatial models.

---

# Next Steps

Advanced topics to explore include:

* Spatial deep learning
* Remote sensing classification
* Spatial autocorrelation modeling
* Geostatistics and kriging
* Spatiotemporal forecasting
