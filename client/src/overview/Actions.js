import {
  REQUEST_GET_ALL_TOURS,
  RECEIVE_GET_ALL_TOURS,
  FAILURE_GET_ALL_TOURS,
  REQUEST_GET_TOUR,
  RECEIVE_GET_TOUR,
  FAILURE_GET_TOUR
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

export const requestGetTour = () => ({
  type: REQUEST_GET_TOUR
})

export const receiveGetTour = payload => ({
  type: RECEIVE_GET_TOUR,
  payload
})

export const failureGetTour = () => ({
  type: FAILURE_GET_TOUR
})
