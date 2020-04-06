// packages
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// constants
import {
  PAGE_BRIEF,
  PAGE_HOME
} from 'constants/ROUTES'
import PageHomeDesktop from './PageHome/desktop/PageHomeDesktop'
import PageBriefDesktop from 'pages/PageBrief/desktop/PageBriefDesktop'

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
  </Switch>
)

export default RoutesDesktop
