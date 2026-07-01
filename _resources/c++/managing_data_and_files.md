---
layout: single
sidebar:
  nav: c++_sidebar
title: "Managing Data and Files" 
toc: true
toc_sticky: true
---

## Introduction

We will briefly go over how to install data and files with c++. This is especially
important for your future work in c++ which will most likely require using external data
mixed with fundamental knowledge to create projects. 

Most of the time, working with programming languages will require using **external** data 
or moving files from location to location. Makingg knowing how to do so even more important. 


--------------------------------------------------------------------------------


## Working with Data 


### Arrays

One of the first things we will focus on in this guide is creating a dataset called an **array**. 
Arrays allow you to store a series of numbers or other values that you can work with later. 

Our first step in creating an array will be **setting our array size*. This can be done with a simple 
command 

```c++

int example_array[10]  // This command tells our system that we wan't to make an array named example array that can only store integer values.

```

Upon creating our array, we can input values into it through this command


``` c++ 

int example_array[10] = {1,2,5,6,7,8,6,5,2,1}

// we have now created an array with 10 different numbers in it.//

```

Lets say that we wanted the 4th number in the array. We could find the fourth
number like so 

```c++

include iostream

int main{

cout << example_array[3] << " ";

// when we pull from arrays our first value will be 0. So that makes our 4th value called with a 3 

return 0 

}

```


### Matrices


Another important datatype in c++ is a **matrix**. A matrix operates as a 
two dimensional array. Lets look at an example 


```c++

int example_mat[4][4] 
//This is our matrix dimension marker. This means we are making
a 4x4 matrix. 

= {1,2,3,4
   5,6,7,8
   9,10,11,12
   13,14,15,16}
   
Nowe have made an matrix that is in a 4x4 square pattern that contains numbers from 1 through 16. 

We can call a value from our matrix in a similar fashion to how we called numbers in our array

include iostream 

int main { 

cout << example_mat{2{4} << end1;

return 0}}

// This means that we want our matrix to return the value in the 2nd column and 4th row. Which would be 14! 

```

### Datasets


Finally, lets look at how we can create our own dataset in c++ as well as reading in data files 


We can use a simiiar approach to our matrix construction with a few modifications to

**make our own dataset** 

```c++

#include <iostream>
#include <vector>
#include <string>
#include <stdexcept>

int main() {
    
try {
    DataFrame df;

    // Add columns
    df.addColumn("A", {1.0, 2.0, 3.0});
    df.addColumn("B", {4.0, 5.0, 6.0});

// we now have 2 columns in our dataset each with 3 variables in them. We can 
access our dataset values with a simple line of code. 

 // Access a column
 const auto& colA = df.getColumn("A");
 std::cout  << colA[0] << end1; 
        
/* in this code, we created a new constant data type variable named colA. Then,
we used the df.getColumn command to get the column of data under A. With this, 
we were able to print the first value in column A which is 1. 


```


Lets learn how to **read a data file** into our c++ workspace.

Somme common data types consist of 

- **Comma Seperated Values (CSV's)**

- **Table Seperated Values (tsv's)**

To do so, we will need **Three commmands**

- **The ifstream command** allows us to open a file in read mode

- **The ofstream command** allows us to write a file 

- **The fstream command** is where we will import our library 

- **the getline command** will retrieve lines from the file and print them


Lets look at an example of how to do this

``` c++ 

#include <fstream>
#include <iostream>
#include <string>

int main() {
// Open the file for reading
std::ifstream inputFile("example.txt");

// Read and process each line
while (std::getline(inputFile, line)) {
std::cout << line << std::endl; // Output the line

inputFile.close();
return 0;

```

This is a basic representation of reading a file into c++. For more complex files, it 
is benefical to look into coding resources to learn more about the nuances of the code to make your file 
manageement abilities stronger. 

Lets look at how to **write** a file now 

```c++

// This code will utiliize the ofstream command.

#include <iostream>
#include <fstream> // Required for ofstream

int main() {
std::ofstream MyFile("example.txt"); // Open file for writing

if (MyFile.is_open()) { // Check if file opened successfully
MyFile << "Hello, file!" << std::endl;
MyFile << 42 << "\n";
MyFile.close(); // Always close after writing
std::cout << "Data written successfully.\n";
} else {
std::cerr << "Error opening file.\n";
}

return 0;
}

```


--------------------------------------------------------------------------------


## Next Steps

This guide scratches the surface of the potential of c++. To look into more coding 
resources, check out our CSU class offering webmap as well as our coding resources. 


