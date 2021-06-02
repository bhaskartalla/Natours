import api from '../utils/api'
import {
  requestLogin,
  receiveLogin,
  failureLogin,
  requestGetCurrentUser,
  receiveGetCurrentUser,
  failureGetCurrentUser
} from './Actions'
import { LOGIN_URL, GET_CURRENT_USER_URL } from './Constants'
import { showAlert } from '../common/ActionCreater'

export const login = payload => {
  return dispatch => {
    dispatch(requestLogin())
    api
      .post(LOGIN_URL, payload)
      .then(response => {
        localStorage.setItem('access_token', response?.data?.token)
        dispatch(showAlert('success', 'Login Successfull !', 5000))
        dispatch(receiveLogin(response?.data))
      })
      .catch(() => {
        dispatch(failureLogin())
      })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    dispatch(requestGetCurrentUser())
    api
      .get(GET_CURRENT_USER_URL)
      .then(response => {
        dispatch(receiveGetCurrentUser(response?.data?.data?.data))
      })
      .catch(() => {
        dispatch(failureGetCurrentUser())
      })
  }
}
