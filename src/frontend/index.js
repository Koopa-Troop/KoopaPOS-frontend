import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import App from './routes/App';
import reducer from './reducers';
//import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/fontawesome/css/all.min.css';
import './assets/styles/main.scss';
import initialState from './initialState';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, initialState(), composeEnhancers(
  applyMiddleware(thunk),
));
const history = createBrowserHistory();

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
