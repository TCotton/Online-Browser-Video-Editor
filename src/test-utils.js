import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import filesReducer from './components/slices/filesSlice';
import videoReducer from './components/slices/videoSlice';
import playerReducer from './components/slices/playerSlice';
import audioReducer from './components/slices/audioSlice';
import imageReducer from './components/slices/imageSlice';
import waveformReducer from './components/slices/waveformSlice';
import loaderReducer from "./components/slices/loaderSlice";

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
            loader: loaderReducer,
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

const TestProvider = ({
                          store,
                          children
                      }) => <Provider store={store}>{children}</Provider>

export function testRender(ui, { store, ...otherOpts }) {
    return render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts)
}

export function makeTestStore(opts = {}) {
    const store = makeStore(opts)
    const origDispatch = store.dispatch
    store.dispatch = jest.fn(origDispatch)
    return store
}

export const fixtureSet = {
    name: 'Bogus lego set',
    num_parts: 666,
    last_modified_dt: 'long ago',
    set_img_url: 'http://arent.i.pretty',
    set_num: '666_2',
    set_url: 'http://somewhere',
    theme_id: 666,
    year: 666
}