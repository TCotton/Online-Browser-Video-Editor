import React, {useEffect, useMemo} from 'react';
import {useVideo} from 'react-use';
import {useDispatch, useSelector} from "react-redux";
import {selectBackward, selectForward, selectPlay, selectStop} from '../slices/playerSlice';
import {durationFn, elFn, timeFn} from '../slices/videoSlice';
import RefComp from "./RefComp";

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

    useMemo(() => {
        dispatch(elFn(true))
    }, [ref]);

    const play = useSelector(selectPlay);
    play.then((result) => {
        if (result) {
            console.dir(result, 'play');
            controls.play();
        }
    });

    const pause = useSelector(selectStop);
    pause.then((result) => {
        if (result) {
            console.log(result, 'pause')
            controls.pause();
        }
    });

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
            <RefComp component={ref.current}/>
            {video}
        </>
    )
}


export default VideoTag;