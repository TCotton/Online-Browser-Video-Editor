import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        part: {
            video: null,
            state: null,
            controls: null,
            ref: null
        }
    },
    reducers: {
        add: (state, action) => {
            state.part = action.payload;
        },
        addControls: (state, action) => {
            state.part.controls = action.payload;
        },
    },
});

export const { add, addControls } = videoSlice.actions;

export const video = state => state.video.part.video;
export const videoState = state => state.video.part.state;
export const videoControls = state => state.video.part.controls;
export const videoRef = state => state.video.part.ref;

export default videoSlice.reducer;