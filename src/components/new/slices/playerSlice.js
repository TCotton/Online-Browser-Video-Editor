import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    play: false,
}
export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        playFn: (state, action) => {
            state.play = !!action.payload;
        },
        reset: () => initialState
    },
});

export const {playFn} = playerSlice.actions;

export const selectPlay = state => new Promise((resolve) => {
    resolve(state.player.play);
});

export default playerSlice.reducer;
