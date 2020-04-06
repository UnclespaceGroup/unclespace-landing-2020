// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PAGE_BRIEF, PAGE_HOME } from 'constants/ROUTES'
import PageHomeMobile from 'pages/PageHome/mobile/PageHomeMobile'
import PageBriefMobile from 'pages/PageBrief/mobile/PageBriefMobile'

const RoutesMobile = () => (
  <Switch>
    <Route component={PageHomeMobile}
      exact
      path={PAGE_HOME}
    />
    <Route component={PageBriefMobile}
      exact
      path={PAGE_BRIEF}
    />
  </Switch>
)

export default RoutesMobile
