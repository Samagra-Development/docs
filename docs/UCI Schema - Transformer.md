---
id: SchemaTransformer
title: 
sidebar_label: Transformer Schema
---

```
{
  "name": "Rasa",
  "tags": ["generic"],
  "type": "rest-service",
  "config": {
    "url": "https://callme.maybe.com", //POST request with param xMessage with xMessage XML will be sent to this URL; The response should be an xMessage XMl;
    "cadence": {
      "concurrent": true,
      "pagination": true,
      "perPage": 100,
      "retries": 0,
      "retries-interval": 10,
      "timeout": 60
    },
    "validation":{
      "in": "xMessage-XML-In",
      "out": "xMessage-XML-Out"
    },
    "credentials": {
      "variable": "tranformerHeadersRasa", // Authorization Header
      "vault": "diksha"
    }
  }
}
```




