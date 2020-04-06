import React from 'react'
import css from 'components/SectionAdvantages/mobile/SectionAdvantagesMobile.module.scss'
import Layout from 'components/Layout/Layout'
import _ from 'lodash'
import Padding from 'components/Padding/Padding'

const SectionAdvantagesMobile = ({ items, title }) => (
  <Layout mobile>
    <h2 className={css.mainTitle}>{title}</h2>
    <Padding value={40} />
    <ul className={css.row}>
      {
        _.map(items, (item, key) => (
          <li key={key} className={css.item}>
            <img className={css.img} src={item.img} />
            <h3 className={css.title}>{item.title}</h3>
            <div className={css.text} dangerouslySetInnerHTML={{ __html: item.text }} />
          </li>
        ))
      }
    </ul>
  </Layout>
)
export default React.memo(SectionAdvantagesMobile)
