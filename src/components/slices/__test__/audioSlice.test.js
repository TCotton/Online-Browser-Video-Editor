import audioReducer, {peakFrequencyFnLeft, peakFrequencyFnRight} from "../audioSlice";
import {initialState} from "../model";

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

    it('reducer successfully passes data - peakFrequencyLeft', () => {

        const payload = {
            peakFrequencyLeft: 12345,
        }

        const action = {
            type: 'audio/peakFrequencyFnLeft',
            payload: payload.peakFrequencyLeft
        };
        const newState = audioReducer(initialState.audio, action);
        expect(newState).toEqual({...payload, peakFrequencyRight: 0});
    });

    it('reducer successfully passes data - peakFrequencyRight', () => {

        const payload = {
            peakFrequencyRight: 12345
        }

        const action = {
            type: 'audio/peakFrequencyFnRight',
            payload: payload.peakFrequencyRight
        };
        const newState = audioReducer(initialState.audio, action);
        expect(newState).toEqual({...payload, peakFrequencyLeft: 0});
    });
});