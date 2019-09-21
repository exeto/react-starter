import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';

import createStore from './redux/createStore';

const store = createStore();
const root = document.getElementById('root');

const renderApp = () => {
  const Root = require('/components/Root').default;

  render(<Root store={store} />, root);
};

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
