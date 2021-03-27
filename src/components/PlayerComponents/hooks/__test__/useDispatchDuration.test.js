import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {Provider} from 'react-redux';
import {useDispatchDuration} from '../useDispatchDuration';
import store from '../../../../state/createStore'

const setUp = () => renderHook(() => useDispatchDuration(), {
    wrapper: ({children}) => <Provider store={store}>{children}</Provider>
});

describe('useDispatchDuration', () => {

    it('should call functions', () => {
        const {result} = setUp();
        expect(result.current).toStrictEqual(undefined);
    });

    it('should call function with number entered', () => {
        const {result} = setUp(12);
        expect(result.current).toStrictEqual(undefined);
    });
})