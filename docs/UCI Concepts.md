---
id: UCIConcepts
title: Core Concepts
sidebar_label: Concepts
---

Every interaction with the conversation bot has the following core elements:

* **Bot** 
A bot orchestrates a conversation with a specific conversation logic assigned to a set of users. A bot remembers the state of a conversation for a particular user. A bot object references user segment(s) and conversation logic(s). 

* **User Segment**
User segment contains user data including mechanism to fetch them from a federated user registry.

* **Adapter** 
An adapter translates between messages received from communication channels on specific providers and the internal XMessage format. A new adapter is created for every combination of communication channel and service provider (e.g. - WhatsApp + Gupshup; WhatsApp + NetCore; WhatsApp + Twilio). An adapter config references the communication channel, service provider and associated metadata such as specific business account phone number. 

* **Conversation Logic** 
Conversation logic defines the control flow for a specific conversation. A conversation logic object references a sequence of transformers that will be applied to arrive at the final response at a specific point in the conversation, and the associated adapter config for this conversation logic. (e.g. XForm logic, translation into Hindi - both associated with a Whatsapp-Gupshup adapter)


* **Transformer**
A transformer is a stateless processing object that takes inputs and converts the input into a processed response. Transformers  may in turn call external services if needed. There are two types of configurable transformers:
  * _ODK based transformer_ - These have direct logic defined in the ODK (e.g. a form based question paper)
  * _Generic transformer_ - These are generic transformers that take Microservice URL, Params and returns the response as received from the Microservice 

```
Adapter = Communication Channel + Service Provider
User segment
Transformer
Conversation Logic = {Transformers} + Adapter
Bot = {Conversation Logics} + {User segments}
```




