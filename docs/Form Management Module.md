---
id: FormManagementModule
title: Form Management Module
sidebar_label: Form Management Module
---

## 1. Overview

**1.1  Download Data Collection Forms**

This involves downloading the ODK Forms to be rendered to the user. This may depend on the User’s role and the level of access, varying from user to user. It also includes a basic level of configurations needed to get the ODK Collect Module to be preset.

**1.2  Render & Manage Data Collection Forms**

This involves the ability to pre-fill certain forms, based on some parameters if needed. User can fill, send forms via this functionality. If forms are filled when offline, you can also send those forms later.

![](https://media.giphy.com/media/RlwAosXmZR77K8aKtC/giphy.gif)

## 2. Setup Module In Starter App

**Note**: Please note that,before you start integrating the module into your project, please do get a run thorugh the demo project downloaded from the github repository, to understand the user flow.

This section lists down all the possible configuration related steps to integrate ODK, the core opensource library being used for data collection, into your starter application.

### 2.1 Retrieve ODK Code

2.1.1  Setup Github project

Unzip the github project to a folder. You can find the github repository at this [link](https://github.com/Samagra-Development/mobile-forms). Download it as zip locally and then unzip the root directory.

2.1.2  Integrating with Main App Project

Open the main project on Android Studio where you are to integrate these modules. 

2.1.3 Adding commons/customworkmanager modules

If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the samagra-form-management later, using the following steps.

2.1.4  Adding samagra-form-management module (Applicable for any android module, including commons and customworkmanager, if you want to import)

Note: This is applicable for any android module, you want to import.

1. Import the library module to your project (the library source becomes part of your project). Click File > New > Import Module
2. Select the source directory of the Module you want to import and click Finish. The library module is copied to your project, so you can actually edit the library code.
3. Open the Dependencies tab.
4. Click the (+) icon and select Module Dependency. Select the module and click Ok.
5. Open your build.gradle file and check that the module is now listed under dependencies.
7. Sync your gradle. Clean your project.

*In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.*

2.1.5  Integrating other required modules.

Please follow the same steps for the integration of samagra-form-management. Please checkout this [link](https://developer.android.com/studio/projects/android-library#AddDependency) to see a more ealborate process of including libraries to your android project.

2.1.6  Syncing Gradle and Building Project.

Open the app module's build.gradle file and add a new line to the dependencies block as shown in the following snippet:
```java
dependencies {
    implementation project(":samagra-form-management")
}
```
2.1.7  Modifying settings.gradle

Make sure the library is listed at the top of your settings.gradle file, as shown here for a library named **':samagra-form-management'**.

2.1.8  Adding Configuraton data

**This is really important, otherwise your project won't be synced properly.** Copy the config folder from the downloaded project and add to the root of your to be implemented project.


### 2.2 Setup ODK Aggregate

[ODK Aggregate](https://docs.getodk.org/aggregate-intro/) is an open source Java application that stores, analyzes, and presents XForm survey data collected using ODK Collect. It supports a wide range of data types, and is designed to work well in any hosting environment.

With Aggregate, your team can:

- Host blank XForms used by ODK Collect or other OpenRosa clients
- Store and manage XForm submission data
- Visualize collected data using maps and simple graphs
- Export and publish data in a variety of formats

Aggregate can be hosted on cloud providers such as DigitalOcean, and Amazon Web Services, or your own local or cloud server. There's also a pre-configured virtual machine image that is ready to deploy on any computer.

Please check this link to find [how to set up ODK Aggregate?](https://docs.getodk.org/aggregate-setup/)

Refer this link to find steps to [use ODK.](https://docs.getodk.org/aggregate-use/)

### 2.3 Setup ODK Central

[ODK Aggregate](https://docs.getodk.org/central-intro/) is an ODK server alternative. Like ODK Aggregate, it manages user accounts and permissions, stores form definitions, and allows data collection clients like ODK Collect to connect to it for form download and submission upload.

ODK Central is easier to install, easier to use, and more extensible with new features and functionality both directly in the software and with the use of our REST, OpenRosa, and OData programmatic APIs.

ODK Central Features:

- User accounts and management
- Role-based user permissioning
- Projects to organize users, permissions, and forms
- Form and submission upload and management
	- With support for form version updates
	- With drafts and testing on initial creation, and on version updates
	- With form and submission multimedia or data attachments
	- With a table preview of submission data
- Encrypted forms (self-supplied or project managed keys)
- OData live data feed for analysis with tools like Excel and Power BI
- Integrated checklist-based help system
- Automatic, encrypted off-site data backups to Google Drive
- Clean and modern REST API for integration and extensibility
- High performance on low-cost hardware or cloud providers
- ODK Briefcase-compatible data output
- ODK Briefcase push/pull support

Central can be hosted on cloud providers such as DigitalOcean, and Amazon Web Services, or your own local or cloud server. There's also a pre-configured virtual machine image that is ready to deploy on any computer.

Please check this link to find [how to set up ODK Central?](https://docs.getodk.org/central-setup/)

Refer this link to find steps to [use ODK.](https://docs.getodk.org/central-using/)

### 2.4 Give Storage Permissions

2.4.1	Modifying AndroidManifest.xml

Integrating the ODK Module in your app project, would reqire to add certain user permissions. Add the following snippet in your AndroidManifest.xml

```xml
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

2.4.2	Storage Permission Request

In order to set up ODK, in your app, you will have to give Storage permissions. If not already incorporated you can incorporate this code in your main app module.

```java
/** Request the storage permissions which is
* necessary for ODK to read write data related to forms */

@Override
public void requestStoragePermissions() {
 PermissionsHelper permissionUtils = new PermissionsHelper();
	  if (!PermissionsHelper.areStoragePermissionsGranted(getMvpView().getActivityContext())) { 			permissionUtils.requestStoragePermissions((SplashActivity) getMvpView().getActivityContext(), new AppPermissionUserActionListener() {
	   @Override
	    public void granted() {
	    try {
		    getIFormManagementContract().createODKDirectories();
		    //This method creates directories in your phone storage to store the
		    //downloaded and sent forms. }
	    catch (RuntimeException e) {
		    AlertDialogUtils.showDialog(AlertDialogUtils.createErrorDialog(context,
		    e.getMessage(), EXIT), context); return; } // Perform whatever action
		     you might want to perform. }
		@Override
		public void denied() {
		//Prompt the user that app won't work properly
		// if permission not granted.
		}});
	 } else {
	 // Permissions have already been granted.  } }
```

### 2.5 Initiate Module Contract

2.5.1 Initialise Collect Module From your Application Class

Please note that in order to make the modules work properly, please call this method in your Application class's _onCreate()_ method. Please refer MyApplication.java for the same.

```java
 Collect.getInstance().init(this, getApplicationContext(), new FormManagmentModuleInitialisationListener() {
            @Override
            public void onSuccess() {
               Timber.d("Form Module has been initialised correctly");
            }

            @Override
            public void onFailure(String message) {
                Timber.d("Form Module could not be initialised correctly");
                AlertDialogUtils.createErrorDialog(getApplicationContext(), "Could not start app as Form Module couldn't be initialised properly.", true);
            }
        });
```

2.5.2 Setting File Import

Add settings.json, in the **res/raw** folder of your main app module. This file contains all the configurations wit reference to the integration of ODK features in your application. You will have to configure the ODK first by downloading ODK App from Play store and configuring as per the steps mentioned in this [link](https://docs.opendatakit.org/collect-import-export/ 'https://docs.opendatakit.org/collect-import-export/'). Please replace **server_url, username, password** fields in the settings.json file with your own credentials configured from the ODK app.

 ```json
    {
    	"admin": {
    		"admin_password": false,
    		"admin_pw": false,
    		"edit_saved": false,
    		"send_finalized": true,
    		"view_sent": true,
    		"get_blank": true,
    		"delete_saved": true,
    		"save_mid": false,
    		"jump_to": true,
    		"change_language": false,
    		"access_settings": true,
    		"save_as": false,
    		"mark_as_finalized": true,
    		"change_autosend": true,
    		"change_navigation": false,
    		"change_constraint_behavior": false,
    		"change_font_size": false,
    		"change_app_language": false,
    		"instance_form_sync": true,
    		"default_to_finalized": true,
    		"delete_after_send": false,
    		"high_resolution": false,
    		"image_size": true,
    		"show_splash_screen": true,
    		"show_map_sdk": true,
    		"show_map_basemap": false,
    		"analytics": false,
    		"change_form_metadata": true,
    		"change_server": false,
    		"import_settings": false,
    		"change_protocol_settings": false
    	},
    	"general": {
    		"protocol": "odk_default",
    		"server_url": "Add your Server URL here",
    		"username": "Add your username",
    		"password": "Add your ODK Password",
    		"navigation": "buttons",
    		"delete_send": false,
    		"autosend": "on",
    		"autosend_wifi": true,
    		"autosend_network": true,
    		"constraint_behavior": "on_swipe",
    		"default_to_finalized": true,
    		"high_resolution": false,
    		"image_size": "very_small",
    		"instance_sync": true
    	}
    }
```

2.5.3  Invoke the Initialiser for the Contract 

In the onCreate() of your Application-level class, after you have successfully initialised the module,please add the following method invocation.**This will initialise the contract through whch you will interact with all the helper methods of the Form Module**. The contract is always a work in progress, we keep adding more cases as we come across.

```java
ComponentManager.registerFormManagementPackage(new FormManagementSectionInteractor());
FormManagementCommunicator.setContract(ComponentManager.iFormManagementContract); ComponentManager.iFormManagementContract.setODKModuleStyle(this, R.drawable.login_bg, R.style.BaseAppTheme, R.style.FormEntryActivityTheme, R.style.BaseAppTheme_SettingsTheme_Dark, Long.MAX_VALUE);`
```

The method signature of registerFormManagementPackage() is as follows:

```java
/**
*
* @param formManagmentClassImpl - Instance of the Implementing class implementing the contract, which will further call the helper methods. */
public static void registerFormManagementPackage(IFormManagementContract formManagmentClassImpl);
```

The method signature of setODKModuleStyle() is mentioned below

```java
/**
*  @param mainApplication - Application Class Instance
* @param splashScreenDrawableID - Drawable Resource for the Splash Screen of ODK Module, if needed to be shown.
* @param baseAppThemeStyleID - Theme Style ID for the ODK Module
* @param formActivityThemeID - Theme ID for the Form Entry View
* @param customThemeId_Settings - Theme ID for the Settings tab in ODK Module
* @param toolbarIconResId - Resource ID for the toolbar shown in the ODK Views. */
void setODKModuleStyle(MainApplication mainApplication, int splashScreenDrawableID, int baseAppThemeStyleID, int formActivityThemeID, int customThemeId_Settings, long toolbarIconResId);`
```

2.5.4 Creating Storage Directories

Please refer to 2.4.2 to see, that once you have gained storage permission access, please create storage drectories to store the media/forms/form entries in the device storage.

2.5.5  Aplying Setting file integrated in main app project

Apply the settings file configured above using the following snippet. Please do it as soon as you launch your app, preferably in your Splash Activity.

```java
getIFormManagementContract().applyODKCollectSettings(context, R.raw.settings);
 //R.raw.settings is the resource ID for the Settings file and context is an instance of Context //class
```
2.5.6 Resetting the forms/Data

If you are downloading the ODK Forms everytime with your session, we recommend to invoke this method when you launch your app, after settings have been applied. Use the following method:

```java
getIFormManagementContract().resetPreviousODKForms();
```

This will delete a) Saved forms (instances folder, instances database); b) Blank forms (forms folder, forms database, itemsets database); c) Form load cache (.cache folder)

In case you just want the blank forms to be removed, use the following method invocation.

```java
getIFormManagementContract().resetODKForms(context);
```

In case, a new user logs in and you want to ODK Preference data to be removed as well, use this method invocation:

```java
getIFormManagementContract().resetEverythingODK();
```

### 2.6 Use Module Helper Methods

Please refer the sub-sections to find out the various functionalities, this module wrapper provides.

#### 2.6.1  Delete all the previous ODK related data

Refer 2.5.6. getIFormManagementContract() is the object of IFormManagementContract registered in the Application class above. You can pass it to the various Activities via Dagger (dependency injection), or via a helper class.

```java
getIFormManagementContract().resetEverythingODK();
```

#### 2.6.2 Delete current users' form submissions

Refer 2.5.6. If in case if you just want to delete already filled/submitted forms for the user, use the following method

```java
getIFormManagementContract().resetPreviousODKForms();
```

#### 2.6.3  Download data collection forms

- Generally, the forms are downloaded for a user based on User access/role. You could use own APIs to fetch which forms to be downloaded for a user or you could use FirebaseRemoteConfig to get the name and ID of forms to be downloaded for a user.

- First, the method which can be used to fetch the list of forms available at your ODK aggregate is ahead.

```java
getIFormManagementContract().startDownloadODKFormListTask(new FormListDownloadListener())
```

FormListDownloadListener is a listener to listen to the response of the download task, with callbacks mentioned ahead.

```java
class FormListDownloadListener implements FormListDownloadResultCallback {
@Override
 public void onSuccessfulFormListDownload(HashMap<String,
  FormDetails> latestFormListFromServer){
  //Returns non-null list of Forms from ODK Aggregate, as a hash map, with Key being the form ID and Value being corresponding }
   @Override public void onFailureFormListDownload(boolean isAPIFailure) {
   //Handle failure.
   //isAPIFailure flag means that the API has returned error message
   } }
```

- You can then fetch specific forms from the list if fetched successfully fetched, ahead in the following manner.

  ```
  getIFormManagementContract().downloadODKForms(new FormDownloadListener(), formsToBeDownloaded);
  //formsTobeDownloaded is a HashMap<String, FormDetails> with Key = Form ID for the form to be downloaded and Value = Form Details of the form to be downloaded, you will receive it from the List of forms downloaded
  ```

FormDownloadListener is a listener to listen to the response of the download task, with callbacks mentioned ahead.

```java
class FormDownloadListener implements DataFormDownloadResultCallback {
@Override
public void formsDownloadingSuccessful(HashMap<FormDetails, String> result) {
//Returns non-null list of Forms from ODK Aggregate, which weere chosen to be downloaded.
//as a hash map, with Key being the form details and Value being corresponding Download status } @Override
public void formsDownloadingFailure() {
 //If the download of the form fails
 }
 @Override
 public void progressUpdate(String currentFile, int progress, int total) {
  //Update the progress of download, currentFile: Name of form just being downloaded, progress: number of forms downloaded out of total forms, total: Total number of forms to be downloaded. } @Override
   public void formsDownloadingCancelled() {
   //If the form download cancels due to certain reason.
   }}
```

#### 2.5.4  Retreive Form IDs

You can fetch a form’s ID if you know the form name. This is useful in case you want to open a specific form.
java
```java
getIFormManagementContract().fetchSpecificFormID(formIdentifier)
// Form Identifier is the Form's name
```

#### 2.5.5  Pre-fill information in forms

You can prefill certain details into a form if you know the tag to be prefilled and the form’s name, in the manner mentioned ahead.

```java
getIFormManagementContract().updateFormBasedOnIdentifier(String formIdentifier,
`String tag, String tagValue);
```

![](https://media.giphy.com/media/W6orr8XpO2S2rrr0st/giphy.gif)

#### 2.5.6  Launch specific forms

You can launch a specific form to edit and further send using the following invocation, given you know the name of the form.

```java
getIFormManagementContract().launchSpecificDataForm(Context context, String formIdentifier);
```

#### 2.5.7  View all downloaded forms

You can launch a view showing all the downloaded forms using the following invocation, where the user himself can select whichever form to fill and send.

```java
getIFormManagementContract().launchFormChooserView(context, toolbarModificationObject);
//context - Instance of Context class,
/** toolbarModificationObject - HashMap<String, Object> The contents of Hash Map are as follows * and are used to modify the UI of toolbar of this View.
* navigationIconDisplay - Boolean (true or false) navigationIconResId -
* Integer (Resource ID for Navigation(Back) Icon in toolbar)
*  title - String (Title of toolbar) goBackOnNavIconPress - * Boolean (enables or disables back icon)
*/
```

### 2.7 Dynamic Cascading Dropdowns in ODK Forms

You can add cascaded dropdowns dynamically in ODK Forms, for which you can generate data dynamically, during run time. But you need to keep certain points in mind, while configuring the form and development.

1. Keep in mind the name of the media file, .csv file you have stored in the forms, while configuring forms.  You need to edit the same file at run time.
2. The format of the .csv file is similar to this

| list_name | student_name | student_label | class_key | class | section_key | section |
|-----------|--------------|---------------|-----------|--------|-------------|---------|
| students | Saif_Khan | Saif Khan | class6 | class6 | C | C |
| students | Ram_Gautam | Ram Gautam | class1 | class1 | B | B |

3. The dropdowns work only until 3 levels of hierarchy, ie.  A>B>C, here Class>Section>Student

4. You need to know the keys for which you need to fill the data, Here they are student, class and section. This is so because your form is coupled with these keys

5. Names can't contain spaces. List_name would be same for all the rows.

#### Using this

1. First fetch all the forms, which have media folders with the file with the name you want to replace after editing. Use the following method. Please invoke this method only after forms have been downloaded, else,you won't get correct output.

```java
 getIFormManagementContract().fetchMediaDirs(referenceFileName);
```
referenceFileName is the name of the .csv file you want to find and then edit, eg. student_list.csv

2. If the value(ArrayList) returned by the above method call, has size > 0, which means some of the forms have this same media file attached with them. The following method will edit this file and then save later.

```java
ArrayList<String> mediaDirectoriesNames =  getIFormManagementContract().fetchMediaDirs(referenceFileName);
        if (mediaDirectoriesNames.size() > 0) {
 getIFormManagementContract().buildCSV(new CSVBuildStatusListener() {
                @Override
                public void onSuccess() {
                    //CSVs have been built and saved successfully.
                }
                @Override

                public void onFailure(Exception exception, CSVHelper.BuildFailureType buildFailureType) {
		//There has been a failure. You will receive the type of failure in the method args.
                }
            }, mediaDirectoriesNames,jsonArray, referenceFileName);
}
```
Here, **Important thing to note is that the JSON Array should have keys in format as the .csv file**. Refer the following as sample resource:

```json
[{
	"student": "Sukhpr",
	"section": "C",
	"class": "class2"
}, {
	"student": "new tool",
	"section": "B",
	"class": "class4"
}, {
	"student": "Kranti ",
	"section": "A",
	"class": "class5"
}, {
	"student": "testing",
	"section": "A",
	"class": "class3"
}, {
	"student": "Saurav Kaul",
	"section": "A",
	"class": "class1"
}, {
	"student": "Shashikala",
	"section": "A",
	"class": "class1"
}, {
	"student": "Vidhi Kapoor",
	"section": "A",
	"class": "class1"
}, {
	"student": "Ramkrishan Galgotia",
	"section": "A",
	"class": "class1"
}, {
	"student": "Gaurav Sood",
	"section": "A",
	"class": "class1"
}, {
	"student": "Amitabh Ghose",
	"section": "A",
	"class": "class1"
}]
```
Here, section, student,class match with the keys as from the .csv file.

Please note that, what we essentially do is:

1.  Check if media files exist in those folders, if not, create a copy and replace that in actual folder.
2. Check validity of keys
3. Create a final list of elements, parse that to create a CSV
4. Save the CSV in that format in the destination folder

## 3. FAQs

**3.1  What version of ODK Collect we are using?**

We are using v1.26.1.

**3.2  What target version of Android we are using?**

API 28. Please build your app for that version only. We will upgrade it to API 29 soon.

**3.3  How can I upgrade the ODK Collect verion?**

Please check this [link.](https://github.com/getodk/collect/releases). Download the latest version. Check the changes made in the latest release. Override the changes made in the latest versions.

**3.4  My application crashes due to permission exceptions. What can I do?**

Please note that, storage permissions though have been asked from user at the launch of app, but when launching the form view, you will have to provide, microphone/location permissions, if your forms contain questions containing media/geo-location. 

Please refer the table below.

| Permission | Reason                                                                                                          |
|------------|-----------------------------------------------------------------------------------------------------------------|
| Storage    | required for Collect to be able to access and save form data                                                    |
| Camera     | required by image and video questions to capture new media                                                      |
| Contacts   | required to configure a Google account for Google Drive, Google Sheets submissions                              |
| Location   | required for location questions                                                                                 |
| Microphone | required by audio and video questions to capture new media                                                      |
| Phone      | optional on form send to include deviceID in the submission and required for forms that capture device metadata |

**3.5  My build is failing. What should I do to debug?**

Here are the approaches you could follow;
a) Please sync your gradle and clean your project.
b) Check for dependency resolution errors, check the downloaded roject to see the type and version of libraries imported.
c) Check your google-services.jsn, it should be compatible with the applicationId mentioned in your project build.gradle

**3.6  My forms don't seem to behave in the way they are supposed to be. What should I do?**

Please check the same forms that you have configured on XLS, on the ODK Collect app, if the form doesn't work there, please check your form structure, you will have to debug to check as this means there has been some issue with your form.

**3.7  How can I configure auto-sending the forms on internet connectivity issue?**

ODK is a robust tool developed to handle offline scenarios. Auto send When enabled in setings.json (Add "autosend": "on"), forms are sent immediately when they are finalized, if the device can connect to the internet. If an internet connection is not available at the time of finalization, your finalized forms will be queued to send as soon as connectivity
is established. You can specify whether to send over WiFi, cellular data, or both.

## 4. Coming Soon

Please review the following section to get information about planned updates to this module.
