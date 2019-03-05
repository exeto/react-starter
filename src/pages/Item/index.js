import { connect } from 'react-redux';

import { getPost } from '@/redux/entities/posts/selectors';
import { findRecord } from '@/redux/entities/posts/actions';
import { getParam } from '@/redux/location/selectors';
import Item from './Item';

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
