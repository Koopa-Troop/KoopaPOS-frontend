import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import getCookie from '../utils/getCookie';

const AuthenticatedRoute = ({ authenticated, component: Component, ...otherProps }) => {
  const history = useHistory();
  if (authenticated && getCookie('token') === '') {
    history.push('/login');
  } else if (!authenticated && getCookie('token')) {
    history.push('/');
  }
  return (
    <Route component={Component} {...otherProps} />
  );
};

export default AuthenticatedRoute;
