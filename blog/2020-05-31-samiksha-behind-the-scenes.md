---
id: samikhaBehindTheScenes
title: Samiksha - Behind the Scenes
author: Chakshu Gautam
author_title: Technology @Samagra
author_url: https://www.linkedin.com/in/chakshu-gautam-6918736b/
author_image_url: https://media-exp1.licdn.com/dms/image/C5603AQFqf5zRVhvlnA/profile-displayphoto-shrink_400_400/0?e=1596067200&v=beta&t=ODIqK7DKs-TXS6PIhiyNSAEJKe2XBHxEQZKnsWXPC1E
tags: [bureaucrats, govt engineers, govOS]
---

This is a multipart series on how we built Samiksha and how this lead to abstracted modules that we have today.

<!--truncate-->

## 1. Introduction

It all started in May 2019 when we were given the problem statement of Samikshan. The tools that we just cobbled up, then evolved based on the use cases of Samwad and Pariksha and got consolidated as packages. I will pick up individual challenges faced during the development of the app, but first an introduction.

### 1.1 Problem Statement

Samiksha is an OpenSource product designed to improve school quality control activities conducted by state education department officials in government schools. This typically includes mentoring to support teachers based on observations of their in-class teaching practices and monitoring to inspect the status of infrastructure and quality of school processes such as classroom teaching, availability of teaching learning materials, functional toilets, completion of civil works projects in the school and so on.

Translating this to tech, it is essentially an ecosystem that gives

- the `admin` to build and deploy forms dynamically without updating the app. This also gives you the ability to manage `roles`, `resources` and `permissions` for individual users. This initial work essentially evolved into the [Application console](https://samagra-development.github.io/docs/docs/COAppControl).
- the end `user` an application to fill forms in a secure way. The is what later became the part of the [Mobile Application](https://samagra-development.github.io/docs/docs/COMobileApplication)
- the `program owner` access to all the raw data on which he can perform analyitics. This analytics and visualization part is the [Data Analytics](https://samagra-development.github.io/docs/docs/CODataAnalytics) package that we have right now.

## 2 Design Principles

Our approach to building software is heavily influenced by the need to empower government engineering teams with technology products built using OpenSource tools that they could independently manage in the long term thereby reducing public expenditure, having confident deployments at scale, with any technology, infrastructure or vendor lock-ins. This is why

Principle #1 - Build reusable, scalable, extensible & deployable technology products using OpenSource tools Principle #2 - Work with existing government systems, don’t replace them Principle #3 - Strengthen government technology capability, don’t replace it

I will be focussing, on Principle #1 here. More importantly, how we chose the exact same Open Source projects to power our program.

## 3. Navigating in the Open Source World

### Exploring what is already there

When we set out to build an open source application, we knew that there are four major components to it and given the timelines, we wouldn't be able to build even one. The challenge with a lot of OSS projects is not the quality, but interoperatability. Even when you are able to find something that is in a language that you know, you are not able to figure out how to make customizations to the code due to bad (and mostly NO) documentation on the code. Often its more a reflection on how what is your team like and how cutting edge you want (can afford) to be.

Selecting OSS projects is a science on its own right. With so many choices, it is inevitable that you would end up with decision fatigue.

![Chosing an open source project](https://blog.vantagecircle.com/content/images/size/w860/2019/07/decision-fatigue.png)

_What it is like when you are selcting an open source project_

The four major components for Samiksha are the following.

1. The [Form management module](https://samagra-development.github.io/docs/docs/FormManagementModule)
2. Authentication and Authorization server
3. [Aplication Control Module](https://samagra-development.github.io/docs/docs/COAppControl) to manage and use data
4. [Data Analytics](https://samagra-development.github.io/docs/docs/CODataAnalytics)

![Architecture](https://samagra-development.github.io/docs/img/SamikshaArchitecture.png) _This is how they connect in the overall structure._

If you just go by the number of open source solutions you can build, it would be 20^4 (assuming 20 legit candidates foreach). So how do you choice the one out of 1.6 lakh choices that you have? How do you narrow down choices?

### Defining the criteria

![Chosing an open source project](https://miro.medium.com/max/1000/1*9nMBMt-OugnruBr_M-WuEQ.png)

_Why create a new new standard than using something already there?_

Even before setting out to select the project, have a concrete idea of what we were looking for in the first place was essential. We listed down the requirements that were essential for each of the components and started mapping them to open source projects. But this was not enough, since a lot of projects were having similar features, so evolved the criteria to include some other parameters to make it more robust so that even a Github bot could check this. Since we were all willing to learn something new (even a new language), the criteria (in priority) apart from the core features that we are looking for was as follows

#### Must have

- Active, funded community with frequent (at least a monthly) release - Since we are not a big team, contributing on something straight away making multiple PRs was not something that we could have done. Having an active community leverages their expertise and helps in getting solutions others have already custom built for themselves. Having a huge stackoverflow repository of questions, in a similar way keeps us agile.
- Having a fully featured GUI - Debugging based on logs was not something that we could afford. Also having a GUI implemented, gives an example to how to implement the APIs in other use cases.
- Code quality and maturity of the project - Anything less than an year was not considered.
- Does it have a LICENSE - Open licences like MIT are favourable than others.
- Does it have a Dockerfile? - Deployment being one our design principles, anything without a container was a no go.

#### Good to have

- Are there issues and PRs raised? - PRs and issues getting closed at a fast rate, was a metric that becomes a proxy of how fast our own issues will be resolved.
- Conitnuous integration status
- Does it have a CONTRIBUTING doc - Since we would be modifying a lot of what was already built, it was necessary to have a starting doc that would enable newcomers like us to ramp up faster.
- Does it have tests?
- Benchmarking

Though _stargazers_ is something that people generally look for as a proxy for all of the above, we went a step ahead since we would be marrying the thing and using them for a long time. We would also be modifying some of the features heavily so all of the above things were essential for us.

### The result?

When we were done evaluating everything, we were left with these four choices.

|     | Component                   | Choice 1   | Choice 2 | Choice 3 |
| --- | --------------------------- | ---------- | -------- | -------- |
| 1   | Form management             | ODK        |          |          |
| 2   | IdentityServer              | FusionAuth | Gluu     | OpenAM   |
| 3   | Application Console         | ReactAdmin |          |          |
| 4   | Analytics and Visualization | Metabase   | Superset |          |

Now since we had just 6 choices, we narrowed down to one based on the stack that we felt most comfortable with. React being one of them, Java being the other. So the final choices were, **FusionAuth** for _ItentityServer_ and **Metabase** for _Visualization_.

Now that we had made a bet on the above platforms, the next step was to figure out how to make a seamless integration of all these technologies such that everything is secure and ready to go. But we will take this up in the next post.
