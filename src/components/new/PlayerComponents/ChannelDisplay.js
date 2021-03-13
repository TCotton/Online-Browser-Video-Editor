import React from 'react';
import {useSelector} from "react-redux";
import {peakFrequency} from '../slices/audioSlice';
import BarChart from './BarChart';
//import D3BarChart from './D3BarChart';
import Circles from './AnimatedCircles';

const ChannelDisplay = () => {
    const range = useSelector(peakFrequency);

    return (
        <>
            <div className="left">
                <BarChart randomData={range} width={250} height={250} padding={2} />
            </div>
            <div className="right" />
        </>
    )
}

export default ChannelDisplay;