import React, { useState, useMemo } from 'react'
import _ from 'lodash'
import css from 'components/Header/mobile/HeaderMobile.module.scss'
import Layout from 'components/Layout/Layout'
import { Link, useLocation } from 'react-router-dom'
import logo from 'static/unclespace_black.png'
import { Collapse } from 'react-collapse/lib/Collapse'
import { MdMenu } from 'react-icons/md'

const HeaderMobile = ({ items }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const location = useLocation()

  useMemo(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <div className={css.container}>
      <Layout className={css.wrapper} mobile>
        <Link to={'/'} ><img className={css.logo} src={logo} /></Link>
        <MdMenu className={css.burger} onClick={() => setIsOpen(!isOpen)} />
      </Layout>

      <Collapse isOpened={isOpen} >
        <Layout mobile className={css.collapse}>
          <div>
            {
              _.map(items, (item, key) => (
                <Link key={key} to={item.to || '/'} className={css.link}>{item.text}</Link>
              ))
            }
          </div>
          <div className={css.phone}>
            +7 (904) 237 02 67
          </div>
        </Layout>
      </Collapse>
    </div>
  )
}
export default React.memo(HeaderMobile)
