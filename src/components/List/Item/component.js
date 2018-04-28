import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Item extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { data, classes } = this.props;

    return (
      <article className={classes.wrapper}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </article>
    );
  }
}

export default Item;
