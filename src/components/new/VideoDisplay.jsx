import React, {useEffect, useRef} from "react";
import videojs from 'video.js';

const VideoDisplay = (props) => {
    const {videoSrc, autoplay, muted} = props;
    const playerRef = useRef();

    useEffect(() => {
        const player = videojs(playerRef.current, {autoplay, muted}, () => {
            player.src(videoSrc);
        });

        return () => {
            player.dispose();
        };
    }, [videoSrc, autoplay, muted]);

    return (
        <div>
            <video ref={node => playerRef.current = node} className="video-js"></video>
        </div>
    )
}

export default VideoDisplay;