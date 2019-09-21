import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import { toNotFound } from '/redux/router/actions';
import api from './api';
import { findPostsSuccess, findPostSuccess } from './actions';
import { FIND_POSTS, FIND_POST } from './types';

function* findPosts() {
  const data = yield call(api.find);

  yield put(findPostsSuccess(data));
}

function* watchFindPosts() {
  yield takeEvery(FIND_POSTS, findPosts);
}

function* findPost({ payload: id }) {
  try {
    const data = yield call(api.findRecord, id);

    yield put(findPostSuccess(data));
  } catch (err) {
    if (err.response.status === 404) {
      yield put(toNotFound());
      return;
    }

    throw err;
  }
}

function* watchFindPost() {
  yield takeEvery(FIND_POST, findPost);
}

function* postsSaga() {
  yield spawn(watchFindPosts);
  yield spawn(watchFindPost);
}

export default postsSaga;
