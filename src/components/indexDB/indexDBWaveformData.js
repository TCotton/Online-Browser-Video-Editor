import Dexie from "dexie";

const dbW =  new Dexie('wave');
dbW.version(1).stores({
    wave: '++'
});
export default dbW;