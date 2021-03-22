import {createSlice} from '@reduxjs/toolkit';

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        duration: 0,
        time: 0,
        el: false
    },
    reducers: {
        timeFn: (state, action) => {
            state.duration = action.payload;
        },
        durationFn: (state, action) => {
            state.time = action.payload;
        },
        elFn: (state, action) => {
            state.el = action.payload;
        },
    },
});

export const {timeFn, durationFn, elFn} = videoSlice.actions;

export const time = state => state.video.time;
export const duration = state => state.video.duration;
export const el = state => state.video.el

export default videoSlice.reducer;