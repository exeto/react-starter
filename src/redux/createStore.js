import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createMiddleware as createRoutoMiddleware } from '@routo/redux';

import router from '/router';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const routoMiddleware = createRoutoMiddleware(router);
  const middlewares = applyMiddleware(sagaMiddleware, routoMiddleware);
  const enhancers = composeEnhancers(middlewares);
  const store = createStore(rootReducer, enhancers);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }

  return store;
};
