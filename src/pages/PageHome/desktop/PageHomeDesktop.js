// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import Layout from 'components/Layout/Layout'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <Layout />
  </div>
)

export default React.memo(PageHomeDesktop)
