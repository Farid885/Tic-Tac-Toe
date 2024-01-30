import React from "react";
import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, gameTurns }) {

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const {square,player } = turn
    const {row , col} = square
    gameBoard[row][col] = player
    
  }
  // const [gameBoard, setGameboard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameboard((prevGameBoard) => {
  //     const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     updateBoard[rowIndex][colIndex] = activeSymbolPlayer;
  //     return updateBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                 
                  <button onClick={()=>onSelectSquare(rowIndex,colIndex)}    disabled={playerSymbol !==null} >{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}

export default GameBoard;
