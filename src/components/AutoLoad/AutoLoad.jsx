import React, {useState} from 'react'
import {useLiveQuery} from "dexie-react-hooks";
import db from "../indexDB/indexDB";

export const AutoLoad = () => {

    const allFileItems = useLiveQuery(() => db.file.toArray(), []);
    useState(() => {
        if(!allFileItems) {
            console.dir(allFileItems, 'no file in db');
        }
    },[allFileItems]);

    console.dir(allFileItems);

    return null;
}