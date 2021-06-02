import { SHOW_ALERT, REMOVE_ALERT } from './ActionTypes'

export const showDisplayAlert = payload => ({
  type: SHOW_ALERT,
  payload
})

export const removeDisplayAlert = () => ({
  type: REMOVE_ALERT
})
