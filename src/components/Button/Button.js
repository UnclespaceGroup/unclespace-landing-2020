import React from 'react'
import css from './Button.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import Icon from 'components/Icon/Icon'

const Button = ({ to, text, onClick, bgColor, hide, icon, className, children }) => {
  const BtnComponent = to ? Link : 'button'

  return (
    <BtnComponent
      to={to}
      onClick={onClick}
      className={cn(
        css.btn,
        { [css.hide]: hide },
        css[bgColor],
        className
      )}
    >
      {text || children}
      <Icon icon={icon} />
    </BtnComponent>
  )
}
export default React.memo(Button)
