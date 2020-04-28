---
id: AdminSidebarConfig
title: Sidebar Config and Nested Dropdowns
sidebar_label: Sidebar Config
---

## Overview

To manage what shows in the sidebar, we have added a sidebar config in the project. It allows for nested dropdowns and therefore allows you to have a hierarchy in your sidebar.

## Getting Started

`sidebar-config.json` in `src/` will be used to create sidebar content.

### Sample :

```json
[
  {
    "name": "Dashboard",
    "url": "e/dashboard",
    "icon": "SettingsIcon"
  },
  {
    "name": "Locations",
    "url": "locations",
    "icon": "SettingsIcon"
  },
  {
    "name": "Posts",
    "url": "posts",
    "icon": "SettingsIcon"
  }
]
```

Here we have 3 modules, namely Posts, Locations and, Dashboard each of these represents a list item in the sidebar where,

- "name" is the lable which will be displayed in the sidebar.
- "url" is the path used for routing.
- "icon" is the icon identifier as **string**

## Nested Routes

You can provide "children" to each sidebar item for nested routes.

### Sample

```json
[
  {
    "name": "Dashboard",
    "url": "e/dashboard",
    "icon": "SettingsIcon",
    "children": [
      {
        "name": "Analytics Dashboards",
        "url": "e/dashboard/analytics"
      }
    ]
  }
]
```

Here you can provide the following properties:

- "name" is the lable which will be displayed in the sidebar.
- "url" is the path used for routing.
