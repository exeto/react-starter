import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createRouter } from '@routo/core';
import createSagaMiddleware from 'redux-saga';

import entitiesReducer from '@/redux/entities/reducer';
import rootSaga from '@/redux/rootSaga';
import routes from '@/redux/router/routes';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const router = createRouter(routes);

export default () => {
  const rootReducer = combineReducers({
    entities: entitiesReducer,
    router: router.reducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware, router.middleware);
  const enhancers = composeEnhancers(middlewares);
  const store = createStore(rootReducer, enhancers);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('@/redux/entities/reducer', () => {
      const newRootReducer = combineReducers({
        entities: require('@/redux/entities/reducer').default,
        router: router.reducer,
      });

      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};
