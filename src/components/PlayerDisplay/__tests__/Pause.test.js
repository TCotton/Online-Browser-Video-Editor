import React from 'react'
import { render } from '@testing-library/react'
import { Pause } from '../Pause'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

describe('Play', () => {
  it('should render successfully', () => {
    const { container } = render(<Pause />)
    expect(container.querySelector('[data-testid="pause"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<Pause />)
    expect(baseElement).toMatchSnapshot()
  })
})
