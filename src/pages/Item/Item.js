import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Post from '/components/Post';

const Item = ({ id, data, findRecord }) => {
  useEffect(() => {
    findRecord(id);
  }, [id, findRecord]);

  return data ? <Post data={data} /> : null;
};

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  data: PropTypes.shape({}),
  findRecord: PropTypes.func.isRequired,
};

Item.defaultProps = {
  data: null,
};

export default Item;
