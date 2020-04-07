import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import cn from 'classnames'
import css from './Icon.module.scss'

const ICONS = {
  arrowLeft: <FaArrowLeft />,
  arrowRight: <FaArrowRight />
}

const Icon = ({ icon, className }) => {
  return (
    <div className={cn(css.icon, className)}>
      {ICONS[icon]}
    </div>
  )
}
export default React.memo(Icon)
