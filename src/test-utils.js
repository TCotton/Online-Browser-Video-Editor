import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from './components/slices/counterSlice';
import filesReducer from './components/slices/filesSlice';
import videoReducer from './components/slices/videoSlice';
import playerReducer from './components/slices/playerSlice';
import audioReducer from './components/slices/audioSlice';
import imageReducer from './components/slices/imageSlice';
import waveformReducer from './components/slices/waveformSlice';

function render(
    ui,
    {
        initialState,
        store = createStore(combineReducers({
            counter: counterReducer,
            files:  filesReducer,
            video: videoReducer,
            player: playerReducer,
            audio: audioReducer,
            images: imageReducer,
            waveform: waveformReducer,
        }), initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react'
// override render method
export { render }