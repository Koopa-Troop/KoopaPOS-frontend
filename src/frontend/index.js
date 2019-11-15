import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/main.scss';
import initialState from './initialState';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, initialState, composeEnhancers());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
