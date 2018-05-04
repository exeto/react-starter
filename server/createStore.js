import createHistory from 'history/createMemoryHistory';
import { NOT_FOUND } from 'redux-first-router';

import createStore from '../src/redux/createStore';

export default async ctx => {
  const history = createHistory({ initialEntries: [ctx.path] });
  const { store, thunk } = createStore(history);

  await thunk(store);

  const { location } = store.getState();

  ctx.status = location.type === NOT_FOUND ? 404 : 200;

  return store;
};
