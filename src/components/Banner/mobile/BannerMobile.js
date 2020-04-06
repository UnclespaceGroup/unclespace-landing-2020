import React from 'react'
import css from 'components/Banner/mobile/BannerMobile.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Layout from 'components/Layout/Layout'

const BannerMobile = ({ title, text, img }) => (
  <BgImage img={img}>
    <div className={css.container}>
      <Layout mobile>
        <h2 className={css.title}>{title}</h2>
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      </Layout>
    </div>
  </BgImage>
)
export default React.memo(BannerMobile)
