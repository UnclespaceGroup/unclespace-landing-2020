import useAxiosLocalData from 'hooks/useAxiosLocalData'
import { SERVICES_URL } from 'constants/serverUrl'

const useServices = () => {
  const {
    data: {
      items
    } = {}
  } = useAxiosLocalData({
    url: SERVICES_URL
  })
  return {
    items
  }
}
export default useServices
