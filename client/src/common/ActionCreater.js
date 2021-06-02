import { showDisplayAlert, removeDisplayAlert } from './Actions'

export const showAlert = (type, msg, duration = 3000) => {
  return dispatch => {
    dispatch(showDisplayAlert({ type, msg }))
    setTimeout(() => dispatch(removeDisplayAlert()), duration)
  }
}
