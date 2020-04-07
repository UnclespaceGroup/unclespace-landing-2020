import React from 'react'
import css from 'components/SectionOrderNow/mobile/SectionOrderNowMobile.module.scss'
import Layout from 'components/Layout/Layout'
import TitleSection from 'components/TitleSection/TitleSection'
import _ from 'lodash'

const SectionOrderNowMobile = ({ title, text, items }) => (
  <div className={css.container}>
    <Layout mobile>
      <TitleSection
        className={css.titleBlock}
        title={title}
        mobile
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
export default React.memo(SectionOrderNowMobile)
