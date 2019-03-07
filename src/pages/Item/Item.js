import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Post from '@/components/Post';

const Item = ({ data, findRecord }) => {
  useEffect(() => {
    findRecord();
  }, []);

  return data ? <Post data={data} /> : null;
};

Item.propTypes = {
  data: PropTypes.object,
  findRecord: PropTypes.func.isRequired,
};

Item.defaultProps = {
  data: null,
};

export default Item;
