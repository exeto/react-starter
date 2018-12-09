import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createSagaMiddleware from 'redux-saga';

import entitiesReducer from './entities/reducer';
import rootSaga from './rootSaga';
import routes from './location/routes';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export default () => {
  const { reducer, middleware, enhancer, initialDispatch } = connectRoutes(
    routes,
    { initialDispatch: false },
  );

  const rootReducer = combineReducers({
    entities: entitiesReducer,
    location: reducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware, middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, enhancers);

  sagaMiddleware.run(rootSaga);
  initialDispatch();

  if (module.hot) {
    module.hot.accept('./entities/reducer', () => {
      const newRootReducer = combineReducers({
        entities: require('./entities/reducer').default,
        location: reducer,
      });

      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};
