import {createSlice} from "@reduxjs/toolkit";
import {initialState} from './model';

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialState.loader,
    reducers: {
        displayFn: (state, action) => {
            state.display = action.payload;
        },
    },
    reset: () => initialState
});

export const {displayFn} = loaderSlice.actions;

export const displayLoader = state => state.loader.display;

export default loaderSlice.reducer;