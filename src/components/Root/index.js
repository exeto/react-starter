import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as RoutoProvider } from '@routo/react';

import router from '/router';
import Router from '/components/Router';

setConfig({ reloadHooks: false });

const Root = ({ store }) => (
  <ReduxProvider store={store}>
    <RoutoProvider router={router}>
      <Router />
    </RoutoProvider>
  </ReduxProvider>
);

Root.propTypes = exact({
  store: PropTypes.shape({}).isRequired,
});

export default hot(module)(Root);
