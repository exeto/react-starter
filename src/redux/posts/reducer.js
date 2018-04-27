import { handleActions } from 'redux-actions';

import indexBy from '@/utils/indexBy';
import { FIND_SUCCESS } from './types';

const initialState = {};

const reducerMap = {
  [FIND_SUCCESS]: (state, { payload }) => ({
    ...state,
    ...indexBy(item => item.id, payload),
  }),
};

export default handleActions(reducerMap, initialState);
