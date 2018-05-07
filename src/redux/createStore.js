import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';
import routes from './router/routes';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export default () => {
  const history = createHistory();
  const { reducer, middleware, enhancer } = connectRoutes(history, routes);
  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(thunk, middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, enhancers);

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
