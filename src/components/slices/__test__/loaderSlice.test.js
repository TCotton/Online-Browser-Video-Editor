import {displayFn} from "../loaderSlice";

describe('loaderSlice', () => {

    it('should create an action to a display state', () => {
        const payload = {
            display: true
        }
        const expectedAction = {
            type: 'loader/displayFn',
            payload
        }
        expect(displayFn(payload)).toEqual(expectedAction);
    });

});