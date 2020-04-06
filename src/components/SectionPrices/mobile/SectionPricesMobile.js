import React from 'react'
import css from 'components/SectionPrices/mobile/SectionPricesMobile.module.scss'
import Layout from 'components/Layout/Layout'
import _ from 'lodash'
import Padding from 'components/Padding/Padding'
import SliderMobile from 'components/Slider/mobile/SliderMobile'
import CardPriceMobile from 'components/CardPrice/mobile/CardPriceMobile'

const SectionPricesMobile = ({ title, items = [] }) => {
  return (
    <div className={css.container}>
      <Layout mobile>
        <h2 className={css.title}>{title}</h2>
        <Padding value={32} />
        {items.length &&
        <SliderMobile className={css.slider} >
          {
            _.map(items, (item, key) => (
              <li className={css.col} key={key}>
                <CardPriceMobile {...item} />
              </li>
            ))
          }
        </SliderMobile>}
      </Layout>
    </div>
  )
}
export default SectionPricesMobile
