import Dexie from "dexie";

const db =  new Dexie('video');
db.version(1).stores({
    file: '++'
});
export default db;