---
id: GettingStartedMobileComponent
title: Getting Started with Samargra Mobile App Package
sidebar_label: Getting Started
---

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
