import api from '../utils/api'
import { GET_ALL_TOURS_URL, GET_TOUR_URL } from './Constants'
import {
  requestGetAllTours,
  receiveGetAllTours,
  failureGetAllTours,
  requestGetTour,
  receiveGetTour,
  failureGetTour
} from './Actions'

export const getAllTours = payload => {
  return dispatch => {
    dispatch(requestGetAllTours())
    api
      .get(GET_ALL_TOURS_URL)
      .then(response => {
        dispatch(receiveGetAllTours(response?.data?.data?.data))
      })
      .catch(error => {
        dispatch(failureGetAllTours())
      })
  }
}

export const getTour = payload => {
  return dispatch => {
    dispatch(requestGetTour())
    api
      .get(`${GET_TOUR_URL}${payload}`)
      .then(response => {
        dispatch(receiveGetTour(response?.data?.data?.data))
      })
      .catch(error => {
        dispatch(failureGetTour())
      })
  }
}
