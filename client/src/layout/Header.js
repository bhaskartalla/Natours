import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <header class="header">
      <nav class="nav nav--tours">
        <a class="nav__el" href="/">
          All tours
        </a>
      </nav>
      <div class="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav class="nav nav--user">
        <a class="nav__el nav__el--logout">Log out</a>
        <a class="nav__el" href="/me">
          <img
            class="nav__user-img"
            src="/img/users/lallan"
            alt="Photo of lallan"
          />
          <span>lallan</span>
        </a>
      </nav>
    </header>
  )
}

Header.propTypes = {}

export default Header
