import useAxiosLocalData from 'hooks/useAxiosLocalData'
import { TECHNOLOGY_URL } from 'constants/serverUrl'

const useTechnology = () => {
  const {
    data: {
      bannerData,
      ...other
    }
  } = useAxiosLocalData({ url: TECHNOLOGY_URL })

  return {
    bannerData,
    ...other
  }
}
export default useTechnology
