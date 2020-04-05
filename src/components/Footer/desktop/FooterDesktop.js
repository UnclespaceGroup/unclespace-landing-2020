import React from 'react'
import css from './FooterDesktop.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Layout from 'components/Layout/Layout'
import logo from 'static/unclespace_white.png'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const FooterDesktop = ({ items, img }) => (
  <BgImage img={img} >
    <div className={css.container}>
      <Layout className={css.wrapper}>
        <img className={css.logo} src={logo} />
        <div>
          {
            _.map(items, (item, key) => (
              <Link className={css.link} to={item.to || '/'} key={key}>{item.title}</Link>
            ))
          }
        </div>
      </Layout>
    </div>
    <div className={css.bottom}>
      <Layout className={css.row}>
        <div>г. Сыктывкар, Республика Коми</div>
        <div>© unclespace group</div>
      </Layout>
    </div>
  </BgImage>
)
export default React.memo(FooterDesktop)
