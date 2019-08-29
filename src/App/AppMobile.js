import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesMobile from 'pages/RoutesMobile'

const AppMobile = () => (
  <RoutesMobile />
)

export default compose(
  hot(module),
  React.memo
)(AppMobile)
