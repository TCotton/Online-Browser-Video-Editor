export const audioDisplay = (videoElement, win) => {
    if (!(videoElement instanceof HTMLMediaElement)) return;
    let source;

    if (source) {
        source.disconnect();
    }

    const ctx = new (win.AudioContext || win.webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    source = ctx.createMediaElementSource(videoElement);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyser.getByteFrequencyData(dataArray);

    function requestAnimationFrameFnc() {
        win.requestAnimationFrame(requestAnimationFrameFnc);
        analyser.getByteFrequencyData(dataArray);
        const peakFrequency = Math.max.apply( null, dataArray );

        return {
            peakFrequency
        }
    }
    requestAnimationFrameFnc();
}

