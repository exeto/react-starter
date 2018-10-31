import { connect } from 'react-redux';

import { getPosts } from '@/redux/entities/posts/selectors';
import { find } from '@/redux/entities/posts/actions';
import List from './component';

const mapStateToProps = state => ({
  items: getPosts(state),
});

const mapDispatchToProps = { find };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
