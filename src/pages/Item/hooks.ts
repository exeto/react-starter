import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouterState } from '@routo/react';

import { selectById } from 'src/redux/entities/posts/selectors';
import { findPost } from 'src/redux/entities/posts/thunks';
import { useTypedSelector } from 'src/redux';

export const useData = () => {
  const routerState = useRouterState();
  const { id } = routerState.params;
  const dispatch = useDispatch();

  return {
    id,
    findPost: useCallback(() => dispatch(findPost(id)), [dispatch, id]),
    data: useTypedSelector((state) => selectById(state, id)),
  };
};
