import React, { useState } from 'react'
import css from './TitleSection.module.scss'
import Layout from 'components/Layout/Layout'

const TitleSection = ({ mobile, title, text, children, btnText }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <Layout mobile={mobile} className={mobile ? css.mobile : css.desktop}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      {
        children && React.cloneElement(children, { isOpen, setIsOpen })
      }
      { btnText &&
      <button className={css.btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Скрыть' : btnText}
      </button>}
    </Layout>
  )
}
export default React.memo(TitleSection)
