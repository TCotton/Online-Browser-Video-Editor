import * as d3 from "d3";
import React, {useEffect, useRef} from "react";

const D3BarChart = props => {
    const {data, width, height, padding} = props;
    const ref = useRef(null);

    const svg = d3.select(ref.current);

    useEffect(() => {
        if (data && ref.current) {

            // Bind D3 data
            const update = svg
                .append('g')
                .selectAll('text')
                .data(data);

            // Enter new D3 elements
            update.enter()
                .append('text')
                .attr('x', (d, i) => i * 25)
                .attr('y', 40)
                .style('font-size', 24)
                .text((d) => d);

            // Update existing D3 elements
            update
                .attr('x', (d, i) => i * 40)
                .text((d) => d);

            // Remove old D3 elements
            update.exit()
                .remove();
        }
    }, [data, height, padding, width]);

    return (
        <svg width={width} height={height} ref={ref}/>
    );

}

export default D3BarChart;