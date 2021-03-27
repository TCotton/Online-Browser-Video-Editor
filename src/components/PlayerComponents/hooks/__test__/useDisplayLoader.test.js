import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {Provider} from 'react-redux';
import {useDisplayLoader} from '../useDisplayLoader';
import store from '../../../../state/createStore'

const setUp = () => renderHook(() => useDisplayLoader(), {
    wrapper: ({children}) => <Provider store={store}>{children}</Provider>
});

describe('useDisplayLoader', () => {

    xit('should call functions', () => {
        const {result} = setUp();
        expect(result.current).toStrictEqual([undefined]);
    });
})