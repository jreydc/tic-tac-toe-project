export default function GameBoard({onSelectCell, gameBoard}){
    /* const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectedCell(rowIndex, colIndex){
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectCell();
    } */

    /* let gameBoard = initialGameBoard;
    
    for (const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    } */

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectCell(rowIndex, colIndex)} 
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}