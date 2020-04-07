import React from 'react'
import css from './SectionPricesDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import CardPriceDesktop from 'components/CardPrice/desktop/CardPriceDesktop'
import _ from 'lodash'
import Padding from 'components/Padding/Padding'
import Button from 'components/Button/Button'

const SectionPricesDesktop = ({ title, items = [], btnMore }) => {
  return (
    <div className={css.container}>
      <Layout>
        <h2>{title}</h2>
        <Padding value={48} />
        <ul className={css.row}>
          {
            _.map(items, (item, key) => (
              <li className={css.col} key={key}>
                <CardPriceDesktop {...item} />
              </li>
            ))
          }
        </ul>
        {btnMore &&
        <div className={css.footer}>
          <Button bgColor={'btnMore'} {...btnMore} />
        </div>}
      </Layout>
    </div>
  )
}
export default SectionPricesDesktop
