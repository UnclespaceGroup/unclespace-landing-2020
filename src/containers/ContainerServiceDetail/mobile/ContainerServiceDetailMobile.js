import React from 'react'
import useServiceDetail from '../useServiceDetail'
import Layout from 'components/Layout/Layout'
import ContentConstructorMobile from 'components/ContentConstructor/ContentConstructorMobile'
import BannerBigMobile from 'components/BannerBig/mobile/BannerBigMobile'
import ContainerOrderNow from 'containers/ContainerOrderNow/ContainerOrderNow'
import Padding from 'components/Padding/Padding'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerServiceDetailMobile = () => {
  const { title, text, banner, dataItems, helmetData } = useServiceDetail()
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <BannerBigMobile title={title} text={text} img={banner} />
      <Layout mobile>
        <ContentConstructorMobile items={dataItems} />
      </Layout>
      <Padding value={40} />
      <ContainerOrderNow mobile />
      <Padding value={40} />
    </>
  )
}

export default React.memo(ContainerServiceDetailMobile)
