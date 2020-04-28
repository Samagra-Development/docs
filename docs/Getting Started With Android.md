---
id: GettingStarted
title: Build Your Own App Using Samagra Components
sidebar_label: Build Your App
---

# Intro into the Samagra Android App

## Overview

[Can Reduce this a bit - UB, SS please help to reduce this to half] We at Samagra aim at solving complex governance problems leveraging the wide use of open source technologies. Among all our initiatives in different states, we have developed different mobile applications defined over various different problem statements spread across a number of domains - including Education, Agriculture, Digital Literacy. Our experiences have helped us to learn certain pointers which, we believe are useful for any developer, particularly trying to solve the complex governance problems.

1. Open source technologies are usually the best approach for going around any problem, given the support you can achieve in terms of roadblocks you might encounter while development, augmented by the inputs that you could further disseminate from your app development journey. Hence, Collaborative Learning is a key to a better plan of software development.

2. We realised that even if different problem statements come into picture, the approach towards the development of technological solutions follow certain basic similar features, for instance - access and authentication of users, remote configurations, data collection and sending them to backend for aggregation, remote app monitoring etc.

3. This brings to one of the most crucial conclusions, it is always pragmatic to develop the app, as a conglomerate of different separate and independent modules, pointing to different features, which can be attached together with the main app module to develop a modular app with the least amount of effort. These modules are developed to be completely independent functionality packages.

### Tip

This document is based on the summation of these learnings. We have developed this documentation with a desired objective to help any fellow developer with/without sufficient Android App development knowledge, to couple together these smaller together these packages to develop a full fledged deployable app, particularly pertaining to governance related domains. Though we have tried to remain as generic as possible to give support for any developer to follow these mini tutorials to develop a runnable app.

The techniques you’ll learn in the document are fundamental to building any Android app, and mastering it will give you a deep understanding of Android App development.

## Prerequisites

1. We’ll assume that you have some familiarity with Android App development, but you should be able to follow along even if you’re coming from a different programming language. '
2. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes, and basic OOP concepts and principles.

## What to expect from the tutorial

If you will following along this thing ( and it could take some time), you would be able to

1. Build and share an android app with your friends.
2. Get a good understanding of what all the components do.
3. Make a sense of how they play along with each other.

What we are providing in excess of the tutorial if you get stuck.

1. Link to the code repository containing (codes for different modules, a coupled together app and a starter app).
2. Link to executable file for the same.
3. Attached video link for full-fledged application.

## Getting familiar with the basics

