import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import ProductList from '../containers/ProductList';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={ProductList} />
      </Switch>
  </BrowserRouter>
);

export default App;
