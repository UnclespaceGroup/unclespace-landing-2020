import React from 'react'
import Layout from 'components/Layout/Layout'
import css from 'components/SectionSteps/mobile/SectionStepsMobile.module.scss'
import _ from 'lodash'
import Padding from 'components/Padding/Padding'

const SectionStepsMobile = ({ title, text, items }) => (
  <Layout mobile>
    <h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
    <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
    <Padding value={40} />
    <ul>
      {
        _.map(items, (item, key) => (
          <li key={key} className={css.item}>
            <div className={css.number}>{key + 1}</div>
            <div className={css.content}>
              <h3>{item.title}</h3>
              <div >{item.text}</div>
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)
export default React.memo(SectionStepsMobile)
