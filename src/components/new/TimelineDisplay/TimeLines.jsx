import React from 'react'
import {useSelector} from "react-redux";
import ErrorBoundary from "../../ErrorBoundary/Error";
import {imgArray} from '../slices/imageSlice';
import {data} from '../slices/waveformSlice';
import {ImageFramesComponent} from "./ImageFramesComponent";
import {D3WavelineComponent} from "./D3WavelineComponent";
import {TimeDisplay} from "./TimeDisplay";

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
                        <D3WavelineComponent data={waveForm} height={98} width={807} />
                    </ErrorBoundary>
                </div>
            </div>
            <div className="row-three">
                <div className="controls" />
                <div className="timeline">
                    <ErrorBoundary>
                        <TimeDisplay />
                    </ErrorBoundary>
                </div>
            </div>
        </section>
    )
}