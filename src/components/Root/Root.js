import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Router from '/pages/Router';

setConfig({ reloadHooks: false });

const Root = ({ store }) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default hot(module)(Root);
