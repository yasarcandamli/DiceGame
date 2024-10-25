import { useState } from "react";
import dice1 from "../../images/dice1.png"
import dice2 from "../../images/dice2.png"
import dice3 from "../../images/dice3.png"
import dice4 from "../../images/dice4.png"
import dice5 from "../../images/dice5.png"
import dice6 from "../../images/dice6.png"

function Player({ dice, name }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    const handleNameClick = () => {
        setIsEditing(true);
    };

    const handleNameChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setIsEditing(false);
        }
    };

    return (
        <div className="player">
            {isEditing ?
                (
                    <h2>
                        <input
                            className="player-name-input"
                            type="text"
                            value={playerName}
                            onChange={handleNameChange}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            autoFocus />
                    </h2>
                )
                :
                (
                    <h2 className="player-name" onClick={handleNameClick}>{playerName}</h2>
                )}
            <div className="dice-section">
                <img src={diceImages[dice]} alt={`Dice ${dice}`} />
            </div>
        </div>
    );
}

export default Player;