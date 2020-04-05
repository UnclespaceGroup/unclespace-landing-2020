import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { axiosLocalInstanse } from 'axiosInstance/index'

const useAxiosLocalData = ({
  url
}, deps) => {
  const [ data, setData ] = useState({})
  const location = useLocation()

  useEffect(() => {
    axiosLocalInstanse.get(url)
      .then(res => {
        setData(res?.data)
      })
      .catch(err => {
        console.log(`error in ${url} response`, err)
      })
  }, [location].concat(deps))

  return {
    data
  }
}
export default useAxiosLocalData
