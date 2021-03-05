import React from 'react';
import {useVideo} from 'react-use';
import {useSelector} from "react-redux";
import {selectPlay} from '../slices/playerSlice';

const VideoTag = (props) => {
    const {autoPlay, controlz, sources} = props;

    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src}/>
    );

    const play = useSelector(selectPlay);
    play.then((result) => {
        if(result) {
            controls.play();
        }
    });

    return (
        <>
            {video}
        </>
    )
}

export default VideoTag;