import loaderReducer, { displayFn } from '../loaderSlice'
import playerReducer from '../playerSlice'
import { initialState } from '../model'

describe('loaderSlice', () => {
  it('should create an action to a display state', () => {
    const payload = {
      display: true
    }
    const expectedAction = {
      type: 'loader/displayFn',
      payload
    }
    expect(displayFn(payload)).toEqual(expectedAction)
  })

  it('reducer successfully passes data - display', () => {
    const payload = {
      display: true
    }

    const action = {
      type: 'loader/displayFn',
      payload: payload.display
    }
    const newState = loaderReducer(initialState.loader, action)
    expect(newState).toEqual(payload)
  })
})
