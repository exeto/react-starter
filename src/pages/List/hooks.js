import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPosts } from '/redux/entities/posts/selectors';
import { find } from '/redux/entities/posts/actions';

export const useData = () => {
  const dispatch = useDispatch();

  return {
    find: useCallback(() => dispatch(find()), [dispatch]),
    items: useSelector(getPosts),
  };
};
