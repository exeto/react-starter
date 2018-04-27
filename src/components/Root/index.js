import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import List from '@/components/List';

const Root = ({ store }) => (
  <Provider store={store}>
    <List />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default hot(module)(Root);
