import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { login } from './ActionCreater'

const Login = ({ isAuthenticated, login }) => {
  const [loginDetails, setLoginDetails] = useState({
    email: 'chris@example.com',
    password: 'password'
  })

  const { email, password } = loginDetails

  const handleOnChane = e =>
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })

  const handleOnSubmit = e => {
    e.preventDefault()
    login(loginDetails)
  }

  console.log(`isAuthenticated`, isAuthenticated)

  return isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form className="form" onSubmit={e => handleOnSubmit(e)}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required="required"
              value={email}
              onChange={e => handleOnChane(e)}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required="required"
              minLength="8"
              value={password}
              onChange={e => handleOnChane(e)}
            />
          </div>
          <div className="form__group">
            <button className="btn btn--green">Login</button>
          </div>
        </form>
      </div>
    </main>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
