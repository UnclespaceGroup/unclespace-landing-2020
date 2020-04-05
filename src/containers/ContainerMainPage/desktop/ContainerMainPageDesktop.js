import React from 'react'
import useMainPage from '../useMainPage'
import BannerBigDesktop from 'components/BannerBig/desktop/BannerBigDesktop'
import SectionTextImgDesktop from 'components/SectionTextImg/desktop/SectionTextImgDesktop'
import Padding from 'components/Padding/Padding'
import SectionStepsDesktop from 'components/SectionSteps/desktop/SectionStepsDesktop'
import BannerDesktop from 'components/Banner/desktop/BannerDesktop'
import SectionAdvantagesDesktop from 'components/SectionAdvantages/desktop/SectionAdvantagesDesktop'

const ContainerMainPageDesktop = () => {
  const { bannerMain, topText, stepsData, bannerData, advantagesData } = useMainPage()

  return (
    <>
      <BannerBigDesktop {...bannerMain} />
      <Padding value={190} />
      <SectionTextImgDesktop {...topText} />
      <Padding value={300} />
      <SectionStepsDesktop {...stepsData} />
      <Padding value={300} />
      <BannerDesktop {...bannerData} />
      <Padding value={300} />
      <SectionAdvantagesDesktop {...advantagesData} />
      <Padding value={300} />
    </>
  )
}
export default React.memo(ContainerMainPageDesktop)
