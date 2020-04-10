import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouterState } from '@routo/react';

import { getPost } from '/redux/entities/posts/selectors';
import { findPost } from '/redux/entities/posts/actions';

export const useData = () => {
  const routerState = useRouterState();
  const { id } = routerState.params;
  const dispatch = useDispatch();

  return {
    id,
    findPost: useCallback(() => dispatch(findPost(id)), [dispatch, id]),
    data: useSelector((state) => getPost(state, id)),
  };
};
