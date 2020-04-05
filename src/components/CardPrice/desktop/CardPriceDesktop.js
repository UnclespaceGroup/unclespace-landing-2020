import React from 'react'
import css from './CardPriceDesktop.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'

const CardPriceDesktop = ({ title, text, img, price, url, className, isContainImage, promoText }) => (
  <div className={cn(css.container, className)}>
    <div className={isContainImage ? css.imgContain : css.img} style={{ backgroundImage: `url(${img})` }} />
    <div className={css.wrapper}>
      {promoText && <div className={css.promoText} >{promoText}</div> }
      <div>
        <h3 className={css.title}>{title}</h3>
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className={css.footer}>
        <Link to={url || '/'} className={css.btn} >Перейти</Link>
        <div className={css.price}><span>от </span>{price}</div>
      </div>
    </div>
  </div>
)
export default React.memo(CardPriceDesktop)
