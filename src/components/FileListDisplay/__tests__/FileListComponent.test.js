import React from 'react'
import { render } from '@testing-library/react'
import { FileListComponent } from '../FileListComponent'

jest.mock('dexie-react-hooks', () => ({
  ...jest.requireActual('dexie-react-hooks'),
  useLiveQuery: jest.fn()
}))

describe('FileListComponent', () => {
  it('should render successfully', () => {
    const { container } = render(<FileListComponent />)
    expect(
      container.querySelector('[data-testid="FileListComponent"]')
    ).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<FileListComponent />)
    expect(baseElement).toMatchSnapshot()
  })
})
