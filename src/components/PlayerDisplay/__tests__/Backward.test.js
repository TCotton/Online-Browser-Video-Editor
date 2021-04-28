import React from 'react'
import { render } from '@testing-library/react'
import { Backward } from '../Backward'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

describe('Backward', () => {
  it('should render successfully', () => {
    const { container } = render(<Backward />)
    expect(container.querySelector('[data-testid="reverse"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<Backward />)
    expect(baseElement).toMatchSnapshot()
  })
})
