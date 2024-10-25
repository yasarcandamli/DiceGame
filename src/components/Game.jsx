import { useState } from "react";
import Player from "./Player";

function Game() {
    const [dicePlayer1, setDicePlayer1] = useState(0);
    const [dicePlayer2, setDicePlayer2] = useState(0);
    const [result, setResult] = useState("Welcome To Dice Game");

    const playerName1 = "Player 1";
    const playerName2 = "Player 2";

    const rollDice = () => {
        const interval = setInterval(() => {
            setDicePlayer1(Math.floor(Math.random() * 6));
            setDicePlayer2(Math.floor(Math.random() * 6));
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            const finalDice1 = Math.floor(Math.random() * 6);
            const finalDice2 = Math.floor(Math.random() * 6);
            setDicePlayer1(finalDice1);
            setDicePlayer2(finalDice2);

            if (finalDice1 > finalDice2) {
                setResult("🏆 Win!");
            } else if (finalDice1 < finalDice2) {
                setResult("💔 Lose!");
            } else {
                setResult("🤝 Draw!");
            }
        }, 3000);

    };

    return (
        <>
            <div className="game">
                <div className="result-section">
                    <h1 className="result">{result}</h1>
                </div>
                <div className="players">
                    <Player dice={dicePlayer1} name={playerName1} />
                    <Player dice={dicePlayer2} name={playerName2} />
                </div>
                <button className="play-btn" onClick={rollDice}>
                    <i className="fa-solid fa-shuffle"></i>
                </button>
            </div>
        </>
    );
}

export default Game;