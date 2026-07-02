---
layout: single
sidebar:
  nav: ai_sidebar
title: "Building an AI"
toc: true
toc_sticky: true
---

While it may seem complex to build an AI, building them runs off of simple concepts. 
However, it is important to understand the code required to build an AI and be able to 
write code in the language you choose. 


Make sure that you hae a strong foundation in **Script Writing** and **Working With Databases** before trying to 
build an AI.

## AI Coding Fundamentals 


AI is unique because it is able to interpret human language and provide an output in 
human lanauge as well. This is due to the recent breakthroughs in **Natural Language Processing 
Models.**


- **Natural Language Processing Models** are developed by a system built upon machine learning 
and deep learning AI. They take in natural language speech and text. Clean this data, 
identify keywords, such as names, and context, and are able to create responses and perform tasks.


There are a wide array of coding enterprises such as ChatGPT, and Nvidia that have specific coding 
scripts and commands that have been built around Natural Language Processing Models that allow 
us to build our own AI. University Institutions that have built AI commonly have this infastrcuture as well through 
parternships with AI Companies. 



**Retrieval-Augmented Generation** (RAG) AI Is a subset of Natural Language Processing Model. These are built to 
provide responses based in a certain field, such as **math**, or **coding**. These are more simple to build an AI for 
as they can require less resources. However, substantial infastructure and database resources are still required. 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Building a RAG AI


We will briefly go through the process of building a Rag AI. 


### Library Acquisition


|Library Type|Function|
|-----------|------|
|Document Ingestion & Processing|loading and managing documents and variables|
|Text Chunking| Allows us to split our documents into usable chunks | 
|Embedding | Allows the model to perform a similartiy search | 
|Large Language Models | Processing Natural Language | 
|Vector Database Similarity Search| Creates our vector database and quickens similarity search
|Prompt Engineering| Structures Prompts for more accurate retrieval| 


common sources such as **Langchain** and **OpenAI** can provide these resources. However, some may be paywalled
*



### Data Acquisition and Cleaning**


One of the first things that we want to do is **Collect Our Data** that we want our RAG to learn from. For example,
If we wanted to create an AI that could provide coding support; we would want to find resources that such as coding
manuals, help guides, and information on how to write in different coding languages. We will then want to read our data in. 


When reading our data in, we want to make sure that our data is cleaned and usable for the RAG.
This means if we are working with **Numbers**, we want to remove N/A and null values


Similarily, if we were working with **Text**, we want to make sure that our text is in a usable format. Ebooks and pdfs should be read into our 
coding software as CSV's or TXT files that we will be able to work with later on. 

For our example, lets imagine that we have read in a variety of text data in for use. 

Upon reading our text data in, we will use a **split text** command for our coding langauge of choice to break 
our text into a large series of small chunks. This is because we will **Vectorize** our data next. 



### What is Vectorizing? 


When we vectorize our chunks. Essentially we are putting them in a format that allows our AI system to determine which 
chunks and keywords are the most related. This is done through calculating **Euclidean Distance** for our chunks, which is a complicated process. Thankfully,
common coding languages like python provide libraries and programs that can perform this computation for us. 


When we vectorize our data, it allows our AI to compare phrases and keywords and return a value of how similar they are. 
The closer to 0, the more similar they are when using the right code. 


An example would be comparing the words **Apples** to **Pranges**. Because they don't share many letters, and are different
fruit; AI would most likely give this a higher value. However, if we were to compare apple to IPhone, we would get a lower score.


This is because with the right data, AI is able to recognize that **Iphones** are made by the company **Apple**. 


### Returning Query's


The final part of building our RAG is to create a query entering and returning program. This is the component that will allow for our AI to take in a Natural Language 
Query, convert this into an understandable language for itself, vectorize our query with keywords in it's data, and then provide a natural language response. 


-------------------------------------------------------------------------------------------------------


## Next Steps 


There is complex code that goes into building AI. To learn more and gain an indepth understanding of building a 
RAG ai, look into our resources that we have provided! We will now look at how we can code a model  to help us make predictions. 