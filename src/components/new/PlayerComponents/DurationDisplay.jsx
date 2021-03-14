import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {duration} from '../slices/videoSlice';

const TimeDisplay = () => {
    const durationDisplay = useSelector(duration);
    const [dur, setDuration] = useState(0);

    //TODO: synch timing of updates - this is one frame behind
    useEffect(() => {
        setDuration(durationDisplay.toFixed(3))
    },[durationDisplay]);

    return (
        <time className='duration'>{dur}</time>
    )
}

export default TimeDisplay
