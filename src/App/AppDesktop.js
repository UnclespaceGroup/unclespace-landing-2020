// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'
import ContainerHeader from 'containers/ContainerHeader/ContainerHeader'
import ContainerFooter from 'containers/ContainerFooter/ContainerFooter'

const AppDesktop = () => (
  <>
    <ContainerHeader />
    <RoutesDesktop />
    <ContainerFooter />
  </>
)

export default compose(
  hot(module),
  React.memo
)(AppDesktop)
