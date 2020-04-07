// packages
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// constants
import {
  PAGE_BRIEF,
  PAGE_HOME, PAGE_SERVICES, PAGE_SERVICES_DETAIL, PAGE_TECHNOLOGY
} from 'constants/ROUTES'
import PageHomeDesktop from './PageHome/desktop/PageHomeDesktop'
import PageBriefDesktop from 'pages/PageBrief/desktop/PageBriefDesktop'
import PageServicesDesktop from 'pages/PageServices/PageServicesDesktop'
import PageServiceDetailDesktop from 'pages/PageServiceDetail/PageServiceDetailDesktop'
import PageTechnologyDesktop from 'pages/PageTechnology/PageTechnologyDesktop'

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
    <Route component={PageTechnologyDesktop}
      exact
      path={PAGE_TECHNOLOGY}
    />
  </Switch>
)

export default RoutesDesktop
