import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {Provider} from 'react-redux';
import {useWaveformData} from '../useWaveformData';
import store from '../../../../state/createStore'

const setUp = (args) => renderHook(() => useWaveformData(args), {
    wrapper: ({children}) => <Provider store={store}>{children}</Provider>
});


describe('useWaveformData', () => {

    beforeEach(() => {

  /*  Object.defineProperty(global, 'FileReader', {
            writable: true,
            value: jest.fn().mockImplementation(() => ({
                readAsArrayBuffer: jest.fn(),
                onLoad: jest.fn(),
            })),
        })
    });*/
    });

    function range(count) {
        let output = "";
        for (let i = 0; i < count; i++) {
            output += "a";
        }
        return output;
    }

    const blob = new Blob([range(1024)], {type: "video/mp4"});

    it('should call functions with null default', () => {
        const {result} = setUp();
        expect(result.current).toStrictEqual(undefined);
    });

    it('should call function with file default', function () {
        const {result} = setUp([blob]);
        expect(result.current).toStrictEqual(undefined);
    });

    //TODO: mock FileReader onload - will not fire
    xit('should call AudioContext', function () {
        setUp([blob]);
        expect(result.current).toStrictEqual(undefined);
    });

})