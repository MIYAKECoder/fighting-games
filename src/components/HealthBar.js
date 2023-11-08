import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HealthBar extends Component {
  render() {
    const { playerHealth, enemyHealth } = this.props;

    return (
      <div className="HealthBar">
        <div className="PlayerHealth">
          <h2>Player Health</h2>
          <div className="HealthBarContainer">
            <div className="HealthBarFill" style={{width: `${playerHealth}%`}}></div>
          </div>
        </div>
        <div className="EnemyHealth">
          <h2>Enemy Health</h2>
          <div className="HealthBarContainer">
            <div className="HealthBarFill" style={{width: `${enemyHealth}%`}}></div>
          </div>
        </div>
      </div>
    );
  }
}

HealthBar.propTypes = {
  playerHealth: PropTypes.number.isRequired,
  enemyHealth: PropTypes.number.isRequired,
};

export default HealthBar;
</h2>