import React, { Fragment } from 'react'
import Routes from './routes'
import Header from './layout/Header'
import Footer from './layout/Footer'
require('./style.css')

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  )
}

export default App
