---
id: AdminGettingStarted
title: Getting started
sidebar_label: Getting Started
---

# Getting Started

A frontend Framework for building admin applications running in the browser, on top of REST/GraphQL APIs, using ES6, [React](https://facebook.github.io/react/) and [Material Design](https://material.io/). This is built over [React-Admin](https://marmelab.com/react-admin/) built by marmelab.

## Installation

Use the following starter project to build your first app. Since this is a sample opinionated configuration feel free to make any change to it.

`git clone https://gitlab.com/ctt-samagra/opensource-packages/user-management-package/samagra-admin-module`

## Basics of react-admin

Read the [Tutorial](./Tutorial.md) for a 30 minutes introduction. After that, continue reading the [Documentation](./DataProviders.md), or checkout the [source code of the demo](https://github.com/marmelab/react-admin/tree/master/examples/demo) for an example usage.

### At a Glance

```jsx
// in app.js
import React from 'react';
import {render} from 'react-dom';
import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {PostList, PostEdit, PostCreate, PostIcon} from './posts';
render(
  <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>,
  document.getElementById('root'),
);
```

The `<Resource>` component is a configuration component that allows to define sub components for each of the admin view: `list`, `edit`, and `create`. These components use Material UI and custom components from react-admin:

```jsx
// in posts.js
import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  TextInput,
  DateInput,
} from 'react-admin';

import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;
export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="published_at" />
      <TextField source="average_note" />
      <TextField source="views" />
      <EditButton basePath="/posts" />
    </Datagrid>
  </List>
);

const PostTitle = ({record}) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="teaser" options={{multiLine: true}} />
      <TextInput multiline source="body" />
      <DateInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
      <TextInput disabled label="Nb views" source="views" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="teaser" options={{multiLine: true}} />
      <TextInput multiline source="body" />
      <TextInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
    </SimpleForm>
  </Create>
);
```

## Whats next?

Now that you have a basic understanding of how things work, let's start with adding more capabilities to it.

- [Adding authentication and authorization](./AdminAuthenticationAndAuthorisation)
- [Adding Custom Routes](./AdminAddingCustomRoutes)
- [Adding multiple data providers](./AdminAddingExternalData)
