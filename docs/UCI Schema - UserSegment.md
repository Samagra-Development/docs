---
id: SchemaUserSegment
title: 
sidebar_label: User Segment Schema
---

```
{
  "all": {
    "type": "gql",
    "config": {
      "gql": "query getUsers {users: getUsersByQuery(queryString: \"id: 2c5816ea-63ff-483b-812b-1f250ebf50f3\") {id full_name data: data_json {accountName phone roleData { block designation district }}}}",
      "cadence": {
        "concurrent": true,
        "pageParam": "page", // Additional variable name to get paginated results.
        "pagination": true,
        "perPage": 100,
        "retries": 0,
        "retries-interval": 10,
        "timeout": 60
      },
      "credentials": {
        "variable": "gqlServerOdisha",
        "vault": "diksha"
      }
    }
  },
  "byID": {
    "type": "fusionAuth",
    "config": {
      "cadence": {
        "concurrent": true,
        "pagination": true,
        "perPage": 100,
        "retries": 0,
        "retries-interval": 10,
        "timeout": 60
      },
      "credentials": {
        "variable": "gqlServerOdisha", // Authorization Header
        "vault": "diksha"
      }
    }
  },
  "byPhone": {
    "type": "oauth2",
    "config": {
      "claims": ["email", "name", "fullName"],
      "cadence": {
        "concurrent": true,
        "pagination": true,
        "perPage": 100,
        "retries": 0,
        "retries-interval": 10,
        "timeout": 60
      },
      "credentials": {
        "clientID": "vaultKey1",
        "clientSecret": "vaultKey2",
        "vault": "diksha"
      }
    }
  }
}

```




