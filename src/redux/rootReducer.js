import { combineReducers } from 'redux';
import { createReducer } from '@routo/redux';

import router from '/router';
import entities from './entities/reducer';

const rootReducer = combineReducers({
  entities,
  router: createReducer(router),
});

export default rootReducer;
