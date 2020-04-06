import React from 'react'
import PropTypes from 'prop-types'
import css from './Layout.module.scss'
import cn from 'classnames'

const Layout = ({ children, className, mobile }) => (
  <div className={cn(mobile ? css.mobile : css.layout, className)}>{children}</div>
)
Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mobile: PropTypes.bool
}
export default React.memo(Layout)
