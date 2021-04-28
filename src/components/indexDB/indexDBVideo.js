import Dexie from 'dexie'

const dbVF = new Dexie('videofile')
dbVF.version(1).stores({
  videofile: '++id, lastModified, name, size, type'
})
dbVF.open()
export default dbVF
