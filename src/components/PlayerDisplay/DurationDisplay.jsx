import React from 'react';
import {useSelector} from "react-redux";
import {millisToMinutesAndSeconds} from "../helperFunctions";
import {duration} from '../slices/videoSlice';

const TimeDisplay = () => {
    const durationDisplay = useSelector(duration);

    return (
        <time className='duration' data-testid={`duration`}>{millisToMinutesAndSeconds(durationDisplay)}</time>
    )
}

export default TimeDisplay
