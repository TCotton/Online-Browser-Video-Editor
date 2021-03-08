import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = props => {
    const { randomData, width, height, padding } = props;
    const ref = useRef(null);

    function colorGradient(v) {
        return "rgb(0, " + v * 5 + ", 0";
    }

    const group = d3.select(ref.current).append("g");

    //insert & remove elements using D3
    useEffect(() => {
        if (randomData.length > 0 && ref.current) {
            // const group = d3.select(ref.current);

            const update = group
                // .append("g")
                .selectAll("rect")
                .data(randomData);

            update
                .enter() // create new dom elements for added data items
                .append("rect")
                .merge(update)
                .attr("x", (d, i) => i * (width / randomData.length))
                .attr("y", d => height - d * 5)
                .attr("width", width / randomData.length - padding)
                .attr("height", d => d * 5)
                .attr("fill", d => colorGradient(d));

            update
                .enter()
                .append("text")
                .merge(update)
                .text(d => d)
                .attr("text-anchor", "middle")
                .attr(
                    "x",
                    (d, i) =>
                        i * (width / randomData.length) +
                        (width / randomData.length - padding) / 2
                )
                .attr("y", d => height - d * 5 + 12)
                .style("font-family", "sans-serif")
                .style("font-size", 12)
                .style("fill", "#ffffff");

            update.exit().remove();
        }
    }, [randomData, height, padding, width]);

    return (
        <svg width={width} height={height} ref={ref} />
    );
};

export default BarChart;
