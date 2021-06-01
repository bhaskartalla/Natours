import {
  REQUEST_GET_ALL_TOURS,
  RECEIVE_GET_ALL_TOURS,
  FAILURE_GET_ALL_TOURS
} from './ActionTypes'

export const requestGetAllTours = () => ({
  type: REQUEST_GET_ALL_TOURS
})

export const receiveGetAllTours = payload => ({
  type: RECEIVE_GET_ALL_TOURS,
  payload
})

export const failureGetAllTours = () => ({
  type: FAILURE_GET_ALL_TOURS
})
