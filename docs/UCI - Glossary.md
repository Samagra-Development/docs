---
id: UCIGlossary
title: Glossary
sidebar_label: Glossary
---

| S. No | Term | Definition |
| ----- | ---- | -----------|
| 1 | User | Any person or system that interacts with the bot. |
| 2 | UCI | Unified Communication Interface |
| 3 | Bot | A bot orchestrates a conversation with a specific conversation logic assigned to a set of users. A bot remembers the state of a conversation for a particular user. A bot object references user segment(s) and conversation logic(s). |
| 4 | Conversation |Any exchange of recorded messages between two parties (users or systems) is called a conversation. |
| 5 | Conversation Logic | Conversation logic defines the control flow for a specific conversation. A conversation logic object references a sequence of transformers that will be applied to arrive at the final response at a specific point in the conversation, and the associated adapter config for this conversation logic. (e.g. XForm logic, translation into Hindi - both associated with a Whatsapp-Gupshup adapter) |
| 6 | Communication Channel | Any application or channel that allows users to connect with each other to exchange information. Examples of communication channels include (but not limited to), WhatsApp, SMS, Email, Slack, IVRS, Telegram. |
| 7 | Conversation Data | All the data that is generated as a result of the communication on the bot. User input data as well as bot responses are called as conversation data. |
| 8 | Service Provider | Any public or private organization that provides the service of gathering the response from the Communication Application and transmits the same over standard API’s to this Unified Communications Interface. Examples of service providers include (but not limited to) Gupshup, Twillo, Infobip, Netcore. | 
| 9 | User Registry (Local, Federated) | A place (index, directory or registry) where users profile data is stored, this can be a local storage as part of the Communication bot or a federated storage at different databases. |
| 10 | Adapter | An adapter translates between messages received from communication channels on specific providers and the internal XMessage format. | A new adapter is created for every combination of communication channel and service provider (e.g. - WhatsApp + Gupshup; WhatsApp + NetCore; WhatsApp + Twilio). An adapter config references the communication channel, service provider and associated metadata such as specific business account phone number. |
| 11 | Transformer | A transformer is a stateless processing object that takes inputs and converts the input into a processed response. Transformers may in turn call external services if needed. For example - Open Data Kit (ODK) |
| 12 | Register a bot | An API that allows users to register for a new bot. |
| 12 | Remote Data Repositories | Any remote repositories (e.g. user db, content db or others) required in a conversation logic can be to be accessed . | 
| 13 | Standards | These are set of standards that are defined in this Unified Communication Interfaces. These standards are the guardians and helpers to ensure basic functioning and to some extent modularity. |
| 14 | Logs | All the inbound and outbound interactions that happen with the bot are captured and stored. |
| 15 | Admin Console | An application that is built to consume UCI APIs, to enable bot configuration and visualizations on top of UCI configuration and conversation data. |
| 16 | XMPP - XMessage | This is a standard defined for the UCI ecosystem. Key objective of this is to make the internal functioning UCI, independent of external factors viz. Communication channel and service provider. |
| 17 | XForms | XForms is an XML markup for a new generation of forms and form-like applications on the Web. |
| 18 | Role Based Access Control | Role-based access control or role-based security is an approach to restricting system access to authorized users. Amongst other functions this restricts bot usage only to a allowed group of users. |

 



