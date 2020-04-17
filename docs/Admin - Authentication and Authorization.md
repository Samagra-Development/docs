---
id: AdminAuthenticationAndAuthorisation
title: Authentication and Authorisation
sidebar_label: Authentication and Authorisation
---

## Installation

`npm install ra-auth-fusionauth`

## Usage

Authentication is provided through FusionAuth and any user with the role of `Admin` is allowed to use the admin. For this purpose we have created and authprovider for Fusionauth.

For initialization you would need the following three things,

1. Fusionauth API Key - `apiKey`
2. Fusion auth server URL - `url`
3. Fusionauth applciation ID (The one the user is part of) - `appID`

Only valid users who are registered to the application with appID and role `Admin` will be allowed to use admin

To configure the authprovider use the following,

```javascript
const authProvider = new FAAuthProvider(
  config.fusionAuth.apiKey,
  config.fusionAuth.url,
  config.fusionAuth.appID,
);
```

And in your App.js use it as follows

```javascript
const App = () => {
  return (
    <Provider
      store={createAdminStore({
        authProvider,
        history,
        dataProvider,
      })}>
      <Suspense fallback={<div>Loading...</div>}>
        <Admin authProvider={authProvider} title="My Admin"></Admin>
      </Suspense>
    </Provider>
  );
};
```
