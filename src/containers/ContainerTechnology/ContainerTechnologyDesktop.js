import React from 'react'
import useTechnology from 'containers/ContainerTechnology/useTechnology'
import BannerBigDesktop from 'components/BannerBig/desktop/BannerBigDesktop'
import TitleSection from 'components/TitleSection/TitleSection'
import ListLimit from 'components/ListLimit/ListLimit'
import SectionOverviewDesktop from 'components/SectionOverview/desktop/SectionOverviewDesktop'
import SectionAdvantagesDesktop from 'components/SectionAdvantages/desktop/SectionAdvantagesDesktop'
import Padding from 'components/Padding/Padding'
import SectionColumnsDesktop from 'components/SectionColumns/desktop/SectionColumnsDesktop'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerTechnologyDesktop = () => {
  const { bannerData, conception, adaptive, purpose, cms, helmetData } = useTechnology()
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <BannerBigDesktop {...bannerData} />
      <TitleSection title={conception?.title} withBottomHr text={conception?.text} >
        <ListLimit items={conception?.items} padding={120} >
          <SectionOverviewDesktop />
        </ListLimit>
      </TitleSection>
      <TitleSection title={adaptive?.title} withBottomHr text={adaptive?.text} >
        <SectionAdvantagesDesktop items={adaptive?.items} />
        <Padding value={60} />
      </TitleSection>
      <TitleSection title={purpose?.title} withBottomHr text={purpose?.text} >
        <ListLimit items={purpose?.items} padding={120}>
          <SectionColumnsDesktop />
        </ListLimit>
      </TitleSection>
      <TitleSection title={cms?.title} text={cms?.text} >
        <Wysiwyg width={'60%'} >{cms?.content}</Wysiwyg>
      </TitleSection>
    </>
  )
}
export default React.memo(ContainerTechnologyDesktop)
