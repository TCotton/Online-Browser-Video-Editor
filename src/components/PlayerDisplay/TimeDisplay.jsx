import React from 'react';
import {useSelector} from "react-redux";
import {time} from '../slices/videoSlice';
import {millisToMinutesAndSeconds} from "../helperFunctions";

const TimeDisplay = () => {
    const timeDisplay = useSelector(time);

    return (
        <time data-testid="time">{millisToMinutesAndSeconds(timeDisplay)}</time>
    )
}

export default TimeDisplay
