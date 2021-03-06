import React from 'react';
import {useSelector} from "react-redux";
import {time} from '../slices/videoSlice';

const TimeDisplay = () => {
    const timeDisplay = useSelector(time);

    return (
        <time>{timeDisplay}</time>
    )
}

export default TimeDisplay
