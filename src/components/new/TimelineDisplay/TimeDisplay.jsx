import React, {useRef, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {duration, time} from '../slices/videoSlice';
import Counter from '../../../../static/counter.inline.svg'

export const TimeDisplay = () => {
    const [translate, setTranslate] = useState(-17);
    const container = useRef();
    const durationDisplay = useSelector(duration);
    const timeDisplay = useSelector(time);

    useEffect(() => {
        const domRect = container.current.getBoundingClientRect();
        const perSecond = domRect.width / timeDisplay;
        const currentTime = durationDisplay;

        if(Number.isFinite(currentTime) && Number.isFinite(perSecond)) {
            setTranslate(() => {
                return (currentTime * perSecond) + (-17);
            });
        }


    },[container, durationDisplay, timeDisplay]);

    return (
        <div ref={container} className="timeline-display">
            <Counter style={{ transform: `translate(${translate}px, -230px)` }} />
        </div>
    )
}