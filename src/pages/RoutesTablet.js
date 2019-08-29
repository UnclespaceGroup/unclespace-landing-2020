// packages
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// constants
import { PAGE_HOME } from 'constants/ROUTES'
// pages
import PageHomeTablet from 'pages/PageAnexPro/tablet/PageAnexProTablet'

const RoutesTablet = () => (
  <Switch>
    <Route component={PageHomeTablet}
      exact
      path={PAGE_HOME}
    />
  </Switch>
)

export default RoutesTablet
