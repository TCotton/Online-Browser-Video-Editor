import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import counterReducer from '../components/new/slices/counterSlice';
import filesReducer from '../components/new/slices/filesSlice';
import videoReducer from '../components/new/slices/videoSlice';
import playerReducer from '../components/new/slices/playerSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        files:  filesReducer,
        video: videoReducer,
        player: playerReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: true,
        logger
    }),
    devTools: process.env.NODE_ENV !== 'production',
});