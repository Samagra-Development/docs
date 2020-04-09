---
id: GettingStarted
title: Getting Started with Samagra Android App
sidebar_label: Android Starter
---

# Intro into the Samagra Android App

## Before We Start the Tutorial

We at Samagra aim at solving complex governance problems leveraging the wide use of open source technologies. Among all our initiatives in different states, we have developed different mobile applications defined over various different problem statements spread across a number of domains - including Education, Agriculture, Digital Literacy. Our experiences have helped us to learn certain pointers which, we believe are useful for any developer, particularly trying to solve the complex governance problems.

1.  Open source technologies are usually the best approach for going around any problem, given the support you can achieve in terms of roadblocks you might encounter while development, augmented by the inputs that you could further disseminate from your app development journey. Hence, Collaborative Learning is a key to a better plan of software development.

2.  We realised that even if different problem statements come into picture, the approach towards the development of technological solutions follow certain basic similar features, for instance - access and authentication of users, remote configurations, data collection and sending them to backend for aggregation, remote app monitoring etc.

3.  This brings to one of the most crucial conclusions, it is always pragmatic to develop the app, as a conglomerate of different separate and independent modules, pointing to different features, which can be attached together with the main app module to develop a modular app with the least amount of effort. These modules are developed to be completely independent functionality packages.

## Tip

This document is based on the summation of these learnings. We have developed this documentation with a desired objective to help any fellow developer with/without sufficient Android App development knowledge, to couple together these smaller together these packages to develop a full fledged deployable app, particularly pertaining to governance related domains. Though we have tried to remain as generic as possible to give support for any developer to follow these mini tutorials to develop a runnable app.

The techniques you’ll learn in the document are fundamental to building any Android app, and mastering it will give you a deep understanding of Android App development.

## Prerequisites

We’ll assume that you have some familiarity with Android App development, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes, and basic OOP concepts and principles.

## What to expect from the tutorial

1.  Attached video link for full-fledged application.

2.  Link to executable file for the same.

3.  Link to the code repository containing (codes for different modules, a coupled together app and a starter app).

## Getting familiar with the basics

1.  The Android app to be developed along the lines of this document is a modular app, developed with different modules, with a main module and different child modules attached to it.

