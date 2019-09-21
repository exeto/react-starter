import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import { toNotFound } from '/redux/router/actions';
import api from './api';
import { findSuccess, findRecordSuccess } from './actions';
import { FIND_REQUEST, FIND_RECORD_REQUEST } from './types';

function* find() {
  const data = yield call(api.find);

  yield put(findSuccess(data));
}

function* findRecord({ payload: id }) {
  try {
    const data = yield call(api.findRecord, id);

    yield put(findRecordSuccess(data));
  } catch (err) {
    if (err.response.status === 404) {
      yield put(toNotFound());
      return;
    }

    throw err;
  }
}

function* watchFind() {
  yield takeEvery(FIND_REQUEST, find);
}

function* watchFindRecord() {
  yield takeEvery(FIND_RECORD_REQUEST, findRecord);
}

function* saga() {
  yield spawn(watchFind);
  yield spawn(watchFindRecord);
}

export default saga;
