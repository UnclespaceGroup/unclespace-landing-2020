import React from 'react'
import ContainerHeader from 'containers/ContainerHeader/ContainerHeader'
import Padding from 'components/Padding/Padding'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerBriefMobile = () => {
  return (
    <div>
      <ContainerHelmet title={'UncleSpace - Бриф на разработку сайта'} />
      <ContainerHeader mobile />
      <Padding value={120} />
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSeGIfaK17NUo6uU8QpXcwZqiiVTvAvpse9GQUMG2XGZC0K7Dw/viewform?embedded=true'
        width='100%' height='3000px' frameBorder='0' marginHeight='0' marginWidth='0'
      >Загрузка…
      </iframe>
    </div>
  )
}

export default React.memo(ContainerBriefMobile)
