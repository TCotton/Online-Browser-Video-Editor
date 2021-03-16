
export const generateThumbnail = (i, videoNode) => {
    const detachedContainer = document.createElement('canvas');
    const context = detachedContainer.getContext('2d');
    // TODO: change width and height
    context.drawImage(videoNode, 0, 0, 220, 150);
    return detachedContainer.toDataURL();
}