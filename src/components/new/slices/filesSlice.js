import { createSlice } from '@reduxjs/toolkit';

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        file: {
            lastModified: null,
            name: null,
            size: null,
            type: null
        }
    },
    reducers: {
        add: (state, action) => {
            state.file = action.payload;
        },
    },
});

export const { add } = filesSlice.actions;

export const nameFile = state => state.files.file.name;

export default filesSlice.reducer;
