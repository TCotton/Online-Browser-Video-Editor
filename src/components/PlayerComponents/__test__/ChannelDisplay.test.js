import React from 'react'
import ChannelDisplay from '../ChannelDisplay'
import { render } from '../../../test-utils'

describe('ChannelDisplay', () => {
  it('should render successfully', () => {
    const { container } = render(<ChannelDisplay />, {
      initialState: {
        audio: {
          peakFrequencyLeft: 999,
          peakFrequencyRight: 999
        }
      }
    })
    expect(
      container.querySelector('[data-testid="ChannelDisplay"]')
    ).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<ChannelDisplay />, {
      initialState: {
        audio: {
          peakFrequencyLeft: 999,
          peakFrequencyRight: 999
        }
      }
    })
    expect(baseElement).toMatchSnapshot()
  })
})
