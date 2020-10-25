# FooBarInc
User interface for accessing House Price Paid Data (PPD)

## How to set up


### Open the repository
Using terminal cd into the repo using.

```
cd foo-bar-inc/
```

### Install node packages
NPM handles the build dependencies and tooling. In the terminal install the node modules using the command below.

```
npm install
```

### Running a local instance of the UI
To run the UI type the following line in your terminal, which will create a local webserver.

```
npm run start
```

### Access the UI

To view the UI in your browser, simply access localhost:3000 in your web browser.


## Packages used

### React Testing Library

React testing library was used for testing the UI with unit tests in an accessible way.

### React Dates

[Airbnb's React Dates](https://github.com/airbnb/react-dates) was used for a date picker component to select a date range.

### Create react app

Create react app was used to quickly get the boilerplate set up for the app.


Not all components/routes have unit tests, for an example of how unit tests would test accessibilty see the pagination.test.tsx or run `npm run test`.
