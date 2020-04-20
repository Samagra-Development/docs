---
id: AndroidProfileManagementModule
title: Profile Screens Module
sidebar_label: Profile Screens Module
---

## 1. Overview

For any app, at a user’s level, it is essential to provide the user with an option to control the user’s profiles in terms of editing his/her basic contact details (Contact and email). These details can be leveraged by the back-end to send personalized messages/emails/notifications. At a user’s level, the contact number can be used by the user to reset his/her password. The module provides the following functionalities:

1. Option to display the user’s profile, to display the user's basic role details, contact details, as well as information pertaining to the app, depending on the user.

2. The details for the user can be configured from the backend, via Firebase, as in, the whole profile section has been designed to be dynamically generated. Details of this are discussed in the further part of the document.

3. Users have the option to edit certain profile information, depending on the app contract, meaning dependent on the back end configuration.

4. Users can reset the password for the application via OTP that will be sent to the user’s registered number.

## 2. Setup Module In Starter App

### 2.1 Integrate Module

2.1.1 Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.

2.1.2 Launch Android Studio. Open the main project where you are to integrate these modules.

2.1.3 If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the notifications_module later, using the following steps.

2.1.4 Click on your app module. Select New Module Option -> Select Import Android Library -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.

2.1.5 Please follow the same steps for the integration of **user_profile** module.Sync your gradle.

2.1.6 In your module's `build.gradle`, add the following code snippet and run the `gradle-sync`.

```
dependencies {

...

implementation project(':user_profile');

…

}

```
2.1.7 In the settings.gradle file, please add ':user_profile' to the included modules file.<br/><br/>

### 2.2 Start The Module

2.2.1 Inside `onCreate` of Application class or Launcher Activity, in the manner, as follows

```
ComponentManager.registerProfilePackage(new ProfileSectionInteractor(), this, AppConstants.BASE_API_URL, applicationID);

```

The method signature of this Module Contract Initialisation is as follows:

```
/**
     * @param profileContractImpl - {IProfileContract} Implementation Class of the Interface which will be further used to launch the Profile Section further.
     * @param application         - {Application} Instance of the Application class, which will be used to validate for IllegalState checks.
     * @param baseURL             - {String} Base URL for Fusion Auth APIs used when editing user profile
     * @param applicationID       - {String} Application Identifier for this project, from Fusion Auth, used further as parameter for API interactions.
     */

    public static void registerProfilePackage(IProfileContract profileContractImpl, Application application,
                                              String baseURL, String applicationID);
```

This method invocation will also initialize the ProfileScreenDriver class, which will be further used to launch the Profile Screen.

2.2.2 Wherever you want to launch the Profile Section, use the following code piece.

```
 IProfileContract initializer = ComponentManager.iProfileContract;

if(initializer!=null){

        initializer.launchProfileActivity(context,profileConfig,fusionauthAPIKey,sendOTPUrl,updateAppPasswordURL);

        }

```

The method signature of the above method is mentioned below.

```
/**
     * *@param context-{Context}Context Instance used to further launch Profile Screen.
     *
     * @param profileConfig-{ArrayList<UserProfileElement>}List of Profile Screen Elements which will be received via Firebase Remote Config,
     *                                                          <p>
     *                                                          Attributes would be discussed ahead while discussing on how to set up Firebase for project.
     * @param fusionAuthApiKey-{String}Fusion                   API Auth Key for the Application,used to authenticate the API Requests.
     * @param sendOTPUrl-{String}API                            End Point to receive OTP for resetting App Password.
     * @param updatePasswordURL-{String}API                     End-point to update the User Password for the App,after receiving the OTP of registered Mobile Number
     * @param profileContentValues-{HashMap<String,             String>}Map of the various content fields to be populated,(received via Firebase Remote Config)with their values.
     */

    void launchProfileActivity(@NonNull Context context, ArrayList<UserProfileElement> profileConfig, String fusionAuthApiKey,
                               String sendOTPUrl, String updatePasswordURL, HashMap<String, String> profileContentValues);
```

### 2.3 Setup Firebase (for Android Project & Client End Consumption)

