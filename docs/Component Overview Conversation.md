---
id: COConversations
title: Conversations & Alerts
sidebar_label: Overview
---

![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)
# Component Overview

## 1. Introduction

On-ground data collection activities conducted by different departments of the state and central governments have been increasingly conducted using mobile devices or tablets. To facilitate this upward trend of digital first data collection methods in the government, we have envisioned a opensource based modular design for a mobile application that can be scaled and reused efficiently for different governance use cases. After working closely with different state governments we have identified and abstracted common governance use cases that are typically required for on-ground data collection activities. These use cases have informed our architectural design for creating mobile applications for data collection. 

This documentation of the Conversations & Alerts component will give you an overview of the different use cases that inform the design of the component, how you can get started to deploy this component, how you can setup different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component. 

## 2. Use cases

The following list includes a set of use cases abstracted from different on-ground state department functions.

1. User can create and launch logic based conversations such as a helpline, for grievance management, for taking student assessment, share updates
2. User can send conversations using multiple channels such as WhatsApp, SMS, Email, IVRS (more can be added by the user such as Telegram, Slack etc)
3. User can setup additional computations on these conversations such as auto generation of PDFs, email with data summaries (more can be added by the user)
4. User can auto send conversations using pre-configured triggers on databases

## 3. Component Design

The conversaton component is developed using **multi-modular architecture** with **independently functioning modules**. 

![](https://samagra-development.github.io/docs/img/component1v2.png)

The following table provides an overview of the different modules within the Conversations & Alerts component, the opensource libraries used for each.

| Module Name                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Conversation Channel Adapters**            | 1. Integrate and setup data collection tool <br/>2. Manage form access and submissions.<br/>3. View form submissions.<br/>**OpenSource Libraries used**: [ODK Collect](https://github.com/getodk/collect)                                                                                                                                                                                                                |
| **Conversation Logic Manner**          | User can view custom designed screens at various points in the user flows such as:<br/>1. Application start (Splash screen)<br/>2. First-time login (guided onboarding screens)<br/>3. View information about the app (About Us screen)<br/>4. App usage guide/tutorials screen                                                                                                                                           |
| **Conversation Transformer**             | User can manage his/her profile and conduct the following functions:<br/>1. View all editable and non-editable profile data<br/>2. Edit profile details<br/>3. Reset application password                                                                                                                                                                                                                                                                                                                   |
| **Managing User Conversations**           | User can use the application in offline mode:<br/>1. Add/Edit/Delete any data in different sections of the application<br/>2. Data is automatically synced for the user once the device is online                                                                                                                                                                                                                                                                                                                    |
