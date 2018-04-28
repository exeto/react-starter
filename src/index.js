import 'core-js/shim';

import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import createStore from './redux/createStore';
import Root from './components/Root';

const history = createHistory();
const { store } = createStore(history, window.INITIAL_STATE);

render(<Root store={store} />, document.getElementById('root'));
