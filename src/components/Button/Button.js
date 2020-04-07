import React from 'react'
import css from './Button.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import Icon from 'components/Icon/Icon'

const Button = ({ to, text, onClick, bgColor, hide, icon, className }) => {
  const BtnComponent = to ? Link : 'button'

  return (
    <BtnComponent
      to={to}
      onClick={onClick}
      className={cn(
        css.btn,
        bgColor,
        { [css.hide]: hide },
        className
      )}
    >
      {text}
      <Icon icon={icon} />
    </BtnComponent>
  )
}
export default React.memo(Button)
