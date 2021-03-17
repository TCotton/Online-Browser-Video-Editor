import React from 'react';
import ErrorBoundary from "../../ErrorBoundary/Error";

export const ImageFramesComponent = (props) => {
const { images } = props
    //TODO resize images that they are accurate
    //TODO check render method of `ImageFramesComponent`  Each child in a list should have a unique "key" prop.
    return (
        images && Array.isArray(images) && images.length > 0? (
            <ErrorBoundary>
                {/* eslint-disable-next-line react/no-array-index-key */}
                {images.map(x => <div className="image-container"><img key={x.substring(0,Math.floor(Math.random() * 100))} src={x} alt="" className="images"/></div>)}
            </ErrorBoundary>
        ) : null
    )
}