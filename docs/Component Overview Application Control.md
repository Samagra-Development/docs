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

The following table provides an overview of the different modules within the mobile applicaton component, the opensource libraries used for each and the additions we have done to the opensource libraries to have them architecturally and functionally aligned to our component design. 

| Module Name                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Mission Control Console**            | 1. Manage all application configurations through a frontend panel <br/>2. Configure front end panel using drag - drop features.<br/>3. Brand Mission Control panel based on your department branding.<br/>**OpenSource Libraries used**: [ReactAdmin](https://marmelab.com/react-admin/). We have leverage [FuseReact](http://react-material.fusetheme.com) over ReactAdmin to provide additional theming features that can be used as an addition.                                                                                                                                                                                                            |
| **User Management**          | 1. Application user data can be viewed and managed<br/>2. New variables can be added for users <br/>3. Configure your own views of user information <br/>**OpenSource Libraries used**: [FusionAuth](https://fusionauth.io). |
| **User Authorization**             | 1. Roles based access to application information can be provided to application users <br/>2. Roles based access to the Mission Control panel <br/>3. Access to application and admin through APIs. <br/>**OpenSource Libraries used**: [FusionAuth](https://fusionauth.io).                                                                                                                                                                                                                                                                                                                 |
| **Application Config Management**           | 1. Users can manage access control of application information <br/> 2. Users can update application information (data collection forms, user guidance, action items, updates <br/> Add/Edit/Delete any data in different sections of the application<br/>3. APIs to manage (CRUD) users (and user data) plugged into the react admin.                                                                                                                                                                                                                                                                                                |
| **Application Data Management**         | 1. Users can have access to different databases used in the backend of the application within minimal setup directly on the admin management <br/>**OpenSource Libraries used**: [Hasura](https://hasura.io).  
