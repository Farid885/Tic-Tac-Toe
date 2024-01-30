import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
function App() {

  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex,colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns)=>{

      let currenPlayer = 'X'

      if (  prevTurns.length>0 &&prevTurns[0].player === 'X') {
        currenPlayer = 'O'
        
      }
      const updatedTurnes = [{

        square: {
          row:rowIndex,
          col:colIndex,
          player:currenPlayer,
        }
        },...prevTurns]
        console.log(updatedTurnes);
        return updatedTurnes
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activeSymbolPlayer={activePlayer} />
      </div>
      <Log/>
    </main>
  );
}

export default App;
