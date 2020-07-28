import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="game">
          <div className="game-board"></div>
          <Board />
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{/*TODO*/}</ol>
        </div>

      </body>
    </div>
  );
}

export default App;
