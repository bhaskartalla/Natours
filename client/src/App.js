import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'
require('./style.css')

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
