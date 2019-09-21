import { spawn } from 'redux-saga/effects';

import entities from './entities/saga';

function* rootSaga() {
  yield spawn(entities);
}

export default rootSaga;
