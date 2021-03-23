import React from 'react';
import {fireEvent, render, waitFor} from "@testing-library/react";
import FileUpload, {dex} from "../InputFile";

describe('FileUpload', () => {

    const mockDexieRun = jest.fn(n => n);
    const mockDexieRunVideo = jest.fn(n => n);

    beforeEach(() => {
        dex.dexieRun = mockDexieRun;
        dex.dexieRunVideo = mockDexieRunVideo;
    });

    it('should render successfully', () => {
        const {container} = render(<FileUpload />);
        expect(container.querySelector("[data-testid=\"form\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<FileUpload/>);
        expect(baseElement).toMatchSnapshot();
    });

    it('should submit correctly',  async () => {
        const video = new File(['(⌐□_□)'], 'video.mp4', { type: 'video/mp4' })
        const {container} = render(<FileUpload />);
        const file = container.querySelector("[data-testid=\"file\"]");

        await waitFor(() => {
            fireEvent.change(file, {
                target: {
                    files: [video]
                }
            });
        })

        expect(mockDexieRun).toHaveBeenCalledTimes(1);
        expect(mockDexieRunVideo).toHaveBeenCalledTimes(1);
    });
});