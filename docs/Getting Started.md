---
id: GettingStartedMobileComponent
title: Getting Started
sidebar_label: Getting Started
---

## 1. What To Expect

1.1   Attached video link for full-fledged application

1.2   Link to executable file for the same

1.3   Link to the code repository containing (codes for different modules, a coupled together app and a starter app)


## 2. Getting Familiar With Basics

2.1   The Android app to be developed along the lines of this document is a modular app, developed with different modules, with a main module and different child modules attached to it.

2.2   In order to start up with the development, we would like to recommend giving a read through the basic tutorial on how to build and run a basic android app via this [link](https://developer.android.com/training/basics/firstapp).

2.3   Note: In all the modules, you would come across a commons module. This module contains common functionalities that can be used by all the modules rather than duplicating the code along the modules.


## 3. Setting Up Starter App

3.1   Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.

3.2   Launch Android Studio. Go to File -> New -> Import Project.

3.2   Choose the specific project you want to import and then click Next->Finish. It will build the Gradle automatically and'll be ready for you to use.

3.4   The starter app, basically provides a skeleton app to integrate with modules mentioned ahead. The skeleton app UI looks like the screenshot attached on the right side. 

![](https://lh3.googleusercontent.com/xOtDvkRhN5DlhkBK8lW8QkIk5mc0vMMtcBCcre7as6pLhO8Af2mZFqf2UKH-plbCjUp-yU5YDRPCuinuZi8Oj8wrAoypMrIdSc6S4LPN9jPAu8KbI1fKdSoBqCsp_6yiijcMKaQM) '


## 4. Configuring Home Screen

4.1   As you will install and run the app, you will see that the home screen icons, when clicked just show a snackbar.

4.2   This is intended to just show the functionality of MVP design pattern, where click action is listened to by the View and then the action is handled by the presenter.

4.3   You can configure the home screen to redirect the user to the modules which will be discussed ahead. The steps would also be discussed in the further part of the document.
