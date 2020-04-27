---
id: OfflineHandlingModule
title: Offline Handling Module
sidebar_label: Offline Handling Module
---

## 1. Overview 

In order to make app to mitigate various network related scenarios, it is always better to tackle with defence case scenarios. Hence, in order to provide the user with seamless app performance and avoid breakage of user data being sent to the backend, we developed a module leveraging the usage of Work Manager's Work Requests to tackle the user actions which couldn't be completed due to certain constraints.


## 2. Setup Module In Starter App

Unzip the github project to a folder. You can find the github repository at this [link](https://github.com/Samagra-Development/mobile-offline-handling). 

Download it as zip locally and then unzip the root directory. Launch Android Studio. Open the main project where you are to integrate these modules.

**Note: Please note that,before you start integrating the module into your project, please do get a run thorugh the demo project downloaded from the github repository, to understand the user flow.**

### 2.1 Integrate Module

**Note: This is applicable for any android module, you want to import.**

2.1.1 If you have not customworkmanager module in the project, you would need to integrate these first sequentially, to integrate the offline_module later, using the following steps.

2.1.2 Import the library module to your project (the library source becomes part of your project). Click File > New > Import Module

2.1.3 Select the source directory of the Module you want to import and click Finish. The library module is copied to your project, so you can actually edit the library code.

2.1.4 Open the Dependencies tab.

2.1.5 Click the (+) icon and select Module Dependency. Select the module and click Ok.

2.1.6 Open your build.gradle file and check that the module is now listed under dependencies.

2.1.7 Sync your gradle. Clean your project.

2.1.8 Please follow the same steps for the integration of notification_module module.

2.1.9 Open the app module's build.gradle file and add a new line to the dependencies block as shown in the following snippet and then run the `gradle-sync`.

```
dependencies { 
    implementation project(':offline_module');
    }
```
2.1.10 Make sure the library is listed at the top of your settings.gradle file, as shown here for a library named ':offline_module'. This means for other modules included as well.<br/><br/>


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
