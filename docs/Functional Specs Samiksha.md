---
id: SamikshaFuncSpecs
title: Functional Specifications - Samiksha
sidebar_label: Functional Specifications (Samiksha)
---

## 1. Introduction

State Education Departments across India have been driving reforms in school monitoring processes. Over the years, the different State Education Departments have introduced technology to collect data from school visits and to visualize this data on real-time dashboards for conducting effective department reviews. The focus of these reforms has been to improve the quality of data collection exercises conducted by different levels of officials within the department and to enable precise decision making at the state level.

The objective of Samiksha is to transform school monitoring by providing an application with a highly configurable set of features for data collection and visualization. Samiksha is designed for this specific governance use case and is built on OpenSource in a modular, reusable and scalable manner. The application design is created with the assumption that the engineering team of the State National Informatics Centre or from a private technology firm working with the State Education Departments will be able to deploy and maintain this product with the documentation provided.

Through Samiksha the State Education Department can have a mobile application with configurable monitoring and mentoring forms. This application can be used by the department officials while conducting school visits. Management of users of this application, configuration of forms, visualization of the data collected and tracking of the application performance can all be managed within this application by non-technical functional owners within the State Education Department. 

## 2. Samiksha Overview

### 2.1 Governance Use Cases

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

### 2.2 Usage Status Across India

Samiksha is being used by the State Education Departments of the following states:

1. Himachal Pradesh
2. Haryana

Total usage of the Samiksha product as on 12 April 2020 is summarized below:

1. Total active users >35,000
2. Total visit data submissions > 1,10,000 

### 2.3 Key Benefits

We have observed the following key benefits that the states using Samiksha have experienced.

***2.3.1 Improved compliance***

Compliance of school visits has increased significantly with structured processes for data collection, reporting and reviews.

***2.3.2 Structured reviews***

Problem solving and decision making in reviews conducted at a state, district and block levels have been increasingly supported by the timely and structured data collected through these monitoring and mentoring visits.

***2.3.3 Increased monitoring coverage***

In Haryana mentoring and monitoring exercises were limited to primary schools and after continued use of Samiksha for primary school monitoring, the State Education Department expanded these visits for secondary schools as well.

***2.3.4 Improved teacher feedback quality***

With consistent feedback being provided by mentors through the class observation visits teachers have been able to receive timely and regular feedback from mentors.

### 2.4 Alternatives

There are existing alternative processes that can be used for conducting these monitoring visits. These have been summarized below:

***2.4.1 Pen & Paper based data collection***

Pros cons to be added

***2.4.2 OMR based data collection***

Pros cons to be added
  
### 2.5 Core Features

***2.5.1 For State Department Monitoring & Mentoring Staff***

- Ability to view forms based on their designation
- Ability to fill and submit school visit forms
- Ability to view past school visit submission data
- Ability to update profile information

***2.5.2 For State Department Reviewers***

- Ability to view, in real time, complete details of the school visit submissions
- Ability to view, in real time, summarized views of the school visit submissions
- Ability to download dashboard views as PDFs

***2.5.3 For Process Administrators***

- Ability to create and manage school visit forms
- Ability to create and manage user profiles
- Ability to update designation to form mapping (for designation based access to forms)
- Ability to create visualizations of the visit submissions
- Ability to view application performane statistics

### 2.6 Technical Architecture

Technical architecture diagram to be added (ongoing)

## 3. High Level Specifications

### 3.1 Configurable Data Collection Forms

***3.1.1 Simple Configuration Interface***

Configure highly complex data collection forms in a few minutes though a simple Google Form like interface or by using an excel sheet. The forms have an extensive set of capabilities to enable different types of data points to be collected.

***3.1.2 Geo Location Capture***

Add custom pages within the application to share information with the users about the purpose of the application, tutorial videos, helpline numbers, and instructions 

***3.1.3 Offline Enabled***

Update jurisdiction data consisting of districts, blocks, cluster, GPs, schools and more live from the backend. If a new school, GP or cluster is added it can be made live immediately 

***3.1.4 Bilingual Forms***

Define and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activity

### 3.2 Configurable Mobile Application	

***3.2.1 Whitelabel UI***

Whitelabel the mobile application by adding the theme colors, splash screens, login screens, logos, about us information based on your department branding.

