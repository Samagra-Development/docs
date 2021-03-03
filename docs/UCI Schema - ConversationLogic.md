---
id: SchemaConversationLogic
title: 
sidebar_label: Conversation Logic Schema
---

```
{
  "transformers": [
    {
      "id": "82c95b41-22e5-445c-b5ff" // Hindi Audio to text (Generic Transformer)
    },
    {
      "id": "82c95b41-22e5-445c-b5ff" // Hindi to English (Generic Transformer)
    },
    {
      "id": "82c95b41-22e5-445c-b5ff" // Intent from English (Generic Transformer)
    },
    {
      "id": "82c95b41-22e5-445c-b5ff",
      "meta": {
        "form": "https://hosted.my.form.here.com",
        "hiddenFields": [
          {
            "name": "head_report_link",
            "transformer": {
              "id": "82c95b41-22e5-445c-b5ff", // URL Shortner (Generic Transformer)
              "meta": {
                "dataObjName": "user",
                "template": "8dd04833-fe19-480a-b7e9-726d868866d8"
              }
            }
          },
          {
            "name": "user_id",
            "transformer": {
              "id": "82c95b41-22e5-445c-b5ff", // User Info Updater in Hidden Field (Generic Transformer)
              "meta": {
                "dataObjName": "user",
                "template": "8dd04833-fe19-480a-b7e9-726d868866d8"
              }
            }
          },
          {
            "name": "user_age",
            "transformer": {
              "id": "82c95b41-22e5-445c-b5ff", // User Info Updater in Hidden Field (Generic Transformer)
              "meta": {
                "dataObjName": "user",
                "template": "8dd04833-fe19-480a-b7e9-726d868866d8"
              }
            }
          }
        ]
      }
    }
  ],
  "adapter": "b5ff"
}
```




