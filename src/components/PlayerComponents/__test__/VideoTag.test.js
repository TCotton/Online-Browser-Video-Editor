import React from "react";
import VideoTag from "../VideoTag";
import {render} from "../../../test-utils";

describe('VideoTag', () => {

    const mockConnect = jest.fn();
    const mockcreateMediaElementSource = jest.fn(() => {
        return {
            connect: mockConnect
        }
    });
    const mockgetByteFrequencyData = jest.fn();
    const mockcreateAnalyser = jest.fn(() => {
        return {
            connect: mockConnect,
            frequencyBinCount: [0, 1, 2],
            getByteFrequencyData: mockgetByteFrequencyData,
        }
    });
    const mockcreateOscillator = jest.fn(() => {
        return {
            channelCount: 2
        }
    });
    const mockChannelSplitterConnect = jest.fn(n => n);
    const mockcreateChannelSplitter = jest.fn(() => {
        return {
            connect: mockChannelSplitterConnect
        }
    });
    const mockaudioContext = jest.fn(() => {
        return {
            createAnalyser: mockcreateAnalyser,
            createMediaElementSource: mockcreateMediaElementSource,
            createOscillator: mockcreateOscillator,
            createChannelSplitter: mockcreateChannelSplitter,
        }
    });

    const video = new File(['(⌐□_□)'], 'video.mp4', {type: 'video/mp4'});
    //const blob = new Blob([range(1024)], {type: "video/mp4"});

    const props = {
        files: [video],
        autoPlay: true,
        controls: true,
        sources: [{
            src: 'blob:http://localhost:8000/c22f16b2-09e1-4fd1-a2e1-3402d215b992',
            type: 'video/mp4',
        }]
    }

    const play = jest.fn();
    const pause = jest.fn();
    const load = jest.fn();
    const seek = jest.fn();

    beforeEach(() => {
        window.AudioContext = mockaudioContext;
        window.HTMLMediaElement.prototype.load = load;
        window.HTMLMediaElement.prototype.play = play;
        window.HTMLMediaElement.prototype.pause = pause;
        window.HTMLMediaElement.prototype.seek = seek;
    });

    it('should render successfully', () => {
        const {container} = render(<VideoTag {...props} />);
        expect(container.querySelector("[data-testid=\"video\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<VideoTag {...props} />);
        expect(baseElement).toMatchSnapshot();
    });

    it('should call audioContext API', () => {
        render(<VideoTag {...props} />);
        expect(mockcreateAnalyser).toBeCalled();
        expect(mockcreateMediaElementSource).toBeCalled();
        expect(mockConnect).toBeCalled();
        expect(mockcreateOscillator).toBeCalled();
        expect(mockcreateChannelSplitter).toBeCalled();
        expect(mockChannelSplitterConnect).toBeCalled();
        expect(mockgetByteFrequencyData).toBeCalled();
    });

    it('should call window.HTMLMediaElement play on initial render', () => {
        render(<VideoTag {...props} />);
        expect(play).toBeCalled();
    });

    it('should call window.HTMLMediaElement pause on if state is changed', () => {
        render(<VideoTag {...props}/>, {
            initialState: {
                player: {
                    play: false,
                    stop: false,
                    forward: false,
                    backward: false,
                    mute: false,
                }
            }
        });
        expect(pause).toBeCalled();
    });
});
