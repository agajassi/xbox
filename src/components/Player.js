import React,{useEffect} from "react";
import {usePlayerAndEvents} from '../hooks/playerHook';

function Player() {

    usePlayerAndEvents();

    return (
        <div>
            {}
        </div>
    );
}

export default Player;