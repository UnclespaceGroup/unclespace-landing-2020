import { MAIN_PAGE_URL, SERVICES_URL } from 'constants/serverUrl'
import useAxiosLocalData from 'hooks/useAxiosLocalData'
import { PAGE_SERVICES } from 'constants/ROUTES'

const useMainPage = () => {
  const {
    data: {
      bannerMain,
      topText,
      pricesData: _pricesData,
      ...props
    } = {}
  } = useAxiosLocalData({
    url: MAIN_PAGE_URL
  })

  const {
    data: {
      items: prices = []
    } = {}
  } = useAxiosLocalData({
    url: SERVICES_URL
  })

  const pricesData = {
    ..._pricesData,
    btnMore: {
      to: PAGE_SERVICES,
      text: 'Все услуги'
    },
    items: prices.slice(0, 3)
  }

  return {
    bannerMain,
    topText,
    pricesData,
    ...props
  }
}
export default useMainPage
