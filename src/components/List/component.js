import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    find: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.find();
  }

  render() {
    const { classes, items } = this.props;

    return (
      <div className={classes.wrapper}>
        <h1>News</h1>
        {items.map(item => <Item key={item.id} data={item} />)}
      </div>
    );
  }
}

export default List;
