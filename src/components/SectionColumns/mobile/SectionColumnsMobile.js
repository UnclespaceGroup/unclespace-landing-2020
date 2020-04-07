import React from 'react'
import css from 'components/SectionColumns/mobile/SectionColumnsMobile.module.scss'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'

const SectionColumnsMobile = ({ left, right }) => (
  <div className={css.container}>
    <WysiwygMobile className={css.left}>{left}</WysiwygMobile>
    <WysiwygMobile>{right}</WysiwygMobile>
  </div>
)
export default React.memo(SectionColumnsMobile)
