import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        duration: 0,
        time: 0
    },
    reducers: {
        timeFn: (state, action) => {
            console.dir(action.payload, 'action.payload');
            state.duration = action.payload;
        },
        durationFn: (state, action) => {
            state.time = action.payload;
        },
    },
});

export const { timeFn, durationFn } = videoSlice.actions;

export const time = state => state.video.time;
export const duration = state => state.video.duration;

export default videoSlice.reducer;