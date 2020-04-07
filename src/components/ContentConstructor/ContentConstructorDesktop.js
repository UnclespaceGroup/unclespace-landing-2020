import React from 'react'
import _ from 'lodash'
import Button from 'components/Button/Button'
import Padding from 'components/Padding/Padding'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'
import { CONTENT_TYPES } from 'components/ContentConstructor/constructorConstants'

const ContentConstructorDesktop = ({ items }) => {
  return (
    _.map(items, (item, key) => (
      <p key={key}>
        <Child {...item} />
      </p>
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
    default:
      return <div {...data} />
  }
}

export default React.memo(ContentConstructorDesktop)