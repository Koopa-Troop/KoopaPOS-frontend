import POSProductList from '../containers/POS/ProductList';
import Login from '../containers/Login';

const serverRoutes = [
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
];

export default serverRoutes;
