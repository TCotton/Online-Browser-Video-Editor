import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    imageArray: [],
}

export const imageSlice = createSlice({
    name: 'images',
    initialState: {
        imageArray: []
    },
    reducers: {
        imageFn: (state, action) => {
            console.log(action.payload);
            state.imageArray = action.payload;
        },
    },
    reset: () => initialState
});

export const {imageFn} = imageSlice.actions;

export const imageArray = state => state.images.imageArray;

export default imageSlice.reducer;