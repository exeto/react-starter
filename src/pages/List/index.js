import React, { useEffect } from 'react';

import Post from '/components/Post';
import { useData } from './hooks';

const List = () => {
  const { find, items } = useData();

  useEffect(() => {
    find();
  }, [find]);

  return items.map(item => <Post key={item.id} data={item} />);
};

export default List;
