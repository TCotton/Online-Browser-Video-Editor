import React from 'react';
import {useLiveQuery} from "dexie-react-hooks";
import {useSelector} from "react-redux";
import {imgArray} from '../slices/imageSlice';
import dbVF from "../../indexDBVideo";
import ErrorBoundary from "../../ErrorBoundary/Error";

export const ImageFramesComponent = () => {

    const iA = useSelector(imgArray);
    console.dir(iA);

    //const imageArray = useLiveQuery(() => dbVF.video.where("imagesArray"));

    return (
        iA && Array.isArray(iA) && iA.length > 0? (
            <ErrorBoundary>
                {/* eslint-disable-next-line react/no-array-index-key */}
                {iA.map((x, i) => <div className="image-container"><img key={i} src={x} alt="" className="images"/></div>)}
            </ErrorBoundary>
        ) : null
    )
}