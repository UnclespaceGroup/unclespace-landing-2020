import React from 'react'
import SectionOrderNowDesktop from 'components/SectionOrderNow/desktop/SectionOrderNowDesktop'
import { MdPhone } from 'react-icons/md'
import { FaVk, FaWpforms } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PAGE_BRIEF } from 'constants/ROUTES'
import SectionOrderNowMobile from 'components/SectionOrderNow/mobile/SectionOrderNowMobile'

const ContainerOrderNow = ({ mobile }) => {
  const SectionOrderNow = mobile ? SectionOrderNowMobile : SectionOrderNowDesktop
  return (
    <SectionOrderNow
      title='Закажите разработку сайта прямо сейчас'
      text='Можете это сделать любым из следующих способов'
      items={[
        {
          icon: <MdPhone />,
          title: 'Позвоните нам по номеру <b><a href="tel:89042370267">+7 (904) 237 02 67</a></b>'
        },
        {
          icon: <FaVk />,
          title: 'Напишите в группу Вконтакте <b><a href="https://vk.com/unclespace" >https://vk.com/unclespace</a></b>'
        },
        {
          icon: <FaWpforms />,
          text: <Link to={PAGE_BRIEF} >Заполните бриф, кликнув сюда</Link>
        }
      ]}
    />
  )
}
export default React.memo(ContainerOrderNow)
