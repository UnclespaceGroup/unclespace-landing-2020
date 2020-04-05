import React from 'react'
import css from './BannerDesktop.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Layout from 'components/Layout/Layout'

const BannerDesktop = ({ title, text, img }) => (
  <BgImage img={img}>
    <div className={css.container}>
      <Layout>
        <h2 className={css.title}>{title}</h2>
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      </Layout>
    </div>
  </BgImage>
)
export default React.memo(BannerDesktop)
