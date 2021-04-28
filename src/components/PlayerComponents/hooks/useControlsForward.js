import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectForward } from '../../slices/playerSlice'
import { initialState } from '../../slices/model'

export function useControlsForward () {
  const [forward, setForward] = useState(initialState.player.forward)

  const forwd = useSelector(selectForward)
  forwd.then(result => {
    if (result !== forward) {
      setForward(prevState => !prevState)
    }
  })

  return forward
}