2.3.1 First of all, for setting up Remote Config for Firebase, you need to setup Firebase for your Android Application Project. The tutorial for setting up Firebase for Android can be accessed via the link, [Adding Firebase to your Android Project](https://firebase.google.com/docs/android/setup).

2.3.2 Configure Remote Config for your Android App after the above step is successfully completed, accessible via the link, [Getting started with Firebase Remote Config on Android](https://firebase.google.com/docs/remote-config/use-config-android).

2.3.3 Go to [Google Firebase Console](https://www.console.firebase.google.com/), navigate to your project view. In your project view, launch the Remote Config View by clicking on the Remote Config tab.

2.3.4 In the Remote Config window, Click on Add Parameter option. Add the profile config parameters as mentioned ahead.

2.3.5 Add the key and value in the format mentioned below.

```
key : "profile_config"

default value :

[

{

"base64Icon": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0", // String - Base64 String of the Label Icon

"title": "Contact Number - Please note this number will be used for sending OTP for password reset.", // String - Title for the Profile Screen Item

"content": "user.mobilePhone", // String - Type of the Profile Item. (Possible types could be mobilePhone, email, username, Date Of Joining or Date of Birth)

"isEditable": true, //Boolean - determines if the value of this Profile Item could be edited by user or not.

"section": 0, //Integer - This identifier is section out the Profile Items while displaying.

"type": "PHONE_NUMBER", // String - Type of the Profile Item, based on which different type of Layout will be inflated, types yet configured are TEXT/PHONE_NUMBER/DATE/SPINNER

"spinnerExtra": null

},

{

"base64Icon": "iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA7UlEQVR4Ae3UIQwBcRTHceGioE/Qk6gXQRT0JIiCqE8URFEQBX2CKOgT9Anihedbbru97c/bf3dvwvtun8h+zqMTORdFBda4Q1p2wgRfm0OcLZDsBnF2QzKp2aGHpuvjAKlJJsoT0wbvc4EXJGeQPsABchviCgHyBs3Vp3ljiQLWutigVE99ljOo+r6P0Ec4wq8meNReV2Jb3WXGIOObq4wfIn+Q4fFP1dFav+b8QYYDPeNq+CG0MEg9DcNfhcMgdS+Ju3IdpBvro/UfZC8GxaAY9NeD3hBnFyTbQ5zNkKyLFR4OQ17YoIBbURR9AFTnXP/wlPyjAAAAAElFTkSuQmCC",

"title": "Official Email",

"content": "user.email",

"isEditable": true,

"section": 0,

"type": "TEXT",

"spinnerExtra": null

},

{

"base64Icon": "iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA7UlEQVR4Ae3UIQwBcRTHceGioE/Qk6gXQRT0JIiCqE8URFEQBX2CKOgT9Anihedbbru97c/bf3dvwvtun8h+zqMTORdFBda4Q1p2wgRfm0OcLZDsBnF2QzKp2aGHpuvjAKlJJsoT0wbvc4EXJGeQPsABchviCgHyBs3Vp3ljiQLWutigVE99ljOo+r6P0Ec4wq8meNReV2Jb3WXGIOObq4wfIn+Q4fFP1dFav+b8QYYDPeNq+CG0MEg9DcNfhcMgdS+Ju3IdpBvro/UfZC8GxaAY9NeD3hBnFyTbQ5zNkKyLFR4OQ17YoIBbURR9AFTnXP/wlPyjAAAAAElFTkSuQmCC",

"title": "Official Email",

"content": "user.state",

"isEditable": true,

"section": 0,

"type": "SPINNER",

"spinnerExtra": [{"Andhra Pradesh", "Delhi", "Punjab", "Odisha", "Haryana", "Himachal Pradesh",......}] //ArrayList<String> - Possible values of the Spinner Items.

}

},.......

]
```

2.3.6 You can retrieve the above set values at the client end using the following code snippet.

```
public ArrayList<UserProfileElement> getProfileConfig() {

String configString = mFirebaseRemoteConfig.getString("profile_config"); // mFirebaseRemoteConfig is an instance of FirebaseRemoteConfig initialised in the Application level class of the Application.

ArrayList<UserProfileElement> userProfileElements = new ArrayList<>();

try {

JSONArray config = new JSONArray(configString);

for (int i = 0; i < config.length(); i++) {

JSONArray spinnerExtra = config.getJSONObject(i).optJSONArray("spinnerExtra");

ArrayList<String> spinnerValues = null;

if (spinnerExtra != null) {

spinnerValues = new ArrayList<>();

for (int j = 0; j < spinnerExtra.length(); j++) {

spinnerValues.add(spinnerExtra.get(j).toString());

}

}

userProfileElements.add(new UserProfileElement(config.getJSONObject(i).get("base64Icon").toString(),

config.getJSONObject(i).get("title").toString(),

config.getJSONObject(i).get("content").toString(),

(Boolean) config.getJSONObject(i).get("isEditable"),

(int) config.getJSONObject(i).get("section"),

UserProfileElement.ProfileElementContentType.valueOf(config.getJSONObject(i).get("type").toString()),

spinnerValues));

}

} catch (JSONException e) {

e.printStackTrace();

}

return userProfileElements;

}
```

2.3.7 Map the values corresponding to these content fields, as per your app’s scenario. You could fetch and store these values in the SharedPreerences or in local DB, after receiving User Info from App Login Response or from particular User Data API.

### 2.4 UI Capabilities For Application Administrators

2.4.1  Render the User Profile Screen based on Firebase Remote Config’s returned User Profile Configurations and its values correspondingly received from User Data stored locally.

2.4.2  On the Profile Screen, the user has 2 actions available to him/her,

- Ability to reset App Password.

- Edit the user Profile, available only for the editable fields in the user profile.

2.4.3  Reset Password

- The user must have a mobile number registered in the profile section, to be able to receive the OTP. In this case, edit the profile prior to resetting the password.

- The user will be redirected to Reset Password Screen, only if API to trigger OTP (whose endpoint has been sent while initialization of module, as discussed above), returns a successful response. In the other scenario, the user will be shown a Snakbar notifying of the type of Exception message returned by the API.

- In the Reset Password Screen, user has to enter the OTP, new password, confirm the same password. And then trigger the submit button. On successful update of password (API endpoint has been sent while initialization of module, as discussed above), the user will be shown a message and then redirected to the Profile Screen. In the other scenario (Failure/Error), the user will be shown a Snackbar with the error received from the API.

2.4.4  Edit Profile

- The user is only able to edit the editable fields.

- Click on Edit icon on top of the profile screen, will make the editable fields open to be edited. The user can then update those fields, after editing, click on the save icon. If successfully updated, the user will see a message notifying of the same. In the other scenario (Failure/Error), the user will be shown a Snackbar with the error received from the API.


## 3. FAQs

**3.1. How to set remotely configured data?**

We generally use Firebase Remote Config for controlling remote data, but you can are free to use your own custom APIs to get the remote data.
