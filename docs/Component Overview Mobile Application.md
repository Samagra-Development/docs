---
id: COMobileApplication
title: Component Overview (Mobile Application)
sidebar_label: Component Overview
---

# Component Overview (Mobile Application)

Of the various products, we offer as a part of transforming ways of service delivery, mobile applications are an intrinsic part We have built the different mobile apps for Android platform leveraging various open source technologies. The mobile applications are developed using **multi-modular architecture**. The app is divided into various **independently functioning modules**. The sections, following will give you a deep dive into the various modules on what they offer, how you can incorporate these, and how you can customise these.

## App Modules

| Module Name                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Form Management Module            | 1. Offers the facility of MDC (mobile data collection), written on the top of ODK Collect
2. Downloading of forms, based on user's roles, managing form entry and sending it to server.
3. Ability to see the sent forms.
4. Working of form Management Module even in offline scenario.                                                                                                                                                                                                                  |
| Ancilliary Screen Module          | User can view custom designed screens at various points in the user flows such as:
1. Start of the application (Splash screen)
2. First-time login (Guided Onboarding screens)
3. View information about the app (About Us screen)
4. App usage guide/tutorials screen
5. Functionality to reset App password using OTP.                                                                                                                                                                            |
| Profile Screen Module             | User can manage his/her profile and conduct the following functions:<br>1. View all editable and non-editable profile fields<br>2. Edit profile details<br>3. Reset passwords using OTP method                                                                                                                                                                                                                                                                                                                     |
| Offline Handling Module           | User can use the application in offline mode:
1. Add/Edit/Delete any data in different sections of the application
2. Data is automatically synced for the user once the device is online                                                                                                                                                                                                                                                                                                                    |
| Cascading Dropdown Module         | User can select fields from the application metadata and have the following based on the data selection:
1. Change in the forms shown to the users (users can view different forms based on the dropdown)
2. Pre-fill in the data input forms (based on the variable mapping pre-defined in the data input form)
3. In addition, cascading dropdown as pre-fill based on the profile of the users (Program Mission Director only sees cascading dropdown for 6/10 districts where the mission is ongoing) |
| Push Notification Module          | 1. Integrating FCM firebase token to send push notifications
2. Ability to generate push notifications
3. Generate in-app notifications                                                                                                                                                                                                                                                                                                                                                                      |
| Mobile Application Logging Module | 1. Generate Logs for Application
2. Receive Crash Notifications via Email
3. Remote crash logging
4. Push User App logs for further debugging                                                                                                                                                                                                                                                                                                                                                             |


![alt-text](../img/android-arch.jpg)