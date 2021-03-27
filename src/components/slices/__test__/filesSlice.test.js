import filesReducer, {add} from "../filesSlice";
import {initialState} from "../model";

describe('filesSlice', () => {

    it('should create an action to a file state', () => {
        const payload = {
            file: {
                lastModified: 'string',
                name: 999,
                size: 999,
                type: 'string'
            }
        }
        const expectedAction = {
            type: 'files/add',
            payload
        }
        expect(add(payload)).toEqual(expectedAction);
    });

    it('reducer successfully passes data', () => {

        const payload = {
            file: {
                lastModified: 12345,
                name: 'name',
                size: 999,
                type: 'type',
            }
        }

        const action = {
            type: 'files/add',
            payload: payload.file
        };
        const newState = filesReducer(initialState.files, action);
        expect(newState).toEqual(payload);
    });
});