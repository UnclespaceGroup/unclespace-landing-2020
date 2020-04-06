import React from 'react'
import css from 'components/BannerBig/mobile/BannerBigMobile.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Layout from 'components/Layout/Layout'
import { scrollWindowTo } from 'utils/scrollWindowTo'

const BannerBigMobile = ({ title, text, img }) => (
  <BgImage img={img}>
    <Layout mobile className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
        <div className={css.btn} onClick={() => scrollWindowTo('toThis')} >Подробнее</div>
      </div>
    </Layout>
    <div id={'toThis'} />
  </BgImage>
)
export default React.memo(BannerBigMobile)
