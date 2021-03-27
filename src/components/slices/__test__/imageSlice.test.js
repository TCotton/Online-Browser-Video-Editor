import imageReducer, {imageFn} from "../imageSlice";
import {initialState} from "../model";

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

    it('reducer successfully passes data', () => {

        const payload = {
            iArray: [1,3,3]
        }

        const action = {
            type: 'images/imageFn',
            payload: payload.iArray
        };
        const newState = imageReducer(initialState.images, action);

        expect(newState).toEqual(payload);
    });

});