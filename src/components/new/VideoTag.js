import React from 'react';
import {useVideo} from 'react-use';
import {useDispatch} from "react-redux";
import {add} from './slices/videoSlice';


const VideoTag = (props) => {
    const {autoPlay, controlz, sources} = props;

    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src}/>
    );

    const map = new Map();
    map.set('video', video);

    const dispatch = useDispatch();
    dispatch(add({video: map, state: map, controls: map, ref: map}));

    return (
        <>
            {video}
        </>
    )
}

const widthVideoProps = (BaseComponent) => (props) => (
    <BaseComponent {...props} />
);
//const EnhancedHello = withStyling(HelloComponent);

export default VideoTag;