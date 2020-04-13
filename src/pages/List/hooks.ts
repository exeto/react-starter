import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAll } from 'src/redux/entities/posts/selectors';
import { findPosts } from 'src/redux/entities/posts/thunks';

export const useData = () => {
  const dispatch = useDispatch();

  return {
    findPosts: useCallback(() => dispatch(findPosts()), [dispatch]),
    items: useSelector(selectAll),
  };
};
