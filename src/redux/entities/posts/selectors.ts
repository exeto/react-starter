import adapter from './adapter';

import { RootState } from 'src/redux';

export const { selectById, selectAll } = adapter.getSelectors(
  (state: RootState) => state.entities.posts,
);
