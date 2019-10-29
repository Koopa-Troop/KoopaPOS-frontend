import React from 'react';
import { render } from 'react-dom';
import { Provider, compose } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/main.scss';
import initialState from './initialState';

const store = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
