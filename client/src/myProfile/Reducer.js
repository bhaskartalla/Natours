import {
  REQUEST_SAVE_SETTINGS,
  RECEIVE_SAVE_SETTINGS,
  FAILURE_SAVE_SETTINGS
} from './ActionTypes'

const initialState = {
  isLoading: false,
  isError: false
}

export default function MyProfile(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case REQUEST_SAVE_SETTINGS:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_SAVE_SETTINGS:
      return {
        ...state,
        isLoading: false
      }
    case FAILURE_SAVE_SETTINGS:
      return {
        isLoading: false,
        isError: false
      }
    default:
      return state
  }
}
