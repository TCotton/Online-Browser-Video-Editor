import React from "react";
import {useDispatch} from "react-redux";
import {playFn} from '../slices/playerSlice';

export const Play = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(playFn(true))
    }
    return (
        <img src={"./play.svg"} className="play" alt="play" onClick={onClick}/>
    )
}