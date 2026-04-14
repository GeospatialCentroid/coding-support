---
title: Satellite and Remote Sensing Analysis in Python
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "python_sidebar"
---

Remote sensing involves collecting information about the Earth's surface using **satellites or airborne sensors**.

These datasets are widely used in:

* Climate science
* Agriculture
* Forestry
* Urban monitoring
* Environmental change detection

Python provides powerful tools for analyzing satellite imagery and raster datasets.

---

# Key Python Libraries

| Library    | Purpose                             |
| ---------- | ----------------------------------- |
| rasterio   | Reading and writing raster datasets |
| xarray     | Multidimensional data arrays        |
| rioxarray  | Geospatial raster operations        |
| numpy      | Numerical processing                |
| matplotlib | Visualization                       |

Install packages:

```bash
pip install rasterio xarray rioxarray matplotlib numpy
```

Import libraries:

```python
import rasterio
import xarray as xr
import numpy as np
import matplotlib.pyplot as plt
```

---

# Understanding Raster Data

Satellite images are stored as **rasters**.

A raster contains:

* rows and columns
* pixels representing measurements
* geographic coordinate metadata

Examples:

| Pixel Value | Meaning    |
| ----------- | ---------- |
| 0           | water      |
| 1           | vegetation |
| 2           | urban      |

---

# Opening Satellite Data

Load a raster dataset:

```python
import rasterio

dataset = rasterio.open("satellite_image.tif")
```

Inspect metadata:

```python
print(dataset.meta)
```

Read raster band:

```python
band = dataset.read(1)
```

---

# Visualizing Satellite Imagery

Display image:

```python
plt.imshow(band)
plt.colorbar()
plt.title("Satellite Image")
plt.show()
```

---

# Working with Multi-band Imagery

Satellite images often contain multiple spectral bands.

Example bands:

| Band | Wavelength    | Use             |
| ---- | ------------- | --------------- |
| Blue | visible       | water detection |
| Red  | visible       | vegetation      |
| NIR  | near infrared | plant health    |

Load multiple bands:

```python
red = dataset.read(3)
nir = dataset.read(4)
```

---

# Calculating Vegetation Indices

A common remote sensing index is **NDVI** (Normalized Difference Vegetation Index).

NDVI measures vegetation health.

Formula:

```
NDVI = (NIR - Red) / (NIR + Red)
```

Calculate NDVI:

```python
ndvi = (nir - red) / (nir + red)
```

Visualize NDVI:

```python
plt.imshow(ndvi)
plt.colorbar()
plt.title("NDVI Vegetation Index")
plt.show()
```

---

# Working with xarray

Satellite datasets are often large and multidimensional.

xarray provides labeled arrays for working with these datasets.

Load raster using rioxarray:

```python
import rioxarray

data = rioxarray.open_rasterio("satellite_image.tif")
```

Inspect dataset:

```python
print(data)
```

---

# Time Series Satellite Data

Many Earth observation datasets contain **temporal data**.

Example:

* monthly vegetation index
* daily temperature
* yearly land cover

xarray handles time dimensions easily.

Example:

```python
dataset.mean(dim="time")
```

---

# Cropping Satellite Images

Extract specific geographic regions.

```python
from rasterio.mask import mask

cropped, transform = mask(dataset, shapes, crop=True)
```

---

# Change Detection

Remote sensing is often used to detect environmental change.

Example:

* deforestation
* urban expansion
* glacier retreat

Calculate difference between images:

```python
change = image_2024 - image_2015
```

Visualize change:

```python
plt.imshow(change)
plt.colorbar()
```

---

# Large Satellite Datasets

Earth observation datasets can be extremely large.

Strategies for handling large data:

* chunked processing
* lazy loading
* cloud optimized GeoTIFFs
* using xarray + dask

Example:

```python
data = xr.open_dataset("large_satellite_dataset.nc")
```

---

# Example Workflow

Typical remote sensing workflow:

```python
import rasterio
import numpy as np

dataset = rasterio.open("image.tif")

red = dataset.read(3)
nir = dataset.read(4)

ndvi = (nir - red) / (nir + red)
```

---

# Applications of Remote Sensing

Satellite analysis is used for:

* monitoring forests
* tracking crop health
* detecting wildfires
* mapping land use change
* monitoring climate change

Python tools make these analyses accessible for research and environmental monitoring.

---

# Summary

Python provides powerful tools for analyzing satellite data.

Key capabilities include:

* reading raster datasets
* analyzing spectral bands
* calculating vegetation indices
* detecting environmental change
* working with large Earth observation datasets

These tools allow scientists and analysts to study the Earth at global scale.

---

# Next Steps

Advanced remote sensing topics include:

* satellite image classification
* deep learning for imagery
* hyperspectral analysis
* cloud-based Earth observation platforms
* real-time environmental monitoring
