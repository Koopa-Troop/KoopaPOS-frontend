import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />>
      </Switch>
  </BrowserRouter>
);

export default App;
