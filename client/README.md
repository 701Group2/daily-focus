# Frontend

## Enviroment Set Up

Please refer to the Enviroment Set up Link in table of content. It tells what to install, what command line needs to run and it tells you how to set up.

## High-level architecture

FOCUS is built using React v16.14.0. This is used for compatibility with the Enzyme testing library

-   [Material UI](https://material-ui.com/) (core and icon) and [Font Awesome](https://fontawesome.com/) are used for the application look and feel.
-   [use-persisted-state](https://github.com/donavon/use-persisted-state) library is used to store data when an API endpoint is not yet available.

# Styling

[SCSS module](https://css-tricks.com/css-modules-part-1-need/) files are used for styling. That is, `style.module.scss` files are included within each component folder.

# High-Level Structure

(see [Coding Conventions](https://github.com/SE701Group2/daily-focus/wiki/Coding-Conventions) for more details on how to comply with this file structure)

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

## pages

`LandingPage` is where the user can signup (_note, not currently linked to backend so redirects to home page_) or redirect to the login page  
`LoginPage` is where the user can login with their credentials  
`HomePage` shows the main application contents

## components

### Structural Components

#### Header

`Header` component is shown on the `HomePage`. It contains the `DateTime`, `SearchBar`, and `SelectWidgetsModal`.

#### Body

`Body` component is shown on the `HomePage`. When empty, it contains the `SelectWidgetsModel`. Otherwise, it contains the selected Core Widget Components.

### Core Widget Components:

#### CalendarWidget:

The aim of the `CalendarWidget` is to allow the user to keep track of the present day, week, month, or year. It allows the user to create, update, and delete events.

The calendar widget is implemented using the [React-Calendar package](https://www.npmjs.com/package/react-calendar).

The widget has three components; the first component is the month view. The second component is the event list which will list the events of a selected day (current day by default) underneath the month view. The third component is where users can add new events to the selected day.

<img src="https://i.imgur.com/c0v6c98.png" width="200">

#### ToDoList:

Todolist items are stored in local storage with the key `"todoList"`
Accumulated Task Points for use in the plant game are stored in local storage with the key `"taskPoints"`. Task points increment when a to do list item is checked off, and decrement to a minimum of 0 when one is unchecked.

<img src="https://imgur.com/oglqVZz.jpg" width="200">

#### PlantButton

Plant growing progress is stored in local storage with the key `"progress"`. Task points are decrement to a minimum of 0 when the watering can is clicked.

<img src="https://imgur.com/cr1yKIo.jpg" width="50"> <img src="https://imgur.com/JWgAgYa.jpg" width="300">

#### Timer

<img src="https://imgur.com/DfpnDZA.jpg" width="200">

#### (WIP) Weather:

### Other Components:

#### DateTime

The `DateTime` component shows the date in the format of `hh:mm AM/PM | day date month` . The `setTimeout` method is used so that every minute the component will rerender and fetch the new time. DateTime component was created as a React functional component.

<img src="https://imgur.com/xmNWxx0.jpg" width="200">

#### SearchBar

The `SearchBar` component allows the user to perform a Google search. It is a Material UI InputBase component with an IconButton. On click, a search query will be sent to `www.google.co.nz/search` with the contents of the input box, which opens in a new tab.

<img src="https://imgur.com/mxnPeBV.jpg" width="500">

#### SelectWidgetsModal

Selected widgets are stored in local storage with the key `"selectedWidgets"`

<img src="https://imgur.com/BfI06PK.jpg" width="100"> <img src="https://imgur.com/jmUnsGC.jpg" width="200">

### TESTING

As mentioned on the [Environment Setup](https://github.com/SE701Group2/daily-focus/wiki/Environment-setup) page, you need to use npm version 6. Run `npm install -g npm@6.14.11`

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

For example:

```
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Header from ".";

test("it renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<Header />);
    expect(snapshotComponent).toMatchSnapshot();
});
```

When this test is run for the first time, a snapshot will be generated in a `__snapshots__` folder. This folder should be committed. Pressing `u` in `--watch` mode will regenerate a failing snapshot. This should only be done if the changes are intentional.

## Unit Testing

`enzyme` is used for other unit tests to verify intended functionality:

For example:

```
import React from "react";
import SelectWidgetsModal from ".";
import { shallow } from "enzyme";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

test("Button opens modal when clicked", () => {
    const wrapper = shallow(<SelectWidgetsModal />);
    expect(wrapper.find(Dialog).prop("open")).toBe(false);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(Dialog).prop("open")).toBe(true);
});
```
