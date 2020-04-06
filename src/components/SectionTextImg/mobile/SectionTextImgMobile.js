import React from 'react'
import css from 'components/SectionTextImg/mobile/SectionTextImgMobile.module.scss'
import Layout from 'components/Layout/Layout'

const SectionTextImgMobile = ({ title, text, img }) => (
  <Layout mobile className={css.container}>
    <img className={css.img} src={img} />
    <div className={css.content}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </Layout>
)
export default React.memo(SectionTextImgMobile)
