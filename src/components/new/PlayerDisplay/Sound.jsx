import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {soundFn} from "../slices/playerSlice";

export const Sound = () => {
    const dispatch = useDispatch();
    const [mute, setMute] = useState(false);
    const onClick = () => {
        setMute(!mute);
        dispatch(soundFn());
    }
    return (
        <img src={mute ? "./mute.svg" : "./sound.svg"} className="sound" alt={mute ? "mute" : "sound"}
             onClick={onClick} data-testid="sound"/>
    )
}