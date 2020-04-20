---
id: NotificationModule
title: Push Notifications Module
sidebar_label: Push Notifications Module
---

## 1. Overview<br/>

Push notifications are an important part of the mobile experience. Users have grown accustomed to having push notifications be a part of virtually every app that they use. 

For an app, the most effective way to receive push notifications is via Firebase Cloud Messaging Service. Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost. Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention.

The module that we have developed, contains a functionality to generate notifications received via FCM and also generate push notifications from within the app.


## 2. Setting up Push Notifications Module into your Project<br/>
### 2.1.1 Downoading and integrating into main app project

1.  Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.
2.  Launch Android Studio. Open the main project where you are to integrate these modules. 
3.  If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the notifications_module later, using the following steps.
4.  Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.
5.  Please follow the same steps for the integration of notifications_module.
6. Voila, the notification module has been integrated into your project. Please clean and rebuild your project.

### 2.1.2 Setting up Firebase in your project

1. You must have firebase set up for your project. Set up Firebase and the FCM SDK. If you haven't already, [add Firebase to your Android project](https://firebase.google.com/docs/android/setup).
2. In your project-level build.gradle file, make sure to include Google's Maven repository in both your buildscript and allprojects sections.
3. Add the dependency for the Cloud Messaging Android library to your module (app-level) Gradle file (usually app/build.gradle)
```
implementation 'com.google.firebase:firebase-messaging:20.1.5'
```
 4. You need to have Internet Permissions to interact with the FCM Server.
```
 <uses-permission android:name="android.permission.INTERNET" />
```
5. Voila, firebasee has been integrated into your project. Please clean and rebuild your project.


### 2.1.3 Using the Module

1. Register the notification channel in your Application level class as follows:
```
  NotificationUtils.createNotificationChannel(this);
  //this is the instance of the Application level class of your project.
```
2. **Access the device registration token** : On initial startup of your app, the FCM SDK generates a registration token for the client app instance. If you want to target single devices or create device groups, you'll need to access this token by extending  [`FirebaseMessagingService`](https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService)  and overriding  `onNewToken`. This has already been taken care of by the module you integrated. You will just have to invoke the FirebaseMessagingService child class.
``` 
new PushMessagingService().
		setContext(context, API_URL, API_KEY).	
							getCurrentToken(context);
 ``` //Base API Url and API Key are for Fusion Auth API Integration related,
 if in case you are using Fusion auth for managing and authenticating user data.
```
3.  You are set to go, if you would send a notification from Firebase, you should receive a notification on your device. 
4. ** Sending the notification from within the app - ** 
  Call the following method wherever you want to send the notification

```
Intent notifyIntent = new Intent(getActivityContext(), NotificationRenderingActivity.class);  
notifyIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);  
notifyIntent.putExtra(NotificationRenderingActivity.NOTIFICATION_TITLE,"Notification Title");  
notifyIntent.putExtra(NotificationRenderingActivity.NOTIFICATION_MESSAGE, "Test message");   
PendingIntent pendingNotify = PendingIntent.getActivity(getActivityContext(), REQUEST_CODE,  
        notifyIntent, PendingIntent.FLAG_UPDATE_CURRENT);  
AppNotificationUtils.showNotification(pendingNotify, NOTIFICATION_ID, "Notification Title", "Test Notification");
```

5.After this integration, you should be able to receive FCM Notifications on your device, as well also generate notifications from within your app. 


## FAQs

**Q1) How to test the FCM Notifications?**<br/><br/>
In order to test and see how the FCM Notification is sent to your android device, please refer this [tutorial](https://firebase.google.com/docs/cloud-messaging/android/first-message).
*Please note that this module is in continuous development phase, as soon as we push out new functionalities related to Push Notifications, we would keep adding the features here.*

**Q2) How to manage the FCM Token?**<br/><br/>
FCM token is user specific, hence we suggest to store the FCM token for the user in the preferences, and we prefer to update the fcm token whenever the user log-in into the application, by checking if the new user logging in is different from the last user using the app.

## Coming Soon

1. Notification Center in the app.
2. Ability to read, delete and unread the app notifications.
3. Including deep-link in the notifications to redirect user to specific app sections.

