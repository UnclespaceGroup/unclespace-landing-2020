import React from 'react'
import useServiceDetail from '../useServiceDetail'
import Layout from 'components/Layout/Layout'
import ContentConstructorMobile from 'components/ContentConstructor/ContentConstructorMobile'
import BannerBigMobile from 'components/BannerBig/mobile/BannerBigMobile'
import ContainerOrderNow from 'containers/ContainerOrderNow/ContainerOrderNow'
import Padding from 'components/Padding/Padding'

const ContainerServiceDetailMobile = () => {
  const { title, text, banner, dataItems } = useServiceDetail()
  return (
    <>
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
