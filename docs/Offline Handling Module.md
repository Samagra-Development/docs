---
id: OfflineHandlingModule
title: Offline Handling Module
sidebar_label: Offline Handling Module
---

## 1. Overview 

In order to make app to mitigate various network related scenarios, it is always better to tackle with defence case scenarios. Hence, in order to provide the user with seamless app performance and avoid breakage of user data being sent to the backend, we developed a module leveraging the usage of Work Manager's Work Requests to tackle the user actions which couldn't be completed due to certain constraints.


## 2. Setup Module In Starter App

### 2.1 Get Started

2.1.1  Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.

2.1.2  Launch Android Studio. Open the main project where you are to integrate these modules. 

2.1.3  If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the offline_module later, using the following steps.

2.1.4  Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.

2.1.5  Please follow the same steps for the integration of offline_module.

### 2.2 Integrate Offline Module

In the onCreate() of your Application Level class please add the following methos call.

```
        Manager.init(this); //this is the Application class Instance

```
You can enqueue the tasks into the offline module's to be executed tasks list, using the following invocation.

```
ScheduledOneTimeWork.from(ApiWorker.class, new Data(hashMap)).enqueueTask(getMvpView().getActivityContext());
//ApiWorker is the worker class to execute the task when the constraints are met. hashMap refers to the data to be sent wrt. //to the task enqueued.
```
