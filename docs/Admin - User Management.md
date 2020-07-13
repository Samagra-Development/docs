---
id: UserManagement
title: User Management
sidebar_label: User Management
---

## 1. Overview

Since we store all our users in FusionAuth, it makes sence to decouple management bit that from the critical server part of it. So we created a UserManagement package that enables you to manage FusionAuth users, right inside your Mission crontrol system.

## 2. Getting Started

### 2.1 Installation

```
$ npm install --save ra-data-fusionauth
```

### 2.2 Usage

The `ra-data-fusionauth` provider config object:

`{

    'fusionAuthURL': '<Fusion Auth Url>',
    'fusionAuthAPIKey': '<Fusion Auth Api Key>',
    'fusionAuthApplicationId': '<Fusion Auth Application Id>'

}`

```
fusionauthDataProvider( config)
```

In the following example, we import `fusionauthDataProvider` from `ra-data-fusionauth` and give it the fusionauth config.

```js
import React from 'react';
import UserIcon from '@material-ui/icons/Group';
import {Admin, Resource, ListGuesser, ShowGuesser} from 'react-admin';
import fusionauthDataProvider from 'ra-data-fusionauth';

// The following components are created when following the react-admin tutorial
import UserList from './src/Userlist';
import {UserCreate, UserEdit} from './src/UserResource';

function App() {
  const dataProvider = DataProvider({
    fusionAuthURL: '<Fusion Auth Url>',
    fusionAuthAPIKey: '<Fusion Auth Api Key>',
    fusionAuthApplicationId: '<Fusion Auth Application Id>',
  });

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="user"
        list={UserList}
        show={ShowGuesser}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
      />
    </Admin>
  );
}
export default App;
```

### 2.3 Configuring the views

A sample `UserCreate` and `UserList` functions can look like these.

```js
export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="username" />
      <TextInput source="mobilePhone" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="username" />
      <TextInput source="mobilePhone" />
      <TextInput source="email" />
      <BooleanInput source="active" />
      <TextInput source="data.phone" label={'Phone'} />
      <SelectInput
        label={'District'}
        source="data.district"
        choices={disctritChoices}
        optionText="name"
        optionValue="id"
      />
    </SimpleForm>
  </Edit>
);
```

## 3. FAQs

Feel free to write into tech@samagragovernance.in in case you have questions, feedback or want to know more!

## 4. Coming Soon

Please review the following section to get information about planned updates to this module.
