import { connect } from 'react-redux';

import { getPost } from '@/redux/posts/selectors';
import { findRecord } from '@/redux/posts/actions';
import { getParam } from '@/redux/router/selectors';
import Item from './component';

const mapStateToProps = state => {
  const id = getParam(state, 'id');

  return {
    id,
    data: getPost(state, id),
  };
};

const mapDispatchToProps = { findRecord };

const mergeProps = (stateProps, dispatchProps) => ({
  data: stateProps.data,
  findRecord: () => dispatchProps.findRecord(stateProps.id),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Item);
