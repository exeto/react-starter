import React, { useEffect } from 'react';

import Post from '/components/Post';
import { useData } from './hooks';

const List = () => {
  const { findPosts, items } = useData();

  useEffect(() => {
    findPosts();
  }, [findPosts]);

  return items.map((item) => <Post key={item.id} data={item} />);
};

export default List;
