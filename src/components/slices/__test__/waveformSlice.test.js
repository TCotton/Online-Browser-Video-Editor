import waveformReducer, {waveformFn} from "../waveformSlice";
import {initialState} from '../model'

describe('waveformSlice', () => {

    const payload = {
        data: {
            min_array: [1, 2, 3],
            max_array: [1, 2, 3],
            length: 123456,
        }
    }

    it('should create an action to a iArray state', () => {

        const expectedAction = {
            type: 'waveform/waveformFn',
            payload
        }
        expect(waveformFn(payload)).toEqual(expectedAction);
    });

    it('reducer successfully passes data', () => {

        const action = {
            type: 'waveform/waveformFn',
            payload: payload.data
        };
        const newState = waveformReducer(initialState.waveform, action);

        expect(newState).toEqual({
            data: payload.data
        });
    });
});