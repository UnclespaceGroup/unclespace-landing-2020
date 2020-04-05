import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { axiosInstanse } from 'axiosInstance/index'

const STATUS_ERROR = 'STATUS_ERROR'
const STATUS_SUCCESS = 'STATUS_SUCCESS'
const STATUS_PENDING = 'STATUS_PENDING'

const useAxiosData = ({
  url,
  where,
  single,
  limit,
  offset,
  between
}, deps) => {
  const [ status, setStatus ] = useState()
  const [ data, setData ] = useState({})
  const location = useLocation()

  useEffect(() => {
    setStatus(STATUS_PENDING)
    axiosInstanse.post(url, { where, single, limit, between, offset })
      .then(res => {
        setData(res?.data)
        setStatus(STATUS_SUCCESS)
      })
      .catch(err => {
        console.log(`error in ${url} response`, err)
        setStatus(STATUS_ERROR)
      })
  }, [location].concat(deps))

  return {
    data,
    status,
    isPending: status === STATUS_PENDING,
    isError: status === STATUS_ERROR,
    isSuccess: status === STATUS_SUCCESS
  }
}
export default useAxiosData
