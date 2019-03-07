import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Post from '@/components/Post';

const List = ({ items, find }) => {
  useEffect(() => {
    find();
  }, []);

  return items.map(item => <Post key={item.id} data={item} />);
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  find: PropTypes.func.isRequired,
};

export default List;
