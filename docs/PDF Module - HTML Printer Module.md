---
id: HTML2PDF
title: HTML Pages to PDF
sidebar_label: HTML Pages to PDF
---

## 1. Overview

A lot of systems require HTML to be converted to PDF. This module helps you build PDFs for a url through an API. Internally this uses Chrome to render the pages and then convertes them to PDF using the [puppeteer](https://github.com/puppeteer/puppeteer).

## 2. Getting started

### 2.1 Installation

1. `git clone https://github.com/Samagra-Development/html-printer`
2. Setup [puppeteer](https://github.com/puppeteer/puppeteer#installation)
3. Install the dependencies. `yarn install`
4. Start the server. `yarn start`. This will start a server on the port `3022` or if you have specified a `PORT` as and `env` variable then it would pick up that.

### 2.2 Checking the PDFs

To download the PDF for a specific URL open your browser and use the query params as follows http://localhost:3022?/export/pdf?url=https://github.com/

## 3. Limitations

- This speed of the PDF generation is directly proportional to the infra that you set thing and the speed of the site. So sometimes it may take more than 30 seconds to build a PDF.
- There is no queue management on the system. So a lot of requests in a quick succession will lead to a consumption of a lot of memory and can lead to crashes.

## 4. FAQs

Feel free to write into tech@samagragovernance.in in case you have questions, feedback or want to know more!

## 5. Coming Soon

- Queue to manage multiple requests
- Async API to and webhook implementation
