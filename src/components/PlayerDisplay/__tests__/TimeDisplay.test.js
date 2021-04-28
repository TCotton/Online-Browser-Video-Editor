import React from 'react'
import { render } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import TimeDisplay from '../TimeDisplay'

describe('TimeDisplay', () => {
  let useSelectorMock

  beforeEach(() => {
    useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  })

  afterEach(() => {
    useSelectorMock.mockClear()
  })

  it('should render successfully', () => {
    useSelectorMock.mockReturnValue(0)
    const { container } = render(<TimeDisplay />)
    expect(container.querySelector('[data-testid="time"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    useSelectorMock.mockReturnValue(0)
    const { baseElement } = render(<TimeDisplay />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should call useSelector', () => {
    render(<TimeDisplay />)
    expect(useSelectorMock).toHaveBeenCalled()
  })
})
