---
id: AppDataManagement
title: Application Data Management
sidebar_label: Application Data Management
---

## 1. Overview

Connecting to additonal databases can be done by creating an additional dataprovider for your database if it doesn't exist or using an existing one, example - Hasura can be connected to PSQL and has a dataprovider. Dataproviders can be built easily and for an example we have built one for FusionAuth which you can check out [here](https://github.com/ChakshuGautam/ra-data-fusionAuth).

For a detailed view on how to build a dataprovider go to next section.

## 2. Terminology and Setup

### 2.1 Data Providers

Whenever react-admin needs to communicate with the API, it calls methods on the Data Provider object.

```js
dataProvider.getOne('posts', {id: 123}).then(response => {
  console.log(response.data); // { id: 123, title: "hello, world" }
});
```

It's the Data Provider's job to turns these method calls into HTTP requests, and transform the HTTP responses to the data format expected by react-admin. In technical terms, a Data Provider is an _adapter_ for an API.

And to inject a Data Provider in a react-admin application, pass it as the `dataProvider` prop of the `<Admin>` component, as follows:

```jsx
import {Admin, Resource} from 'react-admin';
import dataProvider from '../myDataProvider';

const App = () => <Admin dataProvider={dataProvider}>// ...</Admin>;
```

Thanks to this adapter injection system, react-admin can communicate with any API, whether it uses REST, GraphQL, RPC, or even SOAP, regardless of the dialect it uses. The Data Provider is also the ideal place to add custom HTTP headers, authentication, etc.

![Data Provider architecture](../img/data-provider.png)

A Data Provider must have the following methods:

```jsx
const dataProvider = {
  getList: (resource, params) => Promise,
  getOne: (resource, params) => Promise,
  getMany: (resource, params) => Promise,
  getManyReference: (resource, params) => Promise,
  create: (resource, params) => Promise,
  update: (resource, params) => Promise,
  updateMany: (resource, params) => Promise,
  delete: (resource, params) => Promise,
  deleteMany: (resource, params) => Promise,
};
```

You can find an example Data Provider implementation at the end of this chapter.

**Tip**: In react-admin v2, Data Providers used to be functions, not objects. React-admin v3 can detect a legacy Data Provider and wrap an object around it. So Data Providers developed for react-admin v2 still work with react-admin v3.

### 2.2 Available Providers

The react-admin project includes 4 Data Providers:

