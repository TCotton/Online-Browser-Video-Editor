import React from 'react';
import {useLiveQuery} from "dexie-react-hooks";
import {window} from "browser-monads";
import VideoTag from './VideoTag';
import db from '../indexDB';
import ErrorBoundary from '../../components/ErrorBoundary/Error';

const VideoSettings = () => {
    const allItems = useLiveQuery(() => db.file.toArray(), []);

    const videoJsOptions = {
        autoPlay: true,
        controls: true,
        sources: [{
            src: allItems ? window.URL.createObjectURL(allItems[0]) : '',
            type: allItems ? allItems.type : '',
        }]
    }

    return (
        allItems ? (<ErrorBoundary>
            <VideoTag autoPlay={videoJsOptions.autoPlay} controls={videoJsOptions.controls}
                      sources={videoJsOptions.sources}/>
        </ErrorBoundary>) : null
    )

}

export default VideoSettings