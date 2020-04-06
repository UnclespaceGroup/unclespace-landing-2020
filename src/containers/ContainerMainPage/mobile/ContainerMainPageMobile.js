import React from 'react'
import useMainPage from '../useMainPage'
import Padding from 'components/Padding/Padding'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import BannerBigMobile from 'components/BannerBig/mobile/BannerBigMobile'
import SectionTextImgMobile from 'components/SectionTextImg/mobile/SectionTextImgMobile'
import SectionStepsMobile from 'components/SectionSteps/mobile/SectionStepsMobile'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import SectionAdvantagesMobile from 'components/SectionAdvantages/mobile/SectionAdvantagesMobile'
import SectionPricesMobile from 'components/SectionPrices/mobile/SectionPricesMobile'
import SectionContactsMobile from 'components/SectionContacts/mobile/SectionContactsMobile'
import FooterMobile from 'components/Footer/mobile/FooterMobile'
import ContainerHeader from 'containers/ContainerHeader/ContainerHeader'

const ContainerMainPageMobile = () => {
  const { bannerMain, topText, stepsData, bannerData, advantagesData, pricesData, contactsData, footer, helmetData } = useMainPage()

  return (
    <>
      <ContainerHeader mobile />
      <ContainerHelmet {...helmetData} />
      <BannerBigMobile {...bannerMain} />
      <Padding value={80} />
      <SectionTextImgMobile {...topText} />
      <Padding value={80} />
      <SectionStepsMobile {...stepsData} />
      <Padding value={40} />
      <BannerMobile {...bannerData} />
      <Padding value={80} />
      <SectionAdvantagesMobile {...advantagesData} />
      <Padding value={100} />
      <SectionPricesMobile {...pricesData} />
      <Padding value={60} />
      <SectionContactsMobile {...contactsData} />
      <Padding value={150} />
      <FooterMobile {...footer} />
    </>
  )
}
export default React.memo(ContainerMainPageMobile)
