// packages
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// constants
import {
  PAGE_BRIEF,
  PAGE_HOME, PAGE_SERVICES, PAGE_SERVICES_DETAIL
} from 'constants/ROUTES'
import PageHomeDesktop from './PageHome/desktop/PageHomeDesktop'
import PageBriefDesktop from 'pages/PageBrief/desktop/PageBriefDesktop'
import PageServicesDesktop from 'pages/PageServices/PageServicesDesktop'
import PageServiceDetailDesktop from 'pages/PageServiceDetail/PageServiceDetailDesktop'

const RoutesDesktop = () => (
  <Switch>
    <Route component={PageHomeDesktop}
      exact
      path={PAGE_HOME}
    />
    <Route component={PageBriefDesktop}
      exact
      path={PAGE_BRIEF}
    />
    <Route component={PageServicesDesktop}
      exact
      path={PAGE_SERVICES}
    />
    <Route component={PageServiceDetailDesktop}
      exact
      path={PAGE_SERVICES_DETAIL}
    />
  </Switch>
)

export default RoutesDesktop
