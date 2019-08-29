// packages
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// constants
import {
  PAGE_HOME
} from 'constants/ROUTES'
import PageHomeDesktop from './PageHome/desktop/PageHomeDesktop'

const RoutesDesktop = () => (
  <Switch>
    <Route component={PageHomeDesktop}
      exact
      path={PAGE_HOME}
    />
  </Switch>
)

export default RoutesDesktop
