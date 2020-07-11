---
id: COConversations
title: Conversations & Alerts
sidebar_label: Overview
---

![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)
# Component Overview

## 1. Introduction

As bureaucrats and politicians manage the fallout of Covid-19 and its resultant restrictions, a question different governments are grappling with is - how can communication channels such as WhatsApp be leveraged to reach out to citizens and field officials. The Conversations & Alerts component enables multi-channel communication using WhatsApp, SMS, IVRS, direct calls and emails to streamline governance as we move towards a new normal where proactive and personalized communication will be a basic expectation from governments.

This documentation of the Conversations & Alerts component will give you an overview of the different use cases that inform the design of the component, how you can get started to deploy this component, how you can setup different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component. 

## 2. Use cases

The following list includes a set of use cases abstracted from different on-ground state department functions.

1. User can create and launch logic based conversations such as a helpline, for grievance management, for taking student assessment, share updates with your stakeholders
2. User can send conversations using multiple channels such as WhatsApp, SMS, Email, IVRS (more can be added by the user such as Telegram, Slack etc)
3. User can setup additional computations on these conversations such as auto generation of PDFs, email with data summaries (more can be added by the user)
4. User can auto send conversations using pre-configured triggers on databases

## 3. Component Design

The conversaton component is developed using **multi-modular architecture** with **independently functioning modules**. 

![](https://samagra-development.github.io/docs/img/communications.png)

The following table provides an overview of the different modules within the Conversations & Alerts component, the opensource libraries used for each.

| Module Name                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Conversation Channel Adapters**            | 1. Integrate conversation channels such as WhatsApp, SMS, Email with existing adapter <br/>2. Create your own adapter to integrate with other chat services.                                                                                                                                                                                                               |
| **Conversation Logic Manager**          | 1. Create a logic based data collection form <br/>2. Create a logic based chat-bot <br/>3. Create logic based triggers to initiate conversations.                                                                                                                                                                                                               |
| **Conversation Transformer**             | 1. Create and integrate utility services using the open source transformer desgin such as <br/> - PDF creator, <br/> - Profanity checker <br/> - Language translator <br/> - Conversation voice analyser                                                                                                                                                                                                        |
| **Managing User Conversations**           | 1. Manage data of ongoing conversations <br/>2. Manage data for completed conversations <br/>3. Manage data from utility services enabled within the conversations                                                                                                                                                                                                                                                                                             |
