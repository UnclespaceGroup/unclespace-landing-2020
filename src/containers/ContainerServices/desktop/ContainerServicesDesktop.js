import React from 'react'
import useServices from 'containers/ContainerServices/useServices'
import SectionPricesDesktop from 'components/SectionPrices/desktop/SectionPricesDesktop'
import BannerBigDesktop from 'components/BannerBig/desktop/BannerBigDesktop'

const ContainerServicesDesktop = () => {
  const { items } = useServices()
  return (
    <>
      <BannerBigDesktop
        title='Цены на услуги'
        text='Каждый сайт разрабатывается индивидуально, по вашим требованиям. Примерные расценки вы увидете ниже'
        img={'images/main-banner.jpg'}
      />
      <SectionPricesDesktop items={items} />
    </>
  )
}
export default React.memo(ContainerServicesDesktop)
