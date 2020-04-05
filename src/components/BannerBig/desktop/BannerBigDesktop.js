import React from 'react'
import css from './BannerBigDesktop.module.scss'
import BgImage from 'components/BgImage/BgImage'
import logo from 'static/unclespace_white.png'
import Layout from 'components/Layout/Layout'
import { scrollWindowTo } from 'utils/scrollWindowTo'

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
        <div className={css.btn} onClick={() => scrollWindowTo('toThis')} >Подробнее</div>
      </div>
    </Layout>
    <div id={'toThis'} />
  </BgImage>
)
export default React.memo(BannerBigDesktop)
