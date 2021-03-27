import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {Provider} from 'react-redux';
import {useAudioContext} from '../useAudioContext';
import store from '../../../../state/createStore'

const setUp = (args) => renderHook(() => useAudioContext(args), {
    wrapper: ({children}) => <Provider store={store}>{children}</Provider>
});

describe('useAudioContext', () => {

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


    beforeEach(() => {
        window.AudioContext = mockaudioContext;
    });

    it('should return false for default value', () => {
        setUp({current: 'current'});

        expect(mockcreateAnalyser).toBeCalledTimes(3);
        expect(mockcreateMediaElementSource).toBeCalledTimes(1);
        expect(mockConnect).toBeCalledTimes(3);
        expect(mockcreateOscillator).toBeCalledTimes(1);
        expect(mockcreateChannelSplitter).toBeCalledTimes(1);
        expect(mockChannelSplitterConnect).toBeCalledTimes(2);
        expect(mockgetByteFrequencyData).toBeCalledTimes(4);
    });
})