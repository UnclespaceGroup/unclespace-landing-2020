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
import TitleSection from 'components/TitleSection/TitleSection'
import ContentConstructorMobile from 'components/ContentConstructor/ContentConstructorMobile'

const ContainerMainPageMobile = () => {
  const { bannerMain, topText, stepsData, bannerData, advantagesData, pricesData, contactsData, helmetData, uniqDesign } = useMainPage()

  return (
    <>
      <ContainerHelmet {...helmetData} />
      <BannerBigMobile {...bannerMain} />
      <Padding value={80} />
      <SectionTextImgMobile {...topText} />
      <Padding value={80} />
      <TitleSection mobile {...uniqDesign} >
        <ContentConstructorMobile items={uniqDesign?.items} />
      </TitleSection>
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
    </>
  )
}
export default React.memo(ContainerMainPageMobile)
