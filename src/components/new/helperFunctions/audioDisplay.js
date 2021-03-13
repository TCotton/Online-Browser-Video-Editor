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

    ctx.decodeAudioData(dataArray, function(data) {
        source = ctx.createBufferSource();
        source.buffer = data;
        const splitter = ctx.createChannelSplitter(2);
        source.connect(splitter);
        const merger = ctx.createChannelMerger(2);

        // Reduce the volume of the left channel only
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.5, getByteFrequencyData.currentTime);
        splitter.connect(gainNode, 0);

        // Connect the splitter back to the second input of the merger: we
        // effectively swap the channels, here, reversing the stereo image.
        gainNode.connect(merger, 0, 1);
        splitter.connect(merger, 1, 0);

        const dest = ctx.createMediaStreamDestination();

        // Because we have used a ChannelMergerNode, we now have a stereo
        // MediaStream we can use to pipe the Web Audio graph to WebRTC,
        // MediaRecorder, etc.
        merger.connect(dest);
    }).then(() => {

    });
}

