---
id: deploysamiksha
title: Deploy Your Own Samiksha
sidebar_label: Deploy Samiksha
---

## 1. Overview

This doc helps you to setup a Samiksha app on your own.

The Samiksha product can be used for managing the following activities of the State Education Department:

1. Record observations on monthly school visits
2. Record feedback during classroom observations
3. Report status of material delivery to the schools
4. Monitor the usage of supplementary material provided to schools
5. Monitor the implementation of interventions at the school level
6. Record progress of civil work projects at the school-level
7. Report fund utilization status of the schools
8. Record meeting minutes after conducting review meetings every month
9. Monitor training conducted at the district, block or cluster level
10. Collect training/workshop feedback

### 1.1 Disclaimer

- _Note that this project in alpha and the APIs can change without notice. Please use it at your discretion. Though we use it in production, but the we are yet to close the API specification_
- _Note that some of the links may become live in the coming days. Please contact us in case of any queries or if you need to set this up up urgently._

## 2. Setting up the backend

Backend setup requires you to setup four servers, the steps for which are as follows.

### 2.1 Setting up [FusionAuth](https://fusionauth.io/)

1.  Setting up Fusionauth server - Please use the official [guide](https://fusionauth.io/docs/v1/tech/installation-guide/) to install fusionauth servers.
2.  Adding users to the system - Samwad has no user registraction so, depending on the backend/language that you prefer, users can be added in a variety of ways. We recommend using this [API](https://fusionauth.io/docs/v1/tech/apis/users#import-users).

### 2.2 Setting up [ODK Aggregate](https://docs.getodk.org/aggregate-intro/).

- [Installation](https://docs.getodk.org/aggregate-install/)
- Add [these](https://drive.google.com/drive/folders/1wgh25L_YyOi5y2vdPGahC9V1wjOLRna0) forms to ODK. Note: You need to upload the `.xml` files and the `.xls` file are for form building only. You will need to add the relevant csv assets to the forms as well.

### 2.3 Setting up form authorizations

The next step is setting up which forms the users will see when they open the app. Setting the following remote config for the app on Firebase with `Monitor` as the key name will ensure any user with the role of `Monitor` see these 6 forms. Similarly you can config other roles as well. Before you publish the changes please upversion the `version` key to the next integer.

```json
[
  {
    "FormID": "elem_mon_v1",
    "FormName": "Elementary Monitor Visit"
  },
  {
    "FormID": "sat_v2",
    "FormName": "SAT Visit"
  },
  {
    "FormID": "sec_mon_v1",
    "FormName": "Secondary Monitor Visit"
  },
  {
    "FormID": "sec_ssa_v1",
    "FormName": "Secondary SSA Visit"
  },
  {
    "FormID": "elem_ssa_v1",
    "FormName": "Elementary SSA Visit"
  },
  {
    "FormID": "build_SchoolPerformance_1574326800",
    "FormName": "Sampark Program Monitor Visit"
  }
]
```

### 2.4 Setting up backend connectors and servers.

All this can be done using the `docker-compose.yml` file which can be found [here](https://github.com/Samagra-Development/Samiksha-backend). What it essentially does is installs the following things. _[Note: You are free to change the docker file here to increase the capacity of the servers or choose a different deployment strategy depending on the scale.]_

- Setting up production PSQL database
- Setting up production Redis cache
- Setting up the Memcached server
- [Setting up the OTP server](https://github.com/Samagra-Development/MS-OTP)
- Setting up the relay server

## 3. Setting up the Mobile App

### 3.1 Adding the form management module and configuring forms

This module will allow us to download and show the forms configured in the Firebase above.

- [Setting form list button](/docs/FormManagementModule)
- [Setting up the submission screen](/docs/FormManagementModule)

### 3.2 Setting up the student list download module

Downloads the list of students for a particular school. Please use th following [doc]() to set this up.

### 3.3 Setting up the cascading dropdown module

This will allow the app to render the cascading dropdown and fill the details automatically to the form.

- [Adding the gzip file]() of locations to raw files directory
- [Linking]() the gzip file to cascading dropdown module

### 3.4 Setting up autofill

If you have already setup the forms similar to the step 2.4 above, this should be automatically be happening.

### 3.5 Adding the login screen

- [Setting up login screen]()
- [Connecting FusionAuth to the server]()

### 3.6 Setting up profile screen

- [Setting up the backend server]()
- Testing the OTP and reset password.

### 3.7 Setting up the about us screen

The about us screen is a part of the ancillaryscreens module. Please see this [doc]() to get started.

## 4. Need Help

Some of the packages will be added in the coming weeks. Please contact us if you need urgent support in deploying this.
