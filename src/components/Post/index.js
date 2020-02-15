import React, { memo } from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import Link from '@routo/link';

import { ITEM } from '/router/types';
import { useStyles } from './styles';

const Post = ({ data }) => {
  const classes = useStyles();

  return (
    <article className={classes.wrapper}>
      <h2>
        <Link to={ITEM} params={{ id: data.id }} className={classes.link}>
          {data.title}
        </Link>
      </h2>

      <p>{data.body}</p>
    </article>
  );
};

Post.propTypes = exact({
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
});

export default memo(Post);
