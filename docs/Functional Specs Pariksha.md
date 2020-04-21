---
id: ParikshaFuncSpecs
title: Pariksha - Functional Specifications
sidebar_label: Pariksha
---

![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)

## 1. Introduction

Student assessments in government schools are primarily conducted using pen and paper, wherein students are expected to read questions from a paper and write their answers. Teachers are then expected to mark these answers and update the student register with the marks of the students. From the school register to the state level the data may travel through different modes of transport. The objective of this Pariksha product is to enable teachers to capture the detailed or summary results of the student assessments in a simple user friendly manner, in low or no connectivity networks with older android devices as well.

The objective of Pariksha is to transform the use of student assessment data to inform State Education Department strategies. Pariksha is designed for this specific governance use case and is built on OpenSource in a modular, reusable and scalable manner. The application design is created with the assumption that the engineering team of the State National Informatics Centre or from a private technology firm working with the State Education Departments will be able to deploy and maintain this product with the documentation provided.

Through Pariksha the State Education Department can have a mobile application with configurable student assessments. This application can be used by the government school teachers to update student assessment data. Management of users of this application, configuration of forms, visualization of the data collected and tracking of the application performance can all be managed within this application by non-technical functional owners within the State Education Department.

## 2. Pariksha Overview

### 2.1 Governance Use Cases

The Pariksha product can be used for managing the following activities of the State Education Department:

1. Record student wise grades for different subjects across different assessments
2. Record class wise aggregate marks for different subjects across different assessments
3. Edit any previous student or class wise grades
4. View past assessments of students and classes
5. Real time tracking of student assessment data update by teachers
6. Monitor student assessments trends

### 2.2 Usage Status Across India

Pariksha is being used by the State Education Departments Himachal Pradesh. Interestingly, the State Education Department of Himachal Pradesh has integrated the Pariksha features and Samwad features to have a single application that can collect student assessment results and also send SMS to parents.

