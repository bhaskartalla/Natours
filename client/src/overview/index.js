import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllTours } from './ActionCreater'
import Spinner from '../common/Spinner'

const Overview = ({ tours, getAllTours, isLoading }) => {
  useEffect(() => {
    getAllTours()
  }, [getAllTours])

  return isLoading ? (
    <Spinner />
  ) : (
    <main className="main">
      <div className="card-container">
        {tours?.map((tour, i) => {
          const {
            imageCover,
            name,
            duration,
            startLocation,
            difficulty,
            summary,
            startDates,
            locations,
            maxGroupSize,
            price,
            ratingsAverage,
            ratingsQuantity,
            slug
          } = tour
          return (
            <div key={i} className="card">
              <div className="card__header">
                <div className="card__picture">
                  <div className="card__picture-overlay">&nbsp;</div>
                  <img
                    src={`../assets/img/tours/${imageCover}`}
                    alt={name}
                    className="card__picture-img"
                  />
                </div>

                <h3 className="heading-tertirary">
                  <span>{name}</span>
                </h3>
              </div>

              <div className="card__details">
                <h4 className="card__sub-heading">
                  {difficulty} ${duration}-day tour
                </h4>
                <p className="card__text">{summary}</p>
                <div className="card__data">
                  <svg className="card__icon">
                    {/* <use xlink:href="img/icons.svg#icon-map-pin"></use> */}
                  </svg>
                  <span>{startLocation.description}</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    {/* <use xlink:href="img/icons.svg#icon-calendar"></use> */}
                  </svg>
                  <span>
                    {startDates[0].toLocaleString('en-us', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    {/* <use xlink:href="img/icons.svg#icon-flag"></use> */}
                  </svg>
                  <span>{locations.length}</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    {/* <use xlink:href="img/icons.svg#icon-user"></use> */}
                  </svg>
                  <span>{maxGroupSize}</span>
                </div>
              </div>

              <div className="card__footer">
                <p>
                  <span className="card__footer-value">{`$${price}`}</span>
                  <span className="card__footer-text">per person</span>
                </p>
                <p className="card__ratings">
                  <span className="card__footer-value">{ratingsAverage}</span>
                  <span className="card__footer-text">
                    rating ({ratingsQuantity})
                  </span>
                </p>
                <a href={`/tour/${slug}`} className="btn btn--green btn--small">
                  Details
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

Overview.propTypes = {
  tours: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getAllTours: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tours: state.tours.tours,
  isLoading: state.tours.isLoading
})
export default connect(mapStateToProps, { getAllTours })(Overview)
