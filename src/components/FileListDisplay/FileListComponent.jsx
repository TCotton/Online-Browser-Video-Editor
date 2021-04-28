import React, { useState, useEffect } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import dbVF from '../indexDB/indexDBVideo'
import { FileListComponents } from './FileListComponents'

export const FileListComponent = () => {
  const [videoFile, setVideoFile] = useState([])
  const allItems = useLiveQuery(() => dbVF.videofile.toArray(), [])

  useEffect(() => {
    if (allItems && Array.isArray(allItems)) {
      setVideoFile(allItems)
    }
  }, [allItems])

  return (
    <div className='filelists' data-testid='FileListComponent'>
      <FileListComponents data={videoFile} />
    </div>
  )
}
