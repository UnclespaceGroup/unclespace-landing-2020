import React from 'react'
import css from './BannerBigDesktop.module.scss'
import BgImage from 'components/BgImage/BgImage'
import logo from 'static/unclespace_black.png'
import Layout from 'components/Layout/Layout'

const BannerBigDesktop = ({ title, text, img, phone }) => (
  <BgImage img={img}>
    <Layout className={css.wrapper}>
      <div className={css.header}>
        <img className={css.logo} src={logo} />
        <div className={css.phone}>
          <div>{phone}</div>
          <span>круглосуточно, без выходных</span>
        </div>
      </div>
      <div className={css.container}>
        <h1 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </Layout>
  </BgImage>
)
export default React.memo(BannerBigDesktop)
