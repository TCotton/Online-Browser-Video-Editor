import Dexie from "dexie";

const dbVF =  new Dexie('videoFile');
dbVF.version(1).stores({
    video: '++id, imagesArray'
});
dbVF.open();
export default dbVF;