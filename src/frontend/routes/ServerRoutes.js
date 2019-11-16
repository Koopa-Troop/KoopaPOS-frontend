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

const ServerRoutes = [
  {
    path: '/',
    component: POSProductList,
    exact: true,
  },
  { path: '/login',
    component: Login,
    exact: true,
  },
  { path: '/sign',
    component: Login,
    exact: true,
  },
  {
    exact: true,
    path: '/products',
    component: Products,
  },
  {
    exact: true,
    path: '/product/create',
    component: ProductForm,
  },
  {
    exact: true,
    path: '/product/:id/edit',
    component: ProductForm,
  },
  {
    exact: true,
    path: '/dashboard',
    component: Dashboard,
  },
  {
    exact: true,
    path: '/pos/product/:id',
    component: POSProduct,
  },
  {
    exact: true,
    path: '/pos/cart',
    component: POSCart,
  },
  {
    exact: true,
    path: '/pos/checkout',
    component: POSCheckout,
  },
  {
    exact: true,
    path: '/pos/search-customer',
    component: POSSearchCustomer,
  },
  {
    exact: true,
    path: '/pos/print',
    component: POSPrint,
  },
];

export default ServerRoutes;
