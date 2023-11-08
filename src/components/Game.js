import React, { Component } from 'react';
import Player from './Player';
import Enemy from './Enemy';
import HealthBar from './HealthBar';
import './styles.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHealth: 100,
      enemyHealth: 100,
    };
  }

  // Add methods to handle game logic here
  // For example, handleAttack, handleDefense, etc.

  render() {
    const { playerHealth, enemyHealth } = this.state;

    return (
      <div className="Game">
        <Player health={playerHealth} />
        <Enemy health={enemyHealth} />
        <HealthBar playerHealth={playerHealth} enemyHealth={enemyHealth} />
      </div>
    );
  }
}

export default Game;
