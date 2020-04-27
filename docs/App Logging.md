---
id: Grove
title: App Logging
sidebar_label: App Logging
---

## 1. Overview

For any app developer, being able to monitor the application statibility is of paramount importnace. There is nothing more important than keepng the app crash count to its bare minimum. As, Mobile developers we are usually familiar with tools such as Google Analytics or Fabric.io but they are analytics or crashlytics systems, and not full-fledged application logging solutions. To enable remote logging, we have built an application logging and crash reporting functionality using opensource tools and libraries, which can be easily integerated into your starter app. This will enable you to identify and respond to common crashes in a timely manner. 

The module also would include the option to retrieve the app logs and also then further segregate them ad push them to back-end server. Also, included in this, are certain more modifications which are listed ahead in the document. Think of this tool as alert guard dog, always ready to let you know if something goes wrong so you can identify the culprit and contain it. It also offers critical data about the crashes, including which devices were affected most, the stack trace, ways to debug them and so on. The module has two key features:

### 1.1 Logger Library

This has been written on top of Android's native **Log** for debugging purpose. Android-Logger and Timber which are natively provided print logs message on logcat in Android Studio that doesn't help to get the behavior of app in production, which means that these logs message aren't accessible to the developers. Remote logging is the solution that helps debug the problem. Hence our module allows the users to store the logs into the database, which can be pulled anytime whenever you want to. As a developer, you can also push the fetched app logs to your remote server for debugging purposes as a file.

### 1.2 Remote Crash/Error Reporting

