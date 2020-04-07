import React from 'react'
import useServiceDetail from '../useServiceDetail'
import BannerBigDesktop from 'components/BannerBig/desktop/BannerBigDesktop'
import Layout from 'components/Layout/Layout'
import ContentConstructorDesktop from 'components/ContentConstructor/ContentConstructorDesktop'
import Padding from 'components/Padding/Padding'
import ContainerOrderNow from 'containers/ContainerOrderNow/ContainerOrderNow'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerServiceDetailDesktop = () => {
  const { title, text, banner, dataItems, helmetData } = useServiceDetail()
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <BannerBigDesktop title={title} text={text} img={banner} />
      <Layout>
        <ContentConstructorDesktop items={dataItems} />
      </Layout>
      <Padding value={160} />
      <ContainerOrderNow />
      <Padding value={160} />
    </>
  )
}

export default React.memo(ContainerServiceDetailDesktop)
