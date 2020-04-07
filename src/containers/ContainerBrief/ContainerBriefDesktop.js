import React from 'react'
import Layout from 'components/Layout/Layout'
import ContainerHeader from 'containers/ContainerHeader/ContainerHeader'
import Padding from 'components/Padding/Padding'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerBriefDesktop = () => {
  return (
    <>
      <ContainerHelmet title={'UncleSpace - Бриф на разработку сайта'} />
      <ContainerHeader />
      <Padding value={200} />
      <Layout>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSeGIfaK17NUo6uU8QpXcwZqiiVTvAvpse9GQUMG2XGZC0K7Dw/viewform?embedded=true'
          width='100%' height='800' frameBorder='0' marginHeight='0' marginWidth='0'
        >Загрузка…
        </iframe>
      </Layout>
    </>
  )
}

export default React.memo(ContainerBriefDesktop)
