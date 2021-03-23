import {add} from "../filesSlice";

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

});