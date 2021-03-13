import React, {useEffect, useRef} from "react";
import * as d3 from "d3";

const BarChart = props => {
    const {randomData, width, height, padding} = props;

    const ref = useRef()

    useEffect(() => {
        const svgElement = d3.select(ref.current);

        const colour = `hsla(216, 8, 12, 1)`;
        const result = [{h:randomData, c:colour}];

        const x = d3.scaleBand().range([0, width]).domain(result.map(d => d.c)).padding(padding);
        const y = d3.scaleLinear().range([height, 0]).domain([1, 255]);

        const svg = svgElement.selectAll('.rects').selectAll("rect").data(result);

        svg.join(
            enter => {
                enter.append('rect')
                    .attr('width', x.bandwidth)
                    .attr("height", d => {
                        console.log(d);
                        if (d && d.h) {
                            return height - y(d.h);
                        }
                        return 0;
                    })
                    .attr('fill', d => {
                        console.log(d);
                        if (d && d.c) {
                            console.log(d.c);
                            return d.c;
                        }
                        return null;
                    })
                    .attr('class', 'rect');
            },
            update => {
                update.attr("height", d => {
                    if (d && d.h) {
                        return height - y(d.h);
                    }
                    return null;
                })
            },
            destroy => {
                destroy.exit().remove();
            }
        )
    }, [randomData])

    return (
        <svg
            width={width}
            height={height}
            ref={ref}
        >
            <g className="rects"/>
        </svg>
    );
};

export default BarChart;
