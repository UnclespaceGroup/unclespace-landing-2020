import React from 'react'
import Layout from 'components/Layout/Layout'
import css from './SectionStepsDesktop.module.scss'
import _ from 'lodash'
import Padding from 'components/Padding/Padding'

const SectionStepsDesktop = ({ title, text, items }) => (
  <Layout className={css.container}>
    <h2 dangerouslySetInnerHTML={{ __html: title }} />
    <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
    <Padding value={96} />
    <ul>
      {
        _.map(items, (item, key) => (
          <li key={key} className={css.item}>
            <div className={css.number}>{key + 1}</div>
            <div className={css.content}>
              <h3>{item.title}</h3>
              <div >{item.text}</div>
            </div>
            <div className={css.point} />
          </li>
        ))
      }
    </ul>
  </Layout>
)
export default React.memo(SectionStepsDesktop)
