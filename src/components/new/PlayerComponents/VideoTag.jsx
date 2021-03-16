import React, {useEffect, useMemo, useState} from 'react';
import {useVideo} from 'react-use';
import {useDispatch, useSelector} from "react-redux";
import {window} from "browser-monads";
//import canAutoplay from 'can-autoplay';
import {selectBackward, selectForward, selectMute, selectPlay} from '../slices/playerSlice';
import {durationFn, elFn, timeFn} from '../slices/videoSlice';
import {peakFrequencyFnLeft, peakFrequencyFnRight} from '../slices/audioSlice';
import {generateThumbnail} from '../helperFunctions/generateThumbnail'
import {imageFn} from '../slices/imageSlice';

const VideoTag = (props) => {
    const {sources} = props;
    const dispatch = useDispatch();
    let newRef;
    const [context, setContext] = useState();

    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src} id="video"/>
    );

    useEffect(() => {

        if (ref) {
            newRef = ref.current.cloneNode(true);
            const isSameNode = newRef.isSameNode(ref.current);
            console.dir(newRef);
            if(isSameNode) return;

            newRef.muted = true;
            newRef.autoplay = true;

            let i = 0;
            const result = [];
            newRef.addEventListener('loadeddata', function () {
                newRef.currentTime = i;
            });

            newRef.addEventListener('seeked', function () {

                // now video has seeked and current frames will show
                // at the time as we expect
                const r = generateThumbnail(i, newRef);
                result.push(r);

                // when frame is captured, increase here by 5 seconds
                i += (newRef.duration / 5);

                // if we are not past end, seek to next interval
                if (i <= newRef.duration) {
                    // this will trigger another seeked event
                    newRef.currentTime = i;
                } else {
                    // Done!, next action
                    console.dir(result);
                    console.log('done');
                    dispatch(imageFn(result));
                }
            });
        }
        //TODO: clean up eventListeners
    }, [ref]);

    useEffect(() => {
        //TODO: refactor into custom hook
        //TODO: move requestAnimationFrame into only component for performance reasons
        let current;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        setContext(ctx);
        console.dir(context, 'context');
        const analyser = ctx.createAnalyser();
        const source = ctx.createMediaElementSource(ref.current);
        source.connect(analyser);
        analyser.connect(ctx.destination);

        const oscillator = ctx.createOscillator();
        const channels = oscillator.channelCount;

        const splitter = ctx.createChannelSplitter(channels);
        const lAnalyser = ctx.createAnalyser();
        const rAnalyser = ctx.createAnalyser();

        source.connect(splitter);

        splitter.connect(lAnalyser, 0, 0);
        splitter.connect(rAnalyser, 1, 0);

        const lArray = new Uint8Array(lAnalyser.frequencyBinCount);
        const rArray = new Uint8Array(rAnalyser.frequencyBinCount);

        lAnalyser.getByteFrequencyData(lArray);
        rAnalyser.getByteFrequencyData(rArray);

        function requestAnimationFrameFnc() {
            current = window.requestAnimationFrame(requestAnimationFrameFnc);
            lAnalyser.getByteFrequencyData(lArray);
            rAnalyser.getByteFrequencyData(rArray);
            const peakFrequencyLeft = Math.max.apply(null, lArray);
            const peakFrequencyRight = Math.max.apply(null, rArray);
            dispatch(peakFrequencyFnLeft(peakFrequencyLeft));
            dispatch(peakFrequencyFnRight(peakFrequencyRight));
        }

        requestAnimationFrameFnc();

        return () => window.cancelAnimationFrame(current);
    }, [ref]);


    useEffect(() => {
        let isStopped = false;
        if (!isStopped) {
            dispatch(durationFn(state.duration))
        }
        return () => {
            isStopped = true;
        };
    }, [state.duration]);


    useEffect(() => {
        let isStopped = false;
        if (!isStopped) {
            dispatch(timeFn(state.time))
        }
        return () => {
            isStopped = true;
        };
    }, [state.time]);


    useMemo(() => {
        //TODO: what's this for??
        dispatch(elFn(true))
    }, [ref]);


    const play = useSelector(selectPlay);
    if (play) {
        if(context && context.state === 'suspended') {
            context.resume().then(() => {
                console.log('Playback resumed successfully');
            });
        }
        controls.play();
    }
    if (!play) controls.pause();

    const back = useSelector(selectBackward);
    back.then((result) => {
        //console.log(result, 'backwards');
        if (result) controls.seek(state.time - 0.1);
    });

    const forward = useSelector(selectForward);
    forward.then((result) => {
        //console.log(result, 'forward');
        if (result) controls.seek(state.time + 0.1);
    });

    const mute = useSelector(selectMute);
    mute.then((result) => {
        //console.log(result, 'mute');
        if (result && !state.muted) controls.mute();
        if (!result && state.muted) controls.unmute();
    });

    return (
        <>
            {video}
        </>
    )
}


export default VideoTag;