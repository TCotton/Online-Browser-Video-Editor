import React, {useEffect, useMemo, useState} from 'react';
import {useVideo} from 'react-use';
import {useDispatch, useSelector} from "react-redux";
import {window} from "browser-monads";
import WaveformData from "waveform-data"
import PropTypes from 'prop-types';
//import canAutoplay from 'can-autoplay';
import {selectBackward, selectForward, selectMute, selectPlay} from '../slices/playerSlice';
import {durationFn, elFn, timeFn} from '../slices/videoSlice';
import {peakFrequencyFnLeft, peakFrequencyFnRight} from '../slices/audioSlice';
import {generateThumbnail} from '../helperFunctions/generateThumbnail'
import {imageFn} from '../slices/imageSlice';
import {waveformFn} from "../slices/waveformSlice";
import videoBackground from "../../../static/video-background.png";

const VideoTag = (props) => {
    const {sources, files} = props;
    const dispatch = useDispatch();
    const [context, setContext] = useState();

    const [video, state, controls, ref] = useVideo(
        <video src={sources[0].src} id="video" poster={videoBackground}/>
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
            newRef.addEventListener('loadeddata',  () => {
                newRef.currentTime = i;
            });

            newRef.addEventListener('seeked',  () => {

                // now video has seeked and current frames will show
                // at the time as we expect
                const r = generateThumbnail(i, newRef);
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

    useEffect(() => {

        if (files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);

            reader.onload = () => {
                let audioCtx;
                if (window.webkitAudioContext) {
                    audioCtx = new window.webkitAudioContext();
                } else {
                    audioCtx = new window.AudioContext();
                }

                audioCtx.decodeAudioData(reader.result)

                    .then((audioBuffer) => {
                        const options = {
                            audio_context: audioCtx,
                            audio_buffer: audioBuffer,
                            scale: 128
                        };

                        return new Promise((resolve, reject) => {

                            WaveformData.createFromAudio(options, (err, waveform) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(waveform);
                                }
                            });
                        });
                    })
                    .then(waveform => {

                        console.info(`Waveform has ${waveform.channels} channels`);
                        console.info(`Waveform has length ${waveform.length} points`);

                        const channel = waveform.channel(0);

                        const data = {
                            min_array: channel.min_array(),
                            max_array: channel.max_array(),
                            length: waveform.length,
                        }

                        dispatch(waveformFn(data));
                    }).catch((error) => {

                    throw new Error(error);
                });
            };

            reader.onerror = () => {
                throw new Error(reader.error.toString());
            };
        }
    }, [files]);

    useEffect(() => {
        //TODO: refactor into custom hook
        //TODO: move requestAnimationFrame into only component for performance reasons
        let current;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        setContext(ctx);
        const analyser = ctx.createAnalyser();
        const source = ctx.createMediaElementSource(ref.current);
        source.connect(analyser);
        analyser.connect(ctx.destination);

        const oscillator = ctx.createOscillator();
        const channels = oscillator.channelCount;

        const splitter = ctx.createChannelSplitter(channels);
        const lAnalyser = ctx.createAnalyser();
        const rAnalyser = ctx.createAnalyser();

        source.connect(splitter);

        splitter.connect(lAnalyser, 0, 0);
        splitter.connect(rAnalyser, 1, 0);

        const lArray = new Uint8Array(lAnalyser.frequencyBinCount);
        const rArray = new Uint8Array(rAnalyser.frequencyBinCount);

        lAnalyser.getByteFrequencyData(lArray);
        rAnalyser.getByteFrequencyData(rArray);

        function requestAnimationFrameFnc() {
            current = window.requestAnimationFrame(requestAnimationFrameFnc);
            lAnalyser.getByteFrequencyData(lArray);
            rAnalyser.getByteFrequencyData(rArray);
            const peakFrequencyLeft = Math.max.apply(null, lArray);
            const peakFrequencyRight = Math.max.apply(null, rArray);
            if (peakFrequencyLeft > 0) dispatch(peakFrequencyFnLeft(peakFrequencyLeft));
            if (peakFrequencyRight > 0) dispatch(peakFrequencyFnRight(peakFrequencyRight));
        }

        requestAnimationFrameFnc();

        return () => window.cancelAnimationFrame(current);
    }, [ref]);


    useEffect(() => {
        let isStopped = false;
        if (!isStopped) {
            dispatch(durationFn(state.duration))
        }
        return () => {
            isStopped = true;
        };
    }, [state.duration]);


    useEffect(() => {
        let isStopped = false;
        if (!isStopped) {
            dispatch(timeFn(state.time))
        }
        return () => {
            isStopped = true;
        };
    }, [state.time]);


    useMemo(() => {
        //TODO: what's this for??
        dispatch(elFn(true))
    }, [ref]);


    const play = useSelector(selectPlay);
    if (play) {
        if (context && context.state === 'suspended') {
            context.resume().then(() => {
                console.log('Playback resumed successfully');
            });
        }
        controls.play();
    }
    if (!play) controls.pause();

    const back = useSelector(selectBackward);
    back.then((result) => {
        if (result) controls.seek(state.time - 0.1);
    });

    const forward = useSelector(selectForward);
    forward.then((result) => {
        if (result) controls.seek(state.time + 0.1);
    });

    const mute = useSelector(selectMute);
    mute.then((result) => {
        if (result && !state.muted) controls.mute();
        if (!result && state.muted) controls.unmute();
    });

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