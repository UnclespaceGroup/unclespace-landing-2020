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

  const helmetData = {
    title: 'UncleSpace - Услуги по разработке сайтов',
    description: 'Разработка профессиональных сайтов как под ключ, так и с дальнейшей поддержкой. Большой выбор сайтов - от лендингов и сайтов-визиток до крупных корпоративных решений и интернет-магазинов'
  }

  return {
    items,
    helmetData
  }
}
export default useServices
