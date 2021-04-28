import React from 'react'
import { useSelector } from 'react-redux'
import { displayLoader } from '../slices/loaderSlice'

export const SpinnerComponent = () => {
  const display = useSelector(displayLoader)

  return display ? (
    <div data-testid='spinner'>
      <div className='lds-dual-ring' />
    </div>
  ) : null
}
