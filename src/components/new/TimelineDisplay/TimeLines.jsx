import React from 'react'
import {useSelector} from "react-redux";
import ErrorBoundary from "../../ErrorBoundary/Error";
import {imgArray} from '../slices/imageSlice';
import {data} from '../slices/waveformSlice';
import {ImageFramesComponent} from "./ImageFramesComponent";
import {WavelineComponent} from "./WavelineComponent";

export const TimeLines = () => {

    const iArr = useSelector(imgArray);
    const waveForm = useSelector(data);

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
                        <ImageFramesComponent images={iArr}/>
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
                        <WavelineComponent data={waveForm} height={500} width={100} />
                    </ErrorBoundary>
                </div>
            </div>
        </section>
    )
}