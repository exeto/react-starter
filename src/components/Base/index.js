import React from 'react';
import PropTypes from 'prop-types';

import Link from '/components/Link';
import { toList } from '/redux/router/actions';
import { useStyles } from './styles';

const Base = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1>
        <Link className={classes.link} to={toList()}>
          News
        </Link>
      </h1>

      {children}
    </div>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;
