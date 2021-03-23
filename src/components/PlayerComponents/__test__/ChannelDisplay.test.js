import React from 'react';
import ChannelDisplay from '../ChannelDisplay';
import { storeSpy, expectRedux } from 'expect-redux';
import {configureStore} from '../../../state/createStore';

xdescribe('ChannelDisplay', () => {
    let store;

    beforeEach(() => {
        store = configureStore([storeSpy]);
    })

})