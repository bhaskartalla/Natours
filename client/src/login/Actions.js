import { REQUEST_LOGIN, RECEIVE_LOGIN, FAILURE_LOGIN } from './ActionTypes'

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
