import React from 'react';
import {document} from "browser-monads";

const VideoTimers = () => {
    const time = 10000;
    const result = document.getElementById('video');
    console.dir(result.duration);

    return (
        <time>{time}</time>
    )
}

export default VideoTimers
