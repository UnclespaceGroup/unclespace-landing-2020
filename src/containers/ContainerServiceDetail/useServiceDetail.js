import useAxiosLocalData from 'hooks/useAxiosLocalData'
import { SERVICES_URL } from 'constants/serverUrl'
import { useParams } from 'react-router'

const useServiceDetail = () => {
  const { id } = useParams()
  const {
    data: {
      items = []
    } = {}
  } = useAxiosLocalData({
    url: SERVICES_URL
  })
  const currentData = items.find(item => item?.id?.toString() === id?.toString())

  return {
    ...currentData
  }
}
export default useServiceDetail
