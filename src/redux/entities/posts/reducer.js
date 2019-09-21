import { handleActions } from 'redux-actions';

import indexBy from '/utils/indexBy';
import { FIND_POSTS_SUCCESS, FIND_POST_SUCCESS } from './types';

const initialState = {};

const reducerMap = {
  [FIND_POSTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    ...indexBy(item => item.id, payload),
  }),

  [FIND_POST_SUCCESS]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
};

export default handleActions(reducerMap, initialState);
