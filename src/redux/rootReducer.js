import { combineReducers } from 'redux';

import posts from './posts/reducer';

export default combineReducers({
  entities: combineReducers({
    posts,
  }),
});
