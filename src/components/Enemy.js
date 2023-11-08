import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Enemy extends Component {
  render() {
    const { health } = this.props;

    return (
      <div className="Enemy">
        <h2>Enemy</h2>
        <p>Health: {health}</p>
        {/* Add more enemy details or controls here */}
      </div>
    );
  }
}

Enemy.propTypes = {
  health: PropTypes.number.isRequired,
};

export default Enemy;
</h2>