import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { Provider } from 'react-redux'
import { useControlsForward } from '../useControlsForward'
import store from '../../../../state/createStore'

const setUp = () =>
  renderHook(() => useControlsForward(), {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
  })

describe('useControlsForward', () => {
  it('should return false for default value', () => {
    const { result } = setUp()
    expect(result.current).toBe(false)
  })
})
