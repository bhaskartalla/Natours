import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <footer class="footer">
      <div class="footer__logo">
        <img src="/img/logo-green.png" alt="Natour logo" />
      </div>
      <ul class="footer__nav">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Download apps</a>
        </li>
        <li>
          <a href="#">Become a guide</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p class="footer__copyright">
        &copy; by Jonas Schmedtmann. Feel free to use this project for your own
        purposes, EXCEPT producing your own course or tutorials!
      </p>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
