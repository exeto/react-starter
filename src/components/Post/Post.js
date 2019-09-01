import React from 'react';
import PropTypes from 'prop-types';
import Link from '/components/Link';

import { toItem } from '/redux/router/actions';

const Post = ({ data, classes }) => (
  <article className={classes.wrapper}>
    <h2>
      <Link className={classes.link} to={toItem(data.id)}>
        {data.title}
      </Link>
    </h2>

    <p>{data.body}</p>
  </article>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    wrapper: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
