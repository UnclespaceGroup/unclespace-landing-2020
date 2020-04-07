import React, { useState } from 'react'
import css from './TitleSection.module.scss'
import Layout from 'components/Layout/Layout'
import Button from 'components/Button/Button'
import ContentConstructorDesktop from 'components/ContentConstructor/ContentConstructorDesktop'
import ContentConstructorMobile from 'components/ContentConstructor/ContentConstructorMobile'

const TitleSection = ({ mobile, title, text, children, btnText, btnMore, contentItems }) => {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <Layout mobile={mobile} className={mobile ? css.mobile : css.desktop}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      {
        children && React.cloneElement(children, { isOpen, setIsOpen })
      }
      {
        contentItems && mobile ? <ContentConstructorMobile items={contentItems} /> : <ContentConstructorDesktop items={contentItems} />
      }
      { btnText &&
      <button className={css.btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Скрыть' : btnText}
      </button>}
      {
        btnMore && <Button {...btnMore} />
      }
    </Layout>
  )
}
export default React.memo(TitleSection)
