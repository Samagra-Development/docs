---
id: CommunicationTransformer
title: Conversation Transformer
sidebar_label: Transformer
---

## 1. Overview

Transformers transforms the previous xMessage from the user to one that needs to be sent next. It is essentially a microservice that based on the previous user action, returns a new xMessage that will then be shown to the user. This also enables conversion from one type

All inbound messages pass through a transformer. If a transformer is not assigned, then a null transformer is assigned to the xMessage. Since the current implementation of MessageRosa is only in Java, currently there is a limitation on the number of languages you can build the transformer on which right now is just Java.

### Responsibilities

- Acts as a state machine and converts messages from one state to another.
- Used to transform messages
- Applies conversational logic (constraints or input format)

## 2. Creating your own Transformer

All transformers are named as `<Action>Transformer`; for example PDFTransformer will create generate a PDF from the previous XMessage and convert it to an XMessage. Adapters should extend `TransformerProvider`. Thus, it needs to implement the following methods:

- ```java
    public XMessage transform(XMessage nextMsg) //Takes in XMessage and return the next message.
  ```

All transformers with the above implementation will be valid. An example adapter can be found [here]().

## 4. FAQs

## Coming Soom

- RASA based transformer.
