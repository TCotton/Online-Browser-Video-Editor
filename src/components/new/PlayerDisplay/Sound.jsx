import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {soundFn} from "../slices/playerSlice";

export const Sound = () => {
    const dispatch = useDispatch();
    const [mute, setMute] = useState(false);
    const onClick = () => {
        dispatch(soundFn(true))
    }
    return (
        <>
            <img src={"./sound.svg"} className="sound" alt="mute" onClick={onClick}/>
        </>
    )
}