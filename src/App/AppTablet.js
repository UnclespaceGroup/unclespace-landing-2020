import React from 'react'
import { hot } from 'react-hot-loader'
import { compose } from 'redux'
import { ModalProvider } from 'HOC/ModalContext'

const AppTablet = () => (
  <ModalProvider>
hgjh
  </ModalProvider>
)

export default compose(
  hot(module),
  React.memo
)(AppTablet)
