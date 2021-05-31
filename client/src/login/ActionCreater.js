import axios from 'axios'
import { requestLogin, receiveLogin, failureLogin } from './Actions'
import { LOGIN_URL } from './Constants'

export const login = payload => {
  return dispatch => {
    dispatch(requestLogin())
    axios
      .post(LOGIN_URL, payload)
      .then(response => {
        localStorage.setItem('access_token', response?.data?.token)
        dispatch(receiveLogin(response?.data))
      })
      .catch(() => {
        dispatch(failureLogin())
      })
  }
}
