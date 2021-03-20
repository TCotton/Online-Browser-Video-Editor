import React, {useState} from 'react';
import {createFFmpeg, fetchFile} from "@ffmpeg/ffmpeg";
import {useLiveQuery} from "dexie-react-hooks";
import {document, window} from "browser-monads";
import db from "../indexDB/indexDB";
import dbVF from "../indexDB/indexDBVideo";

function downloadBlob(blobUrl, name) {
    // Create a link element
    const link = document.createElement("a");

    // Set link's href to point to the Blob URL
    link.href = blobUrl;
    link.download = name;

    // Append link to the body
    document.body.appendChild(link);

    // Dispatch click event on the link
    // This is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );

    // Remove link from body
    document.body.removeChild(link);
}

export const FileConvertExport = () => {
    const [status, setStatus] = useState('');
    const allFileItems = useLiveQuery(() => db.file.toArray(), []);
    const allVideoItems = useLiveQuery(() => dbVF.videofile.toArray(), []);

    const onClickTwitter = async () => {
        const result = window.confirm('Convert video for Twitter?');
        if (!result) return;

        const ffmpeg = createFFmpeg({
            log: true, progress: ({ratio}) => {
                if ((ratio * 100.0).toFixed(2) < 99.9) {
                    setStatus(`Complete: ${(ratio * 100.0).toFixed(2)}%`);
                }

            }
        });

        console.info('Loading ffmpeg-core.js');
        await ffmpeg.load();
        setStatus('Video transcoding started');
        ffmpeg.FS('writeFile', allVideoItems[0].name, await fetchFile(allFileItems[0]));
        await ffmpeg.run('-i',
            allVideoItems[0].name,
            "-vcodec",
            "libx264",
            "-vf",
            "scale=640:-1",
            "-pix_fmt",
            "yuv420p",
            "-strict",
            "experimental",
            "-r",
            "30",
            "-t",
            "2:20",
            "-acodec",
            "aac",
            "-vb",
            "1024k",
            "-minrate",
            "1024k",
            "-maxrate",
            "1024k",
            "-bufsize",
            "1024k",
            "-ar",
            "44100",
            "-ac",
            "2",
            `converted-${allVideoItems[0].name}`);
        setStatus('Video transcoding ended');
        const data = ffmpeg.FS('readFile', `converted-${allVideoItems[0].name}`);
        const href = window.URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
        downloadBlob(href, allVideoItems[0].name);
        window.URL.revokeObjectURL(href);
    }

    const onClickFacebook = async () => {
        const result = window.confirm('Convert video for Facebook?');
        if (!result) return;

        const ffmpeg = createFFmpeg({
            log: true, progress: ({ratio}) => {
                if ((ratio * 100.0).toFixed(2) < 99.9) {
                    setStatus(`Complete: ${(ratio * 100.0).toFixed(2)}%`);
                }

            }
        });

        console.info('Loading ffmpeg-core.js');
        await ffmpeg.load();
        setStatus('Video transcoding started');
        ffmpeg.FS('writeFile', allVideoItems[0].name, await fetchFile(allFileItems[0]));
        await ffmpeg.run('-i',
            allVideoItems[0].name,
            "-c:v",
            "libx264",
            "-crf",
            "18",
            "-preset",
            "fast",
            "-c:a",
            "copy",
            `converted-${allVideoItems[0].name}`);
        setStatus('Video transcoding ended');
        const data = ffmpeg.FS('readFile', `converted-${allVideoItems[0].name}`);
        const href = window.URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
        downloadBlob(href, allVideoItems[0].name);
        window.URL.revokeObjectURL(href);
    }

    const onClickLinkedin = async () => {
        const result = window.confirm('Convert to video for Linkedin?');
        if (!result) return;

        const ffmpeg = createFFmpeg({
            log: true, progress: ({ratio}) => {
                if ((ratio * 100.0).toFixed(2) < 99.9) {
                    setStatus(`Complete: ${(ratio * 100.0).toFixed(2)}%`);
                }

            }
        });

        console.info('Loading ffmpeg-core.js');
        await ffmpeg.load();
        setStatus('Video transcoding started');
        ffmpeg.FS('writeFile', allVideoItems[0].name, await fetchFile(allFileItems[0]));
        await ffmpeg.run('-i',
            allVideoItems[0].name,
            "-c:v",
            "libx264",
            "-crf",
            "18",
            "-preset",
            "fast",
            "-c:a",
            "copy",
            `converted-${allVideoItems[0].name}`);
        setStatus('Video transcoding ended');
        const data = ffmpeg.FS('readFile', `converted-${allVideoItems[0].name}`);
        const href = window.URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
        downloadBlob(href, allVideoItems[0].name);
        window.URL.revokeObjectURL(href);
    }

    return (
        <>
            <div className={`export`}>
                <p>Click below to export (optimises for those platforms)</p>
                <p>{status}</p>
                <ul className="social">
                    <li>
                        <button onClick={onClickTwitter}>
                            <img src={`./social/twitter.svg`} alt={`click to export for twitter`} width="400"
                                 height="400"/>
                        </button>
                    </li>
                    <li>
                        <button onClick={onClickFacebook}>
                            <img src={`./social/facebook.png`} alt={`click to export for Facebook`} width="250"
                                 height="250"/>
                        </button>
                    </li>
                    <li>
                        <button onClick={onClickLinkedin}> d
                            <img src={`./social/linkedin.png`} alt={`click to export for Linkedin`} width="650"
                                 height="540"/>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}