***3.2.2 Add / Remove Pages***

Add custom pages within the application to share information with the users about the purpose of the application, tutorial videos, helpline numbers, and instructions.

***3.2.3 Jurisdiction Datav***

Update	Update jurisdiction data consisting of districts, blocks, cluster, GPs, schools and more live from the backend. If a new school, GP or cluster is added it can be made live immediately.

***3.2.4 Notifications***

Define and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activityDefine and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activity.

### 3.3 User Authentication & Management	

***3.3.1 User Mangement***

Create and manage users through a pre-designed admin panel and add variables for each user such as role (Teacher, BEO, DEO, Mentors), jurisdiction (District, Block, School)

***3.3.2 Role Based Form Access***

Enable or disable access to data collection forms on the application based on the role of the application users

***3.3.3 View Profile Details (in App)***

Allow users to view or edit specific variables of their profile information through the mobile application itself 

***3.3.4 OTP Based Password Reset***

Users can reset their passwords though an SMS based password reset functionality in the application 

### 3.4 Visualize Form Information	

***3.4.1 Easy to Configure Graphs***

Create visualizations with a few clicks using Metabase, a configurable visualization tool with detailed documentation

***3.4.2 Filtered Views***

Add filters to graphs to show data grouped by any variable in your dataset. Typically used for grouping by school, cluster, block, district, academic year.

***3.4.3 Add Images & Logos***

Insert government state education department logos and local on-ground images across dashboards to make them look consistent to the state department branding.

***3.4.4 Generate PDF Views***

Configure PDFs for dashboard views to enable users to download and print different views of the dashboard. This is typically used by block officers to put up monthly dashboard based report on notice boards in their offices or by teachers in schools.

### 3.5 Monitor Application Performance

***3.5.1 Track User Engagement***

Track user engagement at a per minute, per 30 minutes, per 24 hours to understand peak engagement period of the application

***3.5.2 Track Crash Events***

Track any crash events with a detailed log of the user activity to debug any issue that the user is facing on the ground

***3.5.3 Setup Monitoring Alerts***

Setup email alerts for different monitoring objectives such as new type of crash event observed, CPU usage >75%, disk space >80% and more

***3.5.4 Visualize Monitoring Data***

Visualize all application events to understand trends of usage behaviour of your application through a single view

## 4. For Administrators

### 4.1 Configure School Visit Forms

