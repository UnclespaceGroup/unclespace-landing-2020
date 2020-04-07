// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PAGE_BRIEF, PAGE_HOME, PAGE_SERVICES, PAGE_SERVICES_DETAIL } from 'constants/ROUTES'
import PageHomeMobile from 'pages/PageHome/mobile/PageHomeMobile'
import PageBriefMobile from 'pages/PageBrief/mobile/PageBriefMobile'
import PageServicesMobile from 'pages/PageServices/PageServicesMobile'
import PageServiceDetailMobile from 'pages/PageServiceDetail/PageServiceDetailMobile'

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
    <Route component={PageServiceDetailMobile}
      exact
      path={PAGE_SERVICES_DETAIL}
    />
  </Switch>
)

export default RoutesMobile
