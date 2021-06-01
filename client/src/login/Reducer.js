import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  FAILURE_LOGIN,
  REQUEST_GET_CURRENT_USER,
  RECEIVE_GET_CURRENT_USER,
  FAILURE_GET_CURRENT_USER
} from './ActionTypes'

const initialState = {
  token: '',
  isAuthenticated: false,
  user: null,
  isLoading: false,
  isError: false
}

export default function login(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case REQUEST_LOGIN:
    case REQUEST_GET_CURRENT_USER:
      return {
        ...state,
        isLoading: true
      }

    case RECEIVE_LOGIN:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: payload.token,
        user: payload.data.user,
        isError: false
      }

    case RECEIVE_GET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload,
        isError: false
      }

    case FAILURE_LOGIN:
    case FAILURE_GET_CURRENT_USER:
      return {
        ...state,
        token: '',
        isLoading: false,
        user: null,
        isError: true
      }

    default:
      return state
  }
}
