import React from 'react'
import css from 'components/SectionContacts/mobile/SectionContactsMobile.module.scss'
import Layout from 'components/Layout/Layout'
import _ from 'lodash'
import { MdPhone, MdLocationOn } from 'react-icons/md'
import { FaVk } from 'react-icons/fa'
import Padding from 'components/Padding/Padding'
import { Placemark, GeolocationControl, RouteButton, ZoomControl, YMaps, Map } from 'react-yandex-maps'

const icons = {
  phone: <MdPhone />,
  vk: <FaVk />,
  location: <MdLocationOn />
}

const options = {
  suppressMapOpenBlock: true
}

const SectionContactsMobile = ({ title, text, items, mapCoords }) => (
  <Layout mobile className={css.container}>
    <div>
      <h2 className={css.title}>{title}</h2>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      <Padding value={48} />
      <ul>
        {
          _.map(items, (item, key) => (
            <li key={key} className={css.item}>
              {icons[item.icon]}
              <span dangerouslySetInnerHTML={{ __html: item.title }} />
            </li>
          ))
        }
      </ul>
    </div>
    <div className={css.map}>
      {mapCoords &&
      <YMaps
        query={{
          // apikey: YANDEX_MAP_API_KEY
        }}
      >
        <Map
          height={'100%'}
          options={options}
          state={{
            center: mapCoords,
            zoom: 16,
            behaviors: ["disable('scrollZoom')", 'drag']
          }}
          width={'100%'}
        >
          <Placemark
            geometry={mapCoords}
            options={{
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: '/images/Location.svg',
              // Размеры метки.
              iconImageSize: [80, 80],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-30, -20]
            }}
          />
          <GeolocationControl options={{ float: 'left' }} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl options={{ float: 'right' }} />
        </Map>
      </YMaps>
      }
    </div>
  </Layout>
)
export default React.memo(SectionContactsMobile)
