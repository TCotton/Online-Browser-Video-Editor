import React, {useEffect, useMemo} from 'react';
import {useVideo} from 'react-use';
import {useDispatch, useSelector} from "react-redux";
import useDeepCompareEffect from 'use-deep-compare-effect'
import {selectBackward, selectForward, selectPlay, selectStop} from '../slices/playerSlice';
import {durationFn, elFn, timeFn} from '../slices/videoSlice';
import {audioDisplay} from '../helperFunctions/audioDisplay';

const VideoTag = (props) => {
    const {sources} = props;
    const dispatch = useDispatch();

    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src} id="video"/>
    );

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

    useDeepCompareEffect(
        () => {
            dispatch(elFn(true))
            audioDisplay(ref.current);
        }, [ref],
    )

    const play = useSelector(selectPlay);
    play.then((result) => {
        if (result) {
            controls.play();
        }
    });

    const pause = useSelector(selectStop);
    pause.then((result) => {
        if (result) {
            controls.pause();
        }
    });

    const back = useSelector(selectBackward);
    back.then((result) => {
        if (result) {
            controls.seek(state.time - 0.1);
        }
    });

    const forward = useSelector(selectForward);
    forward.then((result) => {
        if (result) {
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