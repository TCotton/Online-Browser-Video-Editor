import videoReducer, {durationFn, elFn, timeFn} from "../videoSlice";
import {initialState} from "../model";

describe('videoSlice', () => {

    it('should create an action for duration state', () => {
        const payload = {
            duration: 1
        }
        const expectedAction = {
            type: 'video/timeFn',
            payload
        }
        expect(timeFn(payload)).toEqual(expectedAction);
    });

    it('should create an action for time state', () => {
        const payload = {
            time: 1
        }
        const expectedAction = {
            type: 'video/durationFn',
            payload
        }
        expect(durationFn(payload)).toEqual(expectedAction);
    });

    it('should cteate an action for el state', () => {
        const payload = {
            el: true
        }
        const expectedAction = {
            type: 'video/elFn',
            payload
        }
        expect(elFn(payload)).toEqual(expectedAction);
    });

    it('reducer successfully passes data - time', () => {

        const payload = {
            time: 999,
        }

        const action = {
            type: 'video/timeFn',
            payload: payload.time
        };
        const newState = videoReducer(initialState.video, action);

        expect(newState).toEqual({...payload, duration: 0, el: false});
    });

    it('reducer successfully passes data - duration', () => {

        const payload = {
            duration: 999,
        }

        const action = {
            type: 'video/durationFn',
            payload: payload.duration
        };
        const newState = videoReducer(initialState.video, action);

        expect(newState).toEqual({...payload, time: 0, el: false});
    });
});