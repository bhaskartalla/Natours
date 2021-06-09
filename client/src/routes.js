import React, { Suspense, lazy, memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LOGIN_PATH, OVERVIEW_PATH, MY_PROFILE_PATH } from './pageRoutes'
import PrivateRoute from './PrivateRoute'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Spinner from './common/Spinner'

const Login = lazy(() => import('./login'))
const Overview = lazy(() => import('./overview'))
const MyProfile = lazy(() => import('./myProfile'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Route exact path={OVERVIEW_PATH} component={Overview} />
        <Switch>
          <PrivateRoute exact path={MY_PROFILE_PATH} component={MyProfile} />
          <Route exact path={LOGIN_PATH} component={Login} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default memo(Routes)
