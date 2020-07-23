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

### 1.1 Use this system if you are facing the following challenges

1. There is a need for a completely _open sourced_ system.
2. Do you need to deploy a chat bot but on govt servers residing on indian soil?
3. You want to use the same logic to communicate with the end user irrespecitive of the _channel_ (Whatsapp, Messaging, IVRS) but you end up duplicating the same logic with minor changes for every channel creating them isolated channels rather than a unifiedl platform.
4. You have created this really thorough pipline of how a conversation is started or where to send the next message if the user is not responding to a specific _channel_. But everytime you do it, there needs to be a massive code change and redeployment of the whole system which takes days to pull off.
5. You want to add a custom step before sending the user a preconfigured message for example _gain insights on user intent_ (behaviour) or _attach a PDF_ because <why would we send PDF??>
6. You want to have an _adaptive conversation_ with the user. For example an assessment/test chatbot where _the question are getting tougher with each correct answer_ or _questions are carefully designed and vary depending on geographic location_.
7. You are fighting against insane deadlines and want to _deploy something really quickly_ in 30 minutes.

## 2. Use cases

The following list includes a set of use cases abstracted from different on-ground state department functions.

1. User can create and launch logic based conversations such as a helpline, for grievance management, for taking student assessment, share updates with your stakeholders
2. User can send conversations using multiple channels such as WhatsApp, SMS, Email, IVRS (more can be added by the user such as Telegram, Slack etc)
3. User can setup additional computations on these conversations such as auto generation of PDFs, email with data summaries (more can be added by the user)
4. User can auto send conversations using pre-configured triggers on databases
5. A grievance redressal system.

## 3. Component Design

The conversaton component is developed using **multi-modular architecture** with **independently functioning modules**.

![](https://samagra-development.github.io/docs/img/communications.png)

## 3.1 Architecture

A simplified architecture of the communication package is shown below.

![](https://samagra-development.github.io/docs/img/comm_arch.jpg)

## 3.2 Components

The following table provides an overview of the different modules within the Conversations & Alerts component, the opensource libraries used for each.

| Module Name |  |
| --- | --- |
| **Channel Adapters** | 1. Integrate conversation channels such as WhatsApp, SMS, Email with existing adapter <br/>2. Create your own adapter to integrate with other chat services. |
| **Orchestrator (Router)** | 1. Move routing logic outside of code and make it more accessible to everyone. <br/>2. Manage multi-channel communication <br/>3. Manage logic for moving a user from one channel to another |
| **Transformer** | 1. Create and integrate utility services using the open source transformer desgin such as <br/> - PDF creator, <br/> - Profanity checker <br/> - Language translator <br/> - Conversation voice analyser |
| **Event Bus** | 1. Building a near real time broker <br/> 2. Adding services outside of the system to the internals <br/> 3. Providing streams on which the orchestrator can run efficiently. |
| **Managing User Conversations** | 1. Manage data of ongoing conversations <br/>2. Manage data for completed conversations <br/>3. Manage data from utility services enabled within the conversations <br/> This is built in the Application Console. |

## 3.3 Why these design choices?

| Use Cases | Design Design |
| --- | --- |
| Provider Agnostic | Adapters |
| Multi Channel Communication <br/> (Escalation, IVRS + Chat + SMS) | Adapters |
| Computations <br/> (PDF/Word doc generator) | Transformers |
| Scale <br/> (Citizens/Students/Unemployed/Govt officials/Teachers) | Kafka, PSQL |
| Real time <br/>(Time-bound Assessments) | Event Bus (Async, Real time) |
| Triggered Actions <br/>(Dashboards, timeouts) | Orchestrator (Rule Engine) |
| Simultaneous multiple conversations | Orchestrator (Rule Engine) |
