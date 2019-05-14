import { connect } from 'react-redux';

import { getPost } from '@/redux/entities/posts/selectors';
import { findRecord } from '@/redux/entities/posts/actions';
import { getParam } from '@/redux/router/selectors';
import Item from './Item';

const mapStateToProps = state => {
  const id = getParam(state, 'id');

  return {
    id,
    data: getPost(state, id),
  };
};

const mapDispatchToProps = { findRecord };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);
