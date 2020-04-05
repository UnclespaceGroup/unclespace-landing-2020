import React, { useState } from 'react'
import css from './SectionPricesDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import CardPriceDesktop from 'components/CardPrice/desktop/CardPriceDesktop'
import _ from 'lodash'
import Padding from 'components/Padding/Padding'

const SectionPricesDesktop = ({ title, items = [] }) => {
  const [ isOpen, setIsOpen ] = useState()
  const cards = isOpen ? items : items.slice(0, 3)
  return (
    <div className={css.container}>
      <Layout>
        <h2>{title}</h2>
        <Padding value={48} />
        <ul className={css.row}>
          {
            _.map(cards, (item, key) => (
              <li className={css.col} key={key}>
                <CardPriceDesktop {...item} />
              </li>
            ))
          }
        </ul>
        <Padding value={48} />
        { items.length > 3 &&
          <button className={css.btn}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Скрыть' : 'Все услуги'}
          </button>}
      </Layout>
    </div>
  )
}
export default SectionPricesDesktop
