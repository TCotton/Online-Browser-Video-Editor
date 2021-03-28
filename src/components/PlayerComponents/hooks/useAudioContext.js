import React from "react";
import {window} from "browser-monads";
import {useDispatch} from "react-redux";
import {peakFrequencyFnLeft, peakFrequencyFnRight} from "../../slices/audioSlice";

export function useAudioContext(ref) {
    const dispatch = useDispatch();
    const [context, setContext] = React.useState();

    const handler = React.useMemo(() => {

        if(ref.current !== null && ref.current instanceof HTMLMediaElement) {
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
                console.log('here');
                current = window.requestAnimationFrame(requestAnimationFrameFnc);
                lAnalyser.getByteFrequencyData(lArray);
                rAnalyser.getByteFrequencyData(rArray);
                const peakFrequencyLeft = Math.max.apply(null, lArray);
                const peakFrequencyRight = Math.max.apply(null, rArray);
                dispatch(peakFrequencyFnLeft(peakFrequencyLeft));
                dispatch(peakFrequencyFnRight(peakFrequencyRight));
            }

            requestAnimationFrameFnc();

        }

        return () => window.cancelAnimationFrame(ref.current);

    }, [ref.current])

    return [context, handler];

}