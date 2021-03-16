import {createSlice} from '@reduxjs/toolkit';

export const imageSlice = createSlice({
    name: 'images',
    initialState: {
        iArray: []
    },
    reducers: {
        imageFn: (state, action) => {
            console.log(action.payload);
            state.iArray = action.payload;
        },
    },
    reset: () => initialState
});

export const {imageFn} = imageSlice.actions;

export const imgArray = state => state.images.iArray;

export default imageSlice.reducer;