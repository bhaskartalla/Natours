import api from '../utils/api'
import {
  requestLogin,
  receiveLogin,
  failureLogin,
  requestGetCurrentUser,
  receiveGetCurrentUser,
  failureGetCurrentUser,
  requestUpdateMe,
  receiveUpdateMe,
  failureUpdateMe,
  requestUpdatePassword,
  receiveUpdatePassword,
  failureUpdatePassword
} from './Actions'
import {
  LOGIN_URL,
  GET_CURRENT_USER_URL,
  UPDATE_ME_URL,
  UPDATE_PASSWORD_URL
} from './Constants'
import { showAlert } from '../common/ActionCreater'

export const login = payload => {
  return dispatch => {
    dispatch(requestLogin())
    api
      .post(LOGIN_URL, payload)
      .then(response => {
        localStorage.setItem('access_token', response?.data?.token)
        dispatch(showAlert('success', 'Login Successfull !', 3000))
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

export const updateMe = payload => {
  return dispatch => {
    dispatch(requestUpdateMe())
    api
      .patch(UPDATE_ME_URL, payload)
      .then(response => {
        dispatch(receiveUpdateMe(response?.data?.data?.user))
        dispatch(showAlert('success', 'Data updated Successfull !', 3000))
      })
      .catch(() => {
        dispatch(failureUpdateMe())
      })
  }
}

export const updatePAssword = payload => {
  return dispatch => {
    dispatch(requestUpdatePassword())
    api
      .patch(UPDATE_PASSWORD_URL, payload)
      .then(response => {
        localStorage.setItem('access_token', response?.data?.token)
        dispatch(receiveUpdatePassword(response?.data))
        dispatch(showAlert('success', 'Password changed Successfull !', 3000))
      })
      .catch(error => {
        dispatch(failureUpdatePassword())
        dispatch(
          showAlert(
            'error',
            error?.response?.data?.error?.statusCode !== 500
              ? error?.response?.data?.message
              : 'Something went wrong',
            3000
          )
        )
      })
  }
}
