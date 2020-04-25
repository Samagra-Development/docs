---
id: COAppControl
title: Application Control
sidebar_label: Overview
---
![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)

# Component Overview


## 1. Introduction

All applications used by different departments of the state and central governments are managed through an administration module. To facilitate seamless configuration of applications we envisioned an extensible administration console that can enable administrators of these applications to update metadata and configurations in the application. After working closely with different state governments we have identified and abstracted common governance use cases that are typically required for managing applications. These use cases have informed our architectural design for creating the application metadata management module.

This documentation of the Application Control component will give you an overview of the different use cases that inform the design of the component, how you can get started to deploy this component, how you can setup different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component.

## 2. Use Cases

The following list includes a set of use cases abstracted from different on-ground state department functions.

1. Manage user profiles for the users of the application 
2. Manage roles of the users
3. Manage role based access to application information for the users
4. Manage application metadata in the application (list of locations, data collection forms, profile details views)
5. View application performance information
6. View application data visualizations

## 3. Component Design

![alt-text](../img/appmetada.png)
