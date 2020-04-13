import { combineReducers } from '@reduxjs/toolkit';

import postsSlice from './posts/slice';

export default combineReducers({
  posts: postsSlice.reducer,
});
