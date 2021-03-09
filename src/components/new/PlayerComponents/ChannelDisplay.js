import React, {useState, useCallback} from 'react';
import {useSelector} from "react-redux";
import {peakFrequency} from '../slices/audioSlice';
//import BarChart from './BarChart';
import D3BarChart from './D3BarChart';
import Circles from './AnimatedCircles';

const Foo = () => {
    const [ref, setRef] = useState(null);

    const onRefChange = useCallback(node => {
        // ref value changed to node
        setRef(node); // e.g. change ref state to trigger re-render
        if (node !== null) {
            console.log('null');
            // node is null, if DOM node of ref had been unmounted before
        } else {
            console.log('not null');
            // ref value exists
        }
    }, );

    return <h1 ref={onRefChange}>Hey</h1>;
}

const ChannelDisplay = () => {
    const range = useSelector(peakFrequency);

    return (
        <>
            <div className="left">
                <D3BarChart data={[1,2,3]} width={250} height={250} padding={2} />
                <Circles />
            </div>
            <div className="right" />
        </>
    )
}

export default ChannelDisplay;