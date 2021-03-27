import { createSlice } from '@reduxjs/toolkit';
import {initialState} from './model';

export const filesSlice = createSlice({
    name: 'files',
    initialState: initialState.files,
    reducers: {
        add: (state, action) => {
            state.file = action.payload;
        },
    },
});

export const { add } = filesSlice.actions;

export const fileName = state => state.files.file.name;
export const fileType = state => state.files.file.type;

export default filesSlice.reducer;
