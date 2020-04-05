import React from 'react'
import css from './SectionTextImgDesktop.module.scss'
import Layout from 'components/Layout/Layout'

const SectionTextImgDesktop = ({ title, text, img }) => (
  <Layout className={css.container}>
    <div className={css.content}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
    <img className={css.img} src={img} />
  </Layout>
)
export default React.memo(SectionTextImgDesktop)
