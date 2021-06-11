import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import PropTypes from 'prop-types'
import { getTour } from '../overview/ActionCreater'
import Spinner from '../common/Spinner'

const TourDetails = ({ isLoading, tour, getTour }) => {
  const history = useHistory()

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100%',
    zoom: 2
  })

  const [locations, setLocations] = useState([])

  const {
    imageCover,
    name,
    duration,
    startLocation,
    startDates,
    difficulty,
    maxGroupSize,
    ratingsAverage,
    guides,
    description,
    images,
    reviews
  } = tour

  const mapConfig = {
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    mapStyle: 'mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy'
  }

  useEffect(() => {
    getTour(history?.location?.state?.id)
  }, [getTour])

  useEffect(() => {
    console.log(
      `process.env.REACT_APP_MAPBOX_ACCESS_TOKEN`,
      process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    )
    setViewport({
      ...viewport,
      longitude:
        (tour?.locations?.length && tour?.locations[0].coordinates[0]) ||
        -80.128473,
      latitude:
        (tour?.locations?.length && tour?.locations[0].coordinates[1]) ||
        25.781842
    })
    setLocations(() =>
      tour?.locations?.map(loc => ({
        ...loc,
        show: true
      }))
    )
  }, [tour])

  const loadDefaultImage = e => {
    e.src = ''
  }

  return (
    <div>
      {isLoading && <Spinner />} (
      <>
        <section className="section-header">
          <div className="header__hero">
            <div className="header__hero-overlay">
              <img
                className="header__hero-img"
                src={`../assets/img/tours/${imageCover}`}
                alt={tour.name}
              />
            </div>
          </div>
          <div className="heading-box">
            <h1 className="heading-primary">
              <span>{name}</span>
            </h1>
            <div className="heading-box__group">
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-clock"></use> */}
                </svg>
                <span className="heading-box__text">{duration} days</span>
              </div>
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-map-pin"></use> */}
                </svg>
                <span className="heading-box__text">
                  {startLocation?.description}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-description">
          <div className="overview-box">
            <div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    {/* <use xlink:href="img/icons.svg#icon-calendar"></use> */}
                  </svg>
                  <span className="overview-box__label">Next date</span>
                  <span className="overview-box__text">
                    {startDates?.length &&
                      startDates[0]?.toLocaleString('en-us', {
                        month: 'long',
                        year: 'numeric'
                      })}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    {/* <use xlink:href="img/icons.svg#icon-trending-up"></use> */}
                  </svg>
                  <span className="overview-box__label">Difficulty</span>
                  <span className="overview-box__text">{difficulty}</span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    {/* <use xlink:href="img/icons.svg#icon-user"></use> */}
                  </svg>
                  <span className="overview-box__label">Participants</span>
                  <span className="overview-box__text">{maxGroupSize}</span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                  </svg>
                  <span className="overview-box__label">Rating</span>
                  <span className="overview-box__text">{ratingsAverage}</span>
                </div>
              </div>

              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

                {guides?.map((guide, i) => (
                  <div key={i} className="overview-box__detail">
                    <img
                      src={`../assets/img/users/${guide.photo}`}
                      alt={guide.name}
                      className="overview-box__img"
                    />
                    <span className="overview-box__label">
                      {guide.role === 'lead-guide'
                        ? 'Lead guide'
                        : 'Tour guide'}
                    </span>
                    <span className="overview-box__text">{guide.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">
              About the {name} tour
            </h2>

            {description?.split('\n').map((section, i) => (
              <p key={i} className="description__text">
                {section}
              </p>
            ))}
          </div>
        </section>

        <section className="section-pictures">
          {images?.map((image, i) => (
            <div key={i} className="picture-box">
              <img
                className={`picture-box__img picture-box__img--${i + 1}`}
                src={`../assets/img/tours/${image}`}
                alt={`${name} Tour ${i + 1}`}
              />
            </div>
          ))}
        </section>

        <section className="section-map">
          <ReactMapGL
            {...viewport}
            {...mapConfig}
            onViewportChange={viewport => setViewport(viewport)}
          >
            {locations?.map((loc, i) => (
              <React.Fragment key={i}>
                {loc.show && (
                  <Popup
                    latitude={loc.coordinates[1]}
                    longitude={loc.coordinates[0]}
                    onClose={() =>
                      setLocations(() =>
                        locations.map(location => {
                          if (location._id === loc._id) {
                            location.show = false
                          }
                          return location
                        })
                      )
                    }
                  >
                    <p>
                      Day {loc.day}: {loc.description}
                    </p>
                  </Popup>
                )}
                <Marker
                  latitude={loc.coordinates[1]}
                  longitude={loc.coordinates[0]}
                >
                  <div className="marker">
                    <img
                      className="header__hero-img"
                      src="../assets/img/location-pin.png"
                      alt={tour.name}
                    />
                  </div>
                </Marker>
              </React.Fragment>
            ))}
          </ReactMapGL>
        </section>

        <section className="section-reviews">
          <div className="reviews">
            {reviews?.map((review, i) => (
              <div key={i} className="reviews__card">
                <div className="reviews__avatar">
                  <img
                    src={`../assets/img/users/${review.user.photo}`}
                    alt={review.user.name}
                    className="reviews__avatar-img"
                  />
                  <h6 className="reviews__user">{review.user.name}</h6>
                </div>
                <p className="reviews__text">{review.review}</p>
                <div className="reviews__rating">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <span key={i}>
                      <svg
                        className={`reviews__star reviews__star--${
                          review.rating >= star ? 'active' : 'inactive'
                        }`}
                      >
                        {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                      </svg>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-cta">
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <img
                src="../assets/img/logo-white.png"
                alt="Natours logo"
                className=""
              />
            </div>
            <img
              src={images?.length ? `../assets/img/toura/${images[0]}` : ''}
              alt="Tour 1"
              className="cta__img cta__img--1"
              onError={loadDefaultImage}
            />
            <img
              src={images?.length ? `../assets/img/toura/${images[1]}` : ''}
              alt="Tour 2"
              className="cta__img cta__img--2"
              onError={loadDefaultImage}
            />
            <div className="cta__content">
              <h2 className="heading-secondary">What are you waiting for?</h2>
              <p className="cta__text">
                {duration} days. 1 adventure. Infinite memories. Make it yours
                today!
              </p>
              <button className="btn btn--green span-all-rows">
                Book tour now!
              </button>
            </div>
          </div>
        </section>
      </>
      )
    </div>
  )
}

TourDetails.propTypes = {
  tour: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getTour: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tour: state.tours.tour,
  isLoading: state.tours.isLoading
})

export default connect(mapStateToProps, { getTour })(TourDetails)
