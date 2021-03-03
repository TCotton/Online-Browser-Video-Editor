import React from 'react';

const VideoTag = (props) => {
    const {autoPlay, controls, sources} = props;

    return (
        <video autoPlay={autoPlay} controls={controls} id="video" key={sources[0].src}>
            {sources.map((item) => {
                return <source key={item.src} src={item.src} type={item.type}/>
            })}
        </video>
    )
}
export default VideoTag;