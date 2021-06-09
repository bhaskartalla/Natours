import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  FAILURE_LOGIN,
  REQUEST_GET_CURRENT_USER,
  RECEIVE_GET_CURRENT_USER,
  FAILURE_GET_CURRENT_USER,
  REQUEST_SAVE_SETTINGS,
  RECEIVE_SAVE_SETTINGS,
  FAILURE_SAVE_SETTINGS,
  REQUEST_SAVE_PASSWORD,
  RECEIVE_SAVE_PASSWORD,
  FAILURE_SAVE_PASSWORD,
  LOG_OUT
} from './ActionTypes'

const initialState = {
  token: '',
  isAuthenticated: false,
  user: null,
  isLoading: true,
  isError: false
}

export default function auth(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case REQUEST_LOGIN:
    case REQUEST_GET_CURRENT_USER:
    case REQUEST_SAVE_SETTINGS:
    case REQUEST_SAVE_PASSWORD:
      return {
        ...state,
        isLoading: true,
        isError: false
      }

    case RECEIVE_LOGIN:
    case RECEIVE_SAVE_PASSWORD:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: payload.token,
        user: payload.data.user
      }

    case FAILURE_SAVE_PASSWORD:
    case FAILURE_LOGIN:
    case FAILURE_SAVE_SETTINGS:
      return {
        ...state,
        isLoading: false,
        isError: true
      }

    case RECEIVE_SAVE_SETTINGS:
    case RECEIVE_GET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload
      }

    case FAILURE_GET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        user: null,
        isError: true
      }

    case LOG_OUT:
      return { ...initialState, isLoading: false }

    default:
      return state
  }
}
