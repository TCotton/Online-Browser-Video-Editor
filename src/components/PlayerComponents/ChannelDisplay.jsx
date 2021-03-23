import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {peakFrequencyLeft, peakFrequencyRight} from '../slices/audioSlice';
import D3BarChart from './D3BarChart';

const ChannelDisplay = () => {
    const rangeLeft = useSelector(peakFrequencyLeft);
    const rangeRight = useSelector(peakFrequencyRight);
    const [def, setDefault] = useState('default');

    const setDefaultClass = () => {
        if(def === 'default') setDefault('');
    }

    return (
        <>
            <div className={`left ${def}`} data-testid="ChannelDisplay">
                <D3BarChart data={rangeLeft} width={250} height={250} padding={0} colour="rgb(32, 224, 187)" setClass={setDefaultClass} />
            </div>
            <div className={`right ${def}`}>
                <D3BarChart data={rangeRight} width={250} height={250} padding={0} colour="rgb(14, 175, 163)" setClass={setDefaultClass} />
            </div>
        </>
    )
}

export default ChannelDisplay;