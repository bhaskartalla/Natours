import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../login/ActionCreater'

const Header = ({ auth: { isAuthenticated, user, isLoading }, logout }) => {
  const authenticated = user => (
    <>
      <p className="nav__el nav__el--logout" onClick={logout}>
        Log out
      </p>
      <Link className="nav__el" to="/me">
        <img
          className="nav__user-img"
          src={`../assets/img/users/${user?.photo}`}
          alt={user?.name}
        />
        <span>{user?.name}</span>
      </Link>
    </>
  )

  const notAuthenticated = () => (
    <>
      <Link className="nav__el" to="/login">
        Log in
      </Link>
      <Link className="nav__el nav__el--cta" to="#">
        Sign up
      </Link>
    </>
  )

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link className="nav__el" to="/">
          All tours
        </Link>
      </nav>
      <div className="header__logo">
        <img src="../assets/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {!isLoading && (
          <>{isAuthenticated ? authenticated(user) : notAuthenticated()}</>
        )}
      </nav>
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.object,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header)
