import React, { Component, useState, useEffect } from 'react';
import { Http2ServerRequest } from 'http2';
import { type } from 'os';

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
    const [xIsNext, setXIsNext] = useState(xBegins)
    const [status, setStatus] = useState('')
    const [history, setHistory] = useState(new Array())
    const [step, setStep] = useState(0)


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

    const calculateWinner = (squares: any): string|null => {
        for (let i = 0; i < LINES.length; i++) {
            const [a, b, c] = LINES[i];
            if (squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (i: any)=>{
        history.push(squares)
        const squaresCopy = squares.slice();
        if(calculateWinner(squaresCopy) || squaresCopy[i]){
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy)
        setXIsNext(!xIsNext)
        setStep(history.length)
    }

    const renderSquare = (i: number) => {
        return(
            <button className="square" onClick={() => handleClick(i)}>
                {squares[i]}
            </button>
        )
    }

    const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move :'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
    })

    const jumpTo = (step: number) => {
        setStep(step)
        setSquares(history[step])
        setHistory(history.slice(0,step))
        setXIsNext(xBegins && step%2 === 0 || !xBegins && !(step%2 === 0))
    }
    function typeOf(obj: any) {
      return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
    }
    return (
        <div>
          <div className="status">{status}</div>
          <ol>{moves}</ol>
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