import { useState } from "react";


const Player = () => {
    const [player, setPlayer] = useState(11)

    const handleAdd = () =>{
        const newPlayer = player + 1;
        if(newPlayer === 16){
            return;
        }
        setPlayer(newPlayer)
    }

    const handleRemove = () =>{
        const newPlayer = player - 1;
        if(newPlayer <=10){
            return;
        }
        setPlayer(newPlayer)
    }
    return (
        <div className="add-reduce">
            <h3>Players: {player}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Player;