Samiksha forms are configured using [Open Data Kit](https://opendatakit.org). The Open Data Kit software is an open source software that allows for collecting, managing, and using data in resource-constrained environments. It allows for the collection of data offline and submission of the data when internet connectivity is available. It allows users to aggregate data with full control over the collected data and the servers where this data is stored.

A summary of the steps to create a data collection form using ODK has been provided below. 

***4.1.1 Create a form using ODK Build***

To start, you can create a form using  ODK Build. ODK Build is a form designer with a drag-and-drop user interface that has been provided by ODK. View the documentation of how to use ODK Build to create a form [here](https://docs.opendatakit.org/build-intro/).

***4.1.2 Alternatively, create an ODK XLS form***

In case you plan to create a data collection form which has multiple logics, expressions, validations and so on, then we would recommend you use the ODK XLS Form method to create this form. XLSForm is a form standard created to help simplify the authoring of forms in Excel. To get an overview of XLS Forms view the documentation [here](https://docs.opendatakit.org/xlsform/).

There are 3 mandatory sheets that need to be created in every excel form and each sheet as certain mandatory columns that need to be created within each sheet. The three mandatory sheets along with mandatory columns are as follows:

- *Survey:* three mandatory columns under this sheet are type, name and label.
- *Choices:* three mandatory columns under this sheet are list name, name and label.
- *Settings:* two mandatory columns under this sheet are form_title and form_id.

*Some important rules:*
- The name of every sheet and column should be in lower case
- Name of the excel file cannot start with a number
- The name of the excel file cannot contain spaces

**Basic structure of the survey sheet**

This is the sheet which will contain most of the content of the form such as the questions, the question type, the appearance of the questions, the constraints etc.

- *Type column:* enter the question type in this column.
- *Name column:* give a unique name to each question, use lower case only and _ (underscore) as a separator.
- *Label column:* enter your question in this column.

Some additional useful columns are as follows:
- *Hint:* Enter instructions related to the question in this column.
- *Required:* If the question is mandatory, enter "yes" in this column.
- *Appearance:* commands related to appearance of the question appear in this column.

**Basic structure of the choices sheet** 

This sheet contains the choices of multiple choice questions

- *List name:* Enter each of the list names that was created in the “survey” sheet.
- *Name:* Give a unique name to each of your choices in the list.
- *Label:* Enter each choice that will be visible to the user in this column.

**Basic Structure of the settings sheet:**

This sheet has variables that allow users to define the name of the form that will be shown to mobile application users

- *Form_title:* Enter the title of the form that will be displayed to the user.
- *Form_id:* Specifies the table name.

While creating an XLS there are several types of functions that you can enable in the data collection ranging from defining question types, setting up a form logics, defining form styling, and creating form operators. We have listed some of the commonly used features for each of these. 

*Question Types*

ODK has a wide variety of [question types](https://docs.opendatakit.org/form-question-types/) of which we have observed that the following question widgets are used extensively in Samiksha by the State Education Departments, which have been currently using this.

- [Text widgets](https://docs.opendatakit.org/form-question-types/#text-widgetsv)
- [Number widgets](https://docs.opendatakit.org/form-question-types/#number-widgets)
- [Date and time widgets](https://docs.opendatakit.org/form-question-types/#date-and-time-widgets)
- [Select widgets](https://docs.opendatakit.org/form-question-types/#select-widgets)
- [Location widgets](https://docs.opendatakit.org/form-question-types/#location-widgets)
- [Image widgets](https://docs.opendatakit.org/form-question-types/#image-widgets)
- [Note widget](https://docs.opendatakit.org/form-question-types/#note-widget)
- [Hidden questions](https://docs.opendatakit.org/form-question-types/#hidden-questions)
- [Grouping multiple widgets on same screen](https://docs.opendatakit.org/form-question-types/#grouping-multiple-widgets-on-the-same-screen)

*Form Logics*

ODK offers a mechanism of enabling dynamic behaviour in the data collection forms. The commonly used form logics that we have observed are indicated below.

- [Form logic building blocks](https://docs.opendatakit.org/form-logic/#form-logic-building-blocks)
- [Requiring responses](https://docs.opendatakit.org/form-logic/#requiring-responses)
- [Setting default responses](https://docs.opendatakit.org/form-logic/#setting-default-responses)
- [Validating and restricting responses](https://docs.opendatakit.org/form-logic/#validating-and-restricting-responses)
- [Conditionally showing questions](https://docs.opendatakit.org/form-logic/#conditionally-showing-questions)
- [Groups of questions](https://docs.opendatakit.org/form-logic/#groups-of-questions)

*Form Styling*

Form styling can be used to add media to the questions to change the fonts and colors of the questions in the data collection forms. This is a great way to add some color and make the data collection form UI more engaging for the end user. Read more about all the interesting updates that you can do the form styling [here](https://docs.opendatakit.org/form-styling/#markdown-in-forms)

You can also add Emojis to questions!

*Form Operators & Functions*

Form operators and functions allow users to setup calculations, constraints and validations for questions in the data collection forms. For example if you want to create questions based on the type of school then you can apply a 'Relevant' function that allows the monitor to view different questions based on the type of school (Primary, Secondary) the monitor is monitoring. 

Form Operators are also important as they allow you to set up validations in the forms.

View the details of the different form operators [here](https://docs.opendatakit.org/form-operators-functions/#math-operators).

***4.1.3 Convert this XLS Form to XML***

Once the excel sheet is created and finalized convert it to XML using the [XLS to XML converter](https://opendatakit.org/xlsform/).

***4.1.4 Upload the XML to the ODK Aggregate server***

Once the XML is generated then you are ready to upload the form to your ODK Aggregate Server. Follow these steps mentioned below to update the form and view it in your mobile application:

- Sign with your designated credentials
- Add New Form through the Form Management Section

*Note: Forms with the same Form ID can only be uploaded if there no addition or deletion of questions*

***4.1.5 Manage existing forms***

- Form data can be viewed in the Submissions tab by filtering on the desired form
- All the form submission can be downloaded in a csv using the EXPORT function
- Entries in the submission data can be deleted by clicking on the cross button added on each row of the submission data
- You can view documentation about what more you can do on Aggregate [here](https://docs.opendatakit.org/aggregate-forms/)
- By removing a form from the Form Management page all submission data for that form will be DELETED
- As a thumb rule DO NOT DELETE any form from the Form Management page

***4.1.6 Updating existing form***

Certain changes which don't involve adding or removing a question can be made without needing to replace the existing forms. The kind of changes are:

- Changing the text or translation of a label
- Changing validations, calculations, relevants
- Changing options for a select_one or select_multiple
- Changing the order of questions
- Adding translations
- Updating media including CSVs for your form

Please view the [documentation](https://docs.opendatakit.org/form-update/) for updating existing forms as this will have an implication on how the database for this form is managed. 

### 4.2 Manage Application Metadata

***4.2.1 User Management***

In Samiksha, there is an admin console that can be enabled to allows administrators of the application at the state or district level to manage user authentication for the application. The typical feature set that is enabled through this admin console has been listed below.

- Addition of users
- View user information
- Edit details of existing users
- Delete users
- Reset password of existing users

The entire admin console is configurable. You can select what you want to see, how you want to see it (graph, table etc) and what you want to edit. 

***4.2.1 Metadata Management***

In addition you can also update ***metadata*** of the application in this console. This application metadata would typically include the following details.

- School Details (School Name, UDISE, Type of School, Total Enrolment, GPS Coordinates etc)
- Administrative Location Mapping (District, Block, Cluster, GP etc)
- Monitor Designation Wise Visit Targets

***4.2.3 User Designation to Form Mapping***

By managing the configuration of the access control for forms you can give different users access to different set of forms. The following steps will enable users to define the DESIGNATION to ROLE mapping and ROLE to FORM mapping. 

- Define roles (according to different combination of designations for which forms are to be made visible)
- Update the roles to form mapping (in the Role Based Form Access section in the admin console)
- View updated forms based on the role mapping

### 4.3 Create Visualizations of Submission Data

All the data collected through the Samiksha application can be linked to Metabase to analyse data in the form of dashboards. [Metabase](https://metabase.com) is an Open Source tool for data visualization. It can be used to display any data in different formats like bar graphs, pie charts, tables etc. All dashboards in the Samarth program (Assessment dashboard, School Visit Dashboard, Pre-board dashboard) have all been created on Metabase.

Metabase dahsboards are simple to use and highly configurable. You can view this [Metabase documentation](https://www.metabase.com/docs/latest/users-guide/start.html) for how to setup basic graphs. A few key sections from this page that we typically refer to while building Metabase dashboards are listed below. 

- [Overview of Metabase](https://www.metabase.com/docs/latest/users-guide/01-what-is-metabase.html)
- [Basics of Databases](https://www.metabase.com/docs/latest/users-guide/02-database-basics.html)
- [Basic Exploration in Metabase](https://www.metabase.com/docs/latest/users-guide/03-basic-exploration.html)
- [Asking questions in Metabase](https://www.metabase.com/docs/latest/users-guide/04-asking-questions.html)
- [Asking custom questions in Metabase](https://www.metabase.com/docs/latest/users-guide/start.html)
- [Using Metabase Visualizations](https://www.metabase.com/docs/latest/users-guide/05-visualizing-results.html
- [Sharing and organizing your saved questions](https://www.metabase.com/docs/latest/users-guide/06-sharing-answers.html)
- [Creating dashboards](https://www.metabase.com/docs/latest/users-guide/07-dashboards.html)
- [Adding filters to dashboards](https://www.metabase.com/docs/latest/users-guide/08-dashboard-filters.html)

To view existing Metabase dashboards being used by different State Education Departments using Samiksha are available below:

- [Saksham SAT Dashboards](https://sites.google.com/samagragovernance.in/sakshamhry/elementary/sat-student-assessment-tests?authuser=0), Haryana
- [Samarth Assessment Dashboards](https://hp-samarth.herokuapp.com), Himachal Pradesh

### 4.5 View Application Performance Data

Application performance

## 5. Frequently Asked Questions

To be added based on comments recieved
