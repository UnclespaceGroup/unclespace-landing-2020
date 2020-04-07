import React from 'react'
import _ from 'lodash'
import Button from 'components/Button/Button'
import Padding from 'components/Padding/Padding'
import { CONTENT_TYPES } from 'components/ContentConstructor/constructorConstants'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'
import SectionColumnsMobile from 'components/SectionColumns/mobile/SectionColumnsMobile'
import TitleSection from 'components/TitleSection/TitleSection'
import SectionStepsMobile from 'components/SectionSteps/mobile/SectionStepsMobile'
import SectionAdvantagesMobile from 'components/SectionAdvantages/mobile/SectionAdvantagesMobile'

const ContentConstructorMobile = ({ items }) => {
  return (
    _.map(items, (item, key) => (
      <div className={'my-20'} key={key}>
        <Child {...item} />
      </div>
    ))
  )
}
const Child = ({ type, ...data }) => {
  switch (type) {
    case CONTENT_TYPES.btn: {
      return <Button hide className={'mt-20'} {...data} />
    }
    case CONTENT_TYPES.padding:
      return <Padding {...data} />
    case CONTENT_TYPES.text:
      return <WysiwygMobile >{data.text}</WysiwygMobile>
    case CONTENT_TYPES.columns:
      return <SectionColumnsMobile {...data} />
    case CONTENT_TYPES.title:
      return <TitleSection single mobile {...data} />
    case CONTENT_TYPES.steps:
      return <SectionStepsMobile {...data} />
    case CONTENT_TYPES.icons:
      return <SectionAdvantagesMobile {...data} />
    default:
      return <div {...data} />
  }
}

export default React.memo(ContentConstructorMobile)
