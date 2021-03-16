import React from 'react';
import {useSelector} from "react-redux";
import {imageArray} from '../slices/imageSlice';

export const ImageFramesComponent = () => {
   const imageAry = useSelector(imageArray);

    const images = imageAry.map((x) =>
        <img src={x} alt="" className={`images`} />
    );

    return (
        {images}
    )
}