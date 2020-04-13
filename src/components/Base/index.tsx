import React, { FC } from 'react';
import Link from '@routo/link';

import { LIST } from 'src/router/ids';
import { useStyles } from './styles';

const Base: FC = ({ children }) => {
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

export default Base;
