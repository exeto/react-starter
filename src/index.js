import 'react-app-polyfill/stable';

import React from 'react';

// TODO: need to fix bug in eslint-import-resolver-parcel
// eslint-disable-next-line import/no-unresolved
import { render } from 'react-dom';

import createStore from './redux/utils/createStore';
import Root from './components/Root';

const store = createStore();

render(<Root store={store} />, document.getElementById('root'));
