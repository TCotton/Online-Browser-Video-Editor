import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    play: false,
    stop: false,
    forward: false,
    backward: false
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        playFn: (state, action) => {
            state.play = !!action.payload;
            state.stop = false;
        },
        stopFn: (state, action) => {
            state.stop = !!action.payload;
            state.play = false;
        },
        forwardFn: (state, action) => {
            state.forward = !!action.payload;
        },
        backwardFn: (state, action) => {
            state.backward = !!action.payload;
        },
        reset: () => initialState
    },
});

export const {playFn, stopFn, forwardFn, backwardFn, reset} = playerSlice.actions;

export const selectPlay = state => state.player.play;

export const selectForward = state => new Promise((resolve) => {
    resolve(state.player.forward);
});

export const selectBackward = state => new Promise((resolve) => {
    resolve(state.player.backward);
});

export default playerSlice.reducer;
