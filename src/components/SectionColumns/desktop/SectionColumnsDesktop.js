import React from 'react'
import css from 'components/SectionColumns/desktop/SectionColumnsDesktop.module.scss'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'

const SectionColumnsDesktop = ({ left, right }) => (
  <div className={css.container}>
    <Wysiwyg width={'50%'}>{left}</Wysiwyg>
    <Wysiwyg width={'45%'}>{right}</Wysiwyg>
  </div>
)
export default React.memo(SectionColumnsDesktop)
