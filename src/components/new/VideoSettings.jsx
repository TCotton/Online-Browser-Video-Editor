import React from 'react';
import VideoDisplay from "./VideoDisplay";
import {liveQuery} from "dexie";
import db from '../indexDB';
import ErrorBoundary from '../../components/ErrorBoundary/Error';
const VideoSettings = () => {

    const friendsObservable = liveQuery (
        () => db.file
    );

    friendsObservable.subscribe({
        next: result => console.log("Got result:", result),
        error: error => console.error(error)
    });

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        sources: [{
            src: '/path/to/video.mp4',
            type: 'video/mp4'
        }]
    }

    return (
        <ErrorBoundary>
            <VideoDisplay { ...videoJsOptions } />
        </ErrorBoundary>
    )

}

export default VideoSettings