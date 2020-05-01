---
id: AdminAddingCustomRoutes
title: Adding Custom Routes
sidebar_label: Custom Routes
---

For any Admin there is always a need to adding links other than resources. Admin supports adding additonal links inside the Admin from both Fuse as well as outside it.

## Custom Routes Addition

For custom page routing we have a lazy loaded module i.e. _ExternalModule_ which consists of all the external routing components with their separate redux.

- Routing in external module is implemented using [react-redux-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- Path to the Externak module : `src/e/`

## Examples

- `<Route path="/e/dashboard" component={DashboardPage} icon={ComponentsIcon} />` In the above example we have defined a route `/e/dashboard` which will navigate to _Dashboard_ page component and sidebar will have an Icon of _Component Icon_
