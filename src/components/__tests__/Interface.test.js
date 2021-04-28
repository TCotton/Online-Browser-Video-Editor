import React from 'react'
import Interface from '../Interface'
import { render } from '../../test-utils'

jest.mock('reakit/Tooltip', () => ({
  ...jest.requireActual('reakit/Tooltip'),
  useTooltipState: jest.fn(n => n)
}))

describe('Interface', () => {
  it('should render successfully', () => {
    const { container } = render(<Interface />)
    expect(container.querySelector('[data-testid="interface"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<Interface />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should render exact aria-describedby as provided by the useTooltipState hook', () => {
    const { container } = render(<Interface />)
    expect(
      container.querySelector("[aria-describedby='tooltip3']")
    ).not.toBeNull()
    expect(
      container.querySelector("[aria-describedby='tooltip4']")
    ).not.toBeNull()
    expect(
      container.querySelector("[aria-describedby='tooltip5']")
    ).not.toBeNull()
    expect(
      container.querySelector("[aria-describedby='tooltip6']")
    ).not.toBeNull()
    expect(
      container.querySelector("[aria-describedby='tooltip7']")
    ).not.toBeNull()
    expect(
      container.querySelector("[aria-describedby='tooltip8']")
    ).not.toBeNull()
    expect(
      container.querySelector("[aria-describedby='tooltip9']")
    ).not.toBeNull()
  })
})
