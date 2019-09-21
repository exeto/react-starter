import React, { memo } from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import Link from '/components/Link';
import { toItem } from '/redux/router/actions';
import { useStyles } from './styles';

const Post = ({ data }) => {
  const classes = useStyles();

  return (
    <article className={classes.wrapper}>
      <h2>
        <Link className={classes.link} to={toItem(data.id)}>
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
