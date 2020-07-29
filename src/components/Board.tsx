import React, { Component, useState, useEffect } from 'react';
//import Square from './Square';

const LINES = [ // Stepsize etc..
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const Board = (xBegins:boolean)=>{

    const [squares, setSquares] = useState(Array(9).fill(null)) // hooks || destructuring
    const [xIsNext, setXIsNext] = useState(xBegins) // hooks
    const [status, setStatus] = useState('') // hooks

    useEffect(()=>{
        const winner = calculateWinner(squares)       
        if (winner) {
            setStatus(`Winner: ${winner}`) //template string (statt plus)
        }
        else{
            setStatus(`Next Player: ${xIsNext ? 'X' : 'O'}`); //ternary statement || infinite renderingloop
        }
    },
    [squares, xIsNext, status] // alle Variablen, die nicht definiert werden, aber genutzt
    )

    const calculateWinner = (squares: any): string|null =>{
        for (let i = 0; i < LINES.length; i++) {
            const [a, b, c] = LINES[i];
            if (squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (i: any)=>{
        const squaresCopy = squares.slice();
        if(calculateWinner(squaresCopy) || squaresCopy[i]){
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy)
        setXIsNext(!xIsNext)
    }

    const renderSquare = (i: number)=>{

        
        Square(squares, i)
        
        
    }
    
    const Square = (squares: any, i: any) => {
        return (
          <button className="square" onClick={() => i} >
            {squares[i]}
          </button>
        );
    }
    
    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
}

export default Board;