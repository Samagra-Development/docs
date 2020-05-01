---
id: COPDFGenerator
title: PDF Generator
sidebar_label: Overview
---
![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)

# Component Overview

## 1. Introduction

PDF views are used extensively across different governance use cases from generating PDF based reports for sharing information with users, printing and using for internal government reviewa to printing and displaying on notice boards across government offices. To facilitate, seamless access to information through PDFs we have envisioned an opensource based modular design for a PDF Generator that can be scaled and reused efficiently for different governance use cases. After working closely with different state governments we have identified and abstracted common governance use cases that typically require a PDF based view. These use cases have informed our architectural design for creating this PDF Generator component. 

This documentation of the PDF Generator component will give you an overview of the different use cases that inform the design of the component, how you can get started to deploy this component, how you can setup the different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component. 

## 2. Use Cases

The following list includes a set of use cases abstracted from different state department functions.

1. View information collected on mobile devices from on-ground monitoring activities as downloadable PDFs within the mobile application
2. View entity information from excel sheets as downloadable PDFs for each entity *(if an excel has profile data of users, then PDFs can be generated using pre-designed documents for each user / row of the excel sheet)*
3. View downloadable PDFs from any backend database 
4. View dashboard pages in downloadable PDFs

## 3. Component Design

The PDF Generator component consists of two independently functioning modules.

![](https://samagra-development.github.io/docs/img/pdfgenerator.png)

The following table provides an overview of the different modules within the PDF Generator component.

| Module Name                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Google Docs to PDF**            | User can view and download PDFs from pre-designed auto populating Google Docs                                                                                                                                                                            |
| **Form Response to PDF**          | User can view the download data from any data table (use case focussed on responses from data collection applications) |
| **HTML pages to PDF**            | User can view the download their html web page views (typically used for dashboard views) as PDF files                                                                                                                                                                           |
