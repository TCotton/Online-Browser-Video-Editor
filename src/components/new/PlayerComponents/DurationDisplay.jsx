import React from 'react';
import {useSelector} from "react-redux";
import {duration} from '../slices/videoSlice';

const TimeDisplay = () => {
    const durationDisplay = useSelector(duration);

    return (
        <time>{durationDisplay}</time>
    )
}

export default TimeDisplay
