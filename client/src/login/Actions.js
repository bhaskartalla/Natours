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

export const requestUpdateMe = () => ({
  type: REQUEST_SAVE_SETTINGS
})

export const receiveUpdateMe = payload => ({
  type: RECEIVE_SAVE_SETTINGS,
  payload
})

export const failureUpdateMe = () => ({
  type: FAILURE_SAVE_SETTINGS
})

export const requestUpdatePassword = () => ({
  type: REQUEST_SAVE_PASSWORD
})

export const receiveUpdatePassword = payload => ({
  type: RECEIVE_SAVE_PASSWORD,
  payload
})

export const failureUpdatePassword = () => ({
  type: FAILURE_SAVE_PASSWORD
})

export const requestLogout = () => ({
  type: LOG_OUT
})
