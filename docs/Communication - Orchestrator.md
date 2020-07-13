---
id: CommunicationOrchestrator
title: Conversation Logic Manager
sidebar_label: Logic Manager
---

## 1. Conversation Logic Manager

It redistributes/relays the input messages based on the type of action that needs to be performed on each individual message. It can pick up streams of messages from all topics but generally relays the messages coming to the inbound topic.

Underlying it has two components

- Broker: Acts both as a broker for messages and Stream Processor for transformer. Kafka is internally used as a broker
- Delegator: Broker is the dumb part of the system whereas StreamProcess embeds the business logic to the broker. It redistributes/relays the input messages based on the type of action that needs to be performed on each individual message. It can pick up streams of messages from all topics but generally relays the messages coming to the inbound topic. Drools is used as a delegator. A simple figure showing what it does,

![](https://samagra-development.github.io/docs/img/drools.png)

## 2. Adding rules to orchestrator

Orchestrator is simply a list of rules that govern the messaging pipelines. Essentially it does the following things

- Adding a context to the message
- Manage which transformer to assign to a message
- Manage the start of a campaign
- Manage messages lifecycle based on their current state (message state)

The orchestrator uses an excel sheet to manage rules for how and what to do with a current message. This is done using the MessageRosa class. To sheet is divided into two sections `Conditions` and `Actions`. `Conditions` are evaluated for each message and for the messages for all the conditions pass, relevant `actions` are taken. There is no limit on the number of contiions or actions taken. Similarly since all the messages go through all the rules, ordering them is important and a single message could have multiple positive conditions and thus multiple actions being taken on them.

A sample list of rules is shown below.

![](https://samagra-development.github.io/docs/img/rules-1.png)

In the above pic the class used for the rules is XMessage. You can look at it [here](https://github.com/Samagra-Development/message-rosa/blob/master/src/main/java/messagerosa/core/model/XMessage.java) and check the available methods. All getter and setters are public so any field can be an `action` or a `condition`.

## 4. FAQs

To be updated based on incoming feedback. Feel free to write into tech@samagragovernance.in in case you have questions, feedback or want to know more!

## Coming Soon

Please review the following section to get information about planned updates to this module.
