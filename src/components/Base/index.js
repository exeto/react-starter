import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import Link from '@routo/link';

import { LIST } from '/router/types';
import { useStyles } from './styles';

const Base = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1>
        <Link to={LIST} className={classes.link}>
          News
        </Link>
      </h1>

      {children}
    </div>
  );
};

Base.propTypes = exact({
  children: PropTypes.node.isRequired,
});

export default Base;
