import React from 'react'
import { useDispatch } from 'react-redux'
import { forwardFn, stopFn } from '../slices/playerSlice'

export const Forward = () => {
  const dispatch = useDispatch()
  const onPointerDown = () => {
    dispatch(stopFn(true))
    dispatch(forwardFn(true))
  }
  const onPointerUp = () => {
    dispatch(forwardFn(false))
  }
  return (
    <img
      src={'./forward.svg'}
      data-testid='forward'
      className='forward'
      alt='forward'
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    />
  )
}
