// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet/lib/Helmet'
import MobileView from './LoadableMobileView'
import DesktopView from './LoadableDesktopView'
import { withViewContext } from 'HOC/ViewContext'

const ViewSwitcher = ({ sizes: { isDesktop, isMobile } }) => (
  <>
    <Helmet>
      <html
        className={`elastic-${
          isMobile ? 'mobile' : isDesktop ? 'desktop' : 'tablet'
        }`}
      />
    </Helmet>
    {isMobile ? <MobileView /> : <DesktopView />}
  </>
)

ViewSwitcher.propTypes = {
  sizes: PropTypes.object
}

export default compose(
  withViewContext,
  hot(module)
)(ViewSwitcher)
