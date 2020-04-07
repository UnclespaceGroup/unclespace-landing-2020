import React from 'react'
import useTemplate from 'containers/Template/useTemplate'

const Template = () => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useTemplate()
  return (
    <div />
  )
}

export default React.memo(Template)
