import React from 'react'
import { render } from '@testing-library/react'
import { FileExport } from '../FileExport'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

jest.mock('dexie', () => {
  return class Dexie {
    open () {
      return Promise.resolve()
    }
    version () {
      return {
        stores: jest.fn()
      }
    }
  }
})

jest.mock('dexie-react-hooks', () => ({
  ...jest.requireActual('dexie-react-hooks'),
  useLiveQuery: jest.fn()
}))

describe('FileExport', () => {
  it('should render successfully', () => {
    const { container } = render(<FileExport />)
    expect(
      container.querySelector('[data-testid="file-export"]')
    ).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<FileExport />)
    expect(baseElement).toMatchSnapshot()
  })
})
