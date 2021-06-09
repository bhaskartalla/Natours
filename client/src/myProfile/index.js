import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { updateMe, updatePAssword } from '../login/ActionCreater'
import { showAlert } from '../common/ActionCreater'

const MyProfile = ({
  auth: { user, isLoading, isPasswordFail },
  updateMe,
  updatePAssword,
  showAlert
}) => {
  const [accountDetails, setAccountDetails] = useState({
    email: '',
    name: ''
  })

  const [changePassword, setChangePassword] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: ''
  })
  const [userPhoto, setUserPhoto] = useState(null)

  const { email, name } = accountDetails
  const { passwordCurrent, password, passwordConfirm } = changePassword

  useEffect(() => {
    setAccountDetails({ email: user?.email, name: user?.name })
  }, [user])

  const handleAccSetting = e =>
    setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value })

  const handlePasswordChange = e =>
    setChangePassword({ ...changePassword, [e.target.name]: e.target.value })

  const handleImageUpload = e =>
    e.target.files &&
    e.target.files[0] &&
    setUserPhoto(URL.createObjectURL(e.target.files[0]))

  const handleSaveSettings = e => {
    e.preventDefault()
    if (email === '' || name === '') {
      showAlert('error', 'Please fill in the values !', 3000)
    } else {
      updateMe(accountDetails)
    }
  }

  const handleSavePassword = e => {
    e.preventDefault()
    if (passwordCurrent === '' || password === '' || passwordConfirm === '') {
      showAlert('error', 'Please fill in the values ', 3000)
    } else if (password !== passwordConfirm) {
      showAlert('error', 'Passwords do not match', 3000)
    } else {
      updatePAssword({
        passwordCurrent,
        password,
        passwordConfirm
      })
      setChangePassword({
        passwordCurrent: '',
        password: '',
        passwordConfirm: ''
      })
    }
  }

  return (
    <>
      {isLoading && <Spinner />}
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
              {user?.role === 'admin' && (
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
              )}
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
                    required="required"
                    name="name"
                    value={name} // eslint-disable-line
                    onChange={handleAccSetting}
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
                    required="required"
                    name="email"
                    value={email} // eslint-disable-line
                    onChange={handleAccSetting}
                  />
                </div>
                <div className="form__group form__photo-upload">
                  <img
                    className="form__user-photo"
                    src={`../assets/img/users/${user?.photo}`}
                    alt="User "
                  />
                  <span className="btn-text"> Choose new photo</span>
                  <input
                    type="file"
                    name="myImage"
                    className="btn-text"
                    onChange={handleImageUpload}
                  />
                </div>
                <div className="form__group right">
                  <button
                    className="btn btn--small btn--green"
                    onClick={handleSaveSettings}
                  >
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
                    name="passwordCurrent"
                    value={passwordCurrent}
                    onChange={handlePasswordChange}
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
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
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
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="form__group right">
                  <button
                    className="btn btn--small btn--green btn--save-password"
                    onClick={handleSavePassword}
                  >
                    Save password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

MyProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  updateMe: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {
  updateMe,
  updatePAssword,
  showAlert
})(MyProfile)
