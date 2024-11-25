import { useState } from "react"

import { WINNING_COMBINATIONS as Combos } from "./WinningCombinationData";

import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';

      if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
    
    for (const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }


  function handleActivePlayerState(rowIndex, colIndex){
    //setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((previousTurns) => {

      const currentPlayer = derivedActivePlayer(previousTurns);

      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, 
        ...previousTurns
      ];

      return updatedTurns;
    });
  }
 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        {winner && <p>You won, {winner}</p>}
        <GameBoard 
          onSelectCell={handleActivePlayerState} 
          gameBoard={gameBoard}
          />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
