import React, {useCallback} from 'react';
import {window} from "browser-monads";
import {useDispatch} from "react-redux";
import happyPanda from '../../../static/happy-panda.mp4'
import db from "../indexDB/indexDB";
import dbVF from "../indexDB/indexDBVideo";
import {displayFn} from '../slices/loaderSlice'

export const dex = {
    dexieRun: (files) => {
        db.file.clear();
        db.file.add(files);
    },
    dexieRunVideo: (file) => {
        dbVF.videofile.clear();
        dbVF.videofile.add(file);
    }
}

export const MessageComponent = () => {

    const dispatch = useDispatch();

    const onClickFnc = useCallback((e) => {

        dispatch(displayFn(true));

        window.fetch(happyPanda)
            .then(response => {
                if (response.status === 200) {
                    return response.blob();
                }
            }).then((blob) => {

            const file = {
                lastModified: Date.now(),
                name: "happypanda.mp4",
                size: blob.size,
                type: blob.type
            }
            dex.dexieRunVideo(file);
            dex.dexieRun(blob);

        }).catch((error) => {
            throw new Error(error.toString());
        });

        e.preventDefault();
    }, []);

    return (
        <section className="message" data-testid="message">
            <p>
                Upload and transcode video files for use on social media.
            </p>
            <p>This is a lockdown project by <a href="https://andywalpole.me/blog/" target="_blank"
                                                rel="noopener noreferrer">Andrew Walpole</a>, built
                using D3.js, the Web Audio API, IndexedDB and WebAssembly (WASM) on a Gatsby/React/Redux base. <a
                    href="/" className="demo" onClick={onClickFnc} data-testid='link'>Click here to load a demo video
                    file</a>. <a
                    href="https://github.com/TCotton/Online-Browser-Video-Editor" target="_blank"
                    rel="noopener noreferrer">This is an alpha release</a>.
            </p>
        </section>
    )
}