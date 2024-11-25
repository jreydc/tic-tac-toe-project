import { useState } from "react";

export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((editing) => !isEditing);
    }

    function handleNameChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    let playerNameHolder = <span className="player-name">{playerName}</span>;

    if (isEditing){
        playerNameHolder = (
            <input type="text" required value={playerName} onChange={handleNameChange}/>
        );
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameHolder
                    /* isEditing ? <input type="text" value={name} required/> :
                    <span className="player-name">{name}</span> */
                }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
          </li>
    );
}