import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const MyProfile = props => {
  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <ul className="side-nav">
            <li className="side-nav--active">
              <Link to="#">
                <svg>
                  {/* <use xlink:href="img/icons.svg#icon-settings"></use> */}
                </svg>
                Settings
              </Link>
            </li>
            <li>
              <Link to="#">
                <svg>
                  {/* <use xlink:href="img/icons.svg#icon-briefcase"></use> */}
                </svg>
                My bookings
              </Link>
            </li>
            <li>
              <Link to="#">
                <svg>
                  {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                </svg>
                My reviews
              </Link>
            </li>
            <li>
              <Link to="#">
                <svg>
                  {/* <use xlink:href="img/icons.svg#icon-credit-card"></use> */}
                </svg>
                Billing
              </Link>
            </li>
            <div className="admin-nav">
              <h5 className="admin-nav__heading">Admin</h5>
              <ul className="side-nav">
                <li>
                  <Link to="#">
                    <svg>
                      {/* <use xlink:href="img/icons.svg#icon-map"></use> */}
                    </svg>
                    Manage tours
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <svg>
                      {/* <use xlink:href="img/icons.svg#icon-users"></use> */}
                    </svg>
                    Manage users
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <svg>
                      {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                    </svg>
                    Manage reviews
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <svg>
                      {/* <use xlink:href="img/icons.svg#icon-briefcase"></use> */}
                    </svg>
                    Manage bookings
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
        <div className="user-view__content">
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">
              Your account settings
            </h2>
            <form className="form form-user-data">
              <div className="form__group">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form__input"
                  id="name"
                  type="text"
                  value="user.name"
                  required="required"
                  name="name"
                />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="email">
                  Email address
                </label>
                <input
                  className="form__input"
                  id="email"
                  type="email"
                  value="user.email"
                  required="required"
                  name="email"
                />
              </div>
              <div className="form__group form__photo-upload">
                <img
                  className="form__user-photo"
                  src="/img/users/user.photo"
                  alt="User photo"
                />
                <Link to="btn-text" href="">
                  Choose new photo
                </Link>
              </div>
              <div className="form__group right">
                <button className="btn btn--small btn--green">
                  Save settings
                </button>
              </div>
            </form>
          </div>
          <div className="line">&nbsp;</div>
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">Password change</h2>
            <form className="form form-user-password">
              <div className="form__group">
                <label className="form__label" htmlFor="password-current">
                  Current password
                </label>
                <input
                  className="form__input"
                  id="password-current"
                  type="password"
                  placeholder="••••••••"
                  required="required"
                  minLength="8"
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="password">
                  New password
                </label>
                <input
                  className="form__input"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required="required"
                  minLength="8"
                />
              </div>
              <div className="form__group ma-bt-lg">
                <label className="form__label" htmlFor="password-confirm">
                  Confirm password
                </label>
                <input
                  className="form__input"
                  id="password-confirm"
                  type="password"
                  placeholder="••••••••"
                  required="required"
                  minLength="8"
                />
              </div>
              <div className="form__group right">
                <button className="btn btn--small btn--green btn--save-password">
                  Save password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

MyProfile.propTypes = {}

export default MyProfile
