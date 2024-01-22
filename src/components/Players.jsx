import { useState } from "react"

export default function Player({ player_name, player_symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    function handelEditClick(isEditing) {
        setIsEditing(!isEditing)
    }
    let player
    if (isEditing) {
        player = <input type='text' required value={player_name}></input>
    }
    else {
        player = <span className="player-name">{player_name}</span>
    }
    return (
        <li>
            <span className='player'>
                {player}
                <span className="player-symbol">{player_symbol}</span>
                <button onClick={() => handelEditClick(isEditing)}>{isEditing?"save":"edit"}</button>
            </span>
        </li>)
}