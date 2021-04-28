import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { window } from 'browser-monads'
import VideoTag from './VideoTag'
import db from '../indexDB/indexDB'
import ErrorBoundary from '../ErrorBoundary/Error'

const VideoSettings = () => {
  const allItems = useLiveQuery(() => db.file.toArray(), [])

  const videoJsOptions = {
    autoPlay: false,
    controlz: true,
    sources: [
      {
        src:
          allItems && allItems.length === 1
            ? window.URL.createObjectURL(allItems[0])
            : '',
        type: allItems && allItems.length === 1 ? allItems.type : ''
      }
    ],
    file: allItems
  }

  return allItems ? (
    <ErrorBoundary>
      <VideoTag
        autoPlay={videoJsOptions.autoPlay}
        controls={videoJsOptions.controls}
        sources={videoJsOptions.sources}
        files={videoJsOptions.file}
      />
    </ErrorBoundary>
  ) : null
}

export default VideoSettings
