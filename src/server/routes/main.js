import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/ServerRoutes';
import reducer from '../../frontend/reducers';
import render from '../render';
import initialState from '../../frontend/initialState';
import Header from '../../frontend/components/Header';

const main = (req, res, next) => {
  const initData = {};
  if (Object.keys(req.cookies).length > 0) {
    initData.user = {
      email: req.cookies.email,
      name: req.cookies.name,
    };
  }
  try {
    const store = createStore(reducer, initialState(initData));
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Header />
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
