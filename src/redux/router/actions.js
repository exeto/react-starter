import { createAction } from 'redux-actions';
import { NOT_FOUND } from '@routo/core';

import { LIST, ITEM } from './types';

export const toList = createAction(LIST);

export const toItem = createAction(ITEM, id => ({ id }));

export const toNotFound = createAction(NOT_FOUND);