This has been written on the top of **[Sentry]**(https://sentry.io/). Once the app encounters any Uncaught exception or any un-considered scenarios leading to sudden closing of application, then the corresponding stack-trace at the point of time, would be shared to Sentry Server. The feature also includes an option for the user to configure sending the reported crash to email as well. So whenever the app encounters a crash, the corresponding error related data will be sent both to the Sentry Server as well as to the email configured.

## 2. Setup Module In Starter App

Unzip the github project to a folder. You can find the github repository at this [link](https://github.com/Samagra-Development/mobile-logging). 

Download it as zip locally and then unzip the root directory. Launch Android Studio. Open the main project where you are to integrate these modules.

**Note: Please note that,before you start integrating the module into your project, please do get a run thorugh the demo project downloaded from the github repository, to understand the working.**

### 2.1 Integrate Module

**Note: This is applicable for any android module, you want to import.**

2.1.1 Import the library module to your project (the library source becomes part of your project). Click File > New > Import Module

2.1.2 Select the source directory of the Module you want to import and click Finish. The library module is copied to your project, so you can actually edit the library code.

2.1.3 Open the Dependencies tab.

2.1.4 Click the (+) icon and select Module Dependency. Select the module and click Ok.

2.1.5 Open your build.gradle file and check that the module is now listed under dependencies.

2.1.6 Sync your gradle. Clean your project.

2.1.7 Please follow the same steps for the integration of grove module.

2.1.8 Open the app module's build.gradle file and add a new line to the dependencies block as shown in the following snippet and then run the `gradle-sync`.

```
dependencies { 
    implementation project(':grove');
    }
```
2.1.9 Make sure the library is listed at the top of your settings.gradle file, as shown here for a library named ':grove'. This refers for other modules included as well.<br/><br/>

### 2.2 Start Module

Inside `onCreate` of Application class or Launcher Activity, in the manner as follows

```
IGroveLoggingComponent initializer = ComponentManager.iGroveLoggingComponent;
if(initializer != null) {
    initializer.initializeLoggingComponent(this, this, getApplicationContext(), (context, s, s1, s2, s3) -> {
    }, true, true);
}
```

The method signature of the initialisation invocation is as follows:

```
public void initializeLoggingComponent(
        Application application,
        LoggableApplication applicationInstance, Context context,
        ErrorActivityHandler errorActivityHandler,
        boolean isUCEHEnabled,
        boolean isHyperlogEnabled,
        String domainID,
        String senderEmailID,
        String receiverEmailID
)
```

Specified by:

`initializeLoggingComponent` in interface `com.samagra.grove.contracts.IGroveLoggingComponent`

Parameters:

`application` - App Instance - `Application`

`applicationInstance` - Loggable Application Interface object - `LoggableApplication`

`context` - Context Instance - `Context`

`errorActivityHandler` - Interface/Callback object to communicate back to main app `ErrorActivityHandler`

`isUCEHEnabled` - Flag to control the initialisation of UncaughtExceptionHandler Object - [`Boolean`](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html?is-external=true 'class or interface in java.lang') You can enable or disable it as per your wish. This flag will allow the user to receive email on the address configured, whenever app will crash.

`isHyperlogEnabled` - Flag to control the initialisation of Hyperlog to store App logs in local device - [`Boolean`](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html?is-external=true 'class or interface in java.lang') You can enable or disable it as per your wish. This flag will allow the user to store the app logs in the local database as a file, and also push them to remote server whenever triggered.

### 2.3 Push App Logs to Remote Server

As mentioned ahead, you would be able to do so, if you would have enabled that feature. If that is the case. Whenever you would want to push the logs to the server, invoke the following method in the way mentioned ahead.

```
IGroveLoggingComponent initializer = ComponentManager.iGroveLoggingComponent;
if(initializer != null) {
    initializer.uploadLogFile("API_ENDPOINT_URL", this, "AUTHORIZATION_TOKEN");
}
```

Set the API Endpoint URL in place of `API_ENDPOINT_URL` and send the API's authorisation token in place of `AUTHORIZATION_TOKEN`.

### 2.4 Configure Remote Error/Crash Reporting

Follow the steps mentioned ahead to configure the Error reporting within your app project.

1. Create an Account on [Sentry](https://sentry.io/signup/). Fill in all your details as required. This link redirects you the free developer version of Sentry. As per your increased demand and load, you can also buy premium plans for the same.

2. After you successfully create an user account, Select the platform for which you need error reporting.In this case, please select **Android**. Your project will be created after selecting the **Create Project** button.

3. Update your build.gradle files as below

```
// ADD JCENTER REPOSITORY
repositories {
    jcenter()
}

// ADD COMPATIBILITY OPTIONS TO BE COMPATIBLE WITH JAVA 1.8
android {
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
}

// ADD SENTRY ANDROID AS A DEPENDENCY
dependencies {
    implementation 'io.sentry:sentry-android:{version}'
}
```

4.  After this step, Go to your User Profile on Sentry, using this [link](https://sentry.io/organizations). Within the profile section, Search for Client Keys(DSN) in the Search tab or Directl go to Client Keys(DSN) Section ([https://sentry.io/settings/[PROJECT_NAME]/projects/[PROJECT_NAME]/keys/](https://sentry.io/settings/nbujnn/projects/nbujnn/keys/). Copy the DSN value from there. Include this in your build.gradle

```
android {

...
buildTypes {
    release {
    ...
  buildConfigField 'String', "dsn", "\"DSN_VALUE\""
  }
    debug {
        buildConfigField 'String', "dsn", "\"DSN_VALUE\""
  }
}
...
...
```

5. **_Integrating Proguard_**: To use ProGuard with Sentry, please follow the following steps:

- **_Gradle Integration_**: Using Gradle (Android Studio) in your `app/build.gradle` add:

```
apply plugin: 'io.sentry.android.gradle'

```

- And declare a dependency in your top-level `build.gradle`:

```
buildscript {
    repositories {
        mavenCentral()
    }

    dependencies {
        classpath 'io.sentry:sentry-android-gradle-plugin:1.7.31'
    }
}

```

- In the root level of your project, add a file **_Sentry.properties_** with contents as follows:

```
defaults.project=your-project
defaults.org=your-org
auth.token=YOUR_AUTH_TOKEN

```

You can find your authentication token [on the Sentry API page](https://sentry.io/api/).

- **_Gradle Configuration_**: Additionally, you can expose a few configuration values directly in Gradle:

```
sentry {
    // Disable or enable the automatic configuration of ProGuard
    // for Sentry.  This injects a default config for ProGuard so
    // you don't need to do it manually.
    autoProguardConfig true

    // Enables or disables the automatic upload of mapping files
    // during a build.  If you disable this, you'll need to manually
    // upload the mapping files with sentry-cli when you do a release.
    autoUpload true

    // Disables or enables the automatic configuration of Native Symbols
    // for Sentry. This executes sentry-cli automatically so
    // you don't need to do it manually.
    // Default is disabled.
    uploadNativeSymbols false

    // Does or doesn't include the source code of native code for Sentry.
    // This executes sentry-cli with the --include-sources param. automatically so
    // you don't need to do it manually.
    // Default is disabled.
    includeNativeSources false
}

```

- You can also check other Proguard related functionalities provided by Sentry in the [documentation](https://docs.sentry.io/platforms/android/#proguard)

6.  Add file **_logging.properties_** in the root level of your project.

```
#Enable the Console and Sentry handlers
handlers=java.util.logging.ConsoleHandler,io.sentry.jul.SentryHandler

#Set the default log level to INFO
.level=INFO

#Override the Sentry handler log level to WARNING
io.sentry.jul.SentryHandler.level=WARNING
```

7. When initialising the component, replace the domainID variable with, **_BuildConfig.dsn_**.

8. You are now set to go, build the project and manually trigger a crash, could it be a NullPointerException for example, you should be able to see the App logs on the Sentry Panel.
