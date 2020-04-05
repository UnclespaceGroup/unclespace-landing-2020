import React from 'react'
import css from './SectionAdvantagesDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import _ from 'lodash'
import Padding from 'components/Padding/Padding'

const SectionAdvantagesDesktop = ({ items, title }) => (
  <Layout >
    <h2>{title}</h2>
    <Padding value={160} />
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
export default React.memo(SectionAdvantagesDesktop)
