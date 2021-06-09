import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from './common/Spinner'
import { clearConfigCache } from 'prettier'

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, isLoading },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated || isLoading) {
          return <Component {...props} />
        } else if (!isLoading) {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
