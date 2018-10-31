import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './rootSaga';
import routes from './router/routes';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export default () => {
  const { reducer, middleware, enhancer, initialDispatch } = connectRoutes(
    routes,
    { initialDispatch: false },
  );

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware, middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, enhancers);

  sagaMiddleware.run(rootSaga);
  initialDispatch();

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const newRootReducer = combineReducers({
          ...require('./reducers').default,
          location: reducer,
        });

        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};
