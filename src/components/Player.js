import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  render() {
    const { health } = this.props;

    return (
      <div className="Player">
        <h2>Player</h2>
        <p>Health: {health}</p>
        {/* Add more player details or controls here */}
      </div>
    );
  }
}

Player.propTypes = {
  health: PropTypes.number.isRequired,
};

export default Player;
</h2>