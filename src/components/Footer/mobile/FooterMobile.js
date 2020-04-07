import React from 'react'
import css from 'components/Footer/mobile/FooterMobile.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Layout from 'components/Layout/Layout'
import logo from 'static/unclespace_white.png'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import Padding from 'components/Padding/Padding'

const FooterMobile = ({ items, img }) => (
  <BgImage img={img} >
    <div className={css.container}>
      <Layout mobile className={css.wrapper}>
        <img className={css.logo} src={logo} />
        <div>
          {
            _.map(items, (item, key) => (
              <Link className={css.link} to={item.to || '/'} key={key}>{item.text}</Link>
            ))
          }
        </div>
      </Layout>
    </div>
    <div className={css.bottom}>
      <Layout mobile>
        <div>г. Сыктывкар, Республика Коми</div>
        <Padding value={24} />
        <div>© unclespace group</div>
      </Layout>
    </div>
  </BgImage>
)
export default React.memo(FooterMobile)
