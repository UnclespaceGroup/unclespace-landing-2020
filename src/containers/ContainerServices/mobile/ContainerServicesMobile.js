import React from 'react'
import useServices from 'containers/ContainerServices/useServices'
import SectionPricesMobile from 'components/SectionPrices/mobile/SectionPricesMobile'
import BannerBigMobile from 'components/BannerBig/mobile/BannerBigMobile'

const ContainerServicesMobile = () => {
  const { items } = useServices()
  return (
    <>
      <BannerBigMobile
        title='Цены на услуги'
        text='Каждый сайт разрабатывается индивидуально, по вашим требованиям. Примерные расценки вы увидете ниже'
        img={'images/main-banner.jpg'}
      />
      <SectionPricesMobile inColumn items={items} />
    </>
  )
}
export default React.memo(ContainerServicesMobile)
