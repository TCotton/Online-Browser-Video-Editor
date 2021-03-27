import React from "react";
import {window} from "browser-monads";
import WaveformData from "waveform-data";
import {useDispatch} from "react-redux";
import {waveformFn} from "../../slices/waveformSlice";

export function useWaveformData(files = []) {
    const dispatch = useDispatch();

    const handlers = React.useMemo(() => {
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
    },[files]);

    return handlers;
}