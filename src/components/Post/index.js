import { memo } from 'react';
import { compose } from 'redux';
import withStyles from 'react-jss';

import Post from './Post';
import styles from './styles';

export default compose(
  withStyles(styles),
  memo,
)(Post);
