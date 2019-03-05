import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Post from '@/components/Post';

class Item extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    findRecord: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: null,
  };

  componentDidMount() {
    this.props.findRecord();
  }

  render() {
    const { data } = this.props;

    return data ? <Post data={data} /> : null;
  }
}

export default Item;
