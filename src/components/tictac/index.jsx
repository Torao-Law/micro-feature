import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TicTacToe.css'; // Tambahkan file CSS baru

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="btn btn-light square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const getStatus = () => {
    if (winner) {
      return (
        <div className="alert alert-success mt-3">
          Winner: {winner}
          <button className="btn btn-primary ml-2" onClick={() => resetGame()}>
            Play Again
          </button>
        </div>
      );
    } else if (board.every((square) => square)) {
      return (
        <div className="alert alert-info mt-3">
          Draw! No Winner.
          <button className="btn btn-primary ml-2" onClick={() => resetGame()}>
            Play Again
          </button>
        </div>
      );
    } else {
      return (
        <div className="alert alert-primary mt-3">
          Next player: {xIsNext ? 'X' : 'O'}
        </div>
      );
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderBoard = () => {
    const rows = [];

    for (let i = 0; i < 3; i++) {
      const squares = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        squares.push(renderSquare(index));
      }
      rows.push(
        <div className="board-row" key={i}>
          {squares}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div className="text-center mb-4">{getStatus()}</div>
      <div className="row">
        <div className="col-4">{renderBoard()}</div>
      </div>
    </div>
  );
};

// Fungsi untuk menentukan pemenang
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;
