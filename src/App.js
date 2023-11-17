import React, { Component } from 'react';
import Game from './components/Game';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ストリートファイト</h1>
        <Game />
      </div>
    );
  }
}

export default App;
