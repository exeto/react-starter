import { createAction } from 'redux-actions';

import {
  FIND_REQUEST,
  FIND_SUCCESS,
  FIND_RECORD_REQUEST,
  FIND_RECORD_SUCCESS,
} from './types';

export const find = createAction(FIND_REQUEST);

export const findSuccess = createAction(FIND_SUCCESS);

export const findRecord = createAction(FIND_RECORD_REQUEST);

export const findRecordSuccess = createAction(FIND_RECORD_SUCCESS);
