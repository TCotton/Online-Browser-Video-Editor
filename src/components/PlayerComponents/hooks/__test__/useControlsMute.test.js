import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {Provider} from 'react-redux';
import {useControlsMute} from '../useControlsMute';
import store from '../../../../state/createStore'

const setUp = () => renderHook(() => useControlsMute(), {
    wrapper: ({children}) => <Provider store={store}>{children}</Provider>
});

describe('useControlsMute', () => {

    it('should return false for default value', () => {
        const {result} = setUp();
        expect(result.current).toBe(false);
    });

})