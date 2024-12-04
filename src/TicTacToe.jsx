import React from "react";

export default function TicTacToe() {
    const [squares, setSquares] = React.useState(Array.from({ length: 9 }, (_, idx) => idx));
    const [turn, setTurn] = React.useState("X");
    const [gameOver, setGameOver] = React.useState(false);

    function checkWinner(newBoard) {
        return (
            (newBoard[0] === newBoard[1] && newBoard[0] === newBoard[2]) ||   // line v1
            (newBoard[3] === newBoard[4] && newBoard[3] === newBoard[5]) ||   // line v2
            (newBoard[6] === newBoard[7] && newBoard[6] === newBoard[8]) ||   // line v3
            (newBoard[0] === newBoard[3] && newBoard[0] === newBoard[6]) ||   // line h1
            (newBoard[1] === newBoard[4] && newBoard[1] === newBoard[7]) ||   // line h2
            (newBoard[2] === newBoard[5] && newBoard[2] === newBoard[8]) ||   // line h3
            (newBoard[0] === newBoard[4] && newBoard[0] === newBoard[8]) ||   // line d1
            (newBoard[2] === newBoard[4] && newBoard[2] === newBoard[6])      // line d2
        );
    }

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <br />
            {/* Board logic. */}
            <div className="ttt-board">
                {squares.map((value, index) => {
                    return (<React.Fragment key={index}>
                        <Square key={index} value={value} onClick={() => {
                            const newSquares = squares.slice();
                            if (newSquares[index] !== 'X' && newSquares[index] !== 'O' && !gameOver) {
                                newSquares[index] = turn;
                                setSquares(newSquares);
                                const winner = checkWinner(newSquares);
                                console.log("Winner: ", winner);
                                setGameOver(winner);
                                setTurn(turn === "X" ? "O" : "X");
                            }
                        }} />
                    </React.Fragment>);
                })
                }
            </div>
            {gameOver ?
                (<React.Fragment>
                    <h2>Game Over winner is {turn === 'X' ? 'O' : 'X'}.</h2>
                    <button onClick={() => { setSquares(Array.from({ length: 9 }, (_, idx) => idx)); setTurn('X'); setGameOver(false); }}>Play again?</button>
                </React.Fragment>) :
                null}
        </>
    );
}

function Square({ value, onClick }) {
    return (
        <button className="ttt-button" onClick={onClick}>
            {value === "X" ? "X" : value === "O" ? "O" : ""}
        </button>
    );
}