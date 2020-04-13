--- 
id: CascadingSearchModule 
title: Cascading Search Module 
sidebar_label: Cascading Search Module
---

# Cascading Search Module

One of the most recurring cases, that we came across while developing apps, was sets vs subsets of data, which refers to that the data collection is based on certain user fields which go on dividing into subsets, for instance - District -> Tehsil -> Block -> Town -> Post Office. Sometimes the list, of the super set or rather consider the heaviness of list for Post offices under a state like Uttar Pradesh. So in order to provide a better user experience, we decided to use fuzzy search to filter out the data as the user keeps going from a higher level to lower level of demarcation. You can, as a developer modify this module as per your requirement, and extend it to n number of levels, if you would require so. 

## Overview

In order to understand the functioning of the module, we will help you set up a sample module that you can use to integrate into your app. We use Firebase Remote Storage to get the required mapping file, which is required by the user to fill forms etc. The file is stored in the res/raw folder in a gzip format, to occupy less space.
In order to remotely change this file, we have also included a provision via FirebaseRemoteConfig to download this file and then replace the pre existing gzip file.
We also have a module included in our commons module to unzip the mentioned file in local device storage which can be further read and filtered out as per the user's requirements. You can receive the results of the Cascading Module and then use further.

## Setting up Module into your Project

1.  Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.
2.  Launch Android Studio. Open the main project where you are to integrate these modules. 
3.  If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the cascading module later, using the following steps.
4.  Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.
5.  Please follow the same steps for the integration of Cascading Module


## Using the functionalities to run the Module

1. You need to have Storage Permissions to unzip the file and store it in local storage. For this add to the AndroidManifest.xml
```

    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    ```
2. Add the following code snippet to get user's consent to storage permission
```
PermissionsHelper permissionUtils = new PermissionsHelper();
        if (!PermissionsHelper.areStoragePermissionsGranted(activityContext)) {
            permissionUtils.requestStoragePermissions(activityContext, new AppPermissionUserActionListener() {
                @Override
                public void granted() {
                //User grants storage permissions.
                }
                @Override
                public void denied() {
                //User grants denies permissions.
                }
            });
        } else {
            //User has already granted Storage permissions.
        }
3. In order to unzip the locally stored file, we will use this following function:
```
 FileUnzipper fileUnzipper = new FileUnzipper(getMvpView().getActivityContext(), pathJSONFile, Resource_ID_GZIP_FILE, new UnzipTaskListener() {
                        @Override
            public void unZipSuccess() {
              //If Unzipping operation is successful
            }

            @Override
            public void unZipFailure(Exception exception) {
            //If Unzipping operation is failed, exception is returned.

            }
        });
        fileUnzipper.unzipFile();
```
4. In order to use this module, attact the module from the Main app module using the following code snippet.
```
CascadingModuleDriver.init(getMainApplication(),FILE_PATH);
```
The method signature of the invocation is shown below:
```
    /**
     * 
     * @param mainApplication - Instance of Main Application,
     * instance of Interface implemented by Application class to
     * communicate back with main app project.
     * @param FILE_PATH - File path where you have unzipped your * file.
     */
     void init( @NonNull MainApplication mainApplication, @NonNull String FILE_PATH);
 ```
 5. You can launch the cascading view using the following method invocation.
 ```
 CascadingModuleDriver.launchSearchView(activityContext, FILE_PATH);
```
The method signature of the invocation is shown below:
```
    /**
     * 
     * @param activityContext - Instance of Context.
     * @param FILE_PATH - File path where you have unzipped your * file.
     */
     void init( @NonNull Context activityContext, @NonNull String FILE_PATH);
 ```
## Receiving back the Result of the Cascading Module

The result is send back to the main app module by the CascadingModuleDriver, via the RxBus as follows:

```
 ExchangeObject.DataExchangeObject dataExchangeObject = new ExchangeObject.DataExchangeObject(Modules.MAIN_APP, Modules.CASCADING_SEARCH,selectedHospitalData);
        application.getEventBus().send(dataExchangeObject);
```
You can intercept the result of the event bus as follows:
```
compositeDisposable.add(this.getEventBus()
                .toObservable().subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Consumer() {
                    @Override
                    public void accept(Object exchangeObject) throws Exception {
                        if (exchangeObject instanceof ExchangeObject) {
                                if (exchangeObject instanceof ExchangeObject.DataExchangeObject) {
                                Timber.d("Data Received" + ((ExchangeObject.DataExchangeObject) exchangeObject).data.toString());
                            } else {
                                Timber.e("Received but not intended");
                            }
                        }
                    }
                }, Timber::e));
```
The result object contains in form of DataExchangeObject, the values of all the levels from selected options in the module.
