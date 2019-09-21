import { createAction } from 'redux-actions';

import {
  FIND_POSTS,
  FIND_POSTS_SUCCESS,
  FIND_POST,
  FIND_POST_SUCCESS,
} from './types';

export const findPosts = createAction(FIND_POSTS);

export const findPostsSuccess = createAction(FIND_POSTS_SUCCESS);

export const findPost = createAction(FIND_POST);

export const findPostSuccess = createAction(FIND_POST_SUCCESS);
