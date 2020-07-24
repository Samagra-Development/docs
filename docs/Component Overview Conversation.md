---
id: COConversations
title: Conversations & Alerts
sidebar_label: Overview
---

![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)

# Component Overview

## 1. Introduction

As bureaucrats and politicians manage the fallout of Covid-19 and its resultant restrictions, a question different governments are grappling with is - how can communication channels such as WhatsApp be leveraged to reach out to citizens and government on-field officials. Today, there are different government systems that are linked to government call centres, send SMS and email alerts, take feedback from IVRS. While these exist in some state departments and central government ministries the questions of how to use them are evolving. For instance

- how do you start a converation with a person when they don't respond on SMS, or on WhatsApp?
- if you change your channel of communication can you follow the same conversation question logic? e.g. if SMS does not get delivered in 8 hours send WhatsApp, if WhatsApp not read for 8 hour send IVRS
- can the conversation be adaptive and personalized? e.g. test that keeps getting difficult if you get things right
- if the conversation is adaptive can grievances be entirely managed through WhatsApp bots? e.g. grievance about your local street light to your municipal corporation 
- can citizens upload pictures and videos while sharing their grievance through a WhatsApp bot?
- can citizens get auto SMS or WhatsApp updates to indicate status of their grievance? 
- if students do their assessments using a WhatsApp bot can they be sent an auto generated Certificate on WhatsApp itself?

These are some of the questions that can be turned into reality through this Conversations & Alerts component. The Conversations & Alerts component enables multi-channel communication using WhatsApp, SMS, IVRS, direct calls and emails to streamline governance as we move towards a new normal where proactive and personalized communication will be a basic expectation from governments.

This documentation of the Conversations & Alerts component will give you an overview of the design decisions that inform the architecture of the component, how you can get started to deploy this component, how you can setup different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component.

## 1. Use cases

The following list includes a set of use cases abstracted from different on-ground state department functions.

1. User can create and launch logic based conversations such as a helpline, for grievance management, for taking student assessment, share updates with your stakeholders
2. User can send conversations using multiple channels such as WhatsApp, SMS, Email, IVRS (more can be added by the user such as Telegram, Slack etc)
3. User can setup additional computations on these conversations such as auto generation of PDFs, email with data summaries (more can be added by the user)
4. User can auto send conversations using pre-configured triggers on databases
5. User can setup a smart grievance redressal / helpline converation through WhatsApp / SMS bots.

## 2. Design decisions

While architecting this component we had the following questions.

1. Why should governments spend public expenditure for creating a platform for managing a conversation? (use exiting open source tools to build one)
2. With the recent Data Protection Bill 2019, why should governments store conversation data on private / thrid party servers? (should be deployable on govt infrastructure)
3. Can we decrease the time spent to configure conversations across different channels? (single simple method to do so)
4. Can the government not be locked-in by a single channel service provider? (freely switch between private vendors thereby increasing market competition for core service)
5. In addition to WhatsApp, SMS, Email, IVRS if  governments want to send and receive information from other channels such as Kaizala, Telegram and Slack that they use for internal communication, then can those be integrated? (modular mechanism to plug and play channels)
6. If 20 state governments start conversations with 100,000,000 users can the system manage it well? (database design with smart horizontal scaling)

## 3. Component Design

The conversaton component is developed using **multi-modular architecture** with **independently functioning modules**.

![](https://samagra-development.github.io/docs/img/communications.png)

## 3.1 Technology Architecture

A simplified architecture of the communication package is shown below.

![](https://samagra-development.github.io/docs/img/comm_arch.jpg)

## 3.2 Components modules

The following table provides an overview of the different modules within the Conversations & Alerts component, the opensource libraries used for each.

| Module Name |  |
| --- | --- |
| **Channel Adapters** | 1. Integrate conversation channels such as WhatsApp, SMS, Email with existing adapter <br/>2. Create your own adapter to integrate with other chat services. <br/>3. Adapters available for WhatsApp, SMS - CDAC, SMS - Gupshup |
| **Orchestrator (Router)** | 1. Move routing logic outside of code and make it more accessible to everyone. <br/>2. Manage multi-channel communication <br/>3. Manage logic for moving a user from one channel to another <br/>3. Transformers available - conversation response based PDF & Word doc creator |
| **Transformer** | 1. Create and integrate utility services using the open source transformer desgin such as <br/> - PDF creator, <br/> - Profanity checker <br/> - Language translator <br/> - Conversation voice analyser <br/>2. Opensource tools usd - Drools |
| **Event Bus** | 1. Building a near real time broker <br/> 2. Adding services outside of the system to the internals <br/> 3. Providing streams on which the orchestrator can run efficiently. <br/>4. Open source tools used - Kafka, PSQL|
| **Managing User Conversations** | 1. Manage data of ongoing conversations <br/>2. Manage data for completed conversations <br/>3. Manage data from utility services enabled within the conversations <br/> This is built in the Application Console. |
