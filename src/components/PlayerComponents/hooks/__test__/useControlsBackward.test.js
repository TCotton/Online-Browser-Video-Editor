import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { Provider } from 'react-redux'
import { useControlsBackward } from '../useControlsBackward'
import store from '../../../../state/createStore'

const setUp = () =>
  renderHook(() => useControlsBackward(), {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
  })

describe('useControlsBackward', () => {
  it('should return false for default value', () => {
    const { result } = setUp()
    expect(result.current).toBe(false)
  })
})
