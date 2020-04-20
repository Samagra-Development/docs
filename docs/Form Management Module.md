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

## 2. Setup Module In Starter App

This section lists down all the possible configuration related steps to integrate ODK, the core opensource library being used for data collection, into your starter application.

### 2.1 Retrieve ODK Code

2.1.1  Setup Github project

Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.

2.1.2  Integrating with Main App Project

Open the main project on Android Studio where you are to integrate these modules. 

2.1.3 heading

If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the offline_module later, using the following steps.

2.1.4  heading

Click on your app module. 
-> Select New Module Option 
-> Select Import Library 
-> Go to the downloaded project directory 
-> Select the module, sync your gradle. 

*In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.*

2.1.5  heading

Please follow the same steps for the integration of offline_module.

2.1.6  heading

In the project's build.gradle, add Gradle dependency and It's Done!

```
api project(':samagra-form-management');`
```
2.1.7  heading

In the settings.gradle, add **':samagra-form-management'**, to the end of existing modules.

2.1.8  heading

Copy the config folder from the downloaded project and add to the root of your to be implemented project.


### 2.2 Setup ODK Aggregate

[ODK Aggregate](https://docs.getodk.org/aggregate-intro/) is an open source Java application that stores, analyzes, and presents XForm survey data collected using ODK Collect. It supports a wide range of data types, and is designed to work well in any hosting environment.

With Aggregate, your team can:

- Host blank XForms used by ODK Collect or other OpenRosa clients
- Store and manage XForm submission data
- Visualize collected data using maps and simple graphs
- Export and publish data in a variety of formats

Aggregate can be hosted on cloud providers such as DigitalOcean, and Amazon Web Services, or your own local or cloud server. There's also a pre-configured virtual machine image that is ready to deploy on any computer.

Please check this link to find [how to set up ODK Aggregate?](https://docs.getodk.org/aggregate-setup/

Refer this link to find steps to [use ODK.](https://docs.getodk.org/aggregate-use/)

### 2.3 Give Storage Permissions

2.3.1	heading

Integrating the ODK Module in your app project, would reqire to add certain user permissions. Add the following snippet in your AndroidManifest.xml

    ```
    `<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    ```

2.3.2	heading

In order to set up ODK, in your app, you will have to give Storage permissions. If not already incorporated you can incorporate this code in your main app module.

```
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

### 2.4 Initiate Module Contract

2.4.1  heading

Add settings.json, in the **res/raw** folder of your main app module. This file contains all the configurations wit reference to the integration of ODK features in your application. You will have to configure the ODK first by downloading ODK App from Play store and configuring as per the steps mentioned in this [link](https://docs.opendatakit.org/collect-import-export/ 'https://docs.opendatakit.org/collect-import-export/'). Please replace **server_url, username, password** fields in the settings.json file with your own credentials configured from the ODK app.

    ```
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

2.4.2  heading

In the onCreate() of your Application-level class, please add the following method invocation

```
ComponentManager.registerFormManagementPackage(this, AppConstants.BASE_API_URL, new FormManagementSectionInteractor()); FormManagementCommunicator.setContract(ComponentManager.iFormManagementContract); ComponentManager.iFormManagementContract.setODKModuleStyle(this, R.drawable.login_bg, R.style.BaseAppTheme, R.style.FormEntryActivityTheme, R.style.BaseAppTheme_SettingsTheme_Dark, Long.MAX_VALUE);`
```

The method signature of registerFormManagementPackage() is as follows:

```
/**
*
* @param application - Application Class Instance
* @param baseAPIUrl - Base API Url, which will be later used to make API calls.
* @param formManagmentClassImpl - Instance of the Implementing class implementing the contract, which will further call the helper methods. */
public static void registerFormManagementPackage(MainApplication application, String baseAPIUrl, IFormManagementContract formManagmentClassImpl);
```

The method signature of setODKModuleStyle() is mentioned below

```
/**
*  @param mainApplication - Application Class Instance
* @param splashScreenDrawableID - Drawable Resource for the Splash Screen of ODK Module, if needed to be shown.
* @param baseAppThemeStyleID - Theme Style ID for the ODK Module
* @param formActivityThemeID - Theme ID for the Form Entry View
* @param customThemeId_Settings - Theme ID for the Settings tab in ODK Module
* @param toolbarIconResId - Resource ID for the toolbar shown in the ODK Views. */
void setODKModuleStyle(MainApplication mainApplication, int splashScreenDrawableID, int baseAppThemeStyleID, int formActivityThemeID, int customThemeId_Settings, long toolbarIconResId);`
```

2.4.3  heading

Apply the settings file configured above using the following snippet

```
getIFormManagementContract().applyODKCollectSettings(context, R.raw.settings);
 //R.raw.settings is the resource ID for the Settings file and context is an instance of Context //class
```

### 2.5 Use Module Helper Methods

Please refer the sub-sections to find out the various functionalities, this module wrapper provides.

#### 2.5.1  Delete all the previous ODK related data

getIFormManagementContract() is the object of IFormManagementContract registered in the Application class above. You can pass it to the various Activities via Dagger (dependency injection), or via a helper class.

```
getIFormManagementContract().resetEverythingODK();
```

#### 2.5.2 Delete current users' form submissions

If in case if you just want to delete already filled/submitted forms for the user, use the following method

```
getIFormManagementContract().resetODKForms(context);
```

#### 2.5.3  Download data collection forms

- Generally, the forms are downloaded for a user based on User access/role. You could use own APIs to fetch which forms to be downloaded for a user or you could use FirebaseRemoteConfig to get the name and ID of forms to be downloaded for a user.

- First, the method which can be used to fetch the list of forms available at your ODK aggregate is ahead.

```
getIFormManagementContract().startDownloadODKFormListTask(new FormListDownloadListener())
```

FormListDownloadListener is a listener to listen to the response of the download task, with callbacks mentioned ahead.

```
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
  //formsTobeDownloaded is a HashMap<String, String> with Key = Form ID for the form to be downloaded and Value = Form Name of the form to be downloaded
  ```

FormDownloadListener is a listener to listen to the response of the download task, with callbacks mentioned ahead.

```
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

```
getIFormManagementContract().fetchSpecificFormID(formIdentifier)
// Form Identifier is the Form's name
```

#### 2.5.5  Pre-fill information in forms

You can prefill certain details into a form if you know the tag to be prefilled and the form’s name, in the manner mentioned ahead.

```
getIFormManagementContract().updateFormBasedOnIdentifier(String formIdentifier,
`String tag, String tagValue);
```

#### 2.5.6  Launch specific forms

You can launch a specific form to edit and further send using the following invocation, given you know the name of the form.

```
getIFormManagementContract().launchSpecificDataForm(String formIdentifier);
```

#### 2.5.7  View all downloaded forms

You can launch a view showing all the downloaded forms using the following invocation, where the user himself can select whichever form to fill and send.

```
getIFormManagementContract().launchFormChooserView(context, toolbarModificationObject);
//context - Instance of Context class,
/** toolbarModificationObject - HashMap<String, Object> The contents of Hash Map are as follows * and are used to modify the UI of toolbar of this View.
* navigationIconDisplay - Boolean (true or false) navigationIconResId -
* Integer (Resource ID for Navigation(Back) Icon in toolbar)
*  title - String (Title of toolbar) goBackOnNavIconPress - * Boolean (enables or disables back icon)
*/
```

## 3. FAQs

**3.1  What version of ODK Collect we are using?**

We are using v1.26.1.

**3.2  How can I upgrade the ODK Collect verion?**

Please check this [link.](https://github.com/getodk/collect/releases). Download the latest version. Check the changes made in the latest release. Override the changes made in the latest versions.

**3.3  My application crashes due to permission exceptions. What can I do?**

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

**3.4  My build is failing. What should I do to debug?**

Here are the approaches you could follow;
a) Please sync your gradle and clean your project.
b) Check for dependency resolution errors, check the downloaded roject to see the type and version of libraries imported.
c) Check your google-services.jsn, it should be compatible with the applicationId mentioned in your project build.gradle

**3.5  My forms don't seem to behave in the way they are supposed to be. What should I do?**

Please check the same forms that you have configured on XLS, on the ODK Collect app, if the form doesn't work there, please check your form structure, you will have to debug to check as this means there has been some issue with your form.

**3.6  How can I configure auto-sending the forms on internet connectivity issue?**

ODK is a robust tool developed to handle offline scenarios. Auto send When enabled in setings.json (Add "autosend": "on"), forms are sent immediately when they are finalized, if the device can connect to the internet. If an internet connection is not available at the time of finalization, your finalized forms will be queued to send as soon as connectivity
is established. You can specify whether to send over WiFi, cellular data, or both.

## 4. Coming Soon

Please review the following section to get information about planned updates to this module.
