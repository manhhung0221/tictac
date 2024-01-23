import { useState } from "react"

export default function Player({ player_name, player_symbol }) {
    const [playerName,setPlayerName]=useState(player_name)
    const [isEditing, setIsEditing] = useState(false)
    function handelEditClick(isEditing) {
        setIsEditing(!isEditing)
    }
    function handleEvent(event){
        setPlayerName(event.target.value)
    }
    let player
    if (isEditing) {
        player = <input type='text' required value={playerName} onChange={handleEvent}></input>
    }
    else {
        player = <span className="player-name">{playerName}</span>
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