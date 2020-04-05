import { MAIN_PAGE_URL } from 'constants/serverUrl'
import useAxiosLocalData from 'hooks/useAxiosLocalData'

const useMainPage = () => {
  const {
    data: {
      bannerMain,
      topText,
      ...props
    } = {}
  } = useAxiosLocalData({
    url: MAIN_PAGE_URL
  })

  return {
    bannerMain,
    topText,
    ...props
  }
}
export default useMainPage
