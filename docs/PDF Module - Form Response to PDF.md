---
id: FormResponses2PDF
title: Form Response to PDF
sidebar_label: Form Response to PDF (alpha)
---

## 1. Overview

Over the past few years, various day to day functions of governments in India are being rapidly digitized. Information generated from these functions is stored online and made available through dashboards to enable data backed decision making within the government. However, traditionally, reviews within the government heavily relied on printed sheets of data rigorously arranged and distributed to every participant.

It is against this backdrop of an evolving ecosystem of data representation for governance decision making that there was a need to bridge the traditional practice of decision making through paper based reviews to a completely online, dashboard driven reviews.

Key Features

- Convert ODK Form Responses to PDF
- Convert Google Forms to PDF
- Make a base project to convert other forms of templated media to PDF, example Markdown, Images, email etc. This can be done through extending the base converter to suit your needs.

## 2. Setup Module

### 2.0 Disclaimer

- _Note that this project in alpha and the APIs can change without notice. Please use it at your discretion. Though we use it in production, but the we are yet to close the API specification_
- _This doc assumes you have already done the ODK setup for the the setup_

### 2.1 Setting up on a local system

**Step 0:** Clone the base system.

- `git clone https://gitlab.com/Rishabh0402/template-to-pdf`
- Setup the master branch

**Step 1:** Create a Virutal Environment and install the local dependencies

- `pip install -r requirements.txt`
- to test the setup

**Step 2.** Setting up database

- Setup the [PSQL server](dSmall)
- Update the credentials of PSQL in the `config.py` file.
- Migrating the database

**Step 3.** Setup the Google Credentials

- for service account credentials on google developer console.
- Enable the following API => Google Docs, Google Sheets, Google Cloud Storage.
- Configure consent screen.
- Creating a Oauth2 access token json from Google developer console.
- Updating the app and `instance` folder which have the same thing.
- Setting up _Google cloud storage bucket._

**Step 4.**

- Setting up Google App Scripts and publishing it as a web app. This will require you to be the admin of the app or it won't work. (See network tab on Google Chrome dev console if you have issues with it)
- Update the url in `config.py`

**Step 5.**

- Setting up the template
- Setting up the ingestor

**Step 6.**

- Adding ODK credentials to `config.py`

### 2.2 Setting up on Server

Coming Soon ...

### 2.3 Generating PDFs

PDF will be continuously generated as long as you have [Google App Script Quota](https://developers.google.com/apps-script/guides/services/quotas).

### 2.4 Retrieving PDFs

To retrieve PDFs use the APIs. Detailed API doc available [here](APIDocPDFGen)

## 3. FAQs

**1. What will the data collection API return?** It will return {"status": status, "uniqueId": uniqueId} for all requests.

**2. What will the status checking API return?** It will return the final url of the pdf uploaded to GCS or the current status. Check section “Output for Status Checking API”.

**3. How will you get the pdf url if it is 300th request in 1 minute?** The data collection API will implement queuing and it’ll return response {"status": status, "uniqueId": uniqueId} for all requests. But the status checking API will return the current status of the request. Check section “Output for Status Checking API”.

**4. How will you check if the pdf is generated for a particular request?** It can be done via the status checking API. It will check the status of your request by providing the uniqueID, varMappingID, docTemplateID. If the pdf is generated and uploaded to GCS then it’ll return the url of uploaded PDF, else it’ll return the current status of the request. OR you can create a custom route which can search using any of the available data from the database.

**5. When the template placeholder `<<19>>` for an image/text is not found, what will it do.** If the placeholder for an image/text is not found then no error or exception will be thrown, it’ll be replaced by NO_TEXT_FOUND. The PDF will still be generated using the provided data and arguments.

**6. How will the queue process the requests?** It will process requests in fifo order + we have a plan to implement priority queue..

**7. What about API authentication** The API uses Token authentication.

**8. When will the API retry for executing the request** The API will retry only when the request is failed due to an unknown error.

**9. What will be the maximum number of retries?** A request will be retried at max 3 times. Then it’ll fail permanently.

**10. How long would it take to generate pdf for a particular request?** The pdf for a request would be generated in less than a minute. But the uploading of PDF to the GCS takes place in the cycles (where 1 cycle means processing of 5 requests). So, the final PDF url would be available in about 5 minutes.

**11. How are bulk requests different from single requests?**  
 The Job ID for bulk should remain same but uniqueID will be different.   
**12. What will happen when an option value is not found?**  
 Then it’ll write NO_TEXT_FOUND in the placeholder.   
**13. Will the software delete the intermediate files (doc files created on google drive)?**   
 Yes, it has a module called cache cleaner, which will delete the intermediate files.

## 4. Coming Soon

- [ ] Monitoring setup
- [ ] Single click setup except for the base project
- [ ] FusionAuth integration
