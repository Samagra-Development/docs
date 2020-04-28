---
id: AdminAddingMultipleLanguages
title: Adding Multiple Languages
sidebar_label: Adding Multiple Languages
---

## Overview

We supports multiple language integration throughout the admin portal. User will get language switcher on the top right of the Appbar.

### Implementation:

#### You'll need language files for all the supported files in JSON format. For example:

_For English JSON:_ english.json

```jsx
  {
		"ra":{
			"actions":{
				"add": "Add",
				"remove": "Remove"
			}
		}
	}
```

_For French JSON:_ french.json

```jsx
 {
		"ra":{
				"actions":{
					"add": "Ajouter",
					"remove": "Supprimer"
			}
		}
	}
```

#### After this, you'll need to import and include these files into the `i18nProvider` in `src/App.js` as follows:

```jsx
const frenchMessages = require('./french.JSON'); //path to french language JSON file
const englishMessages = require('./english.JSON'); //path to french language JSON file
const messages = {
  fr: frenchMessages,
  en: englishMessages,
};
```

In Above sample, fr and en are the language codes which will be used as the identifiers of the language. Messages object will be supplied to `i18nProvider` as follows

```jsx
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'en');
```

Here we are using [`polyglotI18nProvider`](https://github.com/marmelab/react-admin/blob/master/docs/Translation.md) for i18n and setting `'en'` as the default language.

Once you are done with setting up the provider, you just need to include it in the `<Admin>` and `<Provider>` selectors as follows,

```jsx
 const App = () => {
       return (
           <Provider
     store={createAdminStore({
                   authProvider,
     history,
     i18nProvider,
     dataProvider,
     })}
           >
    <MuiThemeProvider theme={createMuiTheme(theme)}>
    <Admin  i18nProvider={i18nProvider}
                       catchAll={Error404Page}
                       appLayout={CustomLayout}
                       authProvider={authProvider}
                       ...
```

Now you can move forward to add languages in `config.json` in `src/` For example:

```jsx
...
"languages": [
  {
      "id": "en",
      "title": "English",
      "flag": "us"
  },
  {
      "id": "fr",
      "title": "French",
      "flag": "fr"
  }
]
...
```

Here we have 2 languages, **French** and **English** with following parameters:

- "id" : language identifier // Should be same as in the messages object
- "title" : lable, which will be visible in the language switcher on the top right of Appbar
- "flag" : (optional) This will be the name of flag for the language to display in language switcher. You will have to save these flag files (as png) in `public/assets/images/flags/`

### Usage:

All the translation of texts inside the `<Admin>` selector will be taken care of automatically by the react-admin. But you'll have to implement all other translations by yourself and you can translate static text as well as dynamic text through translation provider as follows:

```jsx
import { translate } from "react-admin";
...
<div>{translate("ra.actions.add")}</div>
...
```

Translation provider will pick the language file according to the selected language and will look for property `ra.actions.add` and will display the value of that propery dynamically.
