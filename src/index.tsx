import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';

const root = document.getElementById('root');

render(<Root />, root);
