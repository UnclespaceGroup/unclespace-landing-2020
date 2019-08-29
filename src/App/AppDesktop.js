// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'

const AppDesktop = () => (
  <RoutesDesktop />
)

export default compose(
  hot(module),
  React.memo
)(AppDesktop)
