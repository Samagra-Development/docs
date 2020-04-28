---
id: AncillaryScreensModule
title: Ancillary Screens Module
sidebar_label: Ancillary Screens Module
---

## 1. Overview

For any android app, it becomes imperative, as the usage increases and the features enhance, it is needed to provide an access control to the app. Hence, we developed a module, with certain UI modules which can be easily integrated with your app, to provide basic features which are to be generally present in almost every android application, which are Splash scree, Login Screen, Forgot Password and Reset password via OTP. The screens included in the Ancillary Screens Module are:

**1.1 Splash Screen**

User sees this activity in the fist time when app is launched.

![](https://media.giphy.com/media/Y2i2NPuqPXVsraOT5r/giphy.gif)

**1.2 Login Screen**

User can login via user id and password, we are using FusionAuth for the management and authentication of users.

![](https://media.giphy.com/media/KbS5UlifRktNSOwhY5/giphy.gif)

**1.3 About Us Screen**

Ability to confiure the title, icon and the description text of the About Us Screen

![](https://media.giphy.com/media/dUC9M2a78pLyOx3boS/giphy.gif)

**1.4 Reset Password**

User can reset the app password from the Login screen via OTP sent to his registered Mobile number

![](https://media.giphy.com/media/IczhDEFjoH9Bf3jbBL/giphy.gif)

**1.5 Tutorials Screen**

In order to guide the app user about the flow of app via Youtube video, you can configure those videos inside these screens by passing in your Youtube API Key and Video ID. You can also remotely configure the video IDs.

![](https://media.giphy.com/media/VJl5bEHCqoMZcsFnsS/giphy.gif)

## 2. Setup Module In Starter App

### 2.1 Integrate Module

2.1.1 Unzip and Pre-set up

Unzip the github project to a folder. You can find the github repository at this [link](https://github.com/Samagra-Development/mobile-ancillary-screens). Download it as zip locally and then unzip the root directory. Launch Android Studio. Open the main project where you are to integrate these modules.

**Note: Please note that,before you start integrating the module into your project, please do get a run thorugh the demo project downloaded from the github repository, to understand the user flow.**

2.1.2 Add the Module/Android Library

Note: This is applicable for any android module, you want to import.

1. If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the ancillaryscreens module later, using the following steps.

2. Import the library module to your project (the library source becomes part of your project). Click File > New > Import Module
3. Select the source directory of the Module you want to import and click Finish. The library module is copied to your project, so you can actually edit the library code.
5. Open the Dependencies tab.
6. Click the (+) icon and select Module Dependency. Select the module and click Ok.
7. Open your build.gradle file and check that the module is now listed under dependencies.
8. Sync your gradle. Clean your project.
9. Please follow the same steps for the integration of ancillaryscreens module.

2.1.5 Edit settings.gradle

Make sure the library is listed at the top of your settings.gradle file, as shown here for a library named ':ancillaryscreens'. This means for other modules included as well.

2.1.6 Verify Project level build.gradle

Open the app module's build.gradle file and add a new line to the dependencies block as shown in the following snippet:

```
dependencies {
    implementation project(":ancillaryscreens")
}
```

### 2.2 Start The Module

Inside onCreate of Application class or Launcher Activity, in the manner as follows
```
AncillaryScreensDriver.init(this,
                BASE_API_URL,
                SEND_OTP_API_ENDPOINT,
                RESET_PASSWORD_API_ENDPOINT,
                APPLICATIO_ID);
```
The method signature of the initialisation invocation is as follows:
```
/**
* 
* @param mainApplication - Instance of Application Class (Main Application, as you will see is an Interface implemented by
Application class)
* @param BASE_API_URL - String (Base API URL for the Fusion Auth, to be later used for user authentication and user data related tasks.)
* @param SEND_OTP_URL - String (API Endpoint to send OTP to the mobile number for resetting app password.)
* @param RESET_PASSWORD_API_ENDPOINT - String (API Endpoint to post user data to reset App Password.)
* @param APPLICATION_ID - String (Application ID sent for this app in Fusion Auth Backend.)
*/
 public static void init(@NonNull MainApplication mainApplication, @NonNull String BASE_URL, 
                            @NonNull String SEND_OTP_URL,
                            @NonNull String UPDATE_PASSWORD_URL, 
                            @NonNull String APPLICATION_ID) 
```

### 2.3 Use Elements of The Module

2.3.1 In order to make Splash Screen the launcher activity for your application, please add the following statement in the AndroidManifest.xml file of this module, if not present

```
<activity
android:name="com.samagra.ancillaryscreens.screens.splash.SplashActivity"
        android:theme="@style/Theme.AppCompat.Light.NoActionBar">
          <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
                </intent-filter>
                </activity>
 ```
 
2.3.2 Use Login Flow

The module comes in such a way that you won't need to do any config changes with respect to Login flow for the user. Same goes for the Change Password flow of the user.

2.3.3 Use About Us Screen

To launch the About Us Screen from the module, use the following code:
```
AncillaryScreensDriver.launchAboutActivity(context, aboutBundle);
```
Here, context is the Context Instance used to launch the About Us screen, AboutBundle is bundle object containing the information transferred to the Activity to render the UI. 

2.3.4 Use Tutorials Screen<br/><br/>

To launch the Tutorials Screen from the module, use the following code:
```
AncillaryScreensDriver.launchTutorialsActivity(context, tutorialBundle);
```
Here, context is the Context Instance used to launch the Tutorials screen, tutorialBundle is bundle object containing the information transferred to the Activity to render the UI. It contains the video id and Youtube API Key 

2.3.5  Communication

We are using RxBus to communicate back and forth with the main app module. Please refer to the SplashPresenter class of the downloaded project where we communicate back with the main app module to notify Login success and launching of home screen.


## 3. FAQs

**3.1 How to manage User Authentication?**

We are using Fusion Auth for the authentication of users at the time of Login. Invoking to reset the app password is also done via. Fusion Auth. You can override the backend using any other Authentication service.

**3.2 How to set remotely configured data?**

We generally use Firebase Remote Config for controlling remote data, but you can are free to use your own custom APIs to get the remote data.
