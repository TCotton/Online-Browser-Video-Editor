import React from 'react'
import { TimeLines } from '../TimeLines'
import { render } from '../../../test-utils'

describe('TimeLines', () => {
  it('should render successfully', () => {
    const { container } = render(<TimeLines />, {
      initialState: {
        video: {
          time: 999
        },
        waveform: {
          data: {
            min_array: [0],
            max_array: [0],
            length: 0
          }
        },
        images: {
          iArray: ['img']
        }
      }
    })
    expect(container.querySelector('[data-testid="TimeLines"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<TimeLines />, {
      initialState: {
        video: {
          time: 999
        },
        waveform: {
          data: {
            min_array: [0],
            max_array: [0],
            length: 0
          }
        },
        images: {
          iArray: ['img']
        }
      }
    })
    expect(baseElement).toMatchSnapshot()
  })
})
