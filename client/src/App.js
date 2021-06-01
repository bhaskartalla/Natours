import React, { Fragment, useEffect } from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'
import { getCurrentUser } from './login/ActionCreater'
require('./style.css')

const App = () => {
  useEffect(() => {
    store.dispatch(getCurrentUser())
  }, [])

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
