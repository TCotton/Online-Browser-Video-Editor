import { useEffect } from 'react'

function hotReload () {
  if (module.hot === undefined) return
  module.hot.addStatusHandler(status => {
    if (status === 'apply') document.location.reload()
  })
}

function useHotReload () {
  useEffect(hotReload, [])
}

export default useHotReload
