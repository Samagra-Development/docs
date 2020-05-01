---
id: CODataAnalytics
title: Data Analytics
sidebar_label: Overview
---
![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)

# Component Overview

## 1. Introduction

Data visualization across different departments of the state and central governments is essential for facilitating data backed decision making. There has been an increasing use of data dashboards within the governments and to facilitate the visualization of information we have envisioned an opensource based modular design of managing large data for data visualization that can be scaled and reused efficiently for different governance use cases. After working closely with different state governments we have identified and abstracted common governance use cases that are typically required for managing data visualizations. These use cases have informed our architectural design for the data analytics component.

This documentation of the Data Analytics component will give you an overview of the different use cases that inform the design of the component, how you can get started to deploy this component, how you can setup different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component.

## 2. Use Cases

The following list includes a set of use cases abstracted from different state department functions.

1. Configure data visualizations on a web and mobile friendly dashboard
2. Define custom events in the applications to track 
3. Visualize event information on a configurable dashboard
4. Manage structured, semi-structured unstructured data through configurable data lakes

## 3. Component Design

![](https://samagra-development.github.io/docs/img/datanalytics.png)

The following table provides an overview of the different modules within the Data Analytics component, the opensource libraries used for each and the additions we have done to the opensource libraries to have them architecturally and functionally aligned to our component design. 

| Module Name                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Data Visualization**            | 1. Users can configure data visualizations <br/>2. Users can write SQL queries to prepare data for analysis <br/>3. Dashboards can be seamlessly embedded into government applications <br/>**OpenSource Libraries used**: [Metabase](https://metabase.com)                                                                                                                                                                                                               |
| **Data Warehouse / Lake**          | Coming soon |                                                          |
| **Event Analytics**             | Coming soon |
