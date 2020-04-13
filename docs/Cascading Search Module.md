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

