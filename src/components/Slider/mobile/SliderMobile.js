import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SliderMobile.module.scss'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

const SliderMobile = ({ items, children, loop, autoplayDelay, className, rebuildOnUpdate }) => (
  <div className={className}>
    <Swiper
      pagination={{
        el: '.swiper-pagination',
        clickable: true
      }}
      centeredSlides
      effect={'coverflow'}
      loop={loop}
      autoplay={autoplayDelay ? {
        delay: autoplayDelay
      } : false}
      containerClass={`${css.container}`}
      rebuildOnUpdate={rebuildOnUpdate}
    >
      {
        !items ? children
          : _.map(items, (item, key) => (
            <div key={key} className={css.slide}>
              {
                React.cloneElement(children, { ...item })
              }
            </div>
          ))
      }
    </Swiper>
  </div>
)
SliderMobile.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node,
  loop: PropTypes.bool,
  className: PropTypes.string,
  autoplayDelay: PropTypes.number,
  rebuildOnUpdate: PropTypes.bool
}

export default React.memo(SliderMobile)
