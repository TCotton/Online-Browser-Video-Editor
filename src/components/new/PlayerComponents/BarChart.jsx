import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = props => {
    const { randomData, width, height, padding } = props;
    const ref = useRef(null);

    const group = d3.select(ref.current);

    useEffect(() => {
        const svgElement = d3.select(ref.current);

        svgElement.selectAll('.rects').selectAll("rect")
            .data(randomData)
            .join("rect");

    }, [randomData])

    return (
        <svg 
            width={width} 
            height={height} 
            ref={ref} 
        >
            <g className="rects"></g>
        </svg>
    );
};

export default BarChart;
