import React, {useEffect} from 'react';
import {useVideo} from 'react-use';
import {useSelector, useDispatch} from "react-redux";
import {selectPlay, selectStop, selectBackward, selectForward} from '../slices/playerSlice';
import {durationFn, timeFn} from '../slices/videoSlice';

const VideoTag = (props) => {
    const {sources} = props;
    const dispatch = useDispatch();

    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src}/>
    );

    useEffect(() => {
        dispatch(durationFn(state.duration))
    }, [state.duration]);

    useEffect(() => {
        dispatch(timeFn(state.time))
    }, [state.time]);

    const play = useSelector(selectPlay);
    play.then((result) => {
        console.log(result, 'play');
        if(result) {
            controls.play().then(() => {
              //  console.dir(state.time);
            });
        }
    });

    const pause = useSelector(selectStop);
    pause.then((result) => {
        console.log(result, 'pause');
        if(result) {
            controls.pause();
        }
    });

    const back = useSelector(selectBackward);
    back.then((result) => {
        if(result) {
            console.log(result, 'back');
            controls.seek(state.time - 0.1);
        }
    });

    const forward = useSelector(selectForward);
    forward.then((result) => {
        if(result) {
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