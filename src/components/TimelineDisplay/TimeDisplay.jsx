import React, {useRef, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {window} from 'browser-monads';
import {duration, time} from '../slices/videoSlice';
import Counter from '../../../static/counter.inline.svg'

export const TimeDisplay = () => {
    const [translate, setTranslate] = useState(-17);
    const container = useRef();
    const durationDisplay = useSelector(time);
    const timeDisplay = useSelector(duration);

    useEffect(() => {
        const domRect = container.current.getBoundingClientRect();
        const perSecond = domRect.width / timeDisplay;
        const currentTime = durationDisplay;

        console.log(currentTime, perSecond);

        if(window.Number.isFinite(currentTime) && window.Number.isFinite(perSecond)) {
            setTranslate(() => {
                return (currentTime * perSecond) + (-17);
            });
        }

    },[container, durationDisplay, timeDisplay]);

    return (
        <div ref={container} className="timeline-display" data-testid='TimeDisplay'>
            <Counter style={{ transform: `translate(${translate}px, -230px)` }} />
        </div>
    )
}