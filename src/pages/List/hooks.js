import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPosts } from '/redux/entities/posts/selectors';
import { findPosts } from '/redux/entities/posts/actions';

export const useData = () => {
  const dispatch = useDispatch();

  return {
    findPosts: useCallback(() => dispatch(findPosts()), [dispatch]),
    items: useSelector(getPosts),
  };
};
