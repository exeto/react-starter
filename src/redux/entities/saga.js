import { spawn } from 'redux-saga/effects';

import posts from './posts/saga';

function* entitiesSaga() {
  yield spawn(posts);
}

export default entitiesSaga;
