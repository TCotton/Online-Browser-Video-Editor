import {imageFn} from "../imageSlice";

describe('imageSlice', () => {

    it('should create an action to a iArray state', () => {
        const payload = {
            iArray: []
        }
        const expectedAction = {
            type: 'images/imageFn',
            payload
        }
        expect(imageFn(payload)).toEqual(expectedAction);
    });

});