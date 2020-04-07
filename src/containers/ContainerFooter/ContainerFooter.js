import React from 'react'
import FooterDesktop from 'components/Footer/desktop/FooterDesktop'
import FooterMobile from 'components/Footer/mobile/FooterMobile'

const footer = {
  img: 'images/slide-1.jpg',
  items: [
    {
      title: 'Каталог услуг'
    },
    {
      title: 'Кейсы'
    },
    {
      title: 'О нас'
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
