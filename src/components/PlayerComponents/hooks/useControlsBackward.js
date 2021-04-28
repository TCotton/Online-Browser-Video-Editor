import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectBackward } from '../../slices/playerSlice'
import { initialState } from '../../slices/model'

export function useControlsBackward () {
  const [backwards, setBackwards] = useState(initialState.player.backward)
  const back = useSelector(selectBackward)

  back.then(result => {
    if (result !== backwards) {
      setBackwards(prevState => !prevState)
    }
  })

  return backwards
}
