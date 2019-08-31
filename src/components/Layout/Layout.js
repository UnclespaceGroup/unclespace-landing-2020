import React from 'react'
import PropTypes from 'prop-types'
import css from './Layout.module.scss'

const Layout = ({ children }) => (
  <div className={css.layout}>{children}</div>
)
Layout.propTypes = {
  children: PropTypes.node
}
export default React.memo(Layout)
