import React, { useEffect, FC } from 'react';

import Post from 'src/components/Post';
import { useData } from './hooks';

const Item: FC = () => {
  const { findPost, data } = useData();

  useEffect(() => {
    findPost();
  }, [findPost]);

  return data ? <Post data={data} /> : null;
};

export default Item;
