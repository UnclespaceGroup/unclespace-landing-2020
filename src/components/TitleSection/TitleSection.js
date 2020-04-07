import React from 'react'
import css from './TitleSection.module.scss'
import cn from 'classnames'
import Layout from 'components/Layout/Layout'
import Button from 'components/Button/Button'
import ContentConstructorDesktop from 'components/ContentConstructor/ContentConstructorDesktop'
import ContentConstructorMobile from 'components/ContentConstructor/ContentConstructorMobile'

const TitleSection = ({ mobile, title, text, children, btnMore, contentItems, single, widthStyle, className, withBottomHr }) => {
  return (
    <Layout mobile={mobile}
      className={cn(
        mobile ? css.mobile : css.desktop,
        { [css.single]: single },
        css[widthStyle],
        className
      )}
    >
      <div className={css.header}>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className={css.children}>{children}</div>
      {
        contentItems && mobile ? <ContentConstructorMobile items={contentItems} /> : <ContentConstructorDesktop items={contentItems} />
      }
      {
        btnMore && <Button {...btnMore} />
      }
      { withBottomHr && <hr className={css.bottomHr} /> }
    </Layout>
  )
}
export default React.memo(TitleSection)
