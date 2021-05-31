import { REQUEST_LOGIN, RECEIVE_LOGIN, FAILURE_LOGIN } from './ActionTypes'

const initialState = {
  token: '',
  isAuthenticated: false,
  user: null,
  isLoading: false
}

export default function login(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case REQUEST_LOGIN:
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
        user: payload.data.user
      }

    case FAILURE_LOGIN:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}
