import React, { Suspense, lazy, memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LOGIN_PATH } from './pageRoutes'

const Login = lazy(() => import('./login'))

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loader</div>}>
      <Switch>
        <Route path={LOGIN_PATH} component={Login} />
      </Switch>
    </Suspense>
  </Router>
)

export default memo(Routes)
