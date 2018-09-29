import { spawn } from 'redux-saga/effects';

import postSaga from './posts/saga';

function* rootSaga() {
  yield spawn(postSaga);
}

export default rootSaga;
