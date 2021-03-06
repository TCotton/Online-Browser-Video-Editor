import React from 'react';
import {useVideo} from 'react-use';
import {useSelector} from "react-redux";
import {selectPlay, selectStop, selectBackward, selectForward} from '../slices/playerSlice';

const VideoTag = (props) => {
    const {autoPlay, controlz, sources} = props;

    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src}/>
    );

    const play = useSelector(selectPlay);
    play.then((result) => {
        // eslint-disable-next-line no-unused-expressions
        console.log(result, 'play');
        if(result) {
            controls.play();
        }
    });

    const pause = useSelector(selectStop);
    pause.then((result) => {
        // eslint-disable-next-line no-unused-expressions
        console.log(result, 'pause');
        if(result) {
            controls.pause();
        }
    });

    const back = useSelector(selectBackward);
    back.then((result) => {
        if(result) {
            console.log(result, 'back');
            controls.seek(state.time - 0.1)
        }
    });

    const forward = useSelector(selectForward);
    forward.then((result) => {
        if(result) {
            console.log(result, 'forward');
            controls.seek(state.time + 0.1)
        }
    });

    return (
        <>
            {video}
        </>
    )
}

export default VideoTag;