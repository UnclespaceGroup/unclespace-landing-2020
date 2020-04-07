import React from 'react'
import css from 'components/SectionOverview/mobile/SectionOverviewMobile.module.scss'
import Layout from 'components/Layout/Layout'
import cn from 'classnames'

const SectionOverviewMobile = ({ img, title, text, bottom, style, className }) => (
  <Layout mobile className={cn(css.container, className)} style={style}>
    <img className={css.img} src={img} />
    <div className={css.content}>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className={css.bottom} dangerouslySetInnerHTML={{ __html: bottom }} />
    </div>
  </Layout>
)
export default React.memo(SectionOverviewMobile)
