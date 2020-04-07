import React from 'react'
import useTechnology from 'containers/ContainerTechnology/useTechnology'
import TitleSection from 'components/TitleSection/TitleSection'
import ListLimit from 'components/ListLimit/ListLimit'
import BannerBigMobile from 'components/BannerBig/mobile/BannerBigMobile'
import SectionOverviewMobile from 'components/SectionOverview/mobile/SectionOverviewMobile'
import Padding from 'components/Padding/Padding'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'
import SectionColumnsMobile from 'components/SectionColumns/mobile/SectionColumnsMobile'
import SectionAdvantagesMobile from 'components/SectionAdvantages/mobile/SectionAdvantagesMobile'

const ContainerTechnologyMobile = () => {
  const { bannerData, conception, adaptive, purpose, cms } = useTechnology()
  return (
    <>
      <BannerBigMobile {...bannerData} />
      <TitleSection mobile title={conception?.title} withBottomHr text={conception?.text} >
        <ListLimit items={conception?.items} padding={60} mobile >
          <SectionOverviewMobile />
        </ListLimit>
      </TitleSection>
      <TitleSection mobile title={adaptive?.title} withBottomHr text={adaptive?.text} >
        <SectionAdvantagesMobile inLine items={adaptive?.items} />
        <Padding value={60} />
      </TitleSection>
      <TitleSection mobile title={purpose?.title} withBottomHr text={purpose?.text} >
        <ListLimit mobile items={purpose?.items} padding={120}>
          <SectionColumnsMobile />
        </ListLimit>
      </TitleSection>
      <TitleSection mobile title={cms?.title} text={cms?.text} >
        <WysiwygMobile width={'60%'} >{cms?.content}</WysiwygMobile>
      </TitleSection>
    </>
  )
}
export default React.memo(ContainerTechnologyMobile)
