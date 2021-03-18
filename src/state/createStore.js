import {configureStore, createImmutableStateInvariantMiddleware, createSerializableStateInvariantMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import counterReducer from '../components/new/slices/counterSlice';
import filesReducer from '../components/new/slices/filesSlice';
import videoReducer from '../components/new/slices/videoSlice';
import playerReducer from '../components/new/slices/playerSlice';
import audioReducer from '../components/new/slices/audioSlice';
import imageReducer from '../components/new/slices/imageSlice';
import waveformReducer from '../components/new/slices/waveformSlice';

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
    ignoredPaths: ['waveform.data.channel', 'waveform.data.min_array',  'waveform.data.max_array', 'waveform.data.length'],
})

const serializableStateInvariantMiddleware = createSerializableStateInvariantMiddleware({
    ignoredPaths: ['waveform.data.channel', 'waveform.data.min_array',  'waveform.data.max_array', 'waveform.data.length'],
})

export default configureStore({
    reducer: {
        counter: counterReducer,
        files:  filesReducer,
        video: videoReducer,
        player: playerReducer,
        audio: audioReducer,
        images: imageReducer,
        waveform: waveformReducer,
    },
    middleware: [logger, immutableInvariantMiddleware, serializableStateInvariantMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
});