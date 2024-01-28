import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  return (
    <>
      <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            {console.log(row)}
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  {console.log(playerSymbol)}
                  <button>{playerSymbol}</button>
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
