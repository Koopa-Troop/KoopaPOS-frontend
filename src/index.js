import React from 'react';
import { render } from 'react-dom';

import App from './routes/App';
import './assets/styles/main.scss';

render(
  <App />,
  document.getElementById('app')
);
