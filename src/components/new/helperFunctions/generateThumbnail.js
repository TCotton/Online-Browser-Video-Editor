import { document } from "browser-monads";

export const generateThumbnail = (i, videoNode) => {
    const detachedContainer = document.createElement('canvas');
    const context = detachedContainer.getContext('2d');
    const vRatio = (detachedContainer.height / videoNode.videoHeight) * videoNode.videoWidth;
    const halfOfContainer = detachedContainer.width / 2;
    const halfOfImage = vRatio / 2;
    context.drawImage(videoNode, (halfOfContainer - halfOfImage), 0, vRatio, detachedContainer.height);
    return detachedContainer.toDataURL();
}