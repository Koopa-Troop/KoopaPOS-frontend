import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import ProductList from '../containers/ProductList';
import Product from '../containers/Product';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={ProductList} />
      <Route exact path='/product/:id' component={Product} />
    </Switch>
  </BrowserRouter>
);

export default App;
