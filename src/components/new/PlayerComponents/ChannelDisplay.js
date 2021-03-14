import React from 'react';
import {useSelector} from "react-redux";
import {peakFrequencyLeft, peakFrequencyRight} from '../slices/audioSlice';
import D3BarChart from './D3BarChart';

const ChannelDisplay = () => {
    const rangeLeft = useSelector(peakFrequencyLeft);
    const rangeRight = useSelector(peakFrequencyRight);

    return (
        <>
            <div className="left">
                <D3BarChart randomData={rangeLeft} width={250} height={250} padding={0} colour={`rgb(32, 224, 187)`} />
            </div>
            <div className="right">
                <D3BarChart randomData={rangeRight} width={250} height={250} padding={0} colour={`rgb(14, 175, 163)`}/>
            </div>
        </>
    )
}

export default ChannelDisplay;