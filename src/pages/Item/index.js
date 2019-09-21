import React, { useEffect } from 'react';

import Post from '/components/Post';
import { useData } from './hooks';

const Item = () => {
  const { findRecord, data } = useData();

  useEffect(() => {
    findRecord();
  }, [findRecord]);

  return data ? <Post data={data} /> : null;
};

export default Item;
