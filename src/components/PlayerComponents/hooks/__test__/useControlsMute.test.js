import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { Provider } from 'react-redux'
import { useControlsMute } from '../useControlsMute'
import store from '../../../../state/createStore'

const setUp = arg =>
  renderHook(() => useControlsMute(arg), {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
  })

describe('useControlsMute', () => {
  it('should return false for default value', () => {
    const { result } = setUp(false)
    expect(result.current).toBe(false)
    expect(typeof result.current).toBe('boolean')
  })

  it('should return false for default value', async () => {
    let result

    act(() => {
      result = setUp(true)
    })

    await result.waitForValueToChange(() => result.result.current)

    expect(result.result.current).toBe(false)
    expect(typeof result.result.current).toBe('boolean')
  })
})
