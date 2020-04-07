import React from 'react'
import css from 'components/CardPrice/mobile/CardPriceMobile.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { PAGE_SERVICES } from 'constants/ROUTES'

const CardPriceMobile = ({ id, title, text, img, price, url, className, isContainImage, promoText }) => (
  <div className={cn(css.container, className)}>
    <div className={isContainImage ? css.imgContain : css.img} style={{ backgroundImage: `url(${img})` }} />
    <div className={css.wrapper}>
      {promoText && <div className={css.promoText} >{promoText}</div> }
      <div>
        <h3 className={css.title}>{title}</h3>
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className={css.footer}>
        <div className={css.price}><span>от </span>{price}</div>
        <Link to={url || (PAGE_SERVICES + id)} className={css.btn} >Перейти</Link>
      </div>
    </div>
  </div>
)
export default React.memo(CardPriceMobile)
