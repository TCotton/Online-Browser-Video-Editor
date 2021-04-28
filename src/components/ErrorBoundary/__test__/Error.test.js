import React from 'react'
import ErrorBoundary from '../Error'
import { render } from '@testing-library/react'

describe('<ErrorHandler>', () => {
  it(`shows the fallback when there's an error`, () => {
    const originalError = console.error
    console.error = jest.fn()
    const Throws = () => {
      throw new Error('Oh no!')
    }
    const fallback = error => <span>Error: {error.message}</span>
    const { queryByText, unmount } = render(
      <ErrorBoundary fallback={fallback}>
        <Throws />
      </ErrorBoundary>
    )
    queryByText('Error: Oh no!')
    unmount()
    console.error = originalError
  })
})
