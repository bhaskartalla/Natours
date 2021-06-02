import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ showAlert, type, msg }) => {
  return showAlert ? <div className={`alert alert--${type}`}>{msg}</div> : null
}

Alert.propTypes = {
  alert: PropTypes.array
}

const mapStateToProps = state => ({
  showAlert: state.alert.showAlert,
  type: state.alert.type,
  msg: state.alert.msg
})

export default connect(mapStateToProps)(Alert)
