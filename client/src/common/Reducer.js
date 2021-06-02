import { SHOW_ALERT, REMOVE_ALERT } from './ActionTypes'
const initialState = {
  showAlert: false,
  type: '',
  msg: ''
}

export default function displayAlert(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        type: payload.type,
        msg: payload.msg
      }
    case REMOVE_ALERT:
      return {
        ...state,
        showAlert: false,
        type: '',
        msg: ''
      }
    default:
      return state
  }
}
