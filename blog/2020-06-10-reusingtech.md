---
id: reusingtech
title: Reusing Governance Technology Components
author: Sukhpreet Sekhon
author_title: Technology @Samagra
author_url: https://www.linkedin.com/in/sukhpreetsekhon/
author_image_url: https://samagra-development.github.io/docs/img/blogss.jpg
tags: [bureaucrats, govt engineers, govOS]
---
In the past few blogs we shared how we are [Democratizing Technology Product Development for Governments](https://samagra-development.github.io/docs/blog/ourjourney) and the [Evolution of Samiksha](https://samagra-development.github.io/docs/blog/evolutionsamiksha/), an OpenSource product designed to improve school quality control [activities](https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs#21-governance-use-cases) conducted by education department officials in government schools and the technology related decision making that went on [behind the scenes](https://samagra-development.github.io/docs/blog/samikhaBehindTheScenes) to build Samiksha.

This blog post is about how we are reusing [technology components](https://samagra-development.github.io/docs/docs/ComponentsOverview/) to deploy multiple technology products. We will highlight how the technology architecture behind [Samiksha](https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs) has been reused for creating a variety of products for the Department of Agriculture and Farmers’ Welfare (DA&FE), Odisha and the Department of Basic Shiksha, in Uttar Pradesh and Department of Education, Himachal Pradesh. Reusing technology for governments avoids wasteful public expenditure and decreases the go-to-market time.
<!--truncate-->

## Getting the Basics Right

The following diagram provides an overview of the architecture of Samiksha. Samiksha has been put together by using five technology components:

- [Mobile Application](https://samagra-development.github.io/docs/docs/COMobileApplication) (all mobile interfaces with data collection feature from [ODK](https://opendatakit.org/) and user authentication from [FusionAuth](https://fusionauth.io/)),
- [Application Control](https://samagra-development.github.io/docs/docs/COAppControl) (to manage all metadata on FusionAuth and product configurations),
- [Data Analytics](https://samagra-development.github.io/docs/docs/CODataAnalytics) (for visualizing data collected through the application on [Metabase](https://www.metabase.com/)),
- [Database Management](https://samagra-development.github.io/docs/docs/CODatabaseManagement) (to manage databases, auto deployments, load testing and scaling),
- Application Logging (to manage and review performance logs from the mobile application using [Elastic](https://www.elastic.co/) and [Sentry](https://sentry.io/welcome/)).

![](https://samagra-development.github.io/docs/img/SamikshaArchitecture.png)

Since July 2019, Samiksha has been used by education department officials of Haryana and Himachal Pradesh, covering nearly 30,000 government schools with over 14,000 active government users.
Now this architecture can be reused to create three types of product. 

## Product Type 1 - With existing Open Source technology components and existing wiring

The Agriculture Development Associates application was launched for DA&FE,  Odisha in August 2019 to capture information from field assessments conducted by Agriculture Development Associates. These field assessments were conducted to primarily identify on-ground issues related pest incidence and input quality (seeds, fertilizers, pesticides) at local distribution centres. It was used by more than 450 department Agriculture Development Associates who captured more than 90,000 field assessments through this application.

![](https://samagra-development.github.io/docs/img/associatesprogram.png)

The following diagram illustrates how the Agriculture Development Associates application was launched with the same technology components as Samiksha and the existing wiring. There were minimal changes in the application UI screens followed by changes in the metadata. Data collection forms were configured based on the use cases of the department.

![](https://samagra-development.github.io/docs/img/aparchitecture.png)

## Product Type 2 - With existing Open Source technology components and updated wiring

The Prerna Ghoshna Assessment application will be launched for the Department of Basic Shiksha, Uttar Pradesh later this year to conduct verbal and non-verbal assessments of children in grades 1-5 across government schools, as part of the Prerna Ghoshna programme. The application is likely to be used for an estimated 10,00,000 student assessments annually. 

![](https://samagra-development.github.io/docs/img/prernaghoshna.png)

The following diagram illustrates how the Prerna Ghoshna Assessment application was constructed with the same technology components as Samiksha but with a slight enhancement to the wiring of the Mobile Application component. In the Mobile Application component, while non-verbal students assessments are seamlessly managed by ODK, for verbal assessments we partnered with Google to allow seamless transition between the Prerna Ghoshna Assessment application and Google Bolo to conduct the verbal student assessments. The modular architecture of the Mobile Application component enables such seamless transitions for adding other functionalities with third-party apps.

![](https://samagra-development.github.io/docs/img/prernaarchitecture.png)

## Product Type 3 - With existing and new Open Source components and updated wiring

E-Samwad was launched for the State Education Department in Himachal Pradesh to facilitate personalized SMS-based communication between parents and teachers. These SMS [can be sent](https://www.linkedin.com/posts/samagra-transforming-governance_himachalpradesh-workstreaminfographics-samarth-activity-6669224579640258560-COhj) in a decentralized manner by government school teachers for sharing daily attendance, homework status, exam results, notifications for holidays with the parents. [e-Samwad](https://samagra-development.github.io/docs/docs/SamwadFuncSpecs) has been used by 7,828 schools in the state to reach out to 80,636 parents, sending out 1.3 lakh messages. Once schools reopen, all 15,000+ schools in HP are expected to start using e-Samwad.

![](https://samagra-development.github.io/docs/img/esamwad.png)

The following diagram illustrates how E-Samwad was constructed by incorporating an additional technology component - Communication. The Communication component enables the management of the SMS pipeline and can be configured to send SMS through any public or private SMS gateway. The Communication component will also be available for review and reuse on our technology component documentation [page](https://samagra-development.github.io/docs/docs/ComponentsOverview/) later this June.

![](https://samagra-development.github.io/docs/img/esamwadarchitecture.png)

These are examples of how we follow our [Principle #1](https://samagra-development.github.io/docs/blog/ourjourney#principle-1---build-reusable-scalable-extensible--deployable-technology-products-using-opensource-tools) (To build reusable, scalable, extensible and deployable technology products using OpenSource tools) in practice to build technology products for governments.

Can you think of any governance use cases that can be enabled using these [technology components](https://samagra-development.github.io/docs/docs/ComponentsOverview)? If yes, please use the documentation of the technology components on our technology documentation section and set up your own products. If you need any additional support, write to us at tech@samagragovernance.in.
