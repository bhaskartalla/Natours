import api from '../utils/api'
import { GET_ALL_TOURS_URL } from './Constants'
import {
  requestGetAllTours,
  receiveGetAllTours,
  failureGetAllTours
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
