import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../components/new/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});