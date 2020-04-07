// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import MobileView from './LoadableMobileView'
import DesktopView from './LoadableDesktopView'
import { withViewContext } from 'HOC/ViewContext'
import ScrollToTop from 'HOC/ScrollToTop'

const ViewSwitcher = ({ sizes: { isMobile } }) => (
  <>
    <ScrollToTop>
      {isMobile ? <MobileView /> : <DesktopView />}
    </ScrollToTop>
  </>
)

ViewSwitcher.propTypes = {
  sizes: PropTypes.object
}

export default compose(
  withViewContext,
  hot(module)
)(ViewSwitcher)
