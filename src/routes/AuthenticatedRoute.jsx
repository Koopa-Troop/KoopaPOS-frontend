import React from 'react';
import { connect } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

const AuthenticatedRoute = ({ authenticated, component: Component, user, ...otherProps }) => {
  const history = useHistory();
  if (authenticated && Object.keys(user).length === 0) {
    history.push('/login');
  } else if (!authenticated && Object.keys(user).length > 0) {
    history.push('/');
  }
  return (
    <Route component={Component} {...otherProps} />
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
