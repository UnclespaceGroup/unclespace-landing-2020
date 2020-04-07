import React from 'react'
import _ from 'lodash'
import Button from 'components/Button/Button'
import Padding from 'components/Padding/Padding'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'
import { CONTENT_TYPES } from 'components/ContentConstructor/constructorConstants'
import SectionColumnsDesktop from 'components/SectionColumns/desktop/SectionColumnsDesktop'
import TitleSection from 'components/TitleSection/TitleSection'
import SectionStepsDesktop from 'components/SectionSteps/desktop/SectionStepsDesktop'
import SectionAdvantagesDesktop from 'components/SectionAdvantages/desktop/SectionAdvantagesDesktop'

const ContentConstructorDesktop = ({ items }) => {
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
      return <Button className={'mt-20'} {...data} />
    }
    case CONTENT_TYPES.padding:
      return <Padding {...data} />
    case CONTENT_TYPES.text:
      return <Wysiwyg >{data.text}</Wysiwyg>
    case CONTENT_TYPES.columns:
      return <SectionColumnsDesktop {...data} />
    case CONTENT_TYPES.title:
      return <TitleSection single {...data} />
    case CONTENT_TYPES.steps:
      return <SectionStepsDesktop {...data} />
    case CONTENT_TYPES.icons:
      return <SectionAdvantagesDesktop {...data} />
    default:
      return <div {...data} />
  }
}

export default React.memo(ContentConstructorDesktop)
