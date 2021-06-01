import {
  REQUEST_GET_ALL_TOURS,
  RECEIVE_GET_ALL_TOURS,
  FAILURE_GET_ALL_TOURS
} from './ActionTypes'

const initialState = {
  tours: [],
  isLoading: false,
  isError: false
}

export default function tours(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case REQUEST_GET_ALL_TOURS:
      return {
        ...state,
        isLoading: true,
        isError: false
      }

    case RECEIVE_GET_ALL_TOURS:
      return {
        ...state,
        tours: payload,
        isLoading: false,
        isError: false
      }

    case FAILURE_GET_ALL_TOURS:
      return {
        ...state,
        isLoading: false,
        isError: true
      }

    default:
      return state
  }
}
