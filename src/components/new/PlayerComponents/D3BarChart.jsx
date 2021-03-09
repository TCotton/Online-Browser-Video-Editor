import * as d3 from "d3";
import React, {useEffect, useRef} from "react";
import useHotReload from '../../../hooks/useHotReload'

const D3BarChart = props => {
    const {data, width, height, padding} = props;
    useHotReload();
    const ref = useRef(null);

    const svg = d3.select(ref.current)
    svg.append("g").attr('class', 'barChart');

    useEffect(() => {
        if (data && ref.current) {

            const colour = `hsla(216, 8, 12, 1)`;
            const result = [data, colour];
            console.dir(result);

            //svg.selectAll('.barChart').selectAll("*").remove();

            const x = d3.scaleBand().range([0, width]).domain(result.map(d => d[1])).padding(padding);
            const y = d3.scaleLinear().range([height, 0]).domain([1, 255]);

            const elm = svg.selectAll('.barChart').selectAll('.rect').datum(data);

            elm.join(
                enter => {
                    enter.append('rect')
                        .attr('width', x.bandwidth)
                        .attr("height", d => {
                            if (d && d[0]) {
                                console.log('create');
                                return height - y(d[0]);
                            }
                            return 0;
                        })
                        .attr('fill', d => {
                            if (d && d[1]) {
                                console.log(d[1]);
                                return d[1]
                            }
                            return null;
                        })
                        .attr('class', 'rect');
                },
                update => {
                    update.attr("height", d => {
                        if (d && d[0]) {
                            console.log('update');
                            return height - y(d[0]);
                        }
                        return null;
                    })
                },
                destroy => {
                    destroy.exit().remove();
                }
            )
        }
    }, [data, height, padding, width]);

    return (
        <svg width={width} height={height} ref={ref}/>
    );

}

export default D3BarChart;