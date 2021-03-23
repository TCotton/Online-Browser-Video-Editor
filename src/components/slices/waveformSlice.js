import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    data: {
        min_array: [0],
        max_array: [0],
        length: 0,
    }
}

export const waveformSlice = createSlice({
    name: 'waveform',
    initialState,
    reducers: {
        waveformFn: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const {waveformFn} = waveformSlice.actions;

export const data = state => state.waveform.data;

export default waveformSlice.reducer;