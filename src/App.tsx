import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

const App = () => {
  return (
    <div className="App">
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="game">
          <div className="game-board"></div>
          {Board(false)}
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{}</ol>
        </div>

      </div>
    </div>
  );
}

export default App;
