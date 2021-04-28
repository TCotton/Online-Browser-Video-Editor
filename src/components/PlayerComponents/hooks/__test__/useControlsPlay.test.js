import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { Provider } from 'react-redux'
import { useControlsPlay } from '../useControlsPlay'
import store from '../../../../state/createStore'

const setUp = () =>
  renderHook(() => useControlsPlay(), {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
  })

describe('useControlsPlay', () => {
  it('should return false for default value', () => {
    const { result } = setUp()
    expect(result.current).toBe(true)
  })
})
