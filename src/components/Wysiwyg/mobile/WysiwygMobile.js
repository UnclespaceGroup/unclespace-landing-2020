import React from 'react'
import PropTypes from 'prop-types'
import css from './WysiwygMobile.module.scss'
import cn from 'classnames'

const WysiwygMobile = ({ children, width, className }) => {
  return (
    <div className={cn(css.container, className)} style={{ width }} dangerouslySetInnerHTML={{ __html: children }} />
  )
}
WysiwygMobile.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  className: PropTypes.string
}

export default React.memo(WysiwygMobile)
