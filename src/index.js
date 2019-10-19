import React from 'react';
import { render } from 'react-dom';

import App from './routes/App';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/main.scss';

render(
  <App />,
  document.getElementById('app')
);
