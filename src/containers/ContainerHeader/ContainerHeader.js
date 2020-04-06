import React from 'react'
import HeaderDesktop from 'components/Header/desktop/HeaderDesktop'
import HeaderMobile from 'components/Header/mobile/HeaderMobile'
import { PAGE_BRIEF, PAGE_HOME } from 'constants/ROUTES'

const ContainerHeader = ({ mobile }) => {
  const HeaderComponent = mobile ? HeaderMobile : HeaderDesktop

  const items = [
    {
      to: PAGE_HOME, text: 'На главную'
    },
    {
      to: PAGE_BRIEF, text: 'Заполнить бриф'
    }
  ]

  return (
    <HeaderComponent items={items} />
  )
}
export default React.memo(ContainerHeader)
