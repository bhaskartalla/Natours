import React, { Suspense, lazy, memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LOGIN_PATH, OVERVIEW_PATH } from './pageRoutes'
import PrivateRoute from './PrivateRoute'
import Header from './layout/Header'
import Footer from './layout/Footer'

const Login = lazy(() => import('./login'))
const Overview = lazy(() => import('./overview'))

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <div
          style={{
            backgroungColor: 'red',
            width: '100px',
            height: '100px',
            borderRadius: '50%'
          }}
        >
          Loader
        </div>
      }
    >
      <Header />
      <Switch>
        <Route path={LOGIN_PATH} component={Login} />
        <Route path={OVERVIEW_PATH} component={Overview} />
      </Switch>
      <Footer />
    </Suspense>
  </Router>
)

export default memo(Routes)
