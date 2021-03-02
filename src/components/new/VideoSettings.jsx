import React from 'react';
import {useSelector} from 'react-redux';
import {liveQuery} from "dexie";
import VideoDisplay from "./VideoDisplay";
import VideoTag from './VideoTag';
import db from '../indexDB';
import {fileName, fileType} from './slices/filesSlice'
import ErrorBoundary from '../../components/ErrorBoundary/Error';

const VideoSettings = () => {

    const friendsObservable = liveQuery (
        () => db.file
    );

    friendsObservable.subscribe({
        next: result => {
            console.log("Got result:", result)
        },
        error: error => console.error(error)
    });

    const fName = useSelector(fileName);
    const fType = useSelector(fileType);
    console.dir(fName);

    const videoJsOptions = {
        autoPlay: true,
        controls: false,
        sources: [{
            src: fName,
            type: fType
        }]
    }

    return (
        <ErrorBoundary>
            <VideoTag { ...videoJsOptions } />
        </ErrorBoundary>
    )

}

export default VideoSettings