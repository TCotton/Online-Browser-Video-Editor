import Dexie from "dexie";

const dbVF =  new Dexie('videoFile');
dbVF.version(1).stores({
    videofile: 'video,state,controls,ref'
});
export default dbVF;