import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectedCell(rowIndex, colIndex){
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = "X";
            return updatedBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectedCell(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}