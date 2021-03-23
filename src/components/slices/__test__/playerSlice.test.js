import {backwardFn, forwardFn, playFn, soundFn, stopFn} from "../playerSlice";

describe('imageSlice', () => {

    it('should create an action to play state', () => {
        const payload = {
            play: false
        }
        const expectedAction = {
            type: 'player/playFn',
            payload
        }
        expect(playFn(payload)).toEqual(expectedAction);
    });

    it('should create an action to stop state', () => {
        const payload = {
            stop: false
        }
        const expectedAction = {
            type: 'player/stopFn',
            payload
        }
        expect(stopFn(payload)).toEqual(expectedAction);
    });

    it('should create an action to forward state', () => {
        const payload = {
            forward: false
        }
        const expectedAction = {
            type: 'player/forwardFn',
            payload
        }
        expect(forwardFn(payload)).toEqual(expectedAction);
    });

    it('should create an action to backward state', () => {
        const payload = {
            backward: false
        }
        const expectedAction = {
            type: 'player/backwardFn',
            payload
        }
        expect(backwardFn(payload)).toEqual(expectedAction);
    });

    it('should create an action to mute state', () => {
        const payload = {
            mute: false
        }
        const expectedAction = {
            type: 'player/soundFn',
            payload
        }
        expect(soundFn(payload)).toEqual(expectedAction);
    });
});