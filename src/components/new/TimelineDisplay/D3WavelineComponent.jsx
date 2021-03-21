import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

export const D3WavelineComponent = (props) => {
    const {data, width, height} = props;

    const ref = useRef();

    useEffect(() => {

        //TODO: use method as advised on the GitHub account: https://github.com/bbc/waveform-data.js/blob/master/README.md
        if (data && Array.isArray(data.min_array) && Array.isArray(data.max_array)) {

            const layout = d3.select(ref.current);

            const min = data.min_array;
            const max = data.max_array;

            const xScale = d3.scaleLinear()
                .range([0, width])
                .domain([0, data.length]);

            const yScale = d3.scaleLinear()
                .range([height, 0])
                .domain([d3.min(min), d3.max(max)]);

            const d3Line = d3.line()
                .x( (d, i) => {
                    return xScale(i);
                })
                .y( (d) => {
                    return yScale(d);
                });

            layout
                .datum(max)
                .attr("d", d3Line);
        }

    }, [data])

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid slice"
            data-testid="svg"
        >
            <g className="area" transform="translate(0,0)" data-testid="area">
                <path
                    className="wave"
                    ref={ref}
                    fill="#20e0bb"
                />
            </g>
        </svg>
    )

}

D3WavelineComponent.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    data: PropTypes.shape({
        min_array: PropTypes.arrayOf(PropTypes.number).isRequired,
        max_array: PropTypes.arrayOf(PropTypes.number).isRequired,
        length: PropTypes.number.isRequired,
    }).isRequired
};