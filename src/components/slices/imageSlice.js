import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './model';

export const imageSlice = createSlice({
    name: 'images',
    initialState: initialState.images,
    reducers: {
        imageFn: (state, action) => {
            state.iArray = action.payload;
        },
    },
    reset: () => initialState
});

export const {imageFn} = imageSlice.actions;

export const imgArray = state => state.images.iArray;

export default imageSlice.reducer;