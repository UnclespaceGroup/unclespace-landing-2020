import React from 'react'
import FooterDesktop from 'components/Footer/desktop/FooterDesktop'
import FooterMobile from 'components/Footer/mobile/FooterMobile'
import { PAGE_BRIEF, PAGE_HOME, PAGE_SERVICES, PAGE_TECHNOLOGY } from 'constants/ROUTES'

const footer = {
  img: '/images/slide-1.jpg',
  items: [
    {
      to: PAGE_HOME, text: 'На главную'
    },
    {
      to: PAGE_SERVICES, text: 'Услуги'
    },
    {
      to: PAGE_TECHNOLOGY, text: 'Технологии'
    },
    {
      to: PAGE_BRIEF, text: 'Заполнить бриф'
    }
  ]
}

const ContainerFooter = ({ mobile }) => {
  const FooterComponent = mobile ? FooterMobile : FooterDesktop
  return (
    <FooterComponent {...footer} />
  )
}
export default ContainerFooter
