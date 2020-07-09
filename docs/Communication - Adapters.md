---
id: CommunicationAdapter
title: Conversation Channel Adapters
sidebar_label: Conversation Channel Adapters
---

## 1. Conversation Channel Adapters

Adapters convert information provided by channels (SMS, Whatsapp) for each specific provider to xMessages and vise versa. Adapters are gateway to the external services and resposible to recieving user response and sending response to users. Thus the two major functions of Adapters are

- Convert API/webhook data from channel (and provider) to xMessages
- Convert xMessages back to API/webhook data format for the specific channel(and provider)

## 2. Creating your own Adapters

All adapters are named as `<ProviderName><ChannelName>Adapter`; for example GupshupWhatsappAdapter. Adapters should extend `AbstractProvider` and implement `IProvider`. Thus, it needs to implement the following methods:

- ```java
    public XMessage convertMessageToXMsg(Object msg) // Converts API response object to XMessage
  ```
- ```java
    public void processInBoundMessage(XMessage nextMsg) //Converts XMessage object to API response and call it.
  ```

All adapters with the above implementation will be valid. An example adapter can be found [here]().

## 3. List of Adapter Implementations

- Gupshup-Whatsapp
- Gupshup-SMS
- Gmail-Mail (Mailtrain)
- AmazonSES-Mail (Mailtrain)

## 4. FAQs

## Coming Soom

- CDAC-SMS Adapter
