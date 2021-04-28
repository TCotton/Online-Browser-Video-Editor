import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './model'

export const waveformSlice = createSlice({
  name: 'waveform',
  initialState: initialState.waveform,
  reducers: {
    waveformFn: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { waveformFn } = waveformSlice.actions

export const data = state => state.waveform.data

export default waveformSlice.reducer
