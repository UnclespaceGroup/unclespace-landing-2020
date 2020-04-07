import React from 'react'
import useServiceDetail from '../useServiceDetail'
import Layout from 'components/Layout/Layout'
import ContentConstructorMobile from 'components/ContentConstructor/ContentConstructorMobile'
import BannerBigMobile from 'components/BannerBig/mobile/BannerBigMobile'

const ContainerServiceDetailMobile = () => {
  const { title, text, banner, dataItems } = useServiceDetail()
  return (
    <>
      <BannerBigMobile title={title} text={text} img={banner} />
      <Layout mobile>
        <ContentConstructorMobile items={dataItems} />
      </Layout>
    </>
  )
}

export default React.memo(ContainerServiceDetailMobile)
