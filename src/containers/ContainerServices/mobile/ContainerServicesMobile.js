import React from 'react'
import useServices from 'containers/ContainerServices/useServices'
import SectionPricesMobile from 'components/SectionPrices/mobile/SectionPricesMobile'
import BannerBigMobile from 'components/BannerBig/mobile/BannerBigMobile'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerServicesMobile = () => {
  const { items, helmetData } = useServices()
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <BannerBigMobile
        title='Цены на услуги'
        text='Каждый сайт разрабатывается индивидуально, по вашим требованиям. Примерные расценки вы увидете ниже'
        img={'/images/main-banner.jpg'}
      />
      <SectionPricesMobile inColumn items={items} />
    </>
  )
}
export default React.memo(ContainerServicesMobile)
