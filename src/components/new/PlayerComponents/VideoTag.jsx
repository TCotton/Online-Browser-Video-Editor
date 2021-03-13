import React, {useEffect, useMemo} from 'react';
import {useVideo} from 'react-use';
import {useDispatch, useSelector} from "react-redux";
import {window} from "browser-monads";
import {selectBackward, selectForward, selectPlay} from '../slices/playerSlice';
import {durationFn, elFn, timeFn} from '../slices/videoSlice';
import {peakFrequencyFn} from '../slices/audioSlice';

const VideoTag = (props) => {
    const {sources} = props;
    const dispatch = useDispatch();

    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src} id="video"/>
    );

    useEffect(() => {
        //TODO: refactor into custom hook
        let current;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = ctx.createAnalyser();
        const source = ctx.createMediaElementSource(ref.current);
        source.connect(analyser);
        analyser.connect(ctx.destination);
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        analyser.getByteFrequencyData(dataArray);

        function requestAnimationFrameFnc() {
            current = window.requestAnimationFrame(requestAnimationFrameFnc);
            analyser.getByteFrequencyData(dataArray);
            const peakFrequency = Math.max.apply( null, dataArray );
            dispatch(peakFrequencyFn(peakFrequency));
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
        controls.play();
    } else {
        controls.pause();
    }

    const back = useSelector(selectBackward);
    back.then((result) => {
        if (result) {
            console.log(result, 'backwards');
            controls.seek(state.time - 0.1);
        }
    });

    const forward = useSelector(selectForward);
    forward.then((result) => {
        if (result) {
            console.log(result, 'forward');
            controls.seek(state.time + 0.1);
        }
    });

    return (
        <>
            {video}
        </>
    )
}


export default VideoTag;