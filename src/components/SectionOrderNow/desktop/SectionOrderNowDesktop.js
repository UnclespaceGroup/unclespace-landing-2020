import React from 'react'
import css from './SectionOrderNow.module.scss'
import Layout from 'components/Layout/Layout'
import TitleSection from 'components/TitleSection/TitleSection'
import _ from 'lodash'

const SectionOrderNowDesktop = ({ title, text, items }) => (
  <div className={css.container}>
    <Layout>
      <TitleSection
        className={css.titleBlock}
        title={title}
        text={text}
      />
      <ul>
        {
          _.map(items, (item, key) => (
            <li key={key} className={css.item}>
              <div className={css.icon}>{item.icon}</div>
              <div className={css.title} dangerouslySetInnerHTML={{ __html: item.title }} />
              <div className={css.title} >{item.text}</div>
            </li>
          ))
        }
      </ul>
    </Layout>
  </div>
)
export default React.memo(SectionOrderNowDesktop)
