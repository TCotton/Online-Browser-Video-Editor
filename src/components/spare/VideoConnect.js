import React from 'react';
import videoConnect from 'react-html5video';

const MyVideoPlayer = ({ video, videoEl, children, ...restProps }) => (
    <div>
        <video {...restProps}>
            { children }
        </video>
        <p>
            Here are the video properties for the above HTML5 video:
            { JSON.stringify(video) }
        </p>
        <a href="#" onClick={(e) => {
            e.preventDefault();
            // You can do what you like with the HTMLMediaElement DOM element also.
            videoEl.pause();
        }}>
            Pause video
        </a>
    </div>
);

export default videoConnect(MyVideoPlayer)