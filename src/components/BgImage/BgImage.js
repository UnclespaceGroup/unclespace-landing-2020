import React from 'react'
import css from './BgImage.module.css'
import cn from 'classnames'

const BgImage = ({ children, img, className }) => (
  <div className={cn(css.container, className)} style={{ backgroundImage: `url(${img})` }}>
    {children}
  </div>
)
export default React.memo(BgImage)
