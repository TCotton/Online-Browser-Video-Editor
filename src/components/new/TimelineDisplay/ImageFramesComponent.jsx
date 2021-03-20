import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from "../../ErrorBoundary/Error";

export const ImageFramesComponent = (props) => {
const { images } = props
    //TODO check render method of `ImageFramesComponent`  Each child in a list should have a unique "key" prop.
    return (
        images && Array.isArray(images) && images.length > 0? (
            <ErrorBoundary>
                {/* eslint-disable-next-line react/no-array-index-key */}
                {images.map((x,i) => <div className="image-container" key={i}><img src={x} alt="" className="images"/></div>)}
            </ErrorBoundary>
        ) : null
    )
}

ImageFramesComponent.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};