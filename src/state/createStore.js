import {configureStore, createImmutableStateInvariantMiddleware, createSerializableStateInvariantMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import counterReducer from '../components/slices/counterSlice';
import filesReducer from '../components/slices/filesSlice';
import videoReducer from '../components/slices/videoSlice';
import playerReducer from '../components/slices/playerSlice';
import audioReducer from '../components/slices/audioSlice';
import imageReducer from '../components/slices/imageSlice';
import waveformReducer from '../components/slices/waveformSlice';

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
    middleware: [immutableInvariantMiddleware, serializableStateInvariantMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
});