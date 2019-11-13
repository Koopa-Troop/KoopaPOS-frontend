import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import ProductList from '../containers/ProductList';
import Product from '../containers/Product';
import Cart from '../containers/Cart';
import Checkout from '../containers/Checkout';
import SearchCustomer from '../containers/SearchCustomer';
import Print from '../containers/Print';
import Prueba from '../containers/Prueba';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={ProductList} />
      <Route exact path='/product/:id' component={Product} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/checkout' component={Checkout} />
      <Route exact path='/search-customer' component={SearchCustomer} />
      <Route exact path='/print' component={Print} />
      <Route exact path='/prueba' component={Prueba} />
    </Switch>
  </BrowserRouter>
);

export default App;