1. The Android app to be developed along the lines of this document is a modular app, developed with different modules, with a main module and different child modules attached to it.
2. In order to start up with the development, we would like to recommend giving a read through the basic tutorial on how to build and run a basic android app via this [link](https://developer.android.com/training/basics/firstapp).
3. Note: In all the modules, you would come across a commons module. This module contains common functionalities that can be used by all the modules rather than duplicating the code along the modules.

## Setting up _Samagra Android Starter App_

This is the base project that we use to start all our projects as it includes all the basic wiring among all the components and provides a speedy development process.

1. Clone the github [project]([UB]-project-link) to a folder. If you use git, `git clone ... [UB]` should fast track things.
2. Setup the project on Android Studio. [This](https://www.youtube.com/watch?v=wenTzCZpv90) is a good starting resouce on how to do this.
3. Connect you phone or emulator and install the app. [UB - Add a good video source] If you have followed along with the above three steps you should see the following screen,

![](https://lh3.googleusercontent.com/xOtDvkRhN5DlhkBK8lW8QkIk5mc0vMMtcBCcre7as6pLhO8Af2mZFqf2UKH-plbCjUp-yU5YDRPCuinuZi8Oj8wrAoypMrIdSc6S4LPN9jPAu8KbI1fKdSoBqCsp_6yiijcMKaQM)

## Configuring Home Screen

As you will install and run the app, you will see that the home screen icons, when clicked just show a snackbar. This is intended to just show the functionality of [**_MVP design pattern_**](https://github.com/MindorksOpenSource/android-mvp-architecture), where click action is listened to by the [**_View_**]([UB]-AddLink) and then the action is handled by the [**_Presenter_**]([UB]-AddLink).

You can configure the home screen to redirect the user to the modules which will be discussed ahead. This is where most of your time would be spend when building your own app.

#### Event Configuring - What it’s all about

[**_Event bus_** ](https://dzone.com/articles/design-patterns-event-bus) is a great solution that allows objects with different lifecycles and located in different layers of hierarchy to communicate. We suggest that if you have an event bus in your Android application, most likely you use libraries like [**Otto**](https://square.github.io/otto/) or [**EventBus**](https://github.com/greenrobot/EventBus).

For more details on how to set up your own RxBus, and how to use it further, please refer to the [this doc](https://samagra-development.github.io/docs/docs/CommunicatingAmongModules).

## Form Management Module

[UB/SS Reduce this one line with just a link on overview section of module] While working in the Government frame, one of the most prominent use cases needed for various tech products is a better surveying technique that should be easily integrated, both at client and back end, in terms of retrieval and further processing of data. For that, we pinned to use ODK Collect. ODK Collect is an open-source Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question and answer types, and is designed to work well without network connectivity. If you are new to the ODK or not very sure how to use ODK, please refer the link mentioned below

### What is ODK? How to use ODK? Creating a Form in ODK?

Please refer to this document to find basics for ODK, and how to set a form on ODK Aggregate. [Documentation of ODK.](https://docs.google.com/document/d/12d6S12J3uTN9B3_WZQh3f9iXwOv1Yri106hXXfoMAg4/edit)

### 1. Setting up Form Management Module

1. Please refer to the [link](https://samagra-development.github.io/docs/docs/FormManagementPackage#setting-up-odk) to set up ODK into your mobile Application.
2. To configure which forms a user would be able to see, you need to provide them through a JSON object similar to this one. [UB - code here]

### 2. Showing a List of forms to choose from

If you want the user at his own prerogative select which form to open, use the following invocation [UB - Add file which needs to be modified with line number]

```java
HashMap<String, Object> toolbarModificationObject = UtilityFunctions.generateToolbarModificationObject(true, R.drawable.ic_arrow_back_white_24dp, "View Submitted Forms", true);
getIFormManagementContract().launchFormChooserView(context, toolbarModificationObject);
```

Here, `getIFormManagementContract()` returns the value of the contract object for the Form Module. `context` is the Context object of the [**_View_**(]([UB-AddLinktoview])activity) from where you have triggered this click action.

### 3. Filling up a particular form

If you want to fill a particular form, out of the forms downloaded above, in the click action of the view, please invoke the following method of the module. [UB point to the file where this change needs to be made; Also need a concrete example, so don't put the method signature, show the invocation.]

```java
getIFormManagementContract().launchSpecificDataForm(String formIdentifier);
```

Here, `getIFormManagementContract()` returns the value of the contract object for the Form Module. `formIdentifier` is to be replaced by the name of the specific form you want to be filled by the user.

### 4. Submitting a form

[UB - Add a section on how to submit a form, could be an ODK link]

### 5. Seeing submission.

If you want to view the forms that the user has submitted already, use the following method invocation: [UB - Add file which needs to be modified with line number]

```java
HashMap<String, Object> toolbarModificationObject = UtilityFunctions.generateToolbarModificationObject(true,
R.drawable.ic_arrow_back_white_24dp, "View Submitted Forms", true);
getIFormManagementContract().launchViewSubmittedFormsView(context,toolbarModificationObject)
```

### 6. Offline viewing of data and sending them again

Since ODK provides a functionality to fill forms offline, you can sync these forms when online again. You can view all such forms via below method invocation.

```java
geIFormManagementContract().launchViewUnsubmittedFormView(context, className);
```

Here, getIFormManagementContract() returns the value of the contract object for the Form Module. context is the Context object of the view(activity) from where you have triggered this click action. className is the lexographic name of the given class, the name by which you have saved the class in the project.

### 7. Prefilling form

Sometimes you would like your forms to be prefilled with data. This is outside the scope of this tutorial but if you want to it, here is a look. [UB - Remove the section below and add a link here.] You can prefill certain details into a form if you know the tag to be prefilled and the form’s name, in the manner mentioned ahead.

```java
getIFormManagementContract().updateFormBasedOnIdentifier(String formIdentifier, String tag, String tagValue);
```

Here, getIFormManagementContract() returns the value of the contract object for the Form Module. formIdentifier is to be replaced by the name of the specific form you want to be filled by the user. tag refers to the tag whose value you want to override/pre-fill and the tagValue is the desired value

Once you have achieved this milestone, the UI should look like this. <a  href="https://imgflip.com/gif/3wwv9l"><img  src="https://i.imgflip.com/3wwv9l.gif"  title="made at imgflip.com"/></a>

## Ancillary Screen Module

For any android app, it becomes imperative, as the usage increases and the features enhance, it is needed to provide an access control to the app. Hence, we developed a module, with certain UI modules which can be easily integrated with your app, to provide basic features which are to be generally present in almost every android application, which are Splash scree, Login Screen, Forgot Password and Reset password via OTP.

### 1. Screens Included in the Ancillary Screens Module

1. **Splash Screen** - User sees this activity in the fist time when app is launched.
2. **Login Screen** - User can login via user id and password, we are using FusionAuth for the management and authentication of users.
3. **About Us Screen** - Ability to confiure the title, icon and the description text of the About Us Screen
4. **Reset Password** - User can reset the app password from the Login screen via OTP sent to his registered Mobile number
5. **Tutorials Screen** - In order to guide the app user about the flow of app via Youtube video, you can configure those videos inside these screens by passing in your Youtube API Key and Video ID. You can also remotely configure the video IDs.

### 2. Integrating Module into your Project

1. Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.
2. Launch Android Studio. Open the main project where you are to integrate these modules.
3. If you do not have `customworkmanager` or `commons` module in the project, you would need to integrate these first sequentially, to integrate the ancillaryscreens module later, using the following steps.
4. Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing. Please follow the same steps for the integration of ancillaryscreens module.
5. In the settings.gradle, Add `:ancillaryscreens` to the end of already added modules.

### 3. Initialization and Usage of Ancillary Screens Module

Inside `onCreate` of Application class or Launcher Activity, in the manner as follows, [UB add concrete example for this and describe the params in English and not code]

```java
AncillaryScreensDriver.init(this, BASE_API_URL, SEND_OTP_API_ENDPOINT, RESET_PASSWORD_API_ENDPOINT, APPLICATIO_ID);
```

### 4. Using this module

We will just be showing how to add **Splash Screen** to the app. For more details on how to add other screen please go here [UB-Add this]

1. In order to make Splash Screen the launcher activity for your application, please add the following statement in the AndroidManifest.xml file of this module, if not present

```xml
<activity
	android:name="com.samagra.ancillaryscreens.screens.splash.SplashActivity"
	android:theme="@style/Theme.AppCompat.Light.NoActionBar">
	<intent-filter>
		<action android:name="android.intent.action.MAIN" />
		<category android:name="android.intent.category.LAUNCHER" />
	</intent-filter>
</activity>
```

After you have integerated this module into your application, your application should look something like as follows: <a  href="https://imgflip.com/gif/3wwonh"><img  src="https://i.imgflip.com/3wwonh.gif"  title="made at imgflip.com"/></a>

## User Profile Package

For any app, at a user’s level, it is essential to provide the user with an option to control the user’s profiles in terms of editing his/her basic contact details (Contact and email). These details can be leveraged by the back-end to send personalized messages/emails/notifications. At a user’s level, the contact number can be used by the user to reset his/her password.

### 1. Overview

The module is developed to provide a basic profile screen to the user, though it can be extented to add other things. For a full details of the capabilities of this module please check this section.

### 2. Integrating the module into the Mobile Application

In your module's `build.gradle`, add the following code snippet and run the `gradle-sync`.

```gradle
dependencies {
	compile 'com.hypertrack:hyperlog:0.0.10'
}
```

### 3. Initialization

1. Inside `onCreate` of Application class or Launcher Activity, in the manner, as follows [UB-mark a file here.]

```java
ComponentManager.registerProfilePackage(new ProfileSectionInteractor(), this, AppConstants.BASE_API_URL, applicationID);
```

2. Wherever you want to launch the Profile Section, use the following code piece.

```java
IProfileContract initializer = ComponentManager.iProfileContract;
if(initializer!=null){
	initializer.launchProfileActivity(context,profileConfig,fusionauthAPIKey,sendOTPUrl,updateAppPasswordURL);
}
```

### 4. Setting Up Firebase for Android Project and Consuming it on Client End

1. First of all, for setting up Remote Config for Firebase, you need to setup Firebase for your Android Application Project. The tutorial for setting up Firebase for Android can be accessed via the link, [Adding Firebase to your Android Project](https://firebase.google.com/docs/android/setup).
2. Configure Remote Config for your Android App after the above step is successfully completed, accessible via the link, [Getting started with Firebase Remote Config on Android](https://firebase.google.com/docs/remote-config/use-config-android).
3. Go to [Google Firebase Console](https://www.console.firebase.google.com/), navigate to your project view. In your project view, launch the Remote Config View by clicking on the Remote Config tab.
4. In the Remote Config window, Click on Add Parameter option. Add the profile config parameters as mentioned ahead.
5. Add the key and value in the format mentioned below. `key : "profile_config"` `value :` [UB - Provide a static value and describe how to create one in a different section (Not int he scope of this one.]
6. You can retrieve the above set values at the client end using the following code snippet. [UB - Add file link and line number]

```java
public ArrayList<UserProfileElement> getProfileConfig() {
	String configString = mFirebaseRemoteConfig.getString("profile_config");
	ArrayList<UserProfileElement> userProfileElements = new ArrayList<>();
	try {
		JSONArray config = new JSONArray(configString);
		for (int i = 0; i < config.length(); i++) {
			JSONArray spinnerExtra = config.getJSONObject(i).optJSONArray("spinnerExtra");
			ArrayList<String> spinnerValues = null;
			if (spinnerExtra != null) {
				spinnerValues = new ArrayList<>();
				for (int j = 0; j < spinnerExtra.length(); j++) {
					spinnerValues.add(spinnerExtra.get(j).toString());
				}
			}
			userProfileElements.add(new UserProfileElement(config.getJSONObject(i).get("base64Icon").toString(), config.getJSONObject(i).get("title").toString(), config.getJSONObject(i).get("content").toString(), (Boolean) config.getJSONObject(i).get("isEditable"),
			(int) config.getJSONObject(i).get("section"), UserProfileElement.ProfileElementContentType.valueOf(config.getJSONObject(i).get("type").toString()),spinnerValues));
		}
	} catch (JSONException e) {e.printStackTrace();}
	return userProfileElements;
}
```

7. Map the values corresponding to these content fields, as per your app’s scenario. You could fetch and store these values in the SharedPreerences or in local DB, after receiving User Info from App Login Response or from particular User Data API.

### 5. Your Profile screen is ready

Try to edit the details of the user and if you want to remove/add a field, just update the firebase config. <a  href="https://imgflip.com/gif/3wx5vk"><img  src="https://i.imgflip.com/3wx5vk.gif"  title="made at imgflip.com"/></a>

[UB add a section of rarely used modules] - Cascading, Cloud Notifications etc

## Cascading Search Module

One of the most recurring cases, that we came across while developing apps, was sets vs subsets of data, which refers to that the data collection is based on certain user fields which go on dividing into subsets, for instance - District -> Tehsil -> Block -> Town -> Post Office. Sometimes the list, of the super set or rather consider the heaviness of list for Post offices under a state like Uttar Pradesh. So in order to provide a better user experience, we decided to use fuzzy search to filter out the data as the user keeps going from a higher level to lower level of demarcation. You can, as a developer modify this module as per your requirement, and extend it to n number of levels, if you would require so.

### 1. Overview

In order to understand the functioning of the module, we will help you set up a sample module that you can use to integrate into your app. We use Firebase Remote Storage to get the required mapping file, which is required by the user to fill forms etc. The file is stored in the res/raw folder in a gzip format, to occupy less space.

In order to remotely change this file, we have also included a provision via FirebaseRemoteConfig to download this file and then replace the pre existing gzip file.

We also have a module included in our commons module to unzip the mentioned file in local device storage which can be further read and filtered out as per the user's requirements. You can receive the results of the Cascading Module and then use further.

### Setting up Module into your Project

1. Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.

2. Launch Android Studio. Open the main project where you are to integrate these modules.

3. If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the cascading module later, using the following steps.

4. Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.

5. Please follow the same steps for the integration of Cascading Module

### Using the functionalities to run the Module

1. You need to have Storage Permissions to unzip the file and store it in local storage. For this add to the AndroidManifest.xml

```



<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

<uses-permission android:name="android.permission.READ_PHONE_STATE" />

```

2. Add the following code snippet to get user's consent to storage permission

```PermissionsHelper permissionUtils = new PermissionsHelper();

if (!PermissionsHelper.areStoragePermissionsGranted(activityContext)) {

permissionUtils.requestStoragePermissions(activityContext, new AppPermissionUserActionListener() {

@Override

public void granted() {

//User grants storage permissions.

}

@Override

public void denied() {

//User grants denies permissions.

}

});

} else {

//User has already granted Storage permissions.

}

```

3. In order to unzip the locally stored file, we will use this following function:

```FileUnzipper fileUnzipper = new FileUnzipper(getMvpView().getActivityContext(), pathJSONFile, Resource_ID_GZIP_FILE, new UnzipTaskListener() {

@Override

public void unZipSuccess() {

//If Unzipping operation is successful

}



@Override

public void unZipFailure(Exception exception) {

//If Unzipping operation is failed, exception is returned.



}

});

fileUnzipper.unzipFile();

```

4. In order to use this module, attact the module from the Main app module using the following code snippet.

```

CascadingModuleDriver.init(getMainApplication(),FILE_PATH);

```

The method signature of the invocation is shown below:

```

/**

*

* @param mainApplication - Instance of Main Application,

* instance of Interface implemented by Application class to

* communicate back with main app project.

* @param FILE_PATH - File path where you have unzipped your * file.

*/

void init( @NonNull MainApplication mainApplication, @NonNull String FILE_PATH);

```

5. You can launch the cascading view using the following method invocation.

```

CascadingModuleDriver.launchSearchView(activityContext, FILE_PATH);

```

The method signature of the invocation is shown below:

```

/**

*

* @param activityContext - Instance of Context.

* @param FILE_PATH - File path where you have unzipped your * file.

*/

void init( @NonNull Context activityContext, @NonNull String FILE_PATH);

```

Here FILE_PATH refers to the path where json file is to be stored.

### Receiving back the Result of the Cascading Module

The result is send back to the main app module by the CascadingModuleDriver, via the RxBus.

The result object contains in form of object, the values of all the levels from selected options in the module.

Please see the following clip to see how this module is expected to work.

<a  href="https://imgflip.com/gif/3wx8c3"><img  src="https://i.imgflip.com/3wx8c3.gif"  title="made at imgflip.com"/></a>

## Push Notifications Module

### Overview

Push notifications are an important part of the mobile experience. Users have grown accustomed to having push notifications be a part of virtually every app that they use.

For an app, the most effective way to receive push notifications is via Firebase Cloud Messaging Service. Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost. Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention.

The module that we have developed, contains a functionality to generate notifications received via FCM and also generate push notifications from within the app.

### Setting up Module into your Project

1. Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.

2. Launch Android Studio. Open the main project where you are to integrate these modules.

3. If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the notifications_module later, using the following steps.

4. Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.

5. Please follow the same steps for the integration of notifications_module.

### Using the functionalities to run the Module

1. You must have firebase set up for your project. Set up Firebase and the FCM SDK. If you haven't already, [add Firebase to your Android project](https://firebase.google.com/docs/android/setup).

2. In your project-level build.gradle file, make sure to include Google's Maven repository in both your buildscript and allprojects sections.

3. Add the dependency for the Cloud Messaging Android library to your module (app-level) Gradle file (usually app/build.gradle)

```

implementation 'com.google.firebase:firebase-messaging:20.1.5'

```

4. You need to have Internet Permissions to interact with the FCM Server.

```

android:name="android.permission.INTERNET"

```

5. Voila, the notification module has been integrated into your project. Please clean and rebuild your project.

6. Register the notification channel in your Application level class as follows:

```

NotificationUtils.createNotificationChannel(this);

//this is the instance of the Application level class of your project.

```

7.  **Access the device registration token** : On initial startup of your app, the FCM SDK generates a registration token for the client app instance. If you want to target single devices or create device groups, you'll need to access this token by extending [`FirebaseMessagingService`](https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService) and overriding **onNewToken** . This has already been taken care of by the module you integrated. You will just have to invoke the FirebaseMessagingService child class.

```

new PushMessagingService().

setContext(context, API_URL, API_KEY).

getCurrentToken(context);

//Base API Url and API Key are for Fusion Auth API Integration related,

if in case you are using Fusion auth for managing and authenticating user data.

```

8. You are set to go, if you would send a notification from Firebase, you should receive a notification on your device.

9. ** Sending the notification from within the app - **

- Call the following method wherever you want to send the notification

```

Intent notifyIntent = new Intent(getActivityContext(), NotificationRenderingActivity.class);

notifyIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

notifyIntent.putExtra(NotificationRenderingActivity.NOTIFICATION_TITLE,"Notification Title");

notifyIntent.putExtra(NotificationRenderingActivity.NOTIFICATION_MESSAGE, "Test message");

PendingIntent pendingNotify = PendingIntent.getActivity(getActivityContext(), REQUEST_CODE,

notifyIntent, PendingIntent.FLAG_UPDATE_CURRENT);

AppNotificationUtils.showNotification(pendingNotify, NOTIFICATION_ID, "Notification Title", "Test Notification");

```

After this integration, you should be able to receive FCM Notifications on your device, as well also generate notifications from within your app.

**Note** - In order to test and see how the FCM Notification is sent to your android device, please refer this [tutorial](https://firebase.google.com/docs/cloud-messaging/android/first-message).

Please note that this module is in continuous development phase, as soon as we push out new functionalities related to Push Notifications, we would keep adding the features here.

## App Logging Module

This module involves a supreme use case for the developers, as it includes the facility to send app loga remotely to server, include crashlytics into your app and receive email updates for the same.

### Integration and Usage of the Logging Module

In order to integrate the module into your mobile ap project, please refer to [this](https://samagra-development.github.io/docs/docs/Grove) detailed step-by-step tutorial on integratng crashlyitcs and error recording facility in your app.

## Offline Loading Module

In order to make app to mitigate various network related scenarios, it is always better to tackle with defence case scenarios. Hence, in order to provide the user with seamless app performance and avoid breakage of user data being sent to the backend, we developed a module leveraging the usage of Work Manager's Work Requests to tackle the user actions which couldn't be completed due to certain constraints.

### Setting up Module into your Project

1. Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.

2. Launch Android Studio. Open the main project where you are to integrate these modules.

3. If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the offline_module later, using the following steps.

4. Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.

5. Please follow the same steps for the integration of offline_module.

### Integrating Offline Module

In the onCreate() of your Application Level class please add the following methos call.

```

Manager.init(this); //this is the Application class Instance



```

You can enqueue the tasks into the offline module's to be executed tasks list, using the following invocation.

```

ScheduledOneTimeWork.from(ApiWorker.class, new Data(hashMap)).enqueueTask(getMvpView().getActivityContext());

//ApiWorker is the worker class to execute the task when the constraints are met. hashMap refers to the data to be sent wrt. //to the task enqueued.

```