2.  In order to start up with the development, we would like to recommend giving a read through the basic tutorial on how to build and run a basic android app via this [link](https://developer.android.com/training/basics/firstapp).

3.  Note: In all the modules, you would come across a commons module. This module contains common functionalities that can be used by all the modules rather than duplicating the code along the modules.

## Setting up Samagra Android starter App

1.  Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.

2.  Launch Android Studio. Go to File -> New -> Import Project.

3.  Choose the specific project you want to import and then click Next->Finish. It will build the Gradle automatically and'll be ready for you to use.

4.  The starter app, basically provides a skeleton app to integrate with modules mentioned ahead. The skeleton app UI looks like the screenshot attached on the right side. ![](https://lh3.googleusercontent.com/xOtDvkRhN5DlhkBK8lW8QkIk5mc0vMMtcBCcre7as6pLhO8Af2mZFqf2UKH-plbCjUp-yU5YDRPCuinuZi8Oj8wrAoypMrIdSc6S4LPN9jPAu8KbI1fKdSoBqCsp_6yiijcMKaQM) '

## Configuring Home Screen

1.  As you will install and run the app, you will see that the home screen icons, when clicked just show a snackbar.

2.  This is intended to just show the functionality of MVP design pattern, where click action is listened to by the View and then the action is handled by the presenter.

3.  You can configure the home screen to redirect the user to the modules which will be discussed ahead. The steps would also be discussed in the further part of the document.

## Event Configuring

As mentioned above, the app would consist of multiple modules, hence, in order to communicate back and forth with the main module, we have used RxBus, for the purpose of communication among modules/components.

Since this is a common functionality for all the components, we have added its base contracts and classes in the Commons package.

In order to send an event, use the following syntax:

```

ExchangeObject.SignalExchangeObject signalExchangeObject = new ExchangeObject.SignalExchangeObject(Modules.MAIN_APP, Modules.ANCILLARY_SCREENS, intent);

AncillaryScreensDriver.mainApplication.getEventBus().send(signalExchangeObject);

```

The above code will trigger an indication to redirect an event from MAIN_APP module to ANCILLARY_SCREENS module, with an intent object, needed for redirection.

This will ensure that the activities communicate with one another via Main module only, helping in maintaining the activity stack.

For any activity to receive the event triggered, this class would have to add a code as follows:

```
compositeDisposable.add(this.getEventBus()

.toObservable().subscribeOn(Schedulers.io())

.observeOn(AndroidSchedulers.mainThread())

.subscribe(exchangeObject -> {

if (exchangeObject instanceof ExchangeObject) {

if (((ExchangeObject) exchangeObject).to == Modules.MAIN_APP

&& ((ExchangeObject) exchangeObject).from == Modules.ANCILLARY_SCREENS

&& ((ExchangeObject) exchangeObject).type == ExchangeObject.ExchangeObjectTypes.SIGNAL) {

ExchangeObject.SignalExchangeObject signalExchangeObject = (ExchangeObject.SignalExchangeObject) exchangeObject;

if (signalExchangeObject.shouldStartAsNewTask ){

if(currentActivity != null){

CommonUtilities.startActivityAsNewTask(signalExchangeObject.intentToLaunch, currentActivity);

}}

else

startActivity(signalExchangeObject.intentToLaunch);

} else if (exchangeObject instanceof ExchangeObject.EventExchangeObject) {  ExchangeObject.EventExchangeObject eventExchangeObject = (ExchangeObject.EventExchangeObject) exchangeObject;

Timber.d("Event Received %s ", eventExchangeObject.customEvents);

if (eventExchangeObject.to == Modules.MAIN_APP || eventExchangeObject.to == Modules.PROJECT) {

Timber.d("Event Received %s ", eventExchangeObject.customEvents);

}

} else if(exchangeObject instanceof ExchangeObject.NotificationExchangeObject){

PendingIntent pendingIntent = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getIntent();

int notificationID = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getNotificationID();

int title = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getTitle();

String body = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getBody();

Timber.d("Event Received for Push Notification %s ", title);

}else {

Timber.d("Received but not intended");

}

}

}, Timber::e));

```

Please refer to the RxBus and EventObject class of the commons module for more clarity on the same. Please note that the further sections will discuss the different modules developed for the application.

## Form Downloading and Management Module

While working in the Government frame, one of the most prominent use cases needed for various tech products is a better surveying technique that should be easily integrated, both at client and back end, in terms of retrieval and further processing of data. For that, we pinned to use ODK Collect. ODK Collect is an open-source Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question and answer types, and is designed to work well without network connectivity. If you are new to the ODK or not very sure how to use ODK, please refer the link mentioned below

### What is ODK? How to use ODK? Creating a Form in ODK?

Please refer to this document to find basics for ODK, and how to set a form on ODK Aggregate. [Documentation of ODK.](https://docs.google.com/document/d/12d6S12J3uTN9B3_WZQh3f9iXwOv1Yri106hXXfoMAg4/edit)

### Setting up Form Downloading and Management Module in your Application

1. Please refer to the [link](https://samagra-development.github.io/docs/docs/FormManagementPackage#setting-up-odk) to set up ODK into your mobile Application.
2. You will have to pass the form names and form IDs for the forms you would want to download in your application, to be viewable to the user. Setting these variable values, will download your ODK forms directly when you launch Home Screen of your app, provided you have followed the above steps.

### Filling up a particular form

If you want to fill a particular form, out of the forms downloaded above, in the click action of the view, please invoke the following method of the module.

```
getIFormManagementContract().launchSpecificDataForm(String formIdentifier);
```

Here, getIFormManagementContract() returns the value of the contract object for the Form Module. formIdentifier is to be replaced by the name of the specific form you want to be filled by the user.

### Seeing results

If you want to view the forms that the user has submitted already, use the following method invocation:

```
HashMap<String, Object> toolbarModificationObject = UtilityFunctions.generateToolbarModificationObject(true,
        R.drawable.ic_arrow_back_white_24dp, "View Submitted Forms", true);
getIFormManagementContract().launchViewSubmittedFormsView(context,toolbarModificationObject)
```

Here, getIFormManagementContract() returns the value of the contract object for the Form Module. context is the Context object of the view(activity) from where you have triggered this click action.

### Choosing a form, rather than opening specific form

If you want the user at his own prerogative select which form to open, use the following invocation

```
HashMap<String, Object> toolbarModificationObject = UtilityFunctions.generateToolbarModificationObject(true,
        R.drawable.ic_arrow_back_white_24dp, "View Submitted Forms", true);
getIFormManagementContract().launchFormChooserView(context, toolbarModificationObject);
```

Here, getIFormManagementContract() returns the value of the contract object for the Form Module. context is the Context object of the view(activity) from where you have triggered this click action.

### Offline viewing of data and sending them again

Since ODK provides a functionality to fill forms offline, you can sync these forms when online again. You can view all such forms via below method invocation.

```
geIFormManagementContract().launchViewUnsubmittedFormView(context, className);
```

Here, getIFormManagementContract() returns the value of the contract object for the Form Module. context is the Context object of the view(activity) from where you have triggered this click action. className is the lexographic name of the given class, the name by which you have saved the class in the project.

### Prefilling form

You can prefill certain details into a form if you know the tag to be prefilled and the form’s name, in the manner mentioned ahead.

```
getIFormManagementContract().updateFormBasedOnIdentifier(String formIdentifier, String tag,
String tagValue);

```

Here, getIFormManagementContract() returns the value of the contract object for the Form Module. formIdentifier is to be replaced by the name of the specific form you want to be filled by the user. tag refers to the tag whose value you want to override/pre-fill and the tagValue is the desired value
