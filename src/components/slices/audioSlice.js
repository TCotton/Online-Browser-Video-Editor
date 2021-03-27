import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './model';

export const audioSlice = createSlice({
    name: 'audio',
    initialState: initialState.audio,
    reducers: {
        peakFrequencyFnLeft: (state, action) => {
            state.peakFrequencyLeft = action.payload;
        },
        peakFrequencyFnRight: (state, action) => {
            state.peakFrequencyRight = action.payload;
        },
    },
});

export const {peakFrequencyFnLeft, peakFrequencyFnRight} = audioSlice.actions;

export const peakFrequencyLeft = state => state.audio.peakFrequencyLeft;
export const peakFrequencyRight = state => state.audio.peakFrequencyRight;

export default audioSlice.reducer;