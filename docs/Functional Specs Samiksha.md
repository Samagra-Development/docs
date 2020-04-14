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

**Survey:** the three mandatory columns under this sheet are type, name and label
**Choices:** the three mandatory columns under this sheet are list name, name and label
**Settings:** the two mandatory columns under this sheet are form_title and form_id

Some important rules:
- The name of every sheet and column should be in lower case
- Name of the excel file cannot start with a number
- The name of the excel file cannot contain spaces

**Basic structure of the survey sheet**

This is the sheet which will contain most of the content of the form such as the questions, the question type, the appearance of the questions, the constraints etc.

**Type column:** enter the question type in this column
**Name column:** give a unique name to each question, use lower case only and _ (underscore) as a separator
**Label column:** enter your question in this column

Some additional useful columns are as follows:
**Hint:** Enter instructions related to the question in this column
**Required:** If the question is mandatory, enter "yes" in this column
**Appearance:** commands related to appearance of the question appear in this column

**Basic structure of the choices sheet** 

This sheet contains the choices of multiple choice questions

**List name:** Enter each of the list names that was created in the “survey” sheet
**Name:** Give a unique name to each of your choices in the list
**Label:** Enter each choice that will be visible to the user in this column

**Basic Structure of the settings sheet:**

This sheet has variables that allow users to define the name of the form that will be shown to mobile application users

**Form_title:** Enter the title of the form that will be displayed to the user
**Form_id:** Specifies the table name

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

*Note - Forms with the same Form ID can only be uploaded if there no addition or deletion of questions*

***4.1.5 Manage existing forms***

- Form data can be viewed in the Submissions tab by filtering on the desired form
- All the form submission can be downloaded in a csv using the EXPORT function
- Entries in the submission data can be deleted by clicking on the cross button added on each row of the submission data
- You can view documentation about what more you can do on Aggregate [here](https://docs.opendatakit.org/aggregate-forms/)
- By removing a form from the Form Management page all submission data for that form will be DELETED
- As a thumb rule DO NOT DELETE any form from the Form Management page

***4.1.5 Updating existing form***

Certain changes which don't involve adding or removing a question can be made without needing to replace the existing forms. The kind of changes are:

- Changing the text or translation of a label
- Changing validations, calculations, relevants
- Changing options for a select_one or select_multiple
- Changing the order of questions
- Adding translations
- Updating media including CSVs for your form

Please view the [documentation](https://docs.opendatakit.org/form-update/) for updating existing forms as this will have an implication on how the database for this form is managed. 

### 4.2 Manage Application Users


Bulk addition of users (bulk add will require the CSV file to be in a specific format)
Addition of single users (using the bulk addition method)
Bulk delete users (maximum users that can be deleted at one time is 500 users - based on the total number of users that can be viewed on a single admin panel view)
Single delete users
Password reset feature to reset the password of the users
View user information
The list of all users of the application will be available on the dashboard
Any columns that you wish for the user details can be displayed in any form. (This is fully customizable)
The sort will not work on nested fields like block, cluster, and district for now. The alternative is to use a search for selecting a particular district. (Since these are not getting indexed at Fusionauth’s end, we have no choice to build our own over top of it or modify Fusionauth if there really is a need for such a feature)
Edit user details
Certain columns will have a pre-fill while editing users such as district, block, school, the role of the user
Currently, there is a bug in the edit panel. You might have to select the district which the user already has to render the block and cluster. We will be fixing this soon.
All the data that is there on the cascaded dropdown comes from a UDISE list. With certain values like Block-level Officers' Visit added to the clusters and Cluster-level Officers' Visit added to the blocks for all users. If you find any of the combinations missing, please add a Gitlab issue.
This is a lazy save. So users will get saved after a delay of 5 seconds. On a successful save, you get feedback. If the feedback is negative for 2 continuous submissions please let us know.
Search users
Searches use wildcards
It will search as you type
There is no fuzzy/partial search with wrong spellings
All filters/searches are in combination with the other ones
Update base data of the application
UDISE/block/district mapping
Ability to have cascading dropdowns when editing user details.

Note before using the admin panel
Before using the admin panel always click on the refresh button on the top right corner. This is required to ensure that you have the latest user data. The refresh button only refreshes user data and not the webpage.

Features planned for version 2
Update base data of the application
Compliance target data (to be updated in the next version)
UDISE table to be editable similar to the User table shown.
The functions outside the admin panel will be brought within this admin panel
Creation of roles (currently available through FusionAuth panel)
Role to form mapping (currently available through Firebase panel)
Update form version on mobile device (currently available through Firebase panel)


### 4.3 Update User Designation to Form Mapping



### 4.4 Create Visualizations of Submission Data

The data collected on the application can be linked to Metabase to analyse data in the form of dashboards. In case there are datasets that are required to create the dashboards, but are not collected directly via the application for e.g, UDISE mapping, User database, etc, then, it can be linked separately to Metabase using google cron. 

Following steps to be followed to add data to Metabase-

In case, data is collected through the ODK application: <we can screenshots for every steps>
Go to settings > admin 
Got to databases  and then select “Add Database”
Add the details of the database and save
	
The tables in the database can now be accessed and dashboards can be created

In case, data is not collected through the ODK application, but is required to create some visualizations in the dashboard:
Add the database by following the same steps as described in case 1
Copy data to added to the database on a google sheet
Get the link to this data range
Add the range on this sheet <we need to link the automation sheet here>
The data will be added to the database in an hour <not sure of the time taken>


### 4.5 View Application Performance Data

Application performance

## 5. Frequently Asked Questions

To be added based on comments recieved
