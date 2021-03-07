import React from 'react';
import {useSelector} from "react-redux";
import {peakFrequency} from '../slices/audioSlice';

const ChannelDisplay = () => {
    const range = useSelector(peakFrequency);
    console.dir(range);

    return (
        <>
            <div className="left">
                <meter min="0"
                       max="255"
                       low="33"
                       high="66"
                       optimum="80"
                       value={range}
                />
            </div>
            <div className="right">

            </div>
        </>
    )
}

export default ChannelDisplay;