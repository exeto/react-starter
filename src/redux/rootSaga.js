import { spawn } from 'redux-saga/effects';

import postSaga from './entities/saga';

function* rootSaga() {
  yield spawn(postSaga);
}

export default rootSaga;
