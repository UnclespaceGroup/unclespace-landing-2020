import React from 'react'
import useMainPage from '../useMainPage'
import BannerBigDesktop from 'components/BannerBig/desktop/BannerBigDesktop'
import SectionTextImgDesktop from 'components/SectionTextImg/desktop/SectionTextImgDesktop'
import Padding from 'components/Padding/Padding'
import SectionStepsDesktop from 'components/SectionSteps/desktop/SectionStepsDesktop'
import BannerDesktop from 'components/Banner/desktop/BannerDesktop'
import SectionAdvantagesDesktop from 'components/SectionAdvantages/desktop/SectionAdvantagesDesktop'
import SectionPricesDesktop from 'components/SectionPrices/desktop/SectionPricesDesktop'
import SectionContactsDesktop from 'components/SectionContacts/desktop/SectionContactsDesktop'
import FooterDesktop from 'components/Footer/desktop/FooterDesktop'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import ContainerHeader from 'containers/ContainerHeader/ContainerHeader'
import TitleSection from 'components/TitleSection/TitleSection'
import ContentConstructorDesktop from 'components/ContentConstructor/ContentConstructorDesktop'

const ContainerMainPageDesktop = () => {
  const { bannerMain, topText, stepsData, bannerData, advantagesData, pricesData, contactsData, footer, helmetData, uniqDesign } = useMainPage()

  return (
    <>
      <ContainerHelmet {...helmetData} />
      <ContainerHeader />
      <BannerBigDesktop {...bannerMain} />
      <Padding value={190} />
      <SectionTextImgDesktop {...topText} />
      <TitleSection {...uniqDesign} >
        <ContentConstructorDesktop items={uniqDesign?.items} />
      </TitleSection>
      <SectionStepsDesktop {...stepsData} />
      <Padding value={120} />
      <BannerDesktop {...bannerData} />
      <Padding value={150} />
      <SectionAdvantagesDesktop {...advantagesData} />
      <Padding value={300} />
      <SectionPricesDesktop {...pricesData} />
      <Padding value={150} />
      <SectionContactsDesktop {...contactsData} />
      <Padding value={150} />
      <FooterDesktop {...footer} />
    </>
  )
}
export default React.memo(ContainerMainPageDesktop)
