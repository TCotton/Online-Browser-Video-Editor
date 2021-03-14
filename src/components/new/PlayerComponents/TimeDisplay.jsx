import React from 'react';
import {useSelector} from "react-redux";
import {time} from '../slices/videoSlice';

const TimeDisplay = () => {
    const timeDisplay = useSelector(time);

    return (
        <time>{timeDisplay.toFixed(3)}</time>
    )
}

export default TimeDisplay
