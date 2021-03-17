import React from 'react'
import ErrorBoundary from "../../ErrorBoundary/Error";
import {useSelector} from "react-redux";
import {imgArray} from '../slices/imageSlice';
import {ImageFramesComponent} from "./ImageFramesComponent";
import {WavelineComponent} from "./WavelineComponent";

export const TimeLines = () => {

    const iA = useSelector(imgArray);

    return (
        <section className="bottom">
            <div className="row-one">
                <div className="controls">
                    <button>
                        <img className="eye" src={"./eye.svg"} alt=""/>
                    </button>
                </div>
                <div className="timeline">
                    <ErrorBoundary>
                        <ImageFramesComponent images={iA}/>
                    </ErrorBoundary>
                </div>
            </div>
            <div className="row-two">
                <div className="controls">
                    <button>
                        <img className="eye" src={"./eye.svg"} alt=""/>
                    </button>
                </div>
                <div className="timeline">
                    <ErrorBoundary>
                        <WavelineComponent />
                    </ErrorBoundary>
                </div>
            </div>
        </section>
    )
}