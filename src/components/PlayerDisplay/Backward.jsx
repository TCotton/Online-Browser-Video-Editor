import React from 'react'
import { useDispatch } from 'react-redux'
import { backwardFn, stopFn } from '../slices/playerSlice'

export const Backward = () => {
  const dispatch = useDispatch()
  const onPointerDown = () => {
    dispatch(stopFn(true))
    dispatch(backwardFn(true))
  }
  const onPointerUp = () => {
    dispatch(backwardFn(false))
  }
  return (
    <img
      src={'./back.svg'}
      data-testid='reverse'
      className='backward'
      alt='backward'
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    />
  )
}
