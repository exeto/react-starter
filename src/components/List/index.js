import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { getPosts } from '@/redux/posts/selectors';
import { find } from '@/redux/posts/operations';
import pipe from '@/utils/pipe';
import List from './component';
import styles from './styles';

const mapStateToProps = state => ({
  items: getPosts(state),
});

const mapDispatchToProps = { find };

export default pipe(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles),
)(List);
