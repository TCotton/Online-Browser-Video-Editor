export const audioDisplay = (videoElement) => {
    if (!(videoElement instanceof HTMLMediaElement)) return;

    console.dir(videoElement);

    //alert('yes');
    const ctx = new AudioContext();
    let source = ctx.createMediaElementSource(videoElement);
    const srcChannelCount = source.channelCount;  // Always 2!!!
    console.dir(srcChannelCount);

}