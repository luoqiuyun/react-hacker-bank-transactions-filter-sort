import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const title = 'HackerBank';

render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();