import { combineReducers } from 'redux';

import entities from './entities/reducer';
import router from './router/reducer';

const rootReducer = combineReducers({
  entities,
  router,
});

export default rootReducer;
