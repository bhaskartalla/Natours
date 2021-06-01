import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  FAILURE_LOGIN,
  REQUEST_GET_CURRENT_USER,
  RECEIVE_GET_CURRENT_USER,
  FAILURE_GET_CURRENT_USER
} from './ActionTypes'

export const requestLogin = () => ({
  type: REQUEST_LOGIN
})

export const receiveLogin = payload => ({
  type: RECEIVE_LOGIN,
  payload
})

export const failureLogin = () => ({
  type: FAILURE_LOGIN
})

export const requestGetCurrentUser = () => ({
  type: REQUEST_GET_CURRENT_USER
})

export const receiveGetCurrentUser = payload => ({
  type: RECEIVE_GET_CURRENT_USER,
  payload
})

export const failureGetCurrentUser = () => ({
  type: FAILURE_GET_CURRENT_USER
})
