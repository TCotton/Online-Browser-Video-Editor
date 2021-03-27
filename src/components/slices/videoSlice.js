import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './model';

export const videoSlice = createSlice({
    name: 'video',
    initialState: initialState.video,
    reducers: {
        timeFn: (state, action) => {
            state.time = action.payload;
        },
        durationFn: (state, action) => {
            state.duration = action.payload;
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