import React from 'react'
import PropTypes from 'prop-types'
import css from './Template.module.scss'

const Template = ({ children }) => (
  <div className={css.container}>
    {children}
  </div>
)
Template.propTypes = {
  children: PropTypes.node
}

export default React.memo(Template)
