import React from "react";
import {useDispatch} from "react-redux";
import {backwardFn, stopFn} from '../slices/playerSlice';

export const Backward = () => {
    const dispatch = useDispatch();
    const onPointerDown = () => {
        dispatch(backwardFn(true))
    }
    const onPointerUp = () => {
        dispatch(backwardFn(false))
        dispatch(stopFn(true))
    }
    return (
        <img src={"./back.svg"} className="backward" alt="backward" onPointerDown={onPointerDown} onPointerUp={onPointerUp} />
    )
}