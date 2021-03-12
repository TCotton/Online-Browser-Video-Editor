import {equals} from "ramda";
import {window} from "browser-monads";
import {useDispatch} from "react-redux";
import {peakFrequencyFn} from "../slices/audioSlice";
import ClearableWeakMap from "./ClearWeakMap";

export const AudioConnect = (component) => {
    let videoElement = {};
    let source;
    let ctx;

    const MEDIA_ELEMENT_NODES = new ClearableWeakMap();

    if (!(component instanceof HTMLMediaElement)) return null;
    if(videoElement !== component) return null
    //if(equals(videoElement, component)) return null; // instanceOf ?? instead
    videoElement = component;
/*
    if (source) {
        source.disconnect();
    }*/

    ctx = new (window.AudioContext || window.webkitAudioContext)();

    console.dir(MEDIA_ELEMENT_NODES);
    if (MEDIA_ELEMENT_NODES.has(videoElement)) {
        console.log('HES YES');
        source = MEDIA_ELEMENT_NODES.get(videoElement);
    } else {
        console.log("HAS NOT");
        source = ctx.createMediaElementSource(videoElement);
        MEDIA_ELEMENT_NODES.set(videoElement, source);
    }

    if (source === undefined) {
        source = ctx.createMediaElementSource(videoElement);
    }
    const analyser = ctx.createAnalyser();
    source.connect(analyser);
    analyser.connect(ctx.destination);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyser.getByteFrequencyData(dataArray);

    function requestAnimationFrameFnc() {
        window.requestAnimationFrame(requestAnimationFrameFnc);
        analyser.getByteFrequencyData(dataArray);
        return Math.max.apply(null, dataArray);
    }

    requestAnimationFrameFnc();

    return Math.max.apply(null, dataArray);
}