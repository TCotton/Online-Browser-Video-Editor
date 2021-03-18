import {createSlice} from '@reduxjs/toolkit';

export const waveformSlice = createSlice({
    name: 'waveform',
    initialState: {
        data: {
            channel: null,
            min_array: 0,
            max_array: 0,
            length: 0,
        }
    },
    reducers: {
        waveformFn: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const {waveformFn} = waveformSlice.actions;

export const data = state => state.audio.data;

export default waveformSlice.reducer;