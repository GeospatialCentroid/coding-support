---
title: Working with APIs in Python
layout: single
toc: true
toc_sticky: true
permalink: /python/working-with-apis
sidebar:
  nav: "python_sidebar"
---

APIs (Application Programming Interfaces) allow programs to **communicate with other software systems over the internet**.

Many modern services provide APIs so developers can access data programmatically.

Examples include:

* Weather data services
* Social media platforms
* Mapping services
* Scientific databases
* Government open data portals

Using Python, you can request data from APIs and analyze it in your own applications.

---

# What is an API?

An API is a **set of rules that allows one application to request information from another**.

A typical API request works like this:

1. Your program sends a request to an API server.
2. The server processes the request.
3. The server returns a response, often in **JSON format**.

Example API response:

```json
{
  "city": "Denver",
  "temperature": 72,
  "condition": "Sunny"
}
```

---

# Installing Required Libraries

Most Python API work uses the `requests` library.

Install it with pip:

```bash
pip install requests
```

Import the library:

```python
import requests
```

---

# Making Your First API Request

Example request to a simple public API:

```python
import requests

url = "https://api.example.com/data"

response = requests.get(url)

print(response.status_code)
print(response.text)
```

Explanation:

* `requests.get()` sends a request to the API
* `status_code` shows whether the request succeeded
* `response.text` contains the returned data

---

# Understanding Status Codes

APIs return **HTTP status codes** to indicate success or failure.

| Code | Meaning            |
| ---- | ------------------ |
| 200  | Request successful |
| 400  | Bad request        |
| 401  | Unauthorized       |
| 404  | Resource not found |
| 500  | Server error       |

Example check:

```python
if response.status_code == 200:
    print("Request successful")
else:
    print("Request failed")
```

---

# Working with JSON Data

Most APIs return **JSON (JavaScript Object Notation)**.

Convert a response to Python data:

```python
data = response.json()

print(data)
```

Example JSON:

```json
{
  "name": "Alice",
  "age": 30
}
```

Access values:

```python
print(data["name"])
```

---

# Example: Requesting Weather Data

Example using a hypothetical weather API.

```python
import requests

url = "https://api.weatherapi.com/v1/current.json"
params = {
    "key": "YOUR_API_KEY",
    "q": "Denver"
}

response = requests.get(url, params=params)

data = response.json()

print(data)
```

Using parameters allows you to customize API requests.

---

# Parsing API Data

Once JSON data is returned, you can extract specific fields.

Example:

```python
temperature = data["current"]["temp_f"]
condition = data["current"]["condition"]["text"]

print("Temperature:", temperature)
print("Condition:", condition)
```

---

# Converting API Data to a DataFrame

API data can easily be analyzed using pandas.

```python
import pandas as pd

data = response.json()

df = pd.DataFrame(data["results"])

print(df.head())
```

This allows you to:

* analyze data
* filter results
* visualize trends

---

# Sending Query Parameters

APIs often require query parameters.

Example:

```python
params = {
    "city": "Denver",
    "units": "metric"
}

response = requests.get(url, params=params)
```

This generates a request like:

```
https://api.example.com/data?city=Denver&units=metric
```

---

# Authentication with API Keys

Many APIs require authentication.

An API key identifies your application.

Example:

```python
params = {
    "apikey": "YOUR_API_KEY"
}

response = requests.get(url, params=params)
```

Always keep API keys **private** and avoid committing them to GitHub.

---

# Handling Errors

Good programs handle API failures gracefully.

Example:

```python
import requests

try:
    response = requests.get(url)

    response.raise_for_status()

    data = response.json()

except requests.exceptions.RequestException as e:
    print("API request failed:", e)
```

---

# Saving API Data

After retrieving data, you may want to save it.

Save as JSON:

```python
import json

with open("data.json", "w") as file:
    json.dump(data, file)
```

Save as CSV:

```python
import pandas as pd

df = pd.DataFrame(data["results"])
df.to_csv("api_data.csv", index=False)
```

---

# Example API Workflow

A typical workflow might look like this:

```python
import requests
import pandas as pd

url = "https://api.example.com/data"

response = requests.get(url)

if response.status_code == 200:

    data = response.json()

    df = pd.DataFrame(data["results"])

    print(df.head())

    df.to_csv("results.csv", index=False)

else:
    print("Request failed:", response.status_code)
```

---

# API Best Practices

When working with APIs:

* Always check status codes
* Handle request errors
* Respect API rate limits
* Store API keys securely
* Cache results when possible

These practices help ensure reliable and responsible API usage.

---

# Common Data Formats Returned by APIs

APIs typically return data in one of these formats:

| Format  | Description              |
| ------- | ------------------------ |
| JSON    | Most common format       |
| XML     | Structured markup format |
| CSV     | Tabular data             |
| GeoJSON | Geographic data format   |

Python can easily process all of these formats.

---

# Summary

APIs allow Python programs to access data from external services.

Using Python you can:

* Send requests to APIs
* Retrieve JSON data
* Convert results to Python objects
* Analyze the data using pandas
* Save results for later use

APIs make it possible to build applications that integrate with **online services, databases, and real-time data sources**.
