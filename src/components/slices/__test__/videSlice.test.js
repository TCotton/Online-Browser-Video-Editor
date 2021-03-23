import {timeFn, durationFn, elFn}  from "../videoSlice";

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

    it('should create an action for time state',  () => {
        const payload = {
            time: 1
        }
        const expectedAction = {
            type: 'video/durationFn',
            payload
        }
        expect(durationFn(payload)).toEqual(expectedAction);
    });

    it('should cteate an action for el state',  () => {
        const payload = {
            el: true
        }
        const expectedAction = {
            type: 'video/elFn',
            payload
        }
        expect(elFn(payload)).toEqual(expectedAction);
    });
});