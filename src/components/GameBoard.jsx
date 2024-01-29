import React from "react";
import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

  function GameBoard({onSelectSquare,activeSymbolPlayer}) {

const [gameBoard , setGameboard]= useState(initialGameBoard)

function handleSelectSquare (rowIndex,colIndex){
setGameboard((prevGameBoard)=>{
const updateBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
updateBoard[rowIndex][colIndex] = activeSymbolPlayer
return updateBoard

})
onSelectSquare()
}


    return (
      <>
        <ol id="game-board">
          {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
              {console.log(row)}
              <ol>
                {row.map((playerSymbol, colIndex) => (
                  <li key={colIndex}>
                    {console.log(playerSymbol)}
                    <button onClick={()=>handleSelectSquare(rowIndex,colIndex)} >{playerSymbol}</button>
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
