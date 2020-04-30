---
id: NotificationModule
title: Notifications Module
sidebar_label: Notifications Module
---

## 1. Overview

Push notifications are an important part of the mobile experience. Users have grown accustomed to having push notifications be a part of virtually every app that they use. 

For an app, the most effective way to receive push notifications is via Firebase Cloud Messaging Service. Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost. Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention.

The module that we have developed, contains a functionality to generate notifications received via FCM and also generate push notifications from within the app.

## 2. Setup Module In Starter App

Unzip the github project to a folder. You can find the github repository at this [link](https://github.com/Samagra-Development/mobile-push-notification). 

Download it as zip locally and then unzip the root directory. Launch Android Studio. Open the main project where you are to integrate these modules.

**Note: Please note that,before you start integrating the module into your project, please do get a run thorugh the demo project downloaded from the github repository, to understand the user flow.**

### 2.1 Integrate Module

**Note: This is applicable for any android module, you want to import.**

2.1.1 If you have not commons module in the project, you would need to integrate these first sequentially, to integrate the notification_module later, using the following steps.

2.1.2 Import the library module to your project (the library source becomes part of your project). Click File > New > Import Module

2.1.3 Select the source directory of the Module you want to import and click Finish. The library module is copied to your project, so you can actually edit the library code.

2.1.4 Open the Dependencies tab.

2.1.5 Click the (+) icon and select Module Dependency. Select the module and click Ok.

2.1.6 Open your build.gradle file and check that the module is now listed under dependencies.

2.1.7 Sync your gradle. Clean your project.

2.1.8 Please follow the same steps for the integration of notification_module module.

2.1.9 Open the app module's build.gradle file and add a new line to the dependencies block as shown in the following snippet and then run the `gradle-sync`.

```java
dependencies { 
    implementation project(':notification_module');
    }
```
2.1.10 Make sure the library is listed at the top of your settings.gradle file, as shown here for a library named ':notification_module'. This means for other modules included as well.<br/><br/>


### 2.2 Setup Firebase

2.2.1  You must have firebase set up for your project. Set up Firebase and the FCM SDK. If you haven't already, [add Firebase to your Android project](https://firebase.google.com/docs/android/setup).

2.2.2  In your project-level build.gradle file, make sure to include Google's Maven repository in both your buildscript and allprojects sections.

2.2.3  Add the dependency for the Cloud Messaging Android library to your module (app-level) Gradle file (usually app/build.gradle)

```java
implementation 'com.google.firebase:firebase-messaging:20.1.5'
```

2.2.4  You need to have Internet Permissions to interact with the FCM Server.
 
```xml
 <uses-permission android:name="android.permission.INTERNET" />
```

2.2.5  Voila, Firebase has been integrated into your project. Please clean and rebuild your project.


### 2.3 Use The Module

2.3.1  Register the notification channel in your Application level class as follows:
```java
  NotificationUtils.createNotificationChannel(this);
  //this is the instance of the Application level class of your project.
```
2.3.2 Access the device registration token: On initial startup of your app, the FCM SDK generates a registration token for the client app instance. If you want to target single devices or create device groups, you'll need to access this token by extending  [`FirebaseMessagingService`](https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService)  and overriding  `onNewToken`. This has already been taken care of by the module you integrated. You will just have to invoke the FirebaseMessagingService child class.
```java
new PushMessagingService().
		setContext(context, API_URL, API_KEY).	
							getCurrentToken(context);
 ``` //Base API Url and API Key are for Fusion Auth API Integration related,
 if in case you are using Fusion auth for managing and authenticating user data.
```

2.3.3  You are set to go, if you would send a notification from Firebase, you should receive a notification on your device. 

2.3.4  Sending the notification from within the app - Call the following method wherever you want to send the notification

```java
Intent notifyIntent = new Intent(getActivityContext(), NotificationRenderingActivity.class);  
notifyIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);  
notifyIntent.putExtra(NotificationRenderingActivity.NOTIFICATION_TITLE,"Notification Title");  
notifyIntent.putExtra(NotificationRenderingActivity.NOTIFICATION_MESSAGE, "Test message");   
PendingIntent pendingNotify = PendingIntent.getActivity(getActivityContext(), REQUEST_CODE,  
        notifyIntent, PendingIntent.FLAG_UPDATE_CURRENT);  
AppNotificationUtils.showNotification(pendingNotify, NOTIFICATION_ID, "Notification Title", "Test Notification");
```

2.3.5  After this integration, you should be able to receive FCM Notifications on your device, as well also generate notifications from within your app. 


## 3. FAQs

**3.1 How to test the FCM Notifications?**

In order to test and see how the FCM Notification is sent to your android device, please refer this [tutorial](https://firebase.google.com/docs/cloud-messaging/android/first-message).

*Please note that this module is in continuous development phase, as soon as we push out new functionalities related to Push Notifications, we would keep adding the features here.*

**3.2 How to manage the FCM Token?**

FCM token is user specific, hence we suggest to store the FCM token for the user in the preferences, and we prefer to update the fcm token whenever the user log-in into the application, by checking if the new user logging in is different from the last user using the app.

## 4. Coming Soon

The following features will be added to this module by 30 June 2020.

4.1 Notification Center in the app.

4.2 Ability to read, delete and unread the app notifications.

4.3 Including deep-link in the notifications to redirect user to specific app sections.
