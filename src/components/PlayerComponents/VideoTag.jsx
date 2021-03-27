import React, {useEffect, useState} from 'react';
import {useVideo} from 'react-use';
import {useDispatch, useSelector} from "react-redux";
import {window} from "browser-monads";
import WaveformData from "waveform-data"
import PropTypes from 'prop-types';
import {peakFrequencyFnLeft, peakFrequencyFnRight} from '../slices/audioSlice';
import {index} from '../helperFunctions'
import {imageFn} from '../slices/imageSlice';
import {waveformFn} from "../slices/waveformSlice";
import videoBackground from "../../../static/video-background.png";
import {useControlsMute} from "./hooks/useControlsMute";
import {useControlsForward} from './hooks/useControlsForward';
import {useControlsBackward} from './hooks/useControlsBackward'
import {useControlsPlay} from "./hooks/useControlsPlay";
import {useDisplayLoader} from "./hooks/useDisplayLoader";
import {useDispatchTime} from "./hooks/useDispatchTime";
import {useDispatchDuration} from "./hooks/useDispatchDuration";
import {useWaveformData} from "./hooks/useWaveformData";
import {useAudioContext} from "./hooks/useAudioContext";

const VideoTag = (props) => {
    const {sources, files} = props;
    const dispatch = useDispatch();
    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src} id="video" poster={videoBackground} data-testid="video"/>
    );

    useEffect(() => {
        let newRef;

        if (ref) {
            newRef = ref.current.cloneNode(true);
            const isSameNode = newRef.isSameNode(ref.current);
            if (isSameNode) return;

            newRef.muted = true;
            newRef.autoplay = true;

            let i = 0;
            const result = [];
            newRef.addEventListener('loadeddata', () => {
                newRef.currentTime = i;
            });

            newRef.addEventListener('seeked', () => {

                // now video has seeked and current frames will show
                // at the time as we expect
                const r = index(i, newRef);
                result.push(r);

                // when frame is captured, increase here by 5 seconds
                i += (newRef.duration / 5);

                // if we are not past end, seek to next interval
                if (i <= newRef.duration) {
                    // this will trigger another seeked event
                    newRef.currentTime = i;
                } else {
                    // Done!, next action
                    dispatch(imageFn(result));
                }
            });
        }
        //TODO: clean up eventListeners
    }, [files]);

    const [ context ] = useAudioContext(ref)
    useWaveformData(files);
    useDispatchDuration(state.duration);
    useDispatchTime(state.time);
    useDisplayLoader();

    const play = useControlsPlay();
    if (play) {
        if (context && context.state === 'suspended') {
            context.resume().then(() => {
                console.info('Playback resumed successfully');
            });
        }
        controls.play();
    }
    if(!play) {
        controls.pause();
    }

    const backward = useControlsBackward()
    if (backward) controls.seek(state.time - 0.1);

    const forward = useControlsForward()
    if (forward) controls.seek(state.time + 0.1);

    const mute = useControlsMute();
    if (mute && !state.muted) controls.mute();
    if (!mute && state.muted) controls.unmute();

    return (
        <>
            {video}
        </>
    )
}

VideoTag.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    files: PropTypes.array.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    autoPlay: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
    controls: PropTypes.bool,
    sources: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        type: PropTypes.string
    })).isRequired
};

export default VideoTag;