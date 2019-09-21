import React, { useEffect } from 'react';

import Post from '/components/Post';
import { useData } from './hooks';

const Item = () => {
  const { findPost, data } = useData();

  useEffect(() => {
    findPost();
  }, [findPost]);

  return data ? <Post data={data} /> : null;
};

export default Item;