![](https://media.giphy.com/media/ZXkrpTYTDImobjnHTA/giphy.gif)

Total usage of the Pariksha product as on 12 April 2020 is summarized below:

1. Total active users >20,400
2. Total visit data submissions > 1,25,000

*Note: This usage is similar to the usage of the [Samwad](https://samagra-development.github.io/docs/docs/SamwadFuncSpecs) application as the functionality of this product has been integrated into the [Samwad](https://samagra-development.github.io/docs/docs/SamwadFuncSpecs)  application for a particular state*

### 2.3 Key Benefits

We have observed the following key benefits that the states using Pariksha have experienced.

**_2.3.1 Reduction in time spent by department officials_**

With the Pariksha application school leaders do not need to spend time to have the assessment data compiled, digitized, reviewed and the aggregated. Typically a process 

**_2.3.2 Reduction in usage of paper and money spent_**

With Pariksha, significant expenditure printing paper for recording the student assessments or class wise summary of assessment results and also for conducting data entry through data entry operators is avoided. 

**_2.3.3 Higher probability of accurate information_**

With the data entry for student assessment data being conducted at source by the teachers responsible for the assessments the accuracy of the assessment data increases. If there are any concerns the same can be immediately addressed by the concerned teachers.

**_2.3.4 Ability to monitor data filled and drive timely compliance _**

With student assessment data entry on Pariksha, the status of the assessment data uploada are available real-time for the state education department officials to understand the progress of the data entry exercise.

### 2.4 Typical Existing Alternatives

There are existing alternative processes that can be used for conducting these monitoring visits. These have been summarized below:

**_2.4.1 Decentralized School Level Data Entry Managed By School Staff_**

Data entry is often conducted by the teachers at the school level by entering data into a web portal through a computer available at the school premises. The key challenge of this process is the ability of different teachers to allocate time to access the computer within the school premises at a reasonable hour and without disrupting regular classes. Often, when teachers are not comfortable to use the computer, they allocate a teacher or hire a local data entry operator to conduct this data entry exericse. This leads to delay and decrease in the quality of the data updated.

**_2.4.2 Data Entry By Private Data Entry Operators_**

Data entry operators are often hired locally by the State Education Department at the block or district levels to enter the student assessment data. The key challenge of this process, in addition to the cost involved, is to manage the entry of all the student assessment data within the planned timelines. This process often gets delayed and thereby limits the usage of this information during department reviews.

**_2.4.3 OMR Based Data Collection_**

Some State Education Departments have also been using the OMR based data collection method to update the assessment data. This OMR data is updated by the school teachers and is then scanned at district, zonal or state level based on the availability of the OMR scanning machines. This method involves extensive logistics as these OMR sheets are designed, printed, updated, collected, transported, scanned and then used for verification before finally being archived. In addition to the logistics there is substantial expenditure on conducting this OMR based assessment data collection exercise.

### 2.5 Core Features

**_2.5.1 For State Education Department Teachers_**

- Record student wise grades for different subjects across different assessments
- Record class wise aggregate marks for different subjects across different assessments
- Edit any previous student or class wise grades
- View past assessments of students and classes
- Manage student addressbook (with basic details of the students)
- Ability to update their own profile information

**_2.5.2 For State Department Reviewers_**

- Ability to view, in real time, status of student assessment data entry
- Ability to view, in real time, complete details or summarized views of the student assessments
- Ability to view, in real time, details of the student addressbook

**_2.5.3 For Process Administrators_**

- Ability to create and manage student assessments
- Ability to create and manage student profile variables
- Ability to create and manage school teacher profiles
- Ability to create visualizations of the visit submissions
- Ability to view application performance statistics

### 2.6 Technical Architecture

Pariksha is wired together using the _[Mobile Application Component](www.google.com), [App Metadata Management Component](www.google.com), [Database Management Component](www.google.com), [Data Analytics Component](www.google.com) & [Application Logging Component](www.google.com)_. The following diagram illustrates the technical architecture of the Pariksha product.

![alt-text](../img/parikshaarchitecture.png)


## 3. High Level Specifications

### 3.1 Configurable Assessments

![](https://media.giphy.com/media/VHq4YVYLuBNXM9ReDX/giphy.gif)

**_3.1.1 Design Assessments_**

Configure assessments to capture student wise grades or class wise learning outcome performance data. This structure provides the flexibility for state education departments to capture only the information that is required at a state level. For assessments designed by the state, question level data can be configured.

**_3.1.2 Manage Submission Timelines_**

Administrator of the application can define the deadline for the assessment collection exercise. This date and time is visible to all the users and the assessment editing facility is automatically locked once the deadline elapses.

**_3.1.3 Offline Enabled_**

All the assessment data collection can be done offline. The data collection by teachers is expected to be completed over multiple sittings and therefore the teachers can add the data even if they are offline. Once the users come online the data will be logically synced online.

**_3.1.4 Bilingual_**

All the information on the application can be viewed by the teacher in multiple languages based on the preference of the state education department. The user can change the language whenever required.


### 3.2 Configurable Mobile Application

![](https://media.giphy.com/media/H1SXR8BXc5cj6XFsxZ/giphy.gif)

**_3.2.1 Whitelabel UI_**

Whitelabel the mobile application by adding the theme colors, splash screens, login screens, logos, about us information based on your department branding.

**_3.2.2 Add / Remove Pages_**

Add custom pages within the application to share information with the users about the purpose of the application, tutorial videos, helpline numbers, and instructions.

**_3.2.3 Jurisdiction Data_**

Update jurisdiction data consisting of districts, blocks, cluster, GPs, schools and more live from the backend. If a new school, GP or cluster is added it can be made live immediately.

**_3.2.4 Notifications_**

Define and serve in-app trigger based notifications to users to guide them through the user flow of updating and viewing all, current and historic, assessments data.

_A configurable mobile application can be setup by deploying the Pariksha application. Refer to this [Section](www.google.com) to deploy the application yourself. Once the applicaton is installed you can further read about how to customize [Ancillary Screens](www.google.com), update [Jurisdiction Data](www.google.com) and setup [Notifications](www.google.com)._

### 3.3 Student Management & User Authentication

_admin console images to be added as GIFs_

**_3.3.1 Student Management_**

Student details can be added by the teachers. These details can be configured based on the requirements of the state education department such as student name, admission number, parent contact number, gender, category and so on.

**_3.3.2 Historic Student Assessment Data_**

Student assessment data is managed in such a manner that for any student who may migrate or leave a school in the middle of the year, the assessment data is always stored. If the student moves to another govt school in the state then the teachers can view the past assessment data of student, if required as well

**_3.3.3 User Management_**

Create and manage users through a pre-designed admin panel. Allow users to view or edit specific variables of their profile information through the mobile application itself. Often latest contact numbers for all teachers are not available and though this application teachers can update that information.

**_3.3.4 OTP Based Password Reset_**

Users can reset their passwords though an SMS based password reset functionality. If user credentials are created for a block office then if a BEO is transferred the new BEO can update his/her details and continue using the application seamlessly.


### 3.4 Visualize Assessment Information

![](https://media.giphy.com/media/Wp0eqM753Js4OtcW6U/giphy.gif)

**_3.4.1 Easy to Configure Graphs_**

Create visualizations with a few clicks using Metabase, a configurable visualization tool with detailed documentation

**_3.4.2 Filtered Views_**

Add filters to graphs to show data grouped by any variable in your dataset. Typically used for grouping data by class, school, cluster, block, district, or academic year.

**_3.4.3 Add Images & Logos_**

Insert government state education department logos and local on-ground images across dashboards to make them look consistent to the state department branding.

**_3.4.4 Generate PDF Views_**

Configure PDFs for dashboard views to enable users to download and print different views of the dashboard. This is typically used by block officers to put up monthly dashboard based report on notice boards in their offices or by teachers in schools.

### 3.5 Monitor Application Performance

![](https://media.giphy.com/media/ehU21iWSH540I7clAl/giphy.gif)

**_3.5.1 Track User Engagement_**

Track user engagement at a per minute, per 30 minutes, per 24 hours to understand peak engagement period of the application

**_3.5.2 Track Crash Events_**

Track any crash events with a detailed log of the user activity to debug any issue that the user is facing on the ground

**_3.5.3 Setup Monitoring Alerts_**

Setup email alerts for different monitoring objectives such as new type of crash event observed, CPU usage >75%, disk space >80% and more

**_3.5.4 Visualize Monitoring Data_**

Visualize all application events to understand trends of usage behaviour of your application through a single view

## 4. For Administrators (How-To-Configure Guides)

### 4.1 Manage Application Metadata

**_4.1.1 User Management_**

In Pariksha, there is an admin console that can be enabled to allows administrators of the application at the state or district level to manage user authentication for the application. The typical feature set that is enabled through this admin console has been listed below.

- Addition of users
- View user information
- Edit details of existing users
- Delete users
- Reset password of existing users

The entire admin console is configurable. You can select what you want to see, how you want to see it (graph, table etc) and what you want to edit.

**_4.1.2 Metadata Management_**

In addition you can also update **_metadata_** of the application in this console. This application metadata would typically include the following details.

- School Details (School Name, UDISE, Type of School, Total Enrolment, GPS Coordinates etc)
- Administrative Location Mapping (District, Block, Cluster, GP etc)
- Monitor Designation Wise Visit Targets

**_4.1.3 User Designation to Form Mapping_**

By managing the configuration of the access control for forms you can give different users access to different set of forms. The following steps will enable users to define the DESIGNATION to ROLE mapping and ROLE to FORM mapping.

- Define roles (according to different combination of designations for which forms are to be made visible)
- Update the roles to form mapping (in the Role Based Form Access section in the admin console)
- View updated forms based on the role mapping

**_4.1.4 Configure Assessments_**

to be added

### 4.3 Create Visualizations of Submission Data

All the data collected through the Pariksha application can be linked to Metabase to analyse data in the form of dashboards. [Metabase](https://metabase.com) is an Open Source tool for data visualization. It can be used to display any data in different formats like bar graphs, pie charts, tables etc. 

Metabase dashboards are simple to use and highly configurable. You can view this [Metabase documentation](https://www.metabase.com/docs/latest/users-guide/start.html) for how to setup basic graphs. A few key sections from this page that we typically refer to while building Metabase dashboards are listed below.

![](https://media.giphy.com/media/WOla6gFeitQoNM0eI1/giphy.gif)

- [Overview of Metabase](https://www.metabase.com/docs/latest/users-guide/01-what-is-metabase.html)
- [Basics of Databases](https://www.metabase.com/docs/latest/users-guide/02-database-basics.html)
- [Basic Exploration in Metabase](https://www.metabase.com/docs/latest/users-guide/03-basic-exploration.html)
- [Asking questions in Metabase](https://www.metabase.com/docs/latest/users-guide/04-asking-questions.html)
- [Asking custom questions in Metabase](https://www.metabase.com/docs/latest/users-guide/start.html)
- [Using Metabase Visualizations](https://www.metabase.com/docs/latest/users-guide/05-visualizing-results.html)
- [Sharing and organizing your saved questions](https://www.metabase.com/docs/latest/users-guide/06-sharing-answers.html)
- [Creating dashboards](https://www.metabase.com/docs/latest/users-guide/07-dashboards.html)
- [Adding filters to dashboards](https://www.metabase.com/docs/latest/users-guide/08-dashboard-filters.html)

To view existing Metabase dashboards being used by different State Education Departments using Pariksha are available below:

- [Saksham SAT Dashboards](https://sites.google.com/samagragovernance.in/sakshamhry/elementary/sat-student-assessment-tests?authuser=0), Haryana
- [Samarth Assessment Dashboards](https://hp-samarth.herokuapp.com), Himachal Pradesh

## 5. Frequently Asked Questions

To be added based on comments recieved
