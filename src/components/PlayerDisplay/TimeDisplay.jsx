import React from 'react';
import {useSelector} from "react-redux";
import {time} from '../slices/videoSlice';
import {toMinutesAndSeconds} from "../helperFunctions";

const DurationDisplay = () => {
    const timeDisplay = useSelector(time);

    return (
        <time data-testid="time">{toMinutesAndSeconds(timeDisplay)}</time>
    )
}

export default DurationDisplay
