import React from 'react'
import { render } from '@testing-library/react'
import { Play } from '../Play'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

describe('Play', () => {
  it('should render successfully', () => {
    const { container } = render(<Play />)
    expect(container.querySelector('[data-testid="play"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<Play />)
    expect(baseElement).toMatchSnapshot()
  })
})
