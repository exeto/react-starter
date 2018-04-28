import { connect } from 'react-redux';

import { getPosts } from '@/redux/posts/selectors';
import { find } from '@/redux/posts/operations';
import List from './component';

const mapStateToProps = state => ({
  items: getPosts(state),
});

const mapDispatchToProps = { find };

export default connect(mapStateToProps, mapDispatchToProps)(List);
