import React from "react";
import {window} from "browser-monads";
import {useDispatch} from "react-redux";
import {peakFrequencyFn} from '../slices/audioSlice'
import { equals } from 'ramda';

const RefComp = React.memo((component) => {
    const dispatch = useDispatch();
    let videoElement = {};
    let source;
    if (!(component.component instanceof HTMLMediaElement)) return null;
    if(equals(videoElement, component.component)) return null; // instanceOf ?? instead
    videoElement = component.component;

    if (source) {
        source.disconnect();
    }

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    source = ctx.createMediaElementSource(videoElement);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyser.getByteFrequencyData(dataArray);

    function requestAnimationFrameFnc() {
        window.requestAnimationFrame(requestAnimationFrameFnc);
        analyser.getByteFrequencyData(dataArray);
        const peakFrequency = Math.max.apply(null, dataArray);
        dispatch(peakFrequencyFn(peakFrequency));
    }

    requestAnimationFrameFnc();

    return <></>;
});

export default RefComp;