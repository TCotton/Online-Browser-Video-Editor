import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    display: false
}

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
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