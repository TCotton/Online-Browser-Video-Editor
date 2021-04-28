import React from 'react'
import { SpinnerComponent } from '../SpinnerComponent'
import { render } from '../../../test-utils'

describe('SpinnerComponent', () => {
  it('should render component', function () {
    const { container } = render(<SpinnerComponent />, {
      initialState: {
        loader: {
          display: true
        }
      }
    })
    expect(container.querySelector('[data-testid="spinner"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<SpinnerComponent />, {
      initialState: {
        loader: {
          display: true
        }
      }
    })
    expect(baseElement).toMatchSnapshot()
  })
})
