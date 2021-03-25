import {peakFrequencyFnLeft, peakFrequencyFnRight} from "../audioSlice";

describe('audioSlice', () => {

    it('should create an action to add to peakFrequencyLeft state', () => {
        const payload = 999
        const expectedAction = {
            type: 'audio/peakFrequencyFnLeft',
            payload
        }
        expect(peakFrequencyFnLeft(999)).toEqual(expectedAction);
    });

    it('should create an action to add to peakFrequencyRight state', () => {
        const payload = 999
        const expectedAction = {
            type: 'audio/peakFrequencyFnRight',
            payload
        }
        expect(peakFrequencyFnRight(999)).toEqual(expectedAction);
    });

});