# Frontend

## How to set up your project?

-   Install node js
-   Install npm version 6 `npm install -g npm@6.14.11`
-   Follow the workflow for this project (Fork, run `npm install` in client folder and finally `npm start`)

Please refer to the [Environment Setup](https://github.com/SE701Group2/daily-focus/wiki/Environment-setup) Link in table of content for more information

## High-level architecture

FOCUS is built using React v16.14.0. This is used for compatibility with the Enzyme testing library

-   [Material UI](https://material-ui.com/) (core and icon) and [Font Awesome](https://fontawesome.com/) are used for the application look and feel.
-   [use-persisted-state](https://github.com/donavon/use-persisted-state) library is used to store data when an API endpoint is not yet available.

## Coding,Styling and File Struture

`style.module.scss` is used for styling purposes.

### File structure of the app:

```
src
--- App
--- components
--- images
--- pages
--- index.js
--- style.css
```

## App

`App` component defines the app routes:  
`/` and `/signup` paths show the `LandingPage`  
`/login` path shows the `LoginPage`  
`/home` path shows the `HomePage`

## Pages

`LandingPage` is where the user can signup (_note, not currently linked to backend so redirects to home page_) or redirect to the login page  
`LoginPage` is where the user can login with their credentials  
`HomePage` shows the main application contents

## Components

### Component Structure

```
MyComponent/
--- SubComponent/
--- --- __snapshots__
--- --- index.js
--- --- style.module.scss
--- --- SubComponent.test.js
--- ...
--- index.js
--- style.module.scss
--- MyComponent.test.js
```

### Structural Components

For this project, the components we have so far are:

-   Header
-   Body
-   Core widget Components
    -   CalendarWidget
    -   To Do List
    -   PlantButton
    -   Timer
    -   Weather
-   Other components:
    -   DateTime
    -   Search Bar
    -   SelectWidgetModal

Please refer to the [Front End](https://github.com/SE701Group2/daily-focus/wiki/Front-End) under Architecture heading in the Wiki for more information about each individual components and how each of them are set up.

## Testing

For testing purposes, you are required to use npm version 6. Run `npm install -g npm@6.14.11`

Test files must be named like: `MyComponent.test.js`

`npm test .` will run all tests. Running `npm test --watch` will allow any updated test to run on save.

## Libraries Used

-   [Jest](https://jestjs.io/)
-   [Jest-Dom](https://github.com/testing-library/jest-dom) v^5.11.9
-   [Enzyme](https://enzymejs.github.io/enzyme/) v^3.11.0
    -   [Enzyme Adapter React 16](https://www.npmjs.com/package/enzyme-adapter-react-16) v^1.15.6
-   [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) v^16.14.0

## Snapshot Testing

Snapshot testing is used for React Components. [See here](https://jestjs.io/docs/snapshot-testing) for info on how and why to use snapshot testing.  
`react-test-renderer` library is used. (_Note, Enzyme is not used due to a version incompatibility with Jest causing the generated snapshots to be broken. [See here.](https://stackoverflow.com/questions/54419342/jest-enzyme-shallowwrapper-is-empty-when-creating-snapshot)_)

See the [Frontend Testing](https://github.com/SE701Group2/daily-focus/wiki/Front-End-Testing) Link under Testing for example test code

## Unit Testing

`enzyme` is used for other unit tests to verify intended functionality:

See the [Frontend Testing](https://github.com/SE701Group2/daily-focus/wiki/Front-End-Testing) Link under Testing for example test code
