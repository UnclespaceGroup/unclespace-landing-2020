import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './Slider.module.scss'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

const Slider = ({ items, children, loop, autoplayDelay, getSwiper, ...params }) => (
  <div>
    <Swiper
      getSwiper={ref => getSwiper(ref)}
      observer
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      }}
      rebuildOnUpdate
      loop={loop || true}
      autoplay={{
        delay: autoplayDelay
      }}
      containerClass={`${css.container}`}
      {...params}
    >
      {
        !_.size(items) ? React.cloneElement(children) : _.map(items, (item, key) => (
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
Slider.propTypes = {
  getSwiper: PropTypes.func,
  items: PropTypes.array,
  children: PropTypes.node,
  loop: PropTypes.bool,
  autoplayDelay: PropTypes.number
}
Slider.defaultProps = {
  getSwiper: () => {}
}

export default React.memo(Slider)
