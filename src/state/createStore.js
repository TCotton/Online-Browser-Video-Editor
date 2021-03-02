import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../components/new/slices/counterSlice';
import filesReducer from '../components/new/slices/filesSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        files:  filesReducer,
    },
});