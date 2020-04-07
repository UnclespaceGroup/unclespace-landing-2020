// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PAGE_BRIEF, PAGE_HOME, PAGE_SERVICES } from 'constants/ROUTES'
import PageHomeMobile from 'pages/PageHome/mobile/PageHomeMobile'
import PageBriefMobile from 'pages/PageBrief/mobile/PageBriefMobile'
import PageServicesMobile from 'pages/PageServices/PageServicesMobile'

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
    <Route component={PageServicesMobile}
      exact
      path={PAGE_SERVICES}
    />
  </Switch>
)

export default RoutesMobile
