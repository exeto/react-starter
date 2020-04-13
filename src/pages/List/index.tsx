import React, { Fragment, useEffect, FC } from 'react';

import Post from 'src/components/Post';
import { useData } from './hooks';

const List: FC = () => {
  const { findPosts, items } = useData();

  useEffect(() => {
    findPosts();
  }, [findPosts]);

  return (
    <Fragment>
      {items.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </Fragment>
  );
};

export default List;
