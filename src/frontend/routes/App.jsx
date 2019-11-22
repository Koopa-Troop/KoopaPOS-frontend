import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import POSProductList from '../containers/POS/ProductList';
import POSProduct from '../containers/POS/Product';
import POSCart from '../containers/POS/Cart';
import POSCheckout from '../containers/POS/Checkout';
import POSSearchCustomer from '../containers/POS/SearchCustomer';
import POSPrint from '../containers/POS/Print';
import Products from '../containers/Products';
import ProductForm from '../containers/ProductForm';
import Dashboard from '../containers/Dashboard';
import Header from '../components/Header';
import AuthenticatedRoute from './AuthenticatedRoute';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <AuthenticatedRoute exact path='/login' component={Login} />
      <AuthenticatedRoute exact path='/register' component={Login} />
      <AuthenticatedRoute exact authenticated path='/' component={POSProductList} />
      <AuthenticatedRoute exact authenticated path='/products' component={Products} />
      <AuthenticatedRoute exact authenticated path='/product/create' component={ProductForm} />
      <AuthenticatedRoute exact authenticated path='/product/:id/edit' component={ProductForm} />
      <AuthenticatedRoute exact authenticated path='/dashboard' component={Dashboard} />
      <AuthenticatedRoute exact authenticated path='/pos/product/:id' component={POSProduct} />
      <AuthenticatedRoute exact authenticated path='/pos/cart' component={POSCart} />
      <AuthenticatedRoute exact authenticated path='/pos/checkout' component={POSCheckout} />
      <AuthenticatedRoute exact authenticated path='/pos/search-customer' component={POSSearchCustomer} />
      <AuthenticatedRoute exact authenticated path='/pos/print' component={POSPrint} />
    </Switch>
  </BrowserRouter>
);

export default App;
