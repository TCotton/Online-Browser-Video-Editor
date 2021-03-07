import {createSlice} from '@reduxjs/toolkit';

export const audioSlice = createSlice({
    name: 'audio',
    initialState: {
        peakFrequency: 0,
    },
    reducers: {
        peakFrequencyFn: (state, action) => {
            state.peakFrequency = action.payload;
        },
    },
});

export const {peakFrequencyFn} = audioSlice.actions;

export const peakFrequency = state => state.audio.peakFrequency;

export default audioSlice.reducer;