---
id: communication
title: Using WhatsApp, SMS, IVRS, direct calls, emails for communication by Governments
author: Sukhpreet Sekhon
author_title: Technology @Samagra
author_url: https://www.linkedin.com/in/sukhpreetsekhon/
author_image_url: https://samagra-development.github.io/docs/img/blogss.jpg
tags: [communication, bureaucrats, govt engineers, govOS]
---
As bureaucrats and politicians manage the fallout of Covid-19 and its resultant restrictions, , a question different governments are grappling with is - how can communication channels such as WhatsApp be leveraged to reach out to citizens and field officials. This post is a 101 for understanding how WhatsApp, SMS, IVRS, direct calls and emails can be used to streamline governance as we move towards a new normal where proactive and personalized communication will be a basic expectation from governments.

The assumption in this post is that all users (citizens or government officials) to whom the communication is intended have mobile phones with limited network connectivity. The content in this post is structured based on Samagra’s technology principles that guide the design of our governance communication management strategy.
<!--truncate-->

## Principles for governance communication management
1. Information outreach must be maximized based on communication channels that users prefer
2. Open source technology must be used to avoid technology / vendor lock-ins

## Information outreach must be maximized based on communication channels that users prefer 

Typically, governments send one-way notifications to users through a single communication channel such as SMS, IVRS, or now WhatsApp. However, this approach has two challenges.
- Users who are sent a WhatsApp  or email may not have access to the internet at all times
- Users may not be able to read the content of a message due to low literacy levels

Now, governments can either continue to send channel-specific communication or move towards a semi-automated multi-channel communication approach that allows governments to ensure that users receive irrespective of whether they have internet connectivity and whether they can read the message. This section focuses on how governments can leverage this approach which is aimed at reaching all stakeholders while minimizing public expenditure and human resource time.

Let’s look at a few use cases to explain how this plays out.

### Use case 1: 

**The Education department of a state needs to send school re-opening guidelines to parents of children enrolled in government schools**

