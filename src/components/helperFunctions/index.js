import { document } from "browser-monads";

export const index = (i, videoNode) => {
    const detachedContainer = document.createElement('canvas');
    const context = detachedContainer.getContext('2d');
    const vRatio = (detachedContainer.height / videoNode.videoHeight) * videoNode.videoWidth;
    const halfOfContainer = detachedContainer.width / 2;
    const halfOfImage = vRatio / 2;
    context.drawImage(videoNode, (halfOfContainer - halfOfImage), 0, vRatio, detachedContainer.height);
    return detachedContainer.toDataURL();
}

export const toMinutesAndSeconds = (millis) => {
    const minutes = Math.floor((millis * 1000) / 60000);
    const seconds = (((millis * 1000) % 60000) / 1000).toFixed(2);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export const changeExt = (fileName, newExt) => {
    const pos = fileName.includes(".") ? fileName.lastIndexOf(".") : fileName.length;
    const fileRoot = fileName.substr(0, pos);
    return `${fileRoot}.${newExt}`;
}