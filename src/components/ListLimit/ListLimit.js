import React, { useState } from 'react'
import _ from 'lodash'
import Padding from 'components/Padding/Padding'
import Button from 'components/Button/Button'
import css from './ListLimit.module.scss'

const ListLimit = ({ items = [], children, defaultCount = 2, padding, mobile }) => {
  const [ isOpen, setIsOpen ] = useState()

  const currentItems = isOpen ? items : items.slice(0, defaultCount)

  return (
    <>
      { _.map(currentItems, (item, key) =>
        <div key={key}>
          {
            React.cloneElement(children, { className: css.item, ...item })
          }
          <Padding value={padding} />
        </div>
      )}
      { _.size(items) > defaultCount &&
        <div className={css.footer}>
          <Button bgColor={mobile ? 'btnMoreMobile' : 'btnMore'} onClick={() => setIsOpen(!isOpen)} >{isOpen ? 'Скрыть' : 'Показать все'}</Button>
        </div>}
    </>
  )
}
export default React.memo(ListLimit)
