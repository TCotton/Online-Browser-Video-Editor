import React from 'react'
import { render } from '@testing-library/react'
import { D3WavelineComponent } from '../D3WavelineComponent'

describe('D3WavelineComponent', () => {
  const props = {
    height: 999,
    width: 999,
    data: {
      min_array: [1],
      max_array: [2],
      length: 123
    }
  }

  it('should render successfully', () => {
    const { container } = render(<D3WavelineComponent {...props} />)
    expect(container.querySelector('[data-testid="svg"]')).not.toBeNull()
    expect(container.querySelector('[data-testid="area"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<D3WavelineComponent {...props} />)
    expect(baseElement).toMatchSnapshot()
  })
})
