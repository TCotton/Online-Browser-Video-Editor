import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

export const WavelineComponent = (props) => {
    const {data, width, height} = props;

    const ref = useRef();

    useEffect(() => {

        if (data) {

            const layout = d3.select(ref.current).select('svg');
            const x = d3.scaleLinear();
            const y = d3.scaleLinear();
            const offsetX = 100;

            const min = data.min_array;
            const max = data.max_array;

            x.domain([0, data.length]).rangeRound([0, 1024]);
            y.domain([d3.min(min), d3.max(max)]).rangeRound([offsetX, -offsetX]);

            const area = d3.area()
                .x((d, i) => x(i))
                .y0((d, i) => y(min[i]))
                .y1((d,) => y(d));

            layout.select('path')
                .datum(max)
                .attr('transform', () => `translate(0, ${offsetX})`)
                .attr('d', area);

        }

    }, [data])

    return null;
      /*  <svg
            height={`100%`}
            width={`100%`}
            viewBox={`0 0 ${width} ${height}`}
            ref={ref}
            data-testid="svg"
        >
            <g className="area" transform="translate(0,0)" data-testid="area"/>
        </svg>*/
}