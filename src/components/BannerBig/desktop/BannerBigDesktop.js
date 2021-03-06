import React from 'react'
import css from './BannerBigDesktop.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Layout from 'components/Layout/Layout'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import Button from 'components/Button/Button'

const BannerBigDesktop = ({ title, text, img }) => (
  <BgImage img={img}>
    <Layout className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
        <Button className={css.btn} onClick={() => scrollWindowTo('toThis')} >Подробнее</Button>
      </div>
    </Layout>
    <div id={'toThis'} />
  </BgImage>
)
export default React.memo(BannerBigDesktop)
