---
id: COApplicationLogging
title: Application Logging
sidebar_label: Overview
---

![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)

# Component Overview

## 1. Introduction

All applications deployed within the governance ecosystem have an extensive user reach. These users could be government officials or citizens. If it is the government officials then they are typically mandated to use the application. If it is the citizens they typically do not have an alternate to using the application for the same use case. Therefore, in these scenarios where the user reach is extensive and the users do not have an alternative it is imperative for the application engineers to ensure that the user experience is not only up to the mark but also the application performance is tracked proactively to understand and resolve any issues being faced by the users

To facilitate application performance monitoring, we have envisioned a opensource based modular design for a application logging component that can be scaled and reused efficiently for different governance use cases. After working closely with different state governments we have identified and abstracted common governance use cases that are typically required for application logging use cases. These use cases have informed our architectural design for leveraging different opensource libraries.

This documentation of the Application Logging component will give you an overview of the different use cases that inform the design of the component, how you can get started to deploy this component, how you can setup different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component.

## 2. Use Cases

The following list includes a set of use cases abstracted for this component.

1. View all application related bug reports on a dashboard
2. Configure real-time email notifications to indicate occurance of new application bugs 
3. Transform log messages into meaningful data for easier analysis
4. Store data for extended time periods to allow for monitoring, trend analysis, and security use cases
5. Dissect application performance data through queries
6. Filter logs based on a particular user

## 3. Component Design

![alt-text](../img/applogging.png)

| Module Name                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Crash Event Logging**            | 1. Users can view the system performance of the application <br/>2. Users can view the crash event details on a dashboard <br/>3. Users can be guided to the code that is creating issues <br/>**OpenSource Libraries used**: [Sentry](https://sentry.io)                                                                                                                                                                                                               |
| **Application Event Logging**          | 1. Users can collect and ship logs from multiple data sources <br/> 2. Users can transform log messages into meaningful data for easier analysis. <br/> 2. Users can store data for extended time periods to allow for monitoring, trend analysis, and security use cases.<br/> 3. The ability to dissect the data by querying it and visualizing it on the dashboard <br/> 4. Ability to filter logs based on a particular user. <br/>**OpenSource Libraries used**: [Elastic](https://github.com/elastic)   |                                                          |
| **Health Monitoring**             | Coming soon <br/>**OpenSource Libraries used**: [Elastic](https://github.com/elastic)   |
