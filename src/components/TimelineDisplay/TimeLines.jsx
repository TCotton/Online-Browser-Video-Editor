import React from 'react'
import {useSelector} from "react-redux";
import ErrorBoundary from "../ErrorBoundary/Error";
import {imgArray} from '../slices/imageSlice';
import {data} from '../slices/waveformSlice';
import {ImageFramesComponent} from "./ImageFramesComponent";
import {D3WavelineComponent} from "./D3WavelineComponent";
import {TimeDisplay} from "./TimeDisplay";
import {D3LineTick} from './D3LineTick';
import {time} from "../slices/videoSlice";

export const TimeLines = () => {

    const iArr = useSelector(imgArray);
    const waveForm = useSelector(data);
    const timeDisplay = useSelector(time);

    return (
        <section className="bottom" data-testid="TimeLines">
            <div className="row-timeline">
                <div className="controls">
                </div>
                <div className="timeline">
                    <ErrorBoundary>
                        <D3LineTick data={waveForm} time={timeDisplay} height={30} width={807} />
                    </ErrorBoundary>
                </div>
            </div>
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
                        <D3WavelineComponent data={waveForm} height={98} width={807}/>
                    </ErrorBoundary>
                </div>
            </div>
            <div className="row-three">
                <div className="controls"/>
                <div className="timeline">
                    <ErrorBoundary>
                        <TimeDisplay/>
                    </ErrorBoundary>
                </div>
            </div>
        </section>
    )
}