- Simple REST: [marmelab/ra-data-simple-rest](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-simple-rest) ([read more below](#usage)). It serves mostly as an example. Incidentally, it is compatible with the [FakeRest](https://github.com/marmelab/FakeRest) API.
- **[JSON server](https://github.com/typicode/json-server)**: [marmelab/ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server). Great for prototyping an admin over a yet-to-be-developed REST API.
- [Graphcool](https://www.graph.cool/): [marmelab/ra-data-graphcool](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-graphcool). A provider for GraphQL servers following the Graphcool convention. Incidentally, this package builds up on [marmelab/ra-data-graphql](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-graphql), which lets you develop providers for other GraphQL conventions.
- Local JSON: [marmelab/ra-data-fakerest](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-fakerest). Based on a local object, it doesn't even use HTTP. Use it for testing purposes.

Developers from the react-admin community have open-sourced Data Providers for many more backends:

- **[Django Rest Framework](https://www.django-rest-framework.org/)**: [synaptic-cl/ra-data-drf](https://github.com/synaptic-cl/ra-data-drf)
- **[Express & Sequelize](https://github.com/lalalilo/express-sequelize-crud)**: [express-sequelize-crud](https://github.com/lalalilo/express-sequelize-crud)
- **[Feathersjs](http://www.feathersjs.com/)**: [josx/ra-data-feathers](https://github.com/josx/ra-data-feathers)
- **[Firebase](https://firebase.google.com/docs/database)**: [aymendhaya/ra-data-firebase-client](https://github.com/aymendhaya/ra-data-firebase-client).
- **[Firestore](https://firebase.google.com/docs/firestore)**: [rafalzawadzki/ra-data-firestore-client](https://github.com/rafalzawadzki/ra-data-firestore-client).
- **[GraphCool](http://www.graph.cool/)**: [marmelab/ra-data-graphcool](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-graphcool) (uses [Apollo](http://www.apollodata.com/))
- **[GraphQL](http://graphql.org/)**: [marmelab/ra-data-graphql](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-graphql) (uses [Apollo](http://www.apollodata.com/))
- **[HAL](http://stateless.co/hal_specification.html)**: [b-social/ra-data-hal](https://github.com/b-social/ra-data-hal)
- **[Hasura](https://github.com/hasura/graphql-engine)**: [hasura/ra-data-hasura](https://github.com/hasura/graphql-engine/tree/master/community/tools/ra-data-hasura)
- **[Hydra](http://www.hydra-cg.com/) / [JSON-LD](https://json-ld.org/)**: [api-platform/admin/hydra](https://github.com/api-platform/admin/blob/master/src/hydra/dataProvider.js)
- **[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)**: [tykoth/ra-data-dexie](https://github.com/tykoth/ra-data-dexie)
- **[JSON API](http://jsonapi.org/)**: [henvo/ra-jsonapi-client](https://github.com/henvo/ra-jsonapi-client)
- **[JSON HAL](https://tools.ietf.org/html/draft-kelly-json-hal-08)**: [ra-data-json-hal](https://www.npmjs.com/package/ra-data-json-hal)
- **[JSON server](https://github.com/typicode/json-server)**: [marmelab/ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server).
- **[Loopback](https://loopback.io/)**: [darthwesker/react-admin-loopback](https://github.com/darthwesker/react-admin-loopback)
- **[Moleculer Microservices](https://github.com/RancaguaInnova/moleculer-data-provider)**: [RancaguaInnova/moleculer-data-provider](https://github.com/RancaguaInnova/moleculer-data-provider)
- **[NestJS CRUD](https://github.com/nestjsx/crud)**: [FusionWorks/react-admin-nestjsx-crud-dataprovider](https://github.com/FusionWorks/react-admin-nestjsx-crud-dataprovider)
- **[Parse](https://parseplatform.org/)**: [almahdi/ra-data-parse](https://github.com/almahdi/ra-data-parse)
- **[PostgREST](https://postgrest.org/)**: [raphiniert-com/ra-data-postgrest](https://github.com/raphiniert-com/ra-data-postgrest)
- **[Prisma](https://github.com/weakky/ra-data-prisma)**: [weakky/ra-data-prisma](https://github.com/weakky/ra-data-prisma)
- **[OpenCRUD](https://www.opencrud.org/)**: [weakky/ra-data-opencrud](https://github.com/Weakky/ra-data-opencrud)
- **[REST-HAPI](https://github.com/JKHeadley/rest-hapi)**: [ra-data-rest-hapi](https://github.com/mkg20001/ra-data-rest-hapi)
- **[Sails.js](https://sailsjs.com/)**: [mpampin/ra-data-json-sails](https://github.com/mpampin/ra-data-json-sails)
- **[Spring Boot](https://spring.io/projects/spring-boot)**: [vishpat/ra-data-springboot-rest](https://github.com/vishpat/ra-data-springboot-rest)
- **[Strapi](https://strapi.io/)**: [nazirov91/ra-strapi-rest](https://github.com/nazirov91/ra-strapi-rest)

If you've written a Data Provider for another backend, and open-sourced it, please help complete this list with your package.

**Tip**: In version 1, react-admin was called [admin-on-rest](https://github.com/marmelab/admin-on-rest) (AOR), and developers shared Data Providers for even more backends. Due to breaking changes in v2, these providers are no longer working. Fortunately, Data Providers aren't complex pieces of code, and using legacy Data Provider with a recent react-admin version requires minimal changes. If you are a maintainer of one of these projects, we would warmly welcome an upgrade.

- **[DynamoDb](https://github.com/abiglobalhealth/aor-dynamodb-client)**: [abiglobalhealth/aor-dynamodb-client](https://github.com/abiglobalhealth/aor-dynamodb-client)
- **[Epilogue](https://github.com/dchester/epilogue)**: [dunghuynh/aor-epilogue-client](https://github.com/dunghuynh/aor-epilogue-client)
- **[Parse Server](https://github.com/ParsePlatform/parse-server)**: [leperone/aor-parseserver-client](https://github.com/leperone/aor-parseserver-client)
- **[Xmysql](https://github.com/o1lab/xmysql)**: [soaserele/aor-xmysql](https://github.com/soaserele/aor-xmysql)

### 2.3 Usage

As an example, let's focus on the Simple REST data provider. It fits REST APIs using simple GET parameters for filters and sorting.

Install the `ra-data-simple-rest` package to use this provider.

```sh
yarn add ra-data-simple-rest
```

Then, initialize the provider with the REST backend URL, and pass the result to the `dataProvider` prop of the `<Admin>` component:

```jsx
// in src/App.js
import React from 'react';
import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import {PostList} from './posts';

const App = () => (
  <Admin dataProvider={simpleRestProvider('http://path.to.my.api/')}>
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;
```

Here is how this Data Provider maps react-admin calls to API calls:

| Method name | API call |
| --- | --- |
| `getList` | `GET http://my.api.url/posts?sort=["title","ASC"]&range=[0, 24]&filter={"title":"bar"}` |
| `getOne` | `GET http://my.api.url/posts/123` |
| `getMany` | `GET http://my.api.url/posts?filter={"id":[123,456,789]}` |
| `getManyReference` | `GET http://my.api.url/posts?filter={"author_id":345}` |
| `create` | `POST http://my.api.url/posts/123` |
| `update` | `PUT http://my.api.url/posts/123` |
| `updateMany` | Multiple calls to `PUT http://my.api.url/posts/123` |
| `delete` | `DELETE http://my.api.url/posts/123` |
| `deteleMany` | Multiple calls to `DELETE http://my.api.url/posts/123` |

**Note**: The simple REST client expects the API to include a `Content-Range` header in the response to `getList` calls. The value must be the total number of resources in the collection. This allows react-admin to know how many pages of resources there are in total, and build the pagination controls.

```
Content-Range: posts 0-24/319
```

If your API is on another domain as the JS code, you'll need to whitelist this header with an `Access-Control-Expose-Headers` [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) header.

```
Access-Control-Expose-Headers: Content-Range
```

### 2.4 Handling multiple databases

A way of handling multiple dataproviders is to create a `master dataprovider` which would then call the individual dataproviders to get he the data for individual resources. A folder with the following structure should do

```
	dataProvider
		dataprovider1.js
		dataprovider2.js
		index.js
```

While doing that, you'll have to put conditions on which resource you want to use which data provider shown as follows.

```javascript
import dataprovider1 from './dataprovider1';
import dataprovider2 from './dataprovider2';
import dataproviderFromPackage from './dummyLibrary';

const dataProviderResources = {
  user: dataprovider1,
  books: dataproviderFromPackage,
  default: dataprovider1,
};
```

here, you'll have to populate _dataProviderResources_ object with resources as key and dataprovider as value.

**default** is mendatory as a data provider in this, as everytime when any the resource is not assigned explicitly in this configuration, it will automatically fallback to the default data provider.

Note that this works only for dataproviders built with the new dataprovider scheme which ensures it be an `object` rather than a function. If you have an older dataprovider, you can convert it in the following way, (Example for hasura)

```javascript
const dataProviderHasura = hasuraDataProvider('http://xxx.x.x.x:xxxx', headers);

export default {
  getList: (resource, params) => dataProviderHasura(GET_LIST, resource, params),
  getOne: (resource, params) => dataProviderHasura(GET_ONE, resource, params),
  getMany: (resource, params) => dataProviderHasura(GET_MANY, resource, params),
  getManyReference: (resource, params) =>
    dataProviderHasura(GET_MANY_REFERENCE, resource, params),
  update: (resource, params) => dataProviderHasura(UPDATE, resource, params),
  updateMany: (resource, params) =>
    dataProviderHasura(UPDATE_MANY, resource, params),
  create: (resource, params) => dataProviderHasura(CREATE, resource, params),
  delete: (resource, params) => dataProviderHasura(DELETE, resource, params),
  deleteMany: (resource, params) =>
    dataProviderHasura(DELETE_MANY, resource, params),
};
```

After this all you need to do is import this `master dataprovider` to the app like this `import dataProvider from "./react-admin-base/dataProviders";`

## 3. FAQs

To be added based on incoming feedback

## 4. Coming Soon

Please review the following section to get information about planned updates to this module.
