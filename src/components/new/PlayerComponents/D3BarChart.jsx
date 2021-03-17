import React, {useEffect, useRef} from "react";
import {scaleBand, scaleLinear, select} from "d3";

const D3BarChart = props => {
    const {data, width, height, padding, colour, setClass} = props;

    const ref = useRef()

    useEffect(() => {
        if (data > 0) {
            setClass();
        }
        const svgElement = select(ref.current);
        const result = [{h: data, c: colour}];

        const x = scaleBand().range([0, width]).domain(result.map(d => d.c)).padding(padding);
        const y = scaleLinear().range([height, 0]).domain([1, 255]);

        const svg = svgElement.selectAll('.rects').selectAll("rect").data(result);

        svg.join(
            enter => {
                enter.append('rect')
                    .attr('width', x.bandwidth)
                    .attr("height", d => {
                        if (d && d.h) {
                            return height - y(d.h);
                        }
                        return 0;
                    })
                    .attr('y', (d) => {
                        if (d && d.h) {
                            return y(d.h);
                        }
                        return 0;
                    })
                    .attr('fill', d => {
                        if (d && d.c) {
                            return d.c;
                        }
                        return null;
                    })
                    .attr('class', 'rect');
            },
            update => {
                update
                    .attr('width', x.bandwidth)
                    .attr('y', (d) => {
                        if (d && d.h) {
                            return y(d.h);
                        }
                        return 0;
                    })
                    .attr("height", d => {
                        if (d && d.h) {
                            return height - y(d.h);
                        }
                        return 0;
                    })
            },
            destroy => {
                destroy.exit().remove();
            }
        )

    }, [data])

    return (
        <svg
            height={`100%`}
            width={`100%`}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            ref={ref}
            data-testid="svg"
        >
            <g className="rects" transform="translate(0,0)" data-testid="rects"/>
        </svg>
    );
};

export default D3BarChart;
