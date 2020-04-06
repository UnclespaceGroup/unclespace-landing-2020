// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PAGE_HOME } from 'constants/ROUTES'
import PageHomeMobile from 'pages/PageHome/mobile/PageHomeMobile'

const RoutesMobile = () => (
  <Switch>
    <Route component={PageHomeMobile}
      exact
      path={PAGE_HOME}
    />
  </Switch>
)

export default RoutesMobile
