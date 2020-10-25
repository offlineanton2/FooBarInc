import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from "./components/header";
import Records from './routes/records';
import Record from './routes/record';

const App = () => {
  return (
    <>
      <Header>
        <h1>FooBar Inc</h1>
      </Header>
      <Router>
        <Switch>
          <Route path="/:id" component={Record} />
          <Route path="/">
            <Records />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
