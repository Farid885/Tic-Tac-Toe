import React from "react";
import { useState } from "react";


function GameBoard({ onSelectSquare, board }) {
 
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
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                    {playerSymbol}
                  </button>
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
