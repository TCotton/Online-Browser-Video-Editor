import React from "react";
import {useDispatch} from "react-redux";
import {stopFn} from '../slices/playerSlice';

export const Pause = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(stopFn(true))
    }
    return (
        <img src={"./pause.svg"} className="stop" alt="stop" onClick={onClick}/>
    )
}