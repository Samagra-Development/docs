---
id: FormManagementPackage
title: Form Management Package
sidebar_label: Form Management Package
---

# Form Management Package

We at Samagra believe in empowering the governance via technology, with maximum emphasis on leveraging Open Source Technology, with an intent not to reinvent the wheel and also to provide a contribution in terms that other developers from the community can leverage our code for solving problems in same or different realms. While working in the Government frame, one of the most prominent use cases needed for various tech products is a better surveying technique that should be easily integrated, both at client and back end, in terms of retrieval and further processing of data. For that, we pinned to use [ODK Collect](https://docs.opendatakit.org/ 'https://docs.opendatakit.org/'). ODK Collect is an **open-source** Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question and answer types, and is designed to work well without **network connectivity**.

One of the most prominent problems with respect to this though is scattered documentation in terms of integration of this functionality in your own app, rather than using ODK’s provided sample app, and just using it for the required purpose. Hence, we abstracted out the app provided and configured it to an Android Library format, which can be configured from your main app via a communicating Interface. This helps you to achieve a better level of abstraction, and also the helper methods provided help you achieve the maximum utilization of the Collect App features, in terms of form download, storage, management, and processing.

## Overview

The package and its features can be broken up into 2 main components:

1.  **Form Downloading**:- This involves downloading the ODK Forms to be rendered to the user. This may depend on the User’s role and the level of access, varying from user to user. It also includes a basic level of configurations needed to get the ODK Collect Module to be preset.

2.  **Form Rendering and Management**:- This involves the ability to pre-fill certain forms, based on some parameters if needed. User can fill, send forms via this functionality. If forms are filled when offline, you can also send those forms later.

## Setting Up ODK

This section lists down all the possible configuration related steps to integrate ODK into your app.

### Retrieving the Code

1.  Download the library from the Github link. Unzip library.

2.  Start Android Studio. Follow to File -> New -> Import Module . Go to the path where your extracted library is located and select it. Uncheck other modules and add 'samagra-form-management'.

3.  Add Gradle dependency and It's Done!

```
api project(':samagra-form-management');`
```

### Giving Storage Permissions

1.  Add the following snippet in your AndroidManifest.xml

    ```
    `<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    ```

2.  In order to set up ODK, in your app, you will have to give Storage permissions. If not already incorporated you can incorporate this code in your main app module.

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

### Initializing the Module Contract

1.  Add settings.json, in the **res/raw** folder of your main app module. This file contains all the configurations wit reference to the integration of ODK features in your application. You will have to configure the ODK first by downloading ODK App from Play store and configuring as per the steps mentioned in this [link](https://docs.opendatakit.org/collect-import-export/ 'https://docs.opendatakit.org/collect-import-export/'). Please replace **server_url, username, password** fields in the settings.json file with your own credentials configured from the ODK app.

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

2.  In the onCreate() of your Application-level class, please add the following method invocation

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

3. Apply the settings file configured above using the following snippet

```
getIFormManagementContract().applyODKCollectSettings(context, R.raw.settings);
 //R.raw.settings is the resource ID for the Settings file and context is an instance of Context //class
```

### Using the helper methods

Note: In all the usages mentioned below

1.  Deleting all the previous ODK related data, getIFormManagementContract() is the object of IFormManagementContract registered in the Application class above. You can pass it to the various Activities via Dagger (dependency injection), or via a helper class.

```
getIFormManagementContract().resetEverythingODK();
```

2. If in case if you just want to delete already filled/submitted forms for the user, use the following method

```
getIFormManagementContract().resetODKForms(context);
```

3. **Downloading the forms**

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

4. You can fetch a form’s ID if you know the form name. This is useful in case you want to open a specific form.

```
getIFormManagementContract().fetchSpecificFormID(formIdentifier)
// Form Identifier is the Form's name
```

5. You can prefill certain details into a form if you know the tag to be prefilled and the form’s name, in the manner mentioned ahead.

```
getIFormManagementContract().updateFormBasedOnIdentifier(String formIdentifier,
`String tag, String tagValue);
```

6. You can launch a specific form to edit and further send using the following invocation, given you know the name of the form.

```
getIFormManagementContract().launchSpecificDataForm(String formIdentifier);
```

7. You can launch a view showing all the downloaded forms using the following invocation, where the user himself can select whichever form to fill and send.

```
getIFormManagementContract().launchFormChooserView(context, toolbarModificationObject);
//context - Instance of Context class,
/** toolbarModificationObject - HashMap<String, Object> The contents of Hash Map are as follows * and are used to modify the UI of toolbar of this View.
* navigationIconDisplay - Boolean (true or false) navigationIconResId -
* Integer (Resource ID for Navigation(Back) Icon in toolbar)
*  title - String (Title of toolbar) goBackOnNavIconPress - * Boolean (enables or disables back icon)
*/
```
