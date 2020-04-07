import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesMobile from 'pages/RoutesMobile'
import ContainerHeader from 'containers/ContainerHeader/ContainerHeader'
import ContainerFooter from 'containers/ContainerFooter/ContainerFooter'

const AppMobile = () => (
  <>
    <ContainerHeader mobile />
    <RoutesMobile />
    <ContainerFooter mobile />
  </>
)

export default compose(
  hot(module),
  React.memo
)(AppMobile)
