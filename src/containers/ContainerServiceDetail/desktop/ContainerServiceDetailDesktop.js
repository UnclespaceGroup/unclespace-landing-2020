import React from 'react'
import useServiceDetail from '../useServiceDetail'
import BannerBigDesktop from 'components/BannerBig/desktop/BannerBigDesktop'
import Layout from 'components/Layout/Layout'
import ContentConstructorDesktop from 'components/ContentConstructor/ContentConstructorDesktop'

const ContainerServiceDetailDesktop = () => {
  const { title, text, banner, dataItems } = useServiceDetail()
  return (
    <>
      <BannerBigDesktop title={title} text={text} img={banner} />
      <Layout>
        <ContentConstructorDesktop items={dataItems} />
      </Layout>
    </>
  )
}

export default React.memo(ContainerServiceDetailDesktop)
