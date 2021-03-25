import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    play: true,
    stop: false,
    forward: false,
    backward: false,
    mute: false,
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
        //TODO: make sure video is stopped before fast forward or rewind
        forwardFn: (state, action) => {
            state.forward = !!action.payload;
        },
        backwardFn: (state, action) => {
            state.backward = !!action.payload;
        },
        soundFn: (state, action) => {
            state.mute = !state.mute;
        },
        reset: () => initialState
    },
});

export const {playFn, stopFn, forwardFn, backwardFn, soundFn, reset} = playerSlice.actions;

export const selectPlay = state => new Promise((resolve) => {
    resolve(state.player.play);
});

export const selectMute = state => new Promise((resolve) => {
    resolve(state.player.mute);
});

export const selectForward = state => new Promise((resolve) => {
    resolve(state.player.forward);
});

export const selectBackward = state => new Promise((resolve) => {
    resolve(state.player.backward);
});

export default playerSlice.reducer;
