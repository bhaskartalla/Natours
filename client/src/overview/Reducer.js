import {
  REQUEST_GET_ALL_TOURS,
  RECEIVE_GET_ALL_TOURS,
  FAILURE_GET_ALL_TOURS,
  REQUEST_GET_TOUR,
  RECEIVE_GET_TOUR,
  FAILURE_GET_TOUR
} from './ActionTypes'

const initialState = {
  tours: [],
  tour: {},
  isLoading: false,
  isError: false
}

export default function tours(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case REQUEST_GET_ALL_TOURS:
    case REQUEST_GET_TOUR:
      return {
        ...state,
        isLoading: true,
        isError: false
      }

    case RECEIVE_GET_TOUR: {
      return {
        ...state,
        tour: payload,
        isLoading: false
      }
    }
    case RECEIVE_GET_ALL_TOURS:
      return {
        ...state,
        tours: payload,
        isLoading: false,
        isError: false
      }

    case FAILURE_GET_TOUR:
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
