import React from 'react'
import _ from 'lodash'
import css from './HeaderDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import { Link } from 'react-router-dom'
import logo from 'static/unclespace_black.png'

const HeaderDesktop = ({ items }) => (
  <div className={css.container}>
    <Layout className={css.wrapper}>
      <Link to={'/'} ><img className={css.logo} src={logo} /></Link>

      {
        _.map(items, (item, key) => (
          <Link key={key} to={item.to || '/'} className={css.link}>{item.text}</Link>
        ))
      }
      <div className={css.phone}>
        +7 (904) 237 02 67
        <span>Без выходных, 24/7</span>
      </div>
    </Layout>
  </div>
)
export default React.memo(HeaderDesktop)
