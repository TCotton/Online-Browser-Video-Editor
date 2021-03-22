import React from 'react';
import {useSelector} from "react-redux";
import {toMinutesAndSeconds} from "../helperFunctions";
import {duration} from '../slices/videoSlice';

const TimeDisplay = () => {
    const durationDisplay = useSelector(duration);

    return (
        <time className='duration' data-testid={`duration`}>{toMinutesAndSeconds(durationDisplay)}</time>
    )
}

export default TimeDisplay
