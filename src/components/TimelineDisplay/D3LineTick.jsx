import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

export const D3LineTick = props => {
  const { data, time, width, height } = props

  const ref = useRef()

  useEffect(() => {
    if (
      data &&
      Array.isArray(data.min_array) &&
      Array.isArray(data.max_array)
    ) {
      const svgElement = d3.select(ref.current)

      const min = data.min_array
      const max = data.max_array

      const parseTime = d3.timeFormat('%M:%S')

      const result = time / data.length
      const perSecond = 1 / result

      const xScale = d3
        .scaleLinear()
        .range([0, width])
        .domain([0, data.length])

      const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([d3.min(min), d3.max(max)])

      const ab = d3
        .axisTop(xScale)
        .ticks(20)
        .tickFormat(d => {
          if (perSecond) {
            return parseTime((d / perSecond) * 1000)
          }
          return null
        })

      const d3Line = d3
        .line()
        .x((d, i) => {
          return xScale(i)
        })
        .y(d => {
          return yScale(d)
        })

      svgElement
        .select('.axis-top')
        .call(ab)
        .selectAll('text')
        .attr('transform', 'translate(10,30) rotate(45)')
        .style('text-anchor', 'end')
        .style('font-size', '1.75ex')
        .style('font-family', 'monospace')
        .style('fill', '#ffffff')

      const svg = svgElement
        .select('.waveform')
        .selectAll('path')
        .data([max])

      svg
        .join('path')
        .attr('class', 'svg-line')
        .attr('fill', '#ffffff')
        .attr('d', d3Line)
    }
  }, [data, time])

  return (
    <div className='timeline-ticks'>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio='xMidYMid slice'
        data-testid='svg'
        ref={ref}
      >
        <g className='axis-top' transform='translate(0,0)' data-testid='axis' />
        <g className='waveform' data-testid='waveform' />
      </svg>
    </div>
  )
}

D3LineTick.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  data: PropTypes.shape({
    min_array: PropTypes.arrayOf(PropTypes.number).isRequired,
    max_array: PropTypes.arrayOf(PropTypes.number).isRequired,
    length: PropTypes.number.isRequired
  }).isRequired
}