![](https://samagra-development.github.io/docs/img/comms_1.png)

The following steps indicate how governments can optimize cost and time to ensure maximum outreach.
1. To start with, the education department sends a WhatsApp message to the parent (with the assumption that the necessary opt-in[^1] has been completed).
2. If the message is not read by the user within 24 hours or if the message is not delivered for 8 hours then an SMS can be triggered to the same user.
3. If the SMS message is not delivered then an automated IVRS call can be made to the parent.
4. If the IVRS call is not delivered to the user then the department should receive an email summary of the list of such parents and personal calls to them can be organized through a call centre.

This is a simple use case in which the onus of message delivery does not stop after sending the first WhatsApp message. Therefore, parents can be rest assured that their child’s school will do everything possible to keep them updated. 

### Use case 2: 

**The Education department wants government primary school teachers to take a quiz based on the online training they received for conducting remedial lessons when schools reopen post-lockdown**

![](https://samagra-development.github.io/docs/img/comms_2.png)

Once again, the following steps indicate how governments can optimize their cost and time to ensure maximum outreach.

1. To start with, the education department sends a set of questions on WhatsApp from the education department number.
2. If the teacher stops responding after 2 questions or if the questions are not read by the teacher within 24 hours or if the message is not delivered for 8 hours, then a SMS based bot can be triggered to reach out to the teacher. In fact, if the teacher stopped after answering 2 questions on WhatsApp then the teacher can receive the third question on SMS as opposed to starting all over again.
3. If the SMS message is not delivered, then an automated IVRS call can be made to the teacher.
4. If the IVRS call is not entirely answered by the user, then the department should receive an email summary of the list of such teachers, and direct personal calls to them can be organized through a call centre.

### Use case 3: 

**The Skill Development & Industrial Training department of a state is looking to help all Industrial Training Institute (ITI)[^2] graduates to build their resumes**

![](https://samagra-development.github.io/docs/img/comms_3.png)

Once again, the following steps indicate how governments can optimize their cost and time to ensure maximum outreach.
1. To start with, the department sends a WhatsApp bot with 10 questions to the student.
2. If the student stops responding to the questions mid-way or if the questions are not read by the student within 24 hours or if the message is not delivered for 8 hours, then a SMS based bot can be triggered to reach out to the student.
3. Once the user provides answers to the 10 questions then this information is sent to a resume generator tool.
4. A resume can be generated based on these answers and shared with the user as a downloadable link. The resume can be a pdf or an editable Word doc.

With this, ITI students can generate their resumes within a few clicks.

These are examples of use cases that we envision governments implementing very soon. However, this is just the tip of the iceberg. Governments can also:

- Provide teacher training certificates by getting teachers to respond to training quizzes through a WhatsApp bot, or 
- Share details of a national agriculture scheme with state village agriculture workers through an information sharing WhatsApp bot
- Allow citizens to share civic complaints (for example, for potholes, the citizen can share the location and image of the pothole through a citizen grievance WhatsApp bot. The complaint number and status can also be shared with the user through WhatsApp or SMS)

Like these, thousands of use cases can and will eventually start to get enabled as the adoption and familiarity with basic communication tools like WhatsApp and SMS increases across the country. Since citizens and government officials won’t have to install unnecessary mobile applications or view multiple web pages to reach the one for sharing grievances,  the usual resistance to uptake will reduce.

## Open source technology must be used to avoid technology / vendor lock-ins 

This section provides a brief overview of how governments can engage with SMS/WhatsApp/IVRS service providers to avoid technology / vendor lock-ins.

There are various SMS, WhatsApp, IVRS service providers in the market that provide technology platforms on which governments can build their communication campaigns. For SMS there are private service providers such as [Gupshup](https://www.gupshup.io/), [BhashSMS](http://bhashsms.com/), [msg91](https://msg91.com/) and government service providers such as Centre for Development of Advanced Computing ([CDAC](https://www.cdac.in/)). However, for WhatsApp there are only [private service providers](https://www.facebook.com/business/partner-directory?_fb_noscript=1) who can use Facebook WhatsApp APIs for sending communication for governments.

Typically, these SMS & WhatsApp service providers provide the following services for managing communication campaigns:
- Manage user lists to whom communication has to be sent
- Manage channel-specific content creation (broadcasts, bots, email templates)
- Create conversation logic for managing two-way communication (sending next question based on answers provided by the users)
- Send and receive messages from users
- Handle two-way messages based on the conversation logic
- View campaign engagement and success rate data

For these services the SMS & WhatsApp service providers charge under following cost heads
1. **Fixed cost** for number registration, setup, monthly maintenance costs (especially applicable for WhatsApp service providers)
2. **Variable cost** for number of transactions (SMS sent, WhatsApp broadcasts, IVRS calls made)

These are regular cost heads and there is room for bargaining the fixed and variable costs with these service providers. However, in addition to these cost heads, certain service providers, especially for WhatsApp, also insist on using their own platforms for managing communication campaigns. For this they would charge a licence fee per user per year (users could be government officials who will have logins on the system. This would mean government department officials, district officials, block officials and so on). Governments should avoid public expenditure on these platforms as they can use open source tools to manage all the functions that are being offered by these platforms and only use these service providers for sending and receiving messages.

## Open source governance focussed communication component

Our technology team leveraged existing open source tools to create an [Application Control](https://tech.samagragovernance.in/) console earlier this year for managing configurations for government applications. However, given the rapidly evolving Covid19 scenario in which effective government communication is paramount we have extended this application control console to create, launch and manage communication campaigns while using SMS, WhatsApp, IVRS, email end points from service providers.

In the coming week, we will be sharing the documentation of the open source Communication Component [on our website](https://samagra-development.github.io/docs/docs/ComponentsOverview) for governments and technology organizations working with governments to understand how open source tools can be used to drive effective governance focussed communication use cases. The initial feature set for this communication component will enable:

1. Creation of WhatsApp / SMS / Email broadcast campaign
2. Creation of WhatsApp / SMS bots (using ODK) based campaigns
3. Creation of WhatsApp menu based communication
4. Manual / auto trigger to initiate communication campaigns
5. Configure multi-channel triggers
6. Configure user flow end scenario triggers (for ex: create and share pdf / docs with users)

If you need any clarification on potential communication use cases for governance, understanding communication business service provider models, or how the existing [Application Control](https://tech.samagragovernance.in/) component can be used within the government sector please write to tech@samagragovernance.in.

[^1]: *Opt-in messages are mandatory for sending broadcast one way messages on WhatsApp. To do an Opt-in, users receives a link through SMS on which the user can give consent to receive communication on WhatsApp from a specific sender, in this case the education department. Opt-in can also be done through a missed call method.*

[^2]: *Industrial Training Institutes and Industrial Training Centers are post-secondary schools in India constituted under Directorate General of Training, Ministry of Skill Development and Entrepreneurship, Union Government to provide training in various trades